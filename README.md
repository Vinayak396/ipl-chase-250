# 🏏 IPL CHASE 250 (TheChase250 / 250-0)

> An exact, fast-paced Indian Premier League adaptation of **[500-0.com](https://500-0.com)** (TheChase500).

---

## 🎯 The Scenario
The opposition has posted an untouchable total of **250/0 in 20.0 overs**!
* **Target:** 251 runs in 120 balls.
* **Required Run Rate (RRR):** 12.55 runs per over from ball one.
* **Your Mission:** Build a legendary IPL playing 11 to chase down the target while managing the 3 core threshold ratings and official IPL squad constraints!

---

## ⚡ Game Layout & New Features

### 1. Interactive 11 Blank Spots on the Right
* **Side-by-Side Cockpit:**
  * **Left Side:** Displays the full squad of a randomly chosen historical franchise (28 legendary editions).
  * **Right Side:** Features **11 Blank Spots** (#1 through #11) with position hints (*Opener, Opener, #3 Anchor, #4 Middle Order, Finishers, Bowlers*).
* **Complete Placement Freedom:**
  * Click any player from the random squad on the left.
  * Click **any empty spot (1 to 11)** on the right to drop them in!
  * Click **✕** on any placed player to remove them from that spot.
  * Use **▲ / ▼** arrows to swap positions anytime.

### 2. Strict Quotas & Constraints
* 👥 **Max 2 Players per Franchise:** You can take at most 2 players from any single team across eras (e.g. max 2 from RCB, max 2 from MI, max 2 from CSK).
* 🚫 **No Duplicate Players:** You cannot draft the same player twice (e.g., picking Virat Kohli from RCB 2016 locks all other Virat Kohli versions).
* ✈️ **Max 4 Foreign Players:** Overseas players are strictly capped at 4. Once 4 foreign stars are placed in your 11, remaining foreign players are locked.
* 🧤 **At Least 1 Wicketkeeper:** Must have at least 1 designated keeper in your 11.
* 🎳 **At Least 5 Bowlers:** Must have at least 5 bowling options to share the 20-over quota.

### 3. The 3 Signature 500-0 Aggregate Gauges
* **Batting Survival (Top 7 Batters):** Target **600+** rating across slots #1 to #7.
* **Power Acceleration (Top 7 Hitters):** Target **645+** rating across your top 7 hitters to sustain 12.55 RPO.
* **Bowling Balance (Top 4 Bowlers):** Target **350+** rating across your top 4 bowlers.

### 4. 28 Historic Franchises (300+ Players)
* Instant team rolls across all IPL eras (2008 to 2024):
  * *RCB 2016, RCB 2015, RCB 2024*
  * *MI 2020, MI 2019, MI 2013*
  * *CSK 2018, CSK 2021, CSK 2023, CSK 2010*
  * *KKR 2024, KKR 2014, KKR 2012*
  * *SRH 2024, SRH 2016, SRH 2018*
  * *RR 2022, RR 2008, RR 2024*
  * *KXIP 2014, PBKS 2024*
  * *DC 2020, DD 2012*
  * *GT 2022, GT 2023*
  * *LSG 2023*
  * *DC 2009 (Deccan Chargers), RPS 2017 (Rising Pune Supergiant)*
* **3 Team Rerolls:** Don't like a team? Click **"🎲 Reroll Team"** to immediately get another franchise.

### 5. Ball-by-Ball Simulation & Scorecard
* Watch the live 120-ball chase with realistic ball outcomes (0, 1, 2, 4, 6, Wicket).
* Procedural sound effects using Web Audio API (bat cracks, crowd roars, sirens, wickets).
* Full batting scorecard, Man of the Match, fall of wickets, over-by-over worm chart, and one-click share to clipboard!

---

## 🚀 How to Run

### Direct in Browser (No installation needed)
Double-click [index.html](file:///c:/Users/VINAYAK%20R%20VIBHUTI/OneDrive/Desktop/iplchase/index.html) in any web browser.

### Via Node.js Server
```bash
npm start
```
Then visit **`http://localhost:3000`** (or port indicated in the terminal).
