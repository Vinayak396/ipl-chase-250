// T20 Cricket Chase Simulation Engine: Chasing 251 runs in 120 balls
// Authentic T20 physics with dot-ball pressure, phase dynamics, RRR hazards, and realistic 500-0 difficulty

import { CHASE_SCENARIO } from '../data/squads.js';

export class MatchSimulator {
  constructor(lineup) {
    this.lineup = lineup; // Array of 11 drafted players in their batting order
    this.target = CHASE_SCENARIO.target; // 251 runs
    this.totalBalls = CHASE_SCENARIO.totalBalls; // 120 balls (20.0 overs)
  }

  // Calculate team aggregate ratings and threshold readiness
  evaluateTeamStats() {
    if (!this.lineup || this.lineup.length < 11) {
      return null;
    }

    // Top 7 Batters in current order
    const top7Batters = this.lineup.slice(0, 7);
    const battingTop7 = top7Batters.reduce((acc, p) => acc + (p.bat || 0), 0);

    // Top 7 Power Hitters across entire XI
    const sortedByPower = [...this.lineup].sort((a, b) => (b.pow || 0) - (a.pow || 0));
    const powerTop7 = sortedByPower.slice(0, 7).reduce((acc, p) => acc + (p.pow || 0), 0);

    // Top 4 Bowlers across entire XI (Morale & dugout balance)
    const sortedByBowling = [...this.lineup].sort((a, b) => (b.bwl || 0) - (a.bwl || 0));
    const bowlingTop4 = sortedByBowling.slice(0, 4).reduce((acc, p) => acc + (p.bwl || 0), 0);

    // Check rules:
    const overseasCount = this.lineup.filter(p => p.overseas).length;
    const wkCount = this.lineup.filter(p => p.wk).length;
    const bowlerCount = this.lineup.filter(p => (p.bwl || 0) >= 60).length;

    const validOverseas = overseasCount <= CHASE_SCENARIO.squadRules.maxOverseas;
    const validWk = wkCount >= CHASE_SCENARIO.squadRules.minWicketKeepers;
    const validBowlers = bowlerCount >= CHASE_SCENARIO.squadRules.minBowlers;

    // Threshold clearances
    const batThresholdMet = battingTop7 >= CHASE_SCENARIO.thresholds.battingTop7.solid;
    const powThresholdMet = powerTop7 >= CHASE_SCENARIO.thresholds.powerTop7.solid;
    const bwlThresholdMet = bowlingTop4 >= CHASE_SCENARIO.thresholds.bowlingTop4.solid;

    return {
      battingTop7,
      powerTop7,
      bowlingTop4,
      overseasCount,
      wkCount,
      bowlerCount,
      validOverseas,
      validWk,
      validBowlers,
      batThresholdMet,
      powThresholdMet,
      bwlThresholdMet,
      allRulesPassed: validOverseas && validWk && validBowlers
    };
  }

  // Pre-generate full 120-ball match simulation
  simulateFullMatch() {
    const stats = this.evaluateTeamStats();
    if (!stats) return null;

    // Position suitability penalty check
    const players = this.lineup.map((p, idx) => {
      const pos = idx + 1;
      let posPenalty = 1.0;
      if (p.role === 'bowler' && pos <= 5) {
        posPenalty = 0.55; // Specialist bowler batting in top order
      } else if (p.role === 'opener' && pos >= 8) {
        posPenalty = 0.70; // Opener wasted at tail
      } else if (p.role === 'opener' && pos >= 5) {
        posPenalty = 0.85;
      }

      return {
        ...p,
        lineupPos: pos,
        effectiveBat: Math.round(p.bat * posPenalty),
        effectivePow: Math.round(p.pow * posPenalty),
        runs: 0,
        balls: 0,
        fours: 0,
        sixes: 0,
        dots: 0,
        isOut: false,
        dismissal: 'not out'
      };
    });

    const timeline = [];
    const fallOfWickets = [];
    const overSummaries = [];
    const worm = [{ over: 0, chaseScore: 0, oppScore: 0 }];

    let totalScore = 0;
    let wicketsDown = 0;
    let ballsBowled = 0;
    let strikerIndex = 0; // Slot 1 opener
    let nonStrikerIndex = 1; // Slot 2 opener
    let nextBatterIndex = 2; // In the dugout

    let matchWon = false;
    let matchTied = false;
    let matchLost = false;

    // Opposition simulated target pace: 250 in 20.0 overs
    const oppPace = [12, 26, 40, 53, 67, 80, 92, 104, 117, 130, 142, 155, 169, 182, 196, 209, 222, 233, 242, 250];

    // Elite opposition bowling attack
    const oppBowlers = [
      { name: 'T. Boult', type: 'pace', phase: 'pp' },
      { name: 'J. Bumrah', type: 'pace', phase: 'all' },
      { name: 'B. Kumar', type: 'pace', phase: 'pp' },
      { name: 'R. Khan', type: 'spin', phase: 'mid' },
      { name: 'S. Narine', type: 'spin', phase: 'mid' },
      { name: 'M. Starc', type: 'pace', phase: 'death' },
      { name: 'L. Malinga', type: 'pace', phase: 'death' },
      { name: 'V. Chakaravarthy', type: 'spin', phase: 'mid' }
    ];

    let currentOverBalls = [];
    let currentOverRuns = 0;

    for (let ballNum = 1; ballNum <= this.totalBalls; ballNum++) {
      if (matchWon || matchLost) break;

      const overNumber = Math.floor((ballNum - 1) / 6);
      const ballInOver = ((ballNum - 1) % 6) + 1;
      const bowlerObj = oppBowlers[overNumber % oppBowlers.length];
      const currentBowler = bowlerObj.name;

      const striker = players[strikerIndex];
      const nonStriker = players[nonStrikerIndex];

      const runsRemaining = this.target - totalScore;
      const ballsRemaining = this.totalBalls - (ballNum - 1);
      const currentRRR = (runsRemaining / Math.max(1, ballsRemaining)) * 6;

      // 1. Base Probabilities for T20 cricket against championship attack
      let wDot = 0.30;
      let wSingle = 0.31;
      let wDouble = 0.06;
      let wThree = 0.01;
      let wFour = 0.135 * (striker.effectivePow / 95);
      let wSix = 0.088 * (striker.effectivePow / 95);
      let wWicket = 0.052 * (1.18 - (striker.effectiveBat / 110));

      // 2. Phase Dynamics
      if (ballNum <= 36) {
        // Powerplay (Overs 1-6): Only 2 outside 30-yard ring
        wFour *= 1.25;
        wSix *= 1.15;
        wDot -= 0.04;
      } else if (ballNum >= 91) {
        // Death Overs (Overs 16-20): Maximum aggression & yorker hazards
        wSix *= 1.30;
        wFour *= 1.20;
        wWicket *= 1.35;
        wDot += 0.04;
      }

      // 3. Batter State: Cold Batter (Balls 1-3) vs Settled Batter (Balls 12+)
      if (striker.balls < 4) {
        wWicket *= 1.30; // Vulnerable early on
        wDot += 0.06;
        wFour *= 0.75;
        wSix *= 0.65;
      } else if (striker.balls >= 12) {
        wSix *= 1.30; // Eye in, boundary acceleration
        wFour *= 1.20;
        wWicket *= 0.82;
        wDot -= 0.06;
      }

      // 4. RRR (Required Run Rate) Pressure
      if (currentRRR > 13.5) {
        wSix *= 1.15;
        wFour *= 1.05;
        wWicket *= 1.35; // Batters forced into risky slogging
      }
      if (currentRRR > 16.0) {
        wSix *= 1.25;
        wWicket *= 1.65; // Desperation hitting under extreme run-rate pressure
      }

      // 5. Dugout Morale & Threshold Check impact
      if (stats.battingTop7 < CHASE_SCENARIO.thresholds.battingTop7.solid) {
        wDot += 0.03;
        wWicket *= 1.15;
      }
      if (stats.powerTop7 < CHASE_SCENARIO.thresholds.powerTop7.solid) {
        wSix *= 0.82;
        wFour *= 0.88;
      }
      if (stats.bowlingTop4 < CHASE_SCENARIO.thresholds.bowlingTop4.solid) {
        wWicket *= 1.10; // Dugout panic multiplier
      }

      // Normalize weights
      const totalWeight = wDot + wSingle + wDouble + wThree + wFour + wSix + wWicket;
      const roll = Math.random() * totalWeight;

      let outcome = 0;
      let isWicket = false;
      let commentary = '';

      let cumulative = wSix;
      if (roll < cumulative) {
        outcome = 6;
      } else if (roll < (cumulative += wFour)) {
        outcome = 4;
      } else if (roll < (cumulative += wSingle)) {
        outcome = 1;
      } else if (roll < (cumulative += wDouble)) {
        outcome = 2;
      } else if (roll < (cumulative += wThree)) {
        outcome = 3;
      } else if (roll < (cumulative += wWicket)) {
        isWicket = true;
        outcome = 0;
      } else {
        outcome = 0; // Dot
      }

      // Commentary generation
      if (isWicket) {
        wicketsDown++;
        striker.isOut = true;
        striker.balls++;
        const dismissals = [
          `c Sub b ${currentBowler}`,
          `b ${currentBowler}`,
          `lbw b ${currentBowler}`,
          `c Deep Midwicket b ${currentBowler}`,
          `c Long-On b ${currentBowler}`,
          `run out (Direct Hit)`
        ];
        const dismissalType = dismissals[Math.floor(Math.random() * dismissals.length)];
        striker.dismissal = `${dismissalType} ${striker.runs} (${striker.balls}b)`;

        fallOfWickets.push({
          wicket: wicketsDown,
          score: `${totalScore}/${wicketsDown}`,
          over: `${overNumber}.${ballInOver}`,
          batter: striker.name,
          details: striker.dismissal
        });

        commentary = `OUT! ${striker.name} departs! ${dismissalType}! Huge wicket for the opposition under RRR pressure!`;
      } else {
        striker.balls++;
        striker.runs += outcome;
        totalScore += outcome;
        currentOverRuns += outcome;

        if (outcome === 6) {
          striker.sixes++;
          const sixComms = [
            `SIX! Monster blow! Dispatched over deep midwicket into the second tier!`,
            `MAXIMUM! Sweet sound off the willow! Clean strike sailing into the stands!`,
            `SIX! That has gone out of the stadium! Sensational hitting by ${striker.name}!`,
            `SIX! Dances down the pitch and launches it over long-off! Huge six!`
          ];
          commentary = sixComms[Math.floor(Math.random() * sixComms.length)];
        } else if (outcome === 4) {
          striker.fours++;
          const fourComms = [
            `FOUR! Pierces the gap with surgical precision! Races to the boundary!`,
            `FOUR! Gorgeous cover drive! Leans into the stroke and caresses it for four!`,
            `FOUR! Smashed down the ground! Bowler had no chance!`,
            `FOUR! Upper cut over short third man! Clever innovative shot!`
          ];
          commentary = fourComms[Math.floor(Math.random() * fourComms.length)];
        } else if (outcome === 1) {
          commentary = `Tucked away into the gap for a sharp single.`;
        } else if (outcome === 2) {
          commentary = `Pushed into the deep pocket, aggressive running turns one into two!`;
        } else if (outcome === 3) {
          commentary = `Superb placement and rapid sprint between wickets for three runs!`;
        } else {
          striker.dots++;
          const dotComms = [
            `Beaten! Beautiful seam movement past the outside edge! Dot ball.`,
            `Fierce yorker right in the blockhole, dug out back to the bowler.`,
            `Swung hard but straight to the fielder at extra cover. No run.`,
            `Deceptive slower ball, through him! Dot ball ratchets up the required rate!`
          ];
          commentary = dotComms[Math.floor(Math.random() * dotComms.length)];
        }
      }

      ballsBowled++;
      currentOverBalls.push({
        ballNum,
        ballInOver,
        outcome: isWicket ? 'W' : outcome,
        isWicket,
        runs: outcome
      });

      // Timeline entry for live playback
      timeline.push({
        ballNum,
        overDisplay: `${overNumber}.${ballInOver}`,
        overNumber,
        ballInOver,
        bowler: currentBowler,
        striker: striker.name,
        nonStriker: nonStriker ? nonStriker.name : '',
        outcome: isWicket ? 'W' : outcome,
        runs: outcome,
        isWicket,
        totalScore,
        wicketsDown,
        runsNeeded: Math.max(0, this.target - totalScore),
        ballsRemaining: this.totalBalls - ballsBowled,
        rrr: ballsRemaining > 0 ? (((this.target - totalScore) / (this.totalBalls - ballsBowled)) * 6).toFixed(2) : '0.00',
        crr: ((totalScore / ballsBowled) * 6).toFixed(2),
        commentary,
        strikerStats: {
          name: striker.name,
          runs: striker.runs,
          balls: striker.balls,
          fours: striker.fours,
          sixes: striker.sixes
        },
        nonStrikerStats: nonStriker ? {
          name: nonStriker.name,
          runs: nonStriker.runs,
          balls: nonStriker.balls,
          fours: nonStriker.fours,
          sixes: nonStriker.sixes
        } : null
      });

      // Win Condition Check
      if (totalScore >= this.target) {
        matchWon = true;
        break;
      }

      // Handle Wicket: Bring next batter
      if (isWicket) {
        if (wicketsDown >= 10) {
          matchLost = true;
          break;
        } else {
          strikerIndex = nextBatterIndex;
          nextBatterIndex++;
        }
      } else {
        // Strike rotation on odd runs (1 or 3)
        if (outcome === 1 || outcome === 3) {
          const temp = strikerIndex;
          strikerIndex = nonStrikerIndex;
          nonStrikerIndex = temp;
        }
      }

      // End of Over
      if (ballInOver === 6) {
        overSummaries.push({
          over: overNumber + 1,
          score: `${totalScore}/${wicketsDown}`,
          runsInOver: currentOverRuns,
          balls: [...currentOverBalls]
        });

        worm.push({
          over: overNumber + 1,
          chaseScore: totalScore,
          oppScore: oppPace[overNumber] || 250
        });

        // Strike changes at end of over
        const temp = strikerIndex;
        strikerIndex = nonStrikerIndex;
        nonStrikerIndex = temp;

        currentOverBalls = [];
        currentOverRuns = 0;
      }
    }

    // Check tie or defeat at end of 20 overs
    if (!matchWon) {
      if (totalScore === this.target - 1) {
        matchTied = true;
      } else {
        matchLost = true;
      }
    }

    // Determine Man of the Match
    let mom = null;
    let highestImpact = -1;
    players.forEach(p => {
      if (p.balls > 0) {
        const sr = (p.runs / p.balls) * 100;
        const impact = p.runs * 1.5 + (sr - 120) * 0.5 + p.fours * 2 + p.sixes * 4;
        if (impact > highestImpact) {
          highestImpact = impact;
          mom = p;
        }
      }
    });

    return {
      matchWon,
      matchTied,
      matchLost,
      finalScore: totalScore,
      wicketsLost: wicketsDown,
      ballsFaced: ballsBowled,
      oversDisplay: `${Math.floor(ballsBowled / 6)}.${ballsBowled % 6}`,
      margin: matchWon
        ? `Won by ${10 - wicketsDown} wicket${10 - wicketsDown !== 1 ? 's' : ''} with ${this.totalBalls - ballsBowled} ball${this.totalBalls - ballsBowled !== 1 ? 's' : ''} to spare!`
        : matchTied
        ? 'Match Tied! Target 250 matched exactly in a heart-stopping thriller!'
        : `Fell short by ${this.target - totalScore} run${this.target - totalScore !== 1 ? 's' : ''}! Opponent defended 250 successfully.`,
      playersScorecard: players.map(p => ({
        id: p.id,
        name: p.name,
        role: p.role,
        overseas: p.overseas,
        runs: p.runs,
        balls: p.balls,
        fours: p.fours,
        sixes: p.sixes,
        sr: p.balls > 0 ? ((p.runs / p.balls) * 100).toFixed(1) : '0.0',
        dismissal: p.dismissal,
        isOut: p.isOut,
        trait: p.trait,
        avatar: p.avatar
      })),
      fallOfWickets,
      overSummaries,
      worm,
      timeline,
      mom
    };
  }
}
