// Draft Component: Full Random Squad view with strict duplicate, overseas, and team quota enforcement
import { sounds } from '../engine/sound.js';

export class DraftManager {
  constructor(container, onPlayerSelected, onRerollRequested) {
    this.container = container;
    this.onPlayerSelected = onPlayerSelected;
    this.onRerollRequested = onRerollRequested;
    this.activeFilter = 'all';
    this.selectedPlayerForPlacement = null;
  }

  renderSquad(squad, currentRound, respinsLeft, constraints) {
    this.currentSquad = squad;
    this.currentRound = currentRound;
    this.respinsLeft = respinsLeft;
    this.constraints = constraints; // { draftedPlayerNames: Set, overseasCount: number, franchiseCounts: object }

    this.render();
  }

  setSelectedPlayer(player) {
    this.selectedPlayerForPlacement = player;
    this.render();
  }

  render() {
    if (!this.currentSquad) return;
    const squad = this.currentSquad;
    const { draftedPlayerNames, overseasCount, franchiseCounts } = this.constraints || {
      draftedPlayerNames: new Set(),
      overseasCount: 0,
      franchiseCounts: {}
    };

    const teamCount = franchiseCounts[squad.shortName] || 0;
    const isTeamQuotaFull = teamCount >= 2;
    const isForeignQuotaFull = overseasCount >= 4;

    let filteredPlayers = squad.players;
    if (this.activeFilter === 'bat') {
      filteredPlayers = squad.players.filter(p => p.role === 'opener' || p.role === 'middle');
    } else if (this.activeFilter === 'wk') {
      filteredPlayers = squad.players.filter(p => p.wk);
    } else if (this.activeFilter === 'allrounder') {
      filteredPlayers = squad.players.filter(p => p.role === 'allrounder');
    } else if (this.activeFilter === 'bowler') {
      filteredPlayers = squad.players.filter(p => p.role === 'bowler');
    }

    this.container.innerHTML = `
      <div class="squad-selection-container animate-fade-in">
        <!-- Franchise Hero Header Banner -->
        <div class="squad-hero-banner" style="background: linear-gradient(135deg, ${squad.color}dd, ${squad.accent || '#0f172a'}fa); border-color: ${squad.secondaryColor || '#f59e0b'}">
          <div class="flex items-center justify-between flex-wrap gap-4">
            <div class="flex items-center gap-3.5">
              <span class="text-4xl md:text-5xl filter drop-shadow-md">${squad.badge}</span>
              <div>
                <div class="flex items-center gap-2 flex-wrap">
                  <h3 class="text-2xl font-black text-white font-heading tracking-wide">${squad.name}</h3>
                  <span class="px-2.5 py-0.5 rounded-full text-xs font-black uppercase bg-black/40 text-amber-300 border border-amber-400/30">${squad.edition}</span>
                  <span class="text-xs font-mono text-slate-300 font-bold bg-white/10 px-2 py-0.5 rounded">Season ${squad.year}</span>
                </div>
                <p class="text-xs text-amber-100/90 mt-1 max-w-xl">${squad.description}</p>
              </div>
            </div>

            <div class="flex items-center gap-3">
              <div class="text-right">
                <span class="text-[10px] uppercase tracking-wider text-slate-300 block font-mono">Team Limit</span>
                <span class="text-sm font-bold font-mono ${isTeamQuotaFull ? 'text-red-300' : 'text-emerald-300'}">
                  ${teamCount}/2 Picked
                </span>
              </div>
              <button id="reroll-team-btn" class="respin-btn ${this.respinsLeft <= 0 ? 'opacity-40 cursor-not-allowed' : 'hover:scale-105 active:scale-95'}" ${this.respinsLeft <= 0 ? 'disabled' : ''}>
                <span>🎲 Reroll Team</span>
                <span class="badge">${this.respinsLeft} left</span>
              </button>
            </div>
          </div>

          <!-- Quota Notice if Team Limit reached -->
          ${isTeamQuotaFull ? `
            <div class="mt-3 p-2.5 rounded-lg bg-red-950/80 border border-red-500/60 text-xs text-red-200 flex items-center justify-between">
              <span>⚠️ <strong>Team Limit Reached!</strong> You have already picked 2 players from ${squad.shortName}. Click "Reroll Team" to switch to another franchise.</span>
            </div>
          ` : ''}

          <!-- Placement Action Banner if player currently selected -->
          ${this.selectedPlayerForPlacement ? `
            <div class="mt-3 p-3 rounded-xl bg-amber-500/20 border-2 border-amber-400 text-xs text-amber-200 flex items-center justify-between animate-pulse">
              <div class="flex items-center gap-2">
                <span class="text-lg">${this.selectedPlayerForPlacement.avatar}</span>
                <span>Selected: <strong class="text-white text-sm">${this.selectedPlayerForPlacement.name}</strong> (${this.selectedPlayerForPlacement.role.toUpperCase()}). <strong>Now click any blank spot on the right to place!</strong></span>
              </div>
              <button id="cancel-selection-btn" class="px-2 py-1 rounded bg-black/40 text-[11px] text-slate-300 hover:text-white border border-white/20">Cancel</button>
            </div>
          ` : ''}

          <!-- Role Filter Tabs -->
          <div class="flex items-center justify-between flex-wrap gap-2 mt-4 pt-3 border-t border-white/15">
            <div class="flex items-center gap-1.5 flex-wrap">
              <button class="filter-tab ${this.activeFilter === 'all' ? 'active' : ''}" data-filter="all">All (${squad.players.length})</button>
              <button class="filter-tab ${this.activeFilter === 'bat' ? 'active' : ''}" data-filter="bat">🏏 Batters</button>
              <button class="filter-tab ${this.activeFilter === 'allrounder' ? 'active' : ''}" data-filter="allrounder">⚡ All-Rounders</button>
              <button class="filter-tab ${this.activeFilter === 'wk' ? 'active' : ''}" data-filter="wk">🧤 WKs</button>
              <button class="filter-tab ${this.activeFilter === 'bowler' ? 'active' : ''}" data-filter="bowler">🎯 Bowlers</button>
            </div>

            <span class="text-xs text-amber-200/90 font-medium">Select a player to place into your 11 on the right ➔</span>
          </div>
        </div>

        <!-- Squad Player Cards Grid -->
        <div class="players-grid mt-4">
          ${filteredPlayers.map(player => this.renderPlayerCard(player, squad, draftedPlayerNames, isForeignQuotaFull, isTeamQuotaFull)).join('')}
        </div>
      </div>
    `;

    this.attachEventListeners(squad);
  }

  attachEventListeners(squad) {
    // Filter tabs
    const tabs = this.container.querySelectorAll('.filter-tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        this.activeFilter = tab.dataset.filter;
        sounds.playBatCrack(false);
        this.render();
      });
    });

    // Reroll button
    const rerollBtn = this.container.querySelector('#reroll-team-btn');
    if (rerollBtn && this.respinsLeft > 0) {
      rerollBtn.addEventListener('click', () => {
        sounds.playBatCrack(false);
        this.selectedPlayerForPlacement = null;
        this.onRerollRequested();
      });
    }

    // Cancel selection button
    const cancelBtn = this.container.querySelector('#cancel-selection-btn');
    if (cancelBtn) {
      cancelBtn.addEventListener('click', () => {
        this.selectedPlayerForPlacement = null;
        if (this.onPlayerSelected) {
          this.onPlayerSelected(null);
        }
        this.render();
      });
    }

    // Player card click
    const cards = this.container.querySelectorAll('.player-card:not(.card-disabled)');
    cards.forEach(card => {
      card.addEventListener('click', () => {
        const playerId = card.dataset.id;
        const player = squad.players.find(p => p.id === playerId);
        if (player) {
          sounds.playBatCrack(false);
          const fullPlayerData = {
            ...player,
            squadName: squad.shortName,
            squadYear: squad.year,
            squadBadge: squad.badge
          };
          this.selectedPlayerForPlacement = fullPlayerData;
          this.render();
          if (this.onPlayerSelected) {
            this.onPlayerSelected(fullPlayerData);
          }
        }
      });
    });
  }

  renderPlayerCard(player, squad, draftedPlayerNames, isForeignQuotaFull, isTeamQuotaFull) {
    const playerNameKey = player.name.trim().toLowerCase();
    const isAlreadyDrafted = draftedPlayerNames.has(playerNameKey);
    const isOverseasBlocked = player.overseas && isForeignQuotaFull;
    const isTeamBlocked = isTeamQuotaFull;

    const isDisabled = isAlreadyDrafted || isOverseasBlocked || isTeamBlocked;
    const isSelected = this.selectedPlayerForPlacement && this.selectedPlayerForPlacement.id === player.id;

    // Disabled reason badge
    let blockReason = '';
    if (isAlreadyDrafted) {
      blockReason = 'Already in Playing XI';
    } else if (isOverseasBlocked) {
      blockReason = 'Foreign Limit Maxed (4/4)';
    } else if (isTeamBlocked) {
      blockReason = `Max 2 from ${squad.shortName}`;
    }

    const batClass = player.bat >= 90 ? 'stat-legendary' : player.bat >= 80 ? 'stat-elite' : 'stat-solid';
    const powClass = player.pow >= 90 ? 'stat-legendary' : player.pow >= 80 ? 'stat-elite' : 'stat-solid';
    const bwlClass = player.bwl >= 90 ? 'stat-legendary' : player.bwl >= 75 ? 'stat-elite' : 'stat-solid';

    const roleTag = player.role.toUpperCase();
    const overseasBadge = player.overseas 
      ? '<span class="badge-pill overseas" title="Overseas Player (Max 4 in Playing 11)">✈️ OS</span>' 
      : '<span class="badge-pill indian" title="Indian Domestic Player">🇮🇳 IND</span>';
    const wkBadge = player.wk ? '<span class="badge-pill wk" title="Designated Wicketkeeper">🧤 WK</span>' : '';

    return `
      <div class="player-card ${isDisabled ? 'card-disabled' : ''} ${isSelected ? 'card-selected' : ''}" data-id="${player.id}">
        <div class="card-glass-glow"></div>
        
        ${isDisabled ? `
          <div class="disabled-overlay">
            <span class="disabled-badge">🔒 ${blockReason}</span>
          </div>
        ` : ''}

        <div class="card-top">
          <div class="flex items-center gap-1.5 flex-wrap">
            ${overseasBadge}
            ${wkBadge}
            <span class="badge-pill role">${roleTag}</span>
          </div>
          <span class="player-hand text-[10px] text-slate-400 font-mono">${player.hand}</span>
        </div>

        <div class="player-visual">
          <div class="player-avatar-circle" style="background: radial-gradient(circle, ${squad.color}88, #0f172a)">
            <span class="text-3xl">${player.avatar}</span>
          </div>
          <div class="player-info">
            <h4 class="player-name">${player.name}</h4>
            <span class="player-trait">${player.trait}</span>
          </div>
        </div>

        <div class="card-stats">
          <div class="stat-badge ${batClass}">
            <span class="stat-label">BAT</span>
            <span class="stat-val">${player.bat}</span>
          </div>
          <div class="stat-badge ${powClass}">
            <span class="stat-label">POW</span>
            <span class="stat-val">${player.pow}</span>
          </div>
          <div class="stat-badge ${bwlClass}">
            <span class="stat-label">BWL</span>
            <span class="stat-val">${player.bwl}</span>
          </div>
        </div>

        <button class="draft-select-action ${isSelected ? 'selected' : ''}" ${isDisabled ? 'disabled' : ''}>
          <span>${isSelected ? '✓ Ready to Place (Click Slot on Right)' : 'Select Player'}</span>
          <span class="arrow">${isSelected ? '👉' : '➔'}</span>
        </button>
      </div>
    `;
  }
}
