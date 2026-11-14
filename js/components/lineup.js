// Lineup Component: 11 Interactive Blank/Filled Spots on the 22-Yard Pitch
// Gives full freedom to place any drafted player into any batting position 1 to 11

import { CHASE_SCENARIO } from '../data/squads.js';
import { sounds } from '../engine/sound.js';

export class LineupManager {
  constructor(container, onSlotFilled, onSlotCleared, onStartSimulation) {
    this.container = container;
    this.onSlotFilled = onSlotFilled;
    this.onSlotCleared = onSlotCleared;
    this.onStartSimulation = onStartSimulation;

    // 11 slots, initially all null (blank)
    this.slots = Array(11).fill(null);
    this.pendingPlayer = null;
    this.targetedSlotIndex = null;
  }

  setSlots(slots) {
    this.slots = [...slots];
    this.render();
  }

  setPendingPlayer(player) {
    this.pendingPlayer = player;
    this.render();
  }

  setTargetedSlot(index) {
    this.targetedSlotIndex = index;
    this.render();
  }

  placePlayerInSlot(slotIndex, player) {
    if (slotIndex < 0 || slotIndex >= 11) return;
    this.slots[slotIndex] = player;
    this.pendingPlayer = null;
    this.targetedSlotIndex = null;
    sounds.playBatCrack(true);
    this.render();

    if (this.onSlotFilled) {
      this.onSlotFilled(slotIndex, player, this.slots);
    }
  }

  clearSlot(slotIndex) {
    if (slotIndex < 0 || slotIndex >= 11) return;
    const removedPlayer = this.slots[slotIndex];
    this.slots[slotIndex] = null;
    sounds.playBatCrack(false);
    this.render();

    if (this.onSlotCleared) {
      this.onSlotCleared(slotIndex, removedPlayer, this.slots);
    }
  }

  swapSlots(indexA, indexB) {
    if (indexA < 0 || indexA >= 11 || indexB < 0 || indexB >= 11) return;
    const temp = this.slots[indexA];
    this.slots[indexA] = this.slots[indexB];
    this.slots[indexB] = temp;
    sounds.playBatCrack(false);
    this.render();

    if (this.onSlotFilled) {
      this.onSlotFilled(null, null, this.slots);
    }
  }

  render() {
    const filledCount = this.slots.filter(Boolean).length;
    const isComplete = filledCount === 11;

    // Calculate live aggregates from currently placed players
    const top7Batters = this.slots.slice(0, 7).filter(Boolean);
    const battingTop7 = top7Batters.reduce((acc, p) => acc + (p.bat || 0), 0);

    const allPlaced = this.slots.filter(Boolean);
    const sortedByPower = [...allPlaced].sort((a, b) => (b.pow || 0) - (a.pow || 0));
    const powerTop7 = sortedByPower.slice(0, 7).reduce((acc, p) => acc + (p.pow || 0), 0);

    const sortedByBowling = [...allPlaced].sort((a, b) => (b.bwl || 0) - (a.bwl || 0));
    const bowlingTop4 = sortedByBowling.slice(0, 4).reduce((acc, p) => acc + (p.bwl || 0), 0);

    const overseasCount = allPlaced.filter(p => p.overseas).length;
    const wkCount = allPlaced.filter(p => p.wk).length;
    const bowlerCount = allPlaced.filter(p => (p.bwl || 0) >= 60).length;

    const batThreshold = CHASE_SCENARIO.thresholds.battingTop7.solid;
    const powThreshold = CHASE_SCENARIO.thresholds.powerTop7.solid;
    const bwlThreshold = CHASE_SCENARIO.thresholds.bowlingTop4.solid;

    const batPercent = Math.min(100, Math.round((battingTop7 / batThreshold) * 100));
    const powPercent = Math.min(100, Math.round((powerTop7 / powThreshold) * 100));
    const bwlPercent = Math.min(100, Math.round((bowlingTop4 / bwlThreshold) * 100));

    const overseasValid = overseasCount <= CHASE_SCENARIO.squadRules.maxOverseas;
    const wkValid = wkCount >= CHASE_SCENARIO.squadRules.minWicketKeepers;
    const bowlersValid = bowlerCount >= CHASE_SCENARIO.squadRules.minBowlers;
    const canSimulate = isComplete && overseasValid && wkValid && bowlersValid;

    this.container.innerHTML = `
      <div class="lineup-board-card">
        <!-- Target & Pitch Status Header -->
        <div class="lineup-board-header pb-3 border-b border-emerald-900/60">
          <div class="flex items-center justify-between">
            <div>
              <div class="flex items-center gap-1.5">
                <span class="text-xs">🏏</span>
                <span class="text-[10px] font-black uppercase tracking-widest text-emerald-400 font-mono">22-YARD PITCH LINEUP</span>
              </div>
              <h3 class="text-2xl font-black text-white font-mono mt-0.5">
                251 <span class="text-amber-400 text-sm font-bold">RUNS</span>
                <span class="text-xs text-slate-400 font-normal">in 120 balls</span>
              </h3>
            </div>
            <div class="text-right">
              <span class="text-[10px] font-mono uppercase text-slate-400 block">Playing 11</span>
              <span class="text-lg font-black font-mono ${isComplete ? 'text-emerald-400' : 'text-amber-400'}">
                ${filledCount} / 11 Spots
              </span>
            </div>
          </div>

          <!-- Pending Player Callout Banner -->
          ${this.pendingPlayer ? `
            <div class="mt-3 p-2.5 rounded-lg bg-amber-500/20 border border-amber-400 text-xs text-amber-200 flex items-center justify-between animate-pulse">
              <span>👉 Click any empty spot on the pitch to place <strong>${this.pendingPlayer.name}</strong>!</span>
            </div>
          ` : ''}

          <!-- Live 3 Signature 500-0 Gauges -->
          <div class="grid grid-cols-3 gap-2 mt-3">
            <div class="gauge-card p-2">
              <div class="flex justify-between items-baseline">
                <span class="text-[10px] font-bold text-slate-400">BAT (Top 7)</span>
                <span class="text-xs font-mono font-bold text-white">${battingTop7}/${batThreshold}</span>
              </div>
              <div class="gauge-bar-track my-1">
                <div class="gauge-bar-fill" style="width: ${batPercent}%; background: ${battingTop7 >= batThreshold ? '#22c55e' : '#f59e0b'}"></div>
              </div>
            </div>

            <div class="gauge-card p-2">
              <div class="flex justify-between items-baseline">
                <span class="text-[10px] font-bold text-slate-400">POW (Top 7)</span>
                <span class="text-xs font-mono font-bold text-white">${powerTop7}/${powThreshold}</span>
              </div>
              <div class="gauge-bar-track my-1">
                <div class="gauge-bar-fill" style="width: ${powPercent}%; background: ${powerTop7 >= powThreshold ? '#38bdf8' : '#f59e0b'}"></div>
              </div>
            </div>

            <div class="gauge-card p-2">
              <div class="flex justify-between items-baseline">
                <span class="text-[10px] font-bold text-slate-400">BWL (Top 4)</span>
                <span class="text-xs font-mono font-bold text-white">${bowlingTop4}/${bwlThreshold}</span>
              </div>
              <div class="gauge-bar-track my-1">
                <div class="gauge-bar-fill" style="width: ${bwlPercent}%; background: ${bowlingTop4 >= bwlThreshold ? '#a855f7' : '#f59e0b'}"></div>
              </div>
            </div>
          </div>

          <!-- Quota Checklist Badges -->
          <div class="flex items-center gap-1.5 flex-wrap mt-2.5 pt-2 border-t border-slate-800 text-[11px]">
            <span class="rule-chip ${overseasValid ? 'rule-ok' : 'rule-fail'}">
              ${overseasValid ? '✓' : '⚠️'} ✈️ Foreign: <strong>${overseasCount}/4</strong>
            </span>
            <span class="rule-chip ${wkValid ? 'rule-ok' : 'rule-fail'}">
              ${wkValid ? '✓' : '⚠️'} 🧤 WK: <strong>${wkCount}/1</strong>
            </span>
            <span class="rule-chip ${bowlersValid ? 'rule-ok' : 'rule-fail'}">
              ${bowlersValid ? '✓' : '⚠️'} 🎳 Bowlers: <strong>${bowlerCount}/5</strong>
            </span>
          </div>
        </div>

        <!-- 11 Spots Container on Pitch -->
        <div class="spots-list space-y-1.5 mt-3">
          ${this.slots.map((player, idx) => this.renderSlotRow(idx, player)).join('')}
        </div>

        <!-- Simulation Launch Button -->
        <div class="mt-4 pt-3 border-t border-emerald-950">
          <button id="launch-chase-btn" class="w-full start-sim-btn ${canSimulate ? 'ready animate-pulse' : 'disabled'}" ${!canSimulate ? 'disabled' : ''}>
            <span>⚡ ${canSimulate ? 'STEP ONTO PITCH & CHASE 250!' : `Place All 11 on Pitch (${11 - filledCount} left)`}</span>
          </button>
        </div>
      </div>
    `;

    this.attachEventListeners();
  }

  renderSlotRow(index, player) {
    const slotNumber = index + 1;
    let slotRoleHint = '';
    let slotIcon = '🏏';

    if (slotNumber <= 2) {
      slotRoleHint = 'OPENER (CREASE)';
      slotIcon = '🏏';
    } else if (slotNumber === 3) {
      slotRoleHint = '#3 ANCHOR / BAT';
      slotIcon = '🛡️';
    } else if (slotNumber === 4) {
      slotRoleHint = '#4 MIDDLE ORDER';
      slotIcon = '⚔️';
    } else if (slotNumber <= 7) {
      slotRoleHint = '#5-7 FINISHER / AR';
      slotIcon = '⚡';
    } else {
      slotRoleHint = '#8-11 BOWLER / STUMPS';
      slotIcon = '🎯';
    }

    const isTargeted = this.targetedSlotIndex === index;
    const isAwaitingPlacement = Boolean(this.pendingPlayer);

    // Empty Slot State
    if (!player) {
      return `
        <div class="slot-spot empty ${isTargeted ? 'slot-targeted' : ''} ${isAwaitingPlacement ? 'slot-ready-drop' : ''}" data-index="${index}">
          <div class="flex items-center gap-2.5">
            <span class="slot-num font-mono font-black ${isAwaitingPlacement ? 'text-amber-400' : 'text-slate-500'} w-5 text-center">${slotNumber}</span>
            <span class="text-xs opacity-75">${slotIcon}</span>
            <div class="text-left">
              <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">${slotRoleHint}</span>
              <span class="text-xs ${isAwaitingPlacement ? 'text-amber-300 font-bold' : 'text-slate-500 italic'}">
                ${isAwaitingPlacement ? `Click to place ${this.pendingPlayer.name} here ➔` : (isTargeted ? '🎯 Targeted on pitch — select player' : 'Blank Spot on Pitch (Click to assign)')}
              </span>
            </div>
          </div>
          <button class="slot-select-action text-[11px] font-bold ${isAwaitingPlacement ? 'text-amber-300 underline' : 'text-slate-500'}">
            ${isAwaitingPlacement ? 'Place Here ↵' : '+ Assign'}
          </button>
        </div>
      `;
    }

    // Filled Slot State
    let warningPill = '';
    if (player.role === 'bowler' && slotNumber <= 5) {
      warningPill = `<span class="text-[9px] text-red-400 bg-red-950/80 px-1 rounded font-mono" title="Bowler batting too high suffers heavy batting penalty!">⚠️ Out of Pos</span>`;
    } else if (player.role === 'opener' && slotNumber >= 8) {
      warningPill = `<span class="text-[9px] text-amber-400 bg-amber-950/80 px-1 rounded font-mono" title="Opener batting in lower order">⚠️ Lower Order</span>`;
    }

    return `
      <div class="slot-spot filled flex items-center justify-between p-2 rounded-lg border border-emerald-700/50 hover:border-emerald-500 transition" data-index="${index}">
        <div class="flex items-center gap-2.5 overflow-hidden">
          <span class="slot-num font-mono font-black text-amber-400 w-5 text-center flex-shrink-0">${slotNumber}</span>
          <span class="text-lg flex-shrink-0">${player.avatar}</span>
          <div class="overflow-hidden text-left">
            <div class="flex items-center gap-1.5 flex-wrap">
              <span class="font-bold text-white text-xs truncate max-w-[110px]">${player.name}</span>
              <span class="text-[9px] text-emerald-400/90 font-mono font-semibold">${player.squadName}</span>
              ${player.overseas ? '<span class="text-[9px] text-sky-400 bg-sky-950/80 px-1 rounded">✈️</span>' : ''}
              ${player.wk ? '<span class="text-[9px] text-amber-400 bg-amber-950/80 px-1 rounded">🧤</span>' : ''}
              ${warningPill}
            </div>
            <div class="flex items-center gap-2 text-[10px] font-mono text-slate-300 mt-0.5">
              <span class="text-emerald-400 font-bold">${player.bat} B</span>
              <span class="text-sky-400 font-bold">${player.pow} P</span>
              <span class="text-purple-400 font-bold">${player.bwl} W</span>
            </div>
          </div>
        </div>

        <div class="flex items-center gap-1.5 flex-shrink-0">
          <!-- Move Up/Down Arrows -->
          <button class="slot-arrow-btn move-up ${index === 0 ? 'invisible' : ''}" data-index="${index}" title="Swap with above batting spot">▲</button>
          <button class="slot-arrow-btn move-down ${index === 10 ? 'invisible' : ''}" data-index="${index}" title="Swap with below batting spot">▼</button>
          <!-- Remove Player Button -->
          <button class="slot-remove-btn text-xs font-bold text-slate-400 hover:text-red-400 p-1" data-index="${index}" title="Remove from pitch">✕</button>
        </div>
      </div>
    `;
  }

  attachEventListeners() {
    // Click on empty slots to place pending player or target
    const emptySpots = this.container.querySelectorAll('.slot-spot.empty');
    emptySpots.forEach(spot => {
      spot.addEventListener('click', () => {
        const index = parseInt(spot.dataset.index, 10);
        if (this.pendingPlayer) {
          this.placePlayerInSlot(index, this.pendingPlayer);
        } else {
          this.setTargetedSlot(index);
        }
      });
    });

    // Remove buttons
    const removeBtns = this.container.querySelectorAll('.slot-remove-btn');
    removeBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const index = parseInt(btn.dataset.index, 10);
        this.clearSlot(index);
      });
    });

    // Swap Up buttons
    const upBtns = this.container.querySelectorAll('.move-up');
    upBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const index = parseInt(btn.dataset.index, 10);
        this.swapSlots(index, index - 1);
      });
    });

    // Swap Down buttons
    const downBtns = this.container.querySelectorAll('.move-down');
    downBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const index = parseInt(btn.dataset.index, 10);
        this.swapSlots(index, index + 1);
      });
    });

    // Launch Chase Button
    const launchBtn = this.container.querySelector('#launch-chase-btn');
    if (launchBtn) {
      launchBtn.addEventListener('click', () => {
        if (this.slots.every(Boolean) && this.onStartSimulation) {
          sounds.playBatCrack(true);
          this.onStartSimulation(this.slots);
        }
      });
    }
  }
}
