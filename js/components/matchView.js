// Match View & Final Scorecard Component: Stadium Electronic Scoreboard, 22-Yard Pitch Dynamics, Commentary & Scorecard

import { sounds } from '../engine/sound.js';

export class MatchViewManager {
  constructor(container, onPlayAgain) {
    this.container = container;
    this.onPlayAgain = onPlayAgain;
    this.simResult = null;
    this.currentBallIndex = 0;
    this.timer = null;
    this.speed = 700; // ms per ball
    this.isPaused = false;
  }

  start(simResult) {
    this.simResult = simResult;
    this.currentBallIndex = 0;
    this.isPaused = false;
    this.renderLiveSimUI();
    this.playNextBall();
  }

  renderLiveSimUI() {
    this.container.innerHTML = `
      <div class="match-sim-wrapper animate-fade-in">
        <!-- Live Top Status & Speed Controls -->
        <div class="sim-header flex items-center justify-between flex-wrap gap-3 pb-3 border-b border-emerald-900/60">
          <div class="flex items-center gap-2">
            <span class="inline-block w-3 h-3 rounded-full bg-red-500 animate-pulse"></span>
            <h2 class="text-xl font-black text-white tracking-wide uppercase font-heading flex items-center gap-2">
              <span>🏟️ STADIUM LIVE: CHASING 250 ON THE 22-YARD PITCH</span>
            </h2>
          </div>
          <div class="flex items-center gap-2">
            <button id="sim-speed-normal" class="sim-ctrl-btn active">Normal</button>
            <button id="sim-speed-fast" class="sim-ctrl-btn">Fast</button>
            <button id="sim-skip-btn" class="sim-ctrl-btn skip">⚡ Skip to End</button>
            <button id="sim-sound-btn" class="sim-ctrl-btn sound">🔊</button>
          </div>
        </div>

        <!-- Giant Stadium Electronic Matrix Scoreboard -->
        <div class="stadium-scoreboard mt-3">
          <div class="score-main flex items-baseline justify-between flex-wrap gap-4">
            <div>
              <span class="text-xs uppercase tracking-widest text-emerald-400 block font-mono font-bold flex items-center gap-1.5">
                <span>🎯 TOTAL SCORE</span>
              </span>
              <div class="text-5xl md:text-6xl font-black text-white font-mono tracking-tight" id="live-score">0/0</div>
              <span class="text-sm text-slate-400 font-mono" id="live-overs">0.0 / 20.0 overs</span>
            </div>

            <div class="text-center bg-black/50 px-6 py-3 rounded-xl border border-amber-500/30 shadow-inner">
              <span class="text-[11px] uppercase tracking-widest text-amber-400 block font-bold font-mono">CHASE EQUATION</span>
              <div class="text-2xl md:text-3xl font-black text-amber-300 font-mono mt-0.5" id="live-equation">
                Need <span class="text-4xl text-white">251</span> in <span class="text-4xl text-white">120</span>b
              </div>
              <div class="text-xs text-slate-300 font-mono mt-1">
                Target: <strong class="text-white">251</strong> | RRR: <strong class="text-amber-400" id="live-rrr">12.55</strong>
              </div>
            </div>

            <div class="text-right">
              <span class="text-xs uppercase tracking-widest text-slate-400 block font-mono">Current Run Rate</span>
              <div class="text-3xl md:text-4xl font-black text-emerald-400 font-mono" id="live-crr">0.00</div>
              <span class="text-xs text-slate-400 font-mono">Opponent Pace: 12.50</span>
            </div>
          </div>

          <!-- Active Batters on Pitch & Opposition Bowler -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4 pt-4 border-t border-emerald-950">
            <div class="striker-box active-bat p-3 rounded-xl bg-slate-900/90 border border-amber-500/60 shadow-lg">
              <div class="flex items-center justify-between text-xs mb-1">
                <span class="text-amber-400 font-bold uppercase tracking-wider flex items-center gap-1">
                  <span>🏏 Striker at Crease *</span>
                </span>
                <span class="font-mono text-slate-400" id="striker-sr">SR: 0.0</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="font-bold text-white text-base" id="striker-name">-</span>
                <span class="font-mono font-black text-amber-300 text-lg" id="striker-score">0 (0b)</span>
              </div>
              <div class="text-[11px] text-slate-400 font-mono mt-0.5" id="striker-boundaries">4s: 0 | 6s: 0</div>
            </div>

            <div class="nonstriker-box p-3 rounded-xl bg-slate-900/70 border border-slate-700/80">
              <div class="flex items-center justify-between text-xs mb-1">
                <span class="text-slate-400 font-bold uppercase tracking-wider">Non-Striker</span>
                <span class="font-mono text-slate-400" id="nonstriker-sr">SR: 0.0</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="font-bold text-slate-200 text-base" id="nonstriker-name">-</span>
                <span class="font-mono font-black text-slate-300 text-lg" id="nonstriker-score">0 (0b)</span>
              </div>
              <div class="text-[11px] text-slate-400 font-mono mt-0.5" id="nonstriker-boundaries">4s: 0 | 6s: 0</div>
            </div>

            <div class="bowler-box p-3 rounded-xl bg-slate-900/70 border border-slate-700/80">
              <div class="flex items-center justify-between text-xs mb-1">
                <span class="text-slate-400 font-bold uppercase tracking-wider">🎳 Opposition Attack</span>
                <span class="font-mono text-red-400" id="bowler-threat">Defending 250</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="font-bold text-slate-200 text-base" id="bowler-name">-</span>
                <span class="font-mono text-slate-300 text-xs">Championship Bowler</span>
              </div>
              <div class="text-[11px] text-slate-400 font-mono mt-0.5">Defending 250/0</div>
            </div>
          </div>

          <!-- Current Over Balls Tracker -->
          <div class="current-over-strip flex items-center justify-between mt-4 p-3 rounded-xl bg-black/60 border border-emerald-900/50">
            <span class="text-xs uppercase tracking-wider font-bold text-emerald-400 font-mono flex items-center gap-1.5">
              <span>🔴 This Over:</span>
            </span>
            <div class="flex items-center gap-2" id="over-balls-container">
              <!-- Circles appended here -->
            </div>
          </div>
        </div>

        <!-- Stadium Commentary Box -->
        <div class="commentary-box mt-4 p-4 rounded-xl bg-slate-900/90 border border-emerald-900/60 shadow-lg">
          <div class="flex items-center justify-between mb-2 pb-2 border-b border-slate-800">
            <span class="text-xs uppercase font-bold tracking-wider text-amber-400 flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
              Stadium Public Address & Live Commentary
            </span>
            <span class="text-xs font-mono text-slate-400" id="comm-ball-tag">Ball 0.0</span>
          </div>
          <div class="commentary-text text-base font-medium text-slate-100 min-h-[48px] flex items-center" id="live-commentary">
            The players take their marks on the 22-yard turf! 251 runs required from 120 deliveries!
          </div>
        </div>
      </div>
    `;

    this.attachSimControls();
  }

  attachSimControls() {
    const normalBtn = this.container.querySelector('#sim-speed-normal');
    const fastBtn = this.container.querySelector('#sim-speed-fast');
    const skipBtn = this.container.querySelector('#sim-skip-btn');
    const soundBtn = this.container.querySelector('#sim-sound-btn');

    if (normalBtn) {
      normalBtn.addEventListener('click', () => {
        this.speed = 700;
        normalBtn.classList.add('active');
        fastBtn.classList.remove('active');
      });
    }

    if (fastBtn) {
      fastBtn.addEventListener('click', () => {
        this.speed = 180;
        fastBtn.classList.add('active');
        normalBtn.classList.remove('active');
      });
    }

    if (skipBtn) {
      skipBtn.addEventListener('click', () => {
        if (this.timer) clearTimeout(this.timer);
        this.currentBallIndex = this.simResult.timeline.length;
        sounds.playBatCrack(true);
        this.renderFinalResult();
      });
    }

    if (soundBtn) {
      soundBtn.addEventListener('click', () => {
        const isMuted = sounds.toggleMute();
        soundBtn.textContent = isMuted ? '🔇' : '🔊';
      });
    }
  }

  playNextBall() {
    if (this.currentBallIndex >= this.simResult.timeline.length) {
      // Simulation finished
      setTimeout(() => {
        this.renderFinalResult();
      }, 800);
      return;
    }

    const ball = this.simResult.timeline[this.currentBallIndex];
    this.updateBallDisplay(ball);

    // Audio effects
    if (ball.isWicket) {
      sounds.playWicket();
    } else if (ball.outcome === 6) {
      sounds.playBatCrack(true);
      sounds.playCheer('six');
    } else if (ball.outcome === 4) {
      sounds.playBatCrack(true);
      sounds.playCheer('four');
    } else if (ball.outcome > 0) {
      sounds.playBatCrack(false);
    }

    this.currentBallIndex++;
    this.timer = setTimeout(() => this.playNextBall(), this.speed);
  }

  updateBallDisplay(ball) {
    const scoreEl = this.container.querySelector('#live-score');
    const oversEl = this.container.querySelector('#live-overs');
    const equationEl = this.container.querySelector('#live-equation');
    const rrrEl = this.container.querySelector('#live-rrr');
    const crrEl = this.container.querySelector('#live-crr');

    const strikerNameEl = this.container.querySelector('#striker-name');
    const strikerScoreEl = this.container.querySelector('#striker-score');
    const strikerSrEl = this.container.querySelector('#striker-sr');
    const strikerBoundariesEl = this.container.querySelector('#striker-boundaries');

    const nonStrikerNameEl = this.container.querySelector('#nonstriker-name');
    const nonStrikerScoreEl = this.container.querySelector('#nonstriker-score');
    const nonStrikerSrEl = this.container.querySelector('#nonstriker-sr');
    const nonStrikerBoundariesEl = this.container.querySelector('#nonstriker-boundaries');

    const bowlerNameEl = this.container.querySelector('#bowler-name');
    const commBallTagEl = this.container.querySelector('#comm-ball-tag');
    const commTextEl = this.container.querySelector('#live-commentary');
    const overBallsContainer = this.container.querySelector('#over-balls-container');

    if (scoreEl) scoreEl.textContent = `${ball.totalScore}/${ball.wicketsDown}`;
    if (oversEl) oversEl.textContent = `${ball.overDisplay} / 20.0 overs`;
    if (equationEl) {
      equationEl.innerHTML = `Need <span class="text-3xl md:text-4xl text-white">${ball.runsNeeded}</span> in <span class="text-3xl md:text-4xl text-white">${ball.ballsRemaining}</span>b`;
    }
    if (rrrEl) rrrEl.textContent = ball.rrr;
    if (crrEl) crrEl.textContent = ball.crr;

    if (strikerNameEl) strikerNameEl.textContent = ball.strikerStats.name;
    if (strikerScoreEl) strikerScoreEl.textContent = `${ball.strikerStats.runs} (${ball.strikerStats.balls}b)`;
    if (strikerSrEl) {
      const sr = ball.strikerStats.balls > 0 ? ((ball.strikerStats.runs / ball.strikerStats.balls) * 100).toFixed(1) : '0.0';
      strikerSrEl.textContent = `SR: ${sr}`;
    }
    if (strikerBoundariesEl) strikerBoundariesEl.textContent = `4s: ${ball.strikerStats.fours} | 6s: ${ball.strikerStats.sixes}`;

    if (ball.nonStrikerStats) {
      if (nonStrikerNameEl) nonStrikerNameEl.textContent = ball.nonStrikerStats.name;
      if (nonStrikerScoreEl) nonStrikerScoreEl.textContent = `${ball.nonStrikerStats.runs} (${ball.nonStrikerStats.balls}b)`;
      if (nonStrikerSrEl) {
        const nsr = ball.nonStrikerStats.balls > 0 ? ((ball.nonStrikerStats.runs / ball.nonStrikerStats.balls) * 100).toFixed(1) : '0.0';
        nonStrikerSrEl.textContent = `SR: ${nsr}`;
      }
      if (nonStrikerBoundariesEl) nonStrikerBoundariesEl.textContent = `4s: ${ball.nonStrikerStats.fours} | 6s: ${ball.nonStrikerStats.sixes}`;
    }

    if (bowlerNameEl) bowlerNameEl.textContent = ball.bowler;
    if (commBallTagEl) commBallTagEl.textContent = `Over ${ball.overDisplay}`;
    if (commTextEl) {
      let outcomeClass = '';
      if (ball.outcome === 6) outcomeClass = 'text-amber-300 font-bold';
      else if (ball.outcome === 4) outcomeClass = 'text-sky-300 font-bold';
      else if (ball.isWicket) outcomeClass = 'text-red-400 font-black';

      commTextEl.innerHTML = `<span class="${outcomeClass}">${ball.commentary}</span>`;
    }

    // Update Over Balls Strip
    if (overBallsContainer) {
      if (ball.ballInOver === 1) {
        overBallsContainer.innerHTML = '';
      }
      const ballPill = document.createElement('span');
      let pillClass = 'ball-pill dot';
      if (ball.isWicket) pillClass = 'ball-pill wicket';
      else if (ball.outcome === 6) pillClass = 'ball-pill six';
      else if (ball.outcome === 4) pillClass = 'ball-pill four';
      else if (ball.outcome > 0) pillClass = 'ball-pill run';

      ballPill.className = pillClass;
      ballPill.textContent = ball.outcome === 0 ? '•' : ball.outcome;
      overBallsContainer.appendChild(ballPill);
    }
  }

  renderFinalResult() {
    const res = this.simResult;

    if (res.matchWon) {
      sounds.playVictory();
    } else {
      sounds.playDefeat();
    }

    this.container.innerHTML = `
      <div class="final-result-card animate-fade-in">
        <!-- Result Banner -->
        <div class="result-banner ${res.matchWon ? 'banner-win' : 'banner-loss'}">
          <div class="flex items-center justify-between flex-wrap gap-4">
            <div class="flex items-center gap-3.5">
              <span class="text-5xl">${res.matchWon ? '🏆' : '💔'}</span>
              <div>
                <h2 class="text-3xl font-black text-white tracking-wide font-heading">
                  ${res.matchWon ? 'TARGET CHASED! 250 CONQUERED ON PITCH!' : 'DEFENDED! FELL SHORT OF 250!'}
                </h2>
                <p class="text-base text-white/90 font-medium mt-1">${res.margin}</p>
              </div>
            </div>

            <div class="flex items-center gap-2">
              <button id="copy-scorecard-btn" class="action-btn copy">
                <span>📋 Share / Copy Scorecard</span>
              </button>
              <button id="play-again-btn" class="action-btn play-again">
                <span>🔄 Play Again</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Scores Breakdown Summary -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div class="score-card-box p-4 rounded-xl bg-slate-900/90 border border-emerald-900/60 shadow-lg">
            <span class="text-xs font-bold uppercase tracking-wider text-emerald-400 font-mono">Your Chasing XI (2nd Innings)</span>
            <div class="flex items-baseline justify-between mt-1">
              <div class="text-4xl font-black font-mono text-white">${res.finalScore}/${res.wicketsLost}</div>
              <span class="text-sm font-mono text-slate-300">(${res.oversDisplay} / 20.0 ov)</span>
            </div>
            <div class="text-xs text-slate-400 mt-1 font-mono">
              CRR: ${((res.finalScore / res.ballsFaced) * 6).toFixed(2)} | Target: 251
            </div>
          </div>

          <div class="score-card-box p-4 rounded-xl bg-slate-900/90 border border-amber-900/50 shadow-lg">
            <span class="text-xs font-bold uppercase tracking-wider text-amber-400 font-mono">Opponent Flawless Total (1st Innings)</span>
            <div class="flex items-baseline justify-between mt-1">
              <div class="text-4xl font-black font-mono text-amber-400">250/0</div>
              <span class="text-sm font-mono text-slate-300">(20.0 ov)</span>
            </div>
            <div class="text-xs text-slate-400 mt-1 font-mono">
              RR: 12.50 | 0 Wickets Down
            </div>
          </div>
        </div>

        <!-- Man of the Match Spotlight -->
        ${res.mom ? `
          <div class="mom-card mt-4 p-4 rounded-xl bg-gradient-to-r from-amber-500/20 via-slate-900 to-amber-950/20 border border-amber-500/40 flex items-center justify-between flex-wrap gap-4 shadow-lg">
            <div class="flex items-center gap-3.5">
              <div class="w-14 h-14 rounded-full bg-amber-500/30 border-2 border-amber-400 flex items-center justify-center text-3xl">
                ${res.mom.avatar || '⭐'}
              </div>
              <div>
                <span class="text-xs font-black uppercase tracking-widest text-amber-400 block font-mono">Player of the Match</span>
                <h3 class="text-xl font-black text-white font-heading">${res.mom.name}</h3>
                <p class="text-xs text-amber-200/90">${res.mom.trait}</p>
              </div>
            </div>
            <div class="text-right">
              <div class="text-3xl font-black text-amber-300 font-mono">${res.mom.runs} <span class="text-sm font-normal text-slate-300">(${res.mom.balls}b)</span></div>
              <span class="text-xs text-slate-300 font-mono">${res.mom.fours} fours, ${res.mom.sixes} sixes | SR ${((res.mom.runs / res.mom.balls) * 100).toFixed(1)}</span>
            </div>
          </div>
        ` : ''}

        <!-- Full Batting Scorecard Table -->
        <div class="scorecard-table-wrapper mt-5 rounded-xl border border-emerald-900/60 bg-slate-900/90 overflow-hidden shadow-xl">
          <div class="p-3.5 bg-slate-950/90 border-b border-emerald-900/60 flex items-center justify-between">
            <h3 class="text-base font-bold text-white uppercase tracking-wider font-heading flex items-center gap-2">
              <span>🏏 Official Stadium Batting Scorecard</span>
            </h3>
            <span class="text-xs font-mono text-emerald-400 font-bold">${res.finalScore}/${res.wicketsLost} (${res.oversDisplay} ov)</span>
          </div>

          <div class="overflow-x-auto">
            <table class="w-full text-left text-sm">
              <thead class="bg-slate-950/60 text-slate-400 uppercase text-[11px] font-mono tracking-wider border-b border-slate-800">
                <tr>
                  <th class="p-3">Batter</th>
                  <th class="p-3">Dismissal</th>
                  <th class="p-3 text-right">R</th>
                  <th class="p-3 text-right">B</th>
                  <th class="p-3 text-right">4s</th>
                  <th class="p-3 text-right">6s</th>
                  <th class="p-3 text-right">SR</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-800/60">
                ${res.playersScorecard.map((p, idx) => `
                  <tr class="hover:bg-slate-800/40 transition font-mono ${p.runs >= 50 ? 'bg-amber-500/10' : ''}">
                    <td class="p-3 font-sans font-bold text-white flex items-center gap-2">
                      <span class="text-slate-500 text-xs">${idx + 1}</span>
                      <span>${p.avatar} ${p.name}</span>
                      ${p.overseas ? '<span class="text-[10px] text-sky-400">✈️</span>' : ''}
                      ${!p.isOut && p.balls > 0 ? '<span class="text-emerald-400 text-xs">*</span>' : ''}
                    </td>
                    <td class="p-3 text-xs text-slate-400 font-sans">${p.isOut ? p.dismissal : (p.balls > 0 ? 'not out' : 'did not bat')}</td>
                    <td class="p-3 text-right font-black ${p.runs >= 50 ? 'text-amber-400' : 'text-white'}">${p.runs}</td>
                    <td class="p-3 text-right text-slate-300">${p.balls}</td>
                    <td class="p-3 text-right text-slate-300">${p.fours}</td>
                    <td class="p-3 text-right text-slate-300">${p.sixes}</td>
                    <td class="p-3 text-right text-slate-300">${p.sr}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>

        <!-- Fall of Wickets Timeline -->
        ${res.fallOfWickets.length > 0 ? `
          <div class="fow-box mt-4 p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs">
            <span class="font-bold text-slate-400 uppercase tracking-wider block mb-2 font-mono">Fall of Wickets:</span>
            <div class="flex items-center gap-3 flex-wrap font-mono text-slate-300">
              ${res.fallOfWickets.map(f => `
                <span class="px-2.5 py-1 rounded-md bg-black/60 border border-red-900/40">
                  <strong class="text-red-400">${f.score}</strong> (${f.batter}, ${f.over} ov)
                </span>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <!-- Over-by-Over Worm Summary -->
        <div class="worm-summary mt-4 p-4 rounded-xl bg-slate-900/90 border border-slate-800">
          <h4 class="text-sm font-bold text-slate-300 uppercase tracking-wider mb-2 font-heading">Over-by-Over Worm Comparison (vs 250 Target Pace)</h4>
          <div class="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-10 gap-1.5 text-center font-mono text-xs">
            ${res.worm.slice(1).map(w => {
              const diff = w.chaseScore - w.oppScore;
              const isAhead = diff >= 0;
              return `
                <div class="p-2 rounded bg-black/60 border ${isAhead ? 'border-emerald-600/70' : 'border-red-900/50'}">
                  <div class="text-[10px] text-slate-400">Ov ${w.over}</div>
                  <div class="font-bold text-white">${w.chaseScore}</div>
                  <div class="text-[10px] ${isAhead ? 'text-emerald-400' : 'text-red-400'}">${isAhead ? '+' : ''}${diff}</div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      </div>
    `;

    // Attach listeners for result screen
    const playAgainBtn = this.container.querySelector('#play-again-btn');
    if (playAgainBtn) {
      playAgainBtn.addEventListener('click', () => {
        sounds.playBatCrack(false);
        if (this.onPlayAgain) {
          this.onPlayAgain();
        }
      });
    }

    const copyBtn = this.container.querySelector('#copy-scorecard-btn');
    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        const text = this.generateShareText(res);
        navigator.clipboard.writeText(text).then(() => {
          copyBtn.innerHTML = '<span>✅ Copied to Clipboard!</span>';
          setTimeout(() => {
            copyBtn.innerHTML = '<span>📋 Share / Copy Scorecard</span>';
          }, 2500);
        });
      });
    }
  }

  generateShareText(res) {
    const outcomeIcon = res.matchWon ? '🏆' : '💔';
    const outcomeText = res.matchWon ? 'CONQUERED THE 250 CHASE!' : 'FELL SHORT OF 250!';
    const topScorer = [...res.playersScorecard].sort((a, b) => b.runs - a.runs)[0];

    return `🏏 THE CHASE 250 (IPL Edition) 🏏\n` +
      `Target: 251 runs in 120 balls\n` +
      `${outcomeIcon} ${outcomeText}\n` +
      `Score: ${res.finalScore}/${res.wicketsLost} (${res.oversDisplay} ov)\n` +
      `Result: ${res.margin}\n` +
      (topScorer ? `Top Batter: ${topScorer.name} ${topScorer.runs} (${topScorer.balls}b) - SR ${topScorer.sr}\n` : '') +
      `Can you beat the impossible 250 chase? Play at 250-0.com!`;
  }
}
