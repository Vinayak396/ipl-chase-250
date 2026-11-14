// Main Application Controller for "The Chase 250" (IPL Edition)
// Side-by-Side Cockpit: Left = Random Franchise Pool | Right = 11 Interactive Blank/Filled Spots

import { IPL_SQUADS } from './data/squads.js';
import { DraftManager } from './components/draft.js';
import { LineupManager } from './components/lineup.js';
import { MatchViewManager } from './components/matchView.js';
import { MatchSimulator } from './engine/simulation.js';
import { sounds } from './engine/sound.js';

class App {
  constructor() {
    this.squads = IPL_SQUADS;
    this.slots = Array(11).fill(null); // 11 Blank spots
    this.respinsLeft = 3; // 3 Team Rerolls
    this.recentSquadIds = new Set();
    this.currentLandedSquad = null;
    this.pendingPlayer = null;

    // View states: 'play' (draft + 11 spots) or 'simulation' (live match view)
    this.viewState = 'play';

    this.initDOM();
    this.initManagers();
    this.attachGlobalListeners();
    this.startFirstRound();
  }

  initDOM() {
    this.playCockpit = document.getElementById('play-cockpit-section');
    this.draftContainer = document.getElementById('draft-modal-section');
    this.lineupContainer = document.getElementById('playing-xi-board');
    this.matchContainer = document.getElementById('match-view-section');

    this.rulesModal = document.getElementById('rules-modal');
    this.rulesToggleBtn = document.getElementById('rules-toggle-btn');
    this.closeRulesBtn = document.getElementById('close-rules-btn');

    this.roundDisplay = document.getElementById('current-round-tag');
    this.respinsDisplay = document.getElementById('respins-count-tag');
    this.quotaDisplay = document.getElementById('quota-summary-tag');
  }

  initManagers() {
    // Left: Draft Manager
    this.draftManager = new DraftManager(
      this.draftContainer,
      (player) => this.handlePlayerSelectedFromSquad(player),
      () => this.handleRerollSquad()
    );

    // Right: Lineup Manager (11 Blank/Filled Spots)
    this.lineupManager = new LineupManager(
      this.lineupContainer,
      (slotIndex, player, updatedSlots) => this.handleSlotFilled(slotIndex, player, updatedSlots),
      (slotIndex, removedPlayer, updatedSlots) => this.handleSlotCleared(slotIndex, removedPlayer, updatedSlots),
      (finalSlots) => this.startChase(finalSlots)
    );

    // Simulation View Manager
    this.matchViewManager = new MatchViewManager(
      this.matchContainer,
      () => this.resetGame()
    );
  }

  attachGlobalListeners() {
    if (this.rulesToggleBtn) {
      this.rulesToggleBtn.addEventListener('click', () => {
        this.rulesModal.classList.remove('hidden');
      });
    }

    if (this.closeRulesBtn) {
      this.closeRulesBtn.addEventListener('click', () => {
        this.rulesModal.classList.add('hidden');
      });
    }

    const globalMuteBtn = document.getElementById('global-mute-btn');
    if (globalMuteBtn) {
      globalMuteBtn.addEventListener('click', () => {
        const isMuted = sounds.toggleMute();
        globalMuteBtn.innerHTML = isMuted ? '<span>🔇 Unmute</span>' : '<span>🔊 Sound On</span>';
      });
    }
  }

  getConstraints() {
    const placedPlayers = this.slots.filter(Boolean);

    // Set of normalized player names to prevent duplicate player selection
    const draftedPlayerNames = new Set(placedPlayers.map(p => p.name.trim().toLowerCase()));

    // Total foreign (overseas) players currently in the 11 (Max 4)
    const overseasCount = placedPlayers.filter(p => p.overseas).length;

    // Count of players picked per franchise (Max 2 from any team)
    const franchiseCounts = {};
    placedPlayers.forEach(p => {
      franchiseCounts[p.squadName] = (franchiseCounts[p.squadName] || 0) + 1;
    });

    return {
      draftedPlayerNames,
      overseasCount,
      franchiseCounts
    };
  }

  getRandomSquad() {
    let availableSquads = this.squads.filter(s => !this.recentSquadIds.has(s.id));
    if (availableSquads.length === 0) {
      this.recentSquadIds.clear();
      availableSquads = this.squads;
    }

    const randomIndex = Math.floor(Math.random() * availableSquads.length);
    const chosenSquad = availableSquads[randomIndex];
    this.recentSquadIds.add(chosenSquad.id);
    return chosenSquad;
  }

  startFirstRound() {
    this.currentLandedSquad = this.getRandomSquad();
    this.updateCockpitView();
  }

  handleRerollSquad() {
    if (this.respinsLeft <= 0) return;
    this.respinsLeft--;
    this.pendingPlayer = null;
    this.currentLandedSquad = this.getRandomSquad();
    this.updateCockpitView();
  }

  // When player card is clicked on the left side
  handlePlayerSelectedFromSquad(player) {
    this.pendingPlayer = player;
    this.lineupManager.setPendingPlayer(player);
  }

  // When a slot on the right receives a player
  handleSlotFilled(slotIndex, player, updatedSlots) {
    this.slots = [...updatedSlots];
    this.pendingPlayer = null;

    const filledCount = this.slots.filter(Boolean).length;
    if (filledCount < 11) {
      // Automatically roll the next random team to keep the experience fast and thrilling!
      this.currentLandedSquad = this.getRandomSquad();
    }
    this.updateCockpitView();
  }

  // When user clicks ✕ to remove a player from a slot on the right
  handleSlotCleared(slotIndex, removedPlayer, updatedSlots) {
    this.slots = [...updatedSlots];
    this.pendingPlayer = null;
    this.updateCockpitView();
  }

  updateCockpitView() {
    const filledCount = this.slots.filter(Boolean).length;
    const constraints = this.getConstraints();

    // Update top header badges
    if (this.roundDisplay) {
      this.roundDisplay.textContent = `${filledCount} / 11 Spots Filled`;
    }
    if (this.respinsDisplay) {
      this.respinsDisplay.textContent = `${this.respinsLeft} Reroll${this.respinsLeft !== 1 ? 's' : ''}`;
    }
    if (this.quotaDisplay) {
      this.quotaDisplay.innerHTML = `✈️ Foreign: <strong>${constraints.overseasCount}/4</strong> | Max 2 / Team`;
    }

    // Toggle main sections
    this.playCockpit.classList.toggle('hidden', this.viewState !== 'play');
    this.matchContainer.classList.toggle('hidden', this.viewState !== 'simulation');

    // Update Left: Draft Manager
    this.draftManager.renderSquad(
      this.currentLandedSquad,
      filledCount + 1,
      this.respinsLeft,
      constraints
    );

    // Update Right: Lineup Manager (11 Spots)
    this.lineupManager.setSlots(this.slots);
  }

  startChase(lineup) {
    this.viewState = 'simulation';
    this.updateCockpitView();

    const simulator = new MatchSimulator(lineup);
    const result = simulator.simulateFullMatch();

    this.matchViewManager.start(result);
  }

  resetGame() {
    this.slots = Array(11).fill(null);
    this.respinsLeft = 3;
    this.recentSquadIds.clear();
    this.currentLandedSquad = null;
    this.pendingPlayer = null;
    this.viewState = 'play';

    this.startFirstRound();
  }
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  window.app = new App();
});
