// Comprehensive Database of 29 Iconic IPL Squads (2008 - 2024)
// BAT: Survival, Anchor, Dot-ball reduction, Temperament (0-99)
// POW: Power, Boundary Clearing, Strike Rate acceleration (0-99)
// BWL: Bowling capability, Morale & Dugout balance (0-99)

export const IPL_SQUADS = [
  // --- RCB SQUADS ---
  {
    id: 'rcb-2016',
    name: 'RCB 2016',
    shortName: 'RCB',
    year: '2016',
    edition: 'Peak Carnage (973 Era)',
    badge: '👑',
    color: '#D8232A',
    secondaryColor: '#E6A15C',
    accent: '#000000',
    description: 'Kohli 973, AB 360°, Gayle storm - the most devastating batting lineup in T20 history.',
    players: [
      { id: 'vk-2016', name: 'Virat Kohli', role: 'opener', primaryPos: [1, 2, 3], bat: 99, pow: 94, bwl: 15, wk: false, overseas: false, hand: 'RHB', trait: 'Orange Cap 973 Runs (4 Tons)', avatar: '👑' },
      { id: 'cg-2016', name: 'Chris Gayle', role: 'opener', primaryPos: [1, 2], bat: 91, pow: 99, bwl: 35, wk: false, overseas: true, hand: 'LHB', trait: 'Universe Boss 175* Record', avatar: '⚡' },
      { id: 'abd-2016', name: 'AB de Villiers', role: 'middle', primaryPos: [3, 4], bat: 98, pow: 99, bwl: 12, wk: true, overseas: true, hand: 'RHB', trait: 'Mr. 360° SR 168 (687 Runs)', avatar: '🚀' },
      { id: 'klr-2016', name: 'KL Rahul', role: 'wk', primaryPos: [3, 4, 5], bat: 89, pow: 88, bwl: 10, wk: true, overseas: false, hand: 'RHB', trait: 'Pure Class 397 Runs', avatar: '🧤' },
      { id: 'watto-2016', name: 'Shane Watson', role: 'allrounder', primaryPos: [5, 6, 7], bat: 82, pow: 90, bwl: 86, wk: false, overseas: true, hand: 'RHB', trait: 'Golden All-Rounder 20 Wkts', avatar: '💥' },
      { id: 'sb-2016', name: 'Stuart Binny', role: 'allrounder', primaryPos: [6, 7], bat: 71, pow: 75, bwl: 68, wk: false, overseas: false, hand: 'RHB', trait: 'Utility Medium Seam', avatar: '🏏' },
      { id: 'baby-2016', name: 'Sachin Baby', role: 'middle', primaryPos: [5, 6], bat: 74, pow: 80, bwl: 20, wk: false, overseas: false, hand: 'LHB', trait: 'Middle Order Clutch', avatar: '🛡️' },
      { id: 'yuzi-2016', name: 'Yuzvendra Chahal', role: 'bowler', primaryPos: [9, 10, 11], bat: 18, pow: 20, bwl: 93, wk: false, overseas: false, hand: 'RHB', trait: 'Chess Master 21 Wkts', avatar: '🎯' },
      { id: 'aravind-2016', name: 'Sreenath Aravind', role: 'bowler', primaryPos: [9, 10, 11], bat: 22, pow: 25, bwl: 81, wk: false, overseas: false, hand: 'LHB', trait: 'Left-Arm Swing Specialist', avatar: '🌪️' },
      { id: 'cj-2016', name: 'Chris Jordan', role: 'bowler', primaryPos: [8, 9, 10], bat: 55, pow: 72, bwl: 82, wk: false, overseas: true, hand: 'RHB', trait: 'Death Yorker Quick', avatar: '🔥' },
      { id: 'shamsi-2016', name: 'Tabraiz Shamsi', role: 'bowler', primaryPos: [9, 10, 11], bat: 15, pow: 18, bwl: 83, wk: false, overseas: true, hand: 'LHB', trait: 'Mystery Chinaman', avatar: '🔮' }
    ]
  },
  {
    id: 'rcb-2015',
    name: 'RCB 2015',
    shortName: 'RCB',
    year: '2015',
    edition: 'The Starc & Big 3 Era',
    badge: '🚀',
    color: '#D8232A',
    secondaryColor: '#2B2B2B',
    accent: '#000000',
    description: 'Starc yorker thunder, Gayle 491 runs, AB 513 runs, and peak Chahal 23 wickets.',
    players: [
      { id: 'cg-2015', name: 'Chris Gayle', role: 'opener', primaryPos: [1, 2], bat: 90, pow: 98, bwl: 30, wk: false, overseas: true, hand: 'LHB', trait: '491 Runs with 38 Sixes', avatar: '⚡' },
      { id: 'vk-2015', name: 'Virat Kohli', role: 'opener', primaryPos: [1, 2, 3], bat: 93, pow: 89, bwl: 15, wk: false, overseas: false, hand: 'RHB', trait: 'Captain Anchor 505 Runs', avatar: '👑' },
      { id: 'abd-2015', name: 'AB de Villiers', role: 'middle', primaryPos: [3, 4], bat: 97, pow: 99, bwl: 10, wk: true, overseas: true, hand: 'RHB', trait: '133* at Wankhede (513 Runs)', avatar: '🚀' },
      { id: 'mandeep-2015', name: 'Mandeep Singh', role: 'middle', primaryPos: [4, 5], bat: 80, pow: 86, bwl: 10, wk: false, overseas: false, hand: 'RHB', trait: '54* in Eliminator SR 158', avatar: '⚔️' },
      { id: 'dk-2015', name: 'Dinesh Karthik', role: 'wk', primaryPos: [5, 6], bat: 78, pow: 82, bwl: 10, wk: true, overseas: false, hand: 'RHB', trait: 'Wicketkeeper Finisher', avatar: '🧤' },
      { id: 'wiese-2015', name: 'David Wiese', role: 'allrounder', primaryPos: [6, 7], bat: 79, pow: 88, bwl: 83, wk: false, overseas: true, hand: 'RHB', trait: '16 Wickets + SR 142 Hitting', avatar: '💥' },
      { id: 'sarfaraz-2015', name: 'Sarfaraz Khan', role: 'middle', primaryPos: [6, 7], bat: 77, pow: 90, bwl: 10, wk: false, overseas: false, hand: 'RHB', trait: 'Teen Sensation 45* off 21', avatar: '🌟' },
      { id: 'starc-2015', name: 'Mitchell Starc', role: 'bowler', primaryPos: [8, 9, 10], bat: 45, pow: 60, bwl: 98, wk: false, overseas: true, hand: 'LHB', trait: '20 Wickets Econ 6.76 Beast', avatar: '⚡' },
      { id: 'harshal-2015', name: 'Harshal Patel', role: 'bowler', primaryPos: [8, 9, 10], bat: 40, pow: 55, bwl: 85, wk: false, overseas: false, hand: 'RHB', trait: '17 Wickets Slower Balls', avatar: '🎯' },
      { id: 'chahal-2015', name: 'Yuzvendra Chahal', role: 'bowler', primaryPos: [9, 10, 11], bat: 15, pow: 18, bwl: 94, wk: false, overseas: false, hand: 'RHB', trait: 'Leading Leggie 23 Wickets', avatar: '🔮' },
      { id: 'aaron-2015', name: 'Varun Aaron', role: 'bowler', primaryPos: [9, 10, 11], bat: 20, pow: 25, bwl: 81, wk: false, overseas: false, hand: 'RHB', trait: '145+ km/h Raw Pace', avatar: '🔥' }
    ]
  },
  {
    id: 'rcb-2024',
    name: 'RCB 2024',
    shortName: 'RCB',
    year: '2024',
    edition: 'The Great Comeback (6 in a Row)',
    badge: '🦁',
    color: '#D8232A',
    secondaryColor: '#1A365D',
    accent: '#000000',
    description: '1% chance miracle qualification: Kohli 741 runs, Patidar spin rampage, DK 187 SR.',
    players: [
      { id: 'vk-2024', name: 'Virat Kohli', role: 'opener', primaryPos: [1, 2], bat: 98, pow: 94, bwl: 10, wk: false, overseas: false, hand: 'RHB', trait: 'Orange Cap 741 Runs (SR 155)', avatar: '👑' },
      { id: 'faf-2024', name: 'Faf du Plessis', role: 'opener', primaryPos: [1, 2], bat: 89, pow: 92, bwl: 10, wk: false, overseas: true, hand: 'RHB', trait: 'Captain Explosive 439 Runs', avatar: '🛡️' },
      { id: 'patidar-2024', name: 'Rajat Patidar', role: 'middle', primaryPos: [3, 4], bat: 90, pow: 98, bwl: 10, wk: false, overseas: false, hand: 'RHB', trait: 'Spin Slayer 395 Runs SR 177', avatar: '💥' },
      { id: 'jacks-2024', name: 'Will Jacks', role: 'allrounder', primaryPos: [3, 4], bat: 88, pow: 99, bwl: 68, wk: false, overseas: true, hand: 'RHB', trait: '41-Ball Century vs GT', avatar: '⚡' },
      { id: 'green-2024', name: 'Cameron Green', role: 'allrounder', primaryPos: [4, 5, 6], bat: 86, pow: 91, bwl: 83, wk: false, overseas: true, hand: 'RHB', trait: '255 Runs + 10 Wickets', avatar: '🦘' },
      { id: 'dk-2024', name: 'Dinesh Karthik', role: 'wk', primaryPos: [6, 7], bat: 89, pow: 98, bwl: 10, wk: true, overseas: false, hand: 'RHB', trait: 'Farewell Finisher 326 R (SR 187)', avatar: '🧤' },
      { id: 'swapnil-2024', name: 'Swapnil Singh', role: 'allrounder', primaryPos: [7, 8], bat: 72, pow: 80, bwl: 80, wk: false, overseas: false, hand: 'LHB', trait: 'Lucky Charm 6 Wkts Econ 7.8', avatar: '🍀' },
      { id: 'karn-2024', name: 'Karn Sharma', role: 'bowler', primaryPos: [8, 9, 10], bat: 45, pow: 75, bwl: 82, wk: false, overseas: false, hand: 'LHB', trait: '3 Sixes in 1 Over vs Starc', avatar: '🌪️' },
      { id: 'siraj-2024', name: 'Mohammed Siraj', role: 'bowler', primaryPos: [9, 10, 11], bat: 20, pow: 25, bwl: 89, wk: false, overseas: false, hand: 'RHB', trait: 'Miyan Magic 15 Wickets', avatar: '🔥' },
      { id: 'dayal-2024', name: 'Yash Dayal', role: 'bowler', primaryPos: [9, 10, 11], bat: 15, pow: 18, bwl: 88, wk: false, overseas: false, hand: 'LHB', trait: 'CSK Final Over Hero 15 Wkts', avatar: '🦸' },
      { id: 'ferguson-2024', name: 'Lockie Ferguson', role: 'bowler', primaryPos: [9, 10, 11], bat: 18, pow: 22, bwl: 84, wk: false, overseas: true, hand: 'RHB', trait: '150 km/h Enforcer 9 Wkts', avatar: '⚡' }
    ]
  },

  // --- MI SQUADS ---
  {
    id: 'mi-2020',
    name: 'MI 2020',
    shortName: 'MI',
    year: '2020',
    edition: 'The Invincibles',
    badge: '⭐',
    color: '#004BA0',
    secondaryColor: '#D1AB3E',
    accent: '#002B5C',
    description: 'The most complete T20 machine ever built: Rohit, SKY, Kishan, Hardik, Pollard, Boult, Bumrah.',
    players: [
      { id: 'rohit-2020', name: 'Rohit Sharma', role: 'opener', primaryPos: [1, 2], bat: 92, pow: 91, bwl: 20, wk: false, overseas: false, hand: 'RHB', trait: 'Hitman Final 68 (5x Champ)', avatar: '🧢' },
      { id: 'qdk-2020', name: 'Quinton de Kock', role: 'wk', primaryPos: [1, 2], bat: 90, pow: 91, bwl: 10, wk: true, overseas: true, hand: 'LHB', trait: 'Southpaw Blaster 503 Runs', avatar: '🧤' },
      { id: 'sky-2020', name: 'Suryakumar Yadav', role: 'middle', primaryPos: [3, 4], bat: 96, pow: 97, bwl: 15, wk: false, overseas: false, hand: 'RHB', trait: '360° Supla King 480 Runs', avatar: '🪄' },
      { id: 'ishan-2020', name: 'Ishan Kishan', role: 'middle', primaryPos: [3, 4, 5], bat: 91, pow: 96, bwl: 10, wk: true, overseas: false, hand: 'LHB', trait: 'Pocket Dynamo 30 Sixes (516 R)', avatar: '💣' },
      { id: 'polly-2020', name: 'Kieron Pollard', role: 'allrounder', primaryPos: [5, 6], bat: 87, pow: 99, bwl: 76, wk: false, overseas: true, hand: 'RHB', trait: 'Big Polly SR 191 Finisher', avatar: '🦍' },
      { id: 'hardik-2020', name: 'Hardik Pandya', role: 'allrounder', primaryPos: [6, 7], bat: 86, pow: 98, bwl: 80, wk: false, overseas: false, hand: 'RHB', trait: 'Kung Fu Pandya SR 178', avatar: '⚡' },
      { id: 'krunal-2020', name: 'Krunal Pandya', role: 'allrounder', primaryPos: [7, 8], bat: 75, pow: 81, bwl: 83, wk: false, overseas: false, hand: 'LHB', trait: 'Econ Master All-Rounder', avatar: '🛡️' },
      { id: 'boom-2020', name: 'Jasprit Bumrah', role: 'bowler', primaryPos: [9, 10, 11], bat: 25, pow: 30, bwl: 99, wk: false, overseas: false, hand: 'RHB', trait: 'Boom Boom 27 Wkts Econ 6.7', avatar: '🎯' },
      { id: 'boult-2020', name: 'Trent Boult', role: 'bowler', primaryPos: [9, 10, 11], bat: 22, pow: 28, bwl: 96, wk: false, overseas: true, hand: 'RHB', trait: 'Powerplay Thunder 25 Wkts', avatar: '⚡' },
      { id: 'rchahar-2020', name: 'Rahul Chahar', role: 'bowler', primaryPos: [9, 10, 11], bat: 20, pow: 26, bwl: 85, wk: false, overseas: false, hand: 'RHB', trait: 'Sharp Leg Spinner 15 Wkts', avatar: '🌪️' },
      { id: 'pattinson-2020', name: 'James Pattinson', role: 'bowler', primaryPos: [8, 9, 10], bat: 32, pow: 40, bwl: 82, wk: false, overseas: true, hand: 'RHB', trait: 'Aussie Enforcer 11 Wkts', avatar: '🔥' }
    ]
  },
  {
    id: 'mi-2019',
    name: 'MI 2019',
    shortName: 'MI',
    year: '2019',
    edition: 'The 1-Run Miracle (4th Title)',
    badge: '🏆',
    color: '#004BA0',
    secondaryColor: '#D1AB3E',
    accent: '#002B5C',
    description: 'Malinga 1-run final defense, Hardik 402 runs SR 191, Bumrah MoM final.',
    players: [
      { id: 'rohit-2019', name: 'Rohit Sharma', role: 'opener', primaryPos: [1, 2], bat: 90, pow: 89, bwl: 15, wk: false, overseas: false, hand: 'RHB', trait: 'Hitman Captain 405 Runs', avatar: '🧢' },
      { id: 'qdk-2019', name: 'Quinton de Kock', role: 'wk', primaryPos: [1, 2], bat: 92, pow: 92, bwl: 10, wk: true, overseas: true, hand: 'LHB', trait: 'Top Scorer 529 Runs', avatar: '🧤' },
      { id: 'sky-2019', name: 'Suryakumar Yadav', role: 'middle', primaryPos: [3, 4], bat: 91, pow: 90, bwl: 10, wk: false, overseas: false, hand: 'RHB', trait: 'Qualifier 1 Hero 71* (424 R)', avatar: '🪄' },
      { id: 'ishan-2019', name: 'Ishan Kishan', role: 'middle', primaryPos: [4, 5], bat: 80, pow: 87, bwl: 10, wk: true, overseas: false, hand: 'LHB', trait: 'Aggressive Left-Hander', avatar: '💣' },
      { id: 'polly-2019', name: 'Kieron Pollard', role: 'allrounder', primaryPos: [5, 6], bat: 85, pow: 96, bwl: 65, wk: false, overseas: true, hand: 'RHB', trait: 'Final Hero 41* off 25', avatar: '🦍' },
      { id: 'hardik-2019', name: 'Hardik Pandya', role: 'allrounder', primaryPos: [6, 7], bat: 89, pow: 99, bwl: 84, wk: false, overseas: false, hand: 'RHB', trait: 'Superstar 402 R (SR 191) + 14 Wkts', avatar: '⚡' },
      { id: 'krunal-2019', name: 'Krunal Pandya', role: 'allrounder', primaryPos: [7, 8], bat: 77, pow: 82, bwl: 83, wk: false, overseas: false, hand: 'LHB', trait: 'Crucial 12 Wickets Econ 7.2', avatar: '🛡️' },
      { id: 'boom-2019', name: 'Jasprit Bumrah', role: 'bowler', primaryPos: [9, 10, 11], bat: 22, pow: 25, bwl: 99, wk: false, overseas: false, hand: 'RHB', trait: 'Final MoM 2/14 (19 Wkts)', avatar: '🎯' },
      { id: 'malinga-2019', name: 'Lasith Malinga', role: 'bowler', primaryPos: [9, 10, 11], bat: 20, pow: 25, bwl: 93, wk: false, overseas: true, hand: 'RHB', trait: 'Last Ball Slower Yorker (16 Wkts)', avatar: '🦁' },
      { id: 'rchahar-2019', name: 'Rahul Chahar', role: 'bowler', primaryPos: [9, 10, 11], bat: 18, pow: 22, bwl: 87, wk: false, overseas: false, hand: 'RHB', trait: '13 Wickets Econ 6.55', avatar: '🌪️' },
      { id: 'mccl-2019', name: 'Mitchell McClenaghan', role: 'bowler', primaryPos: [8, 9, 10], bat: 28, pow: 45, bwl: 83, wk: false, overseas: true, hand: 'LHB', trait: 'Aggressive Kiwi Enforcer', avatar: '🔥' }
    ]
  },
  {
    id: 'mi-2013',
    name: 'MI 2013',
    shortName: 'MI',
    year: '2013',
    edition: 'The Maiden Title (Eden Gardens)',
    badge: '👑',
    color: '#004BA0',
    secondaryColor: '#D1AB3E',
    accent: '#002B5C',
    description: 'Rohit takes captaincy, Pollard 60* in final, Johnson 24 wickets, Malinga.',
    players: [
      { id: 'rohit-2013', name: 'Rohit Sharma', role: 'opener', primaryPos: [1, 2, 3], bat: 91, pow: 90, bwl: 20, wk: false, overseas: false, hand: 'RHB', trait: 'First Title Skipper 538 Runs', avatar: '🧢' },
      { id: 'drs-2013', name: 'Dwayne Smith', role: 'opener', primaryPos: [1, 2], bat: 86, pow: 93, bwl: 68, wk: false, overseas: true, hand: 'RHB', trait: 'Power Opener 418 Runs', avatar: '🌴' },
      { id: 'dk-2013', name: 'Dinesh Karthik', role: 'wk', primaryPos: [3, 4], bat: 89, pow: 90, bwl: 10, wk: true, overseas: false, hand: 'RHB', trait: '510 Runs Golden Touch', avatar: '🧤' },
      { id: 'rayudu-2013', name: 'Ambati Rayudu', role: 'middle', primaryPos: [4, 5], bat: 83, pow: 85, bwl: 10, wk: false, overseas: false, hand: 'RHB', trait: 'Middle Order Rock 265 Runs', avatar: '⚔️' },
      { id: 'polly-2013', name: 'Kieron Pollard', role: 'allrounder', primaryPos: [5, 6], bat: 88, pow: 98, bwl: 78, wk: false, overseas: true, hand: 'RHB', trait: 'Final MoM 60* off 32 (420 R)', avatar: '🦍' },
      { id: 'bhajji-2013', name: 'Harbhajan Singh', role: 'bowler', primaryPos: [7, 8, 9], bat: 65, pow: 80, bwl: 92, wk: false, overseas: false, hand: 'RHB', trait: '24 Wickets Econ 6.51', avatar: '🌪️' },
      { id: 'johnson-2013', name: 'Mitchell Johnson', role: 'bowler', primaryPos: [8, 9, 10], bat: 55, pow: 75, bwl: 95, wk: false, overseas: true, hand: 'LHB', trait: 'Ashes Thunderbolt 24 Wickets', avatar: '⚡' },
      { id: 'malinga-2013', name: 'Lasith Malinga', role: 'bowler', primaryPos: [9, 10, 11], bat: 20, pow: 25, bwl: 97, wk: false, overseas: true, hand: 'RHB', trait: 'Slinga Legend 20 Wickets', avatar: '🦁' },
      { id: 'ojha-2013', name: 'Pragyan Ojha', role: 'bowler', primaryPos: [9, 10, 11], bat: 15, pow: 18, bwl: 87, wk: false, overseas: false, hand: 'LHB', trait: 'Left-Arm Spin 16 Wickets', avatar: '🎯' },
      { id: 'dhawan-2013', name: 'Rishi Dhawan', role: 'allrounder', primaryPos: [7, 8], bat: 65, pow: 70, bwl: 75, wk: false, overseas: false, hand: 'RHB', trait: 'Seam All-Rounder', avatar: '🏏' },
      { id: 'boom-2013', name: 'Jasprit Bumrah', role: 'bowler', primaryPos: [9, 10, 11], bat: 18, pow: 22, bwl: 86, wk: false, overseas: false, hand: 'RHB', trait: '19-Year Old Debut 3/32 vs RCB', avatar: '🌟' }
    ]
  },

  // --- CSK SQUADS ---
  {
    id: 'csk-2018',
    name: 'CSK 2018',
    shortName: 'CSK',
    year: '2018',
    edition: 'The Comeback Kings',
    badge: '🦁',
    color: '#F9CD05',
    secondaryColor: '#124191',
    accent: '#F39C12',
    description: "Dhoni's Dad's Army return from 2-year exile and conquer the IPL with pure nerves of steel.",
    players: [
      { id: 'msd-2018', name: 'MS Dhoni', role: 'wk', primaryPos: [5, 6, 7], bat: 95, pow: 96, bwl: 10, wk: true, overseas: false, hand: 'RHB', trait: 'Thala Finisher Avg 75 (455 Runs)', avatar: '🚁' },
      { id: 'watto-2018', name: 'Shane Watson', role: 'opener', primaryPos: [1, 2], bat: 89, pow: 96, bwl: 78, wk: false, overseas: true, hand: 'RHB', trait: 'Final Century 117* (555 Runs)', avatar: '💥' },
      { id: 'rayudu-2018', name: 'Ambati Rayudu', role: 'opener', primaryPos: [1, 2, 3], bat: 93, pow: 92, bwl: 10, wk: false, overseas: false, hand: 'RHB', trait: 'Golden Season 602 Runs', avatar: '⚔️' },
      { id: 'raina-2018', name: 'Suresh Raina', role: 'middle', primaryPos: [3, 4], bat: 90, pow: 90, bwl: 50, wk: false, overseas: false, hand: 'LHB', trait: 'Chinna Thala Mr. IPL 445 Runs', avatar: '👑' },
      { id: 'bravo-2018', name: 'Dwayne Bravo', role: 'allrounder', primaryPos: [6, 7, 8], bat: 79, pow: 89, bwl: 89, wk: false, overseas: true, hand: 'RHB', trait: 'Champion 68(30) Opening Heist', avatar: '🕺' },
      { id: 'jaddu-2018', name: 'Ravindra Jadeja', role: 'allrounder', primaryPos: [6, 7], bat: 80, pow: 85, bwl: 88, wk: false, overseas: false, hand: 'LHB', trait: 'Sir Jadeja Gun Fielder & All-Rounder', avatar: '🗡️' },
      { id: 'deepak-2018', name: 'Deepak Chahar', role: 'bowler', primaryPos: [8, 9, 10], bat: 50, pow: 64, bwl: 87, wk: false, overseas: false, hand: 'RHB', trait: 'Powerplay Swing Maestro', avatar: '🎯' },
      { id: 'shardul-2018', name: 'Shardul Thakur', role: 'bowler', primaryPos: [8, 9, 10], bat: 62, pow: 76, bwl: 85, wk: false, overseas: false, hand: 'RHB', trait: 'Lord Shardul 16 Wickets', avatar: '🙏' },
      { id: 'faf-2018', name: 'Faf du Plessis', role: 'opener', primaryPos: [1, 2, 3], bat: 88, pow: 86, bwl: 15, wk: false, overseas: true, hand: 'RHB', trait: 'Playoff Hero 67* vs SRH', avatar: '🛡️' },
      { id: 'tahir-2018', name: 'Imran Tahir', role: 'bowler', primaryPos: [10, 11], bat: 12, pow: 18, bwl: 89, wk: false, overseas: true, hand: 'RHB', trait: 'Marathon Celebration Leggie', avatar: '🏃' },
      { id: 'ngidi-2018', name: 'Lungi Ngidi', role: 'bowler', primaryPos: [9, 10, 11], bat: 16, pow: 20, bwl: 86, wk: false, overseas: true, hand: 'RHB', trait: 'Protea Express Pace', avatar: '⚡' }
    ]
  },
  {
    id: 'csk-2021',
    name: 'CSK 2021',
    shortName: 'CSK',
    year: '2021',
    edition: 'The 4th Trophy (Ruturaj & Faf)',
    badge: '🦁',
    color: '#F9CD05',
    secondaryColor: '#124191',
    accent: '#F39C12',
    description: 'Gaikwad Orange Cap 635, Faf 633, Moeen Ali intent, Shardul golden arm 21 wickets.',
    players: [
      { id: 'rutu-2021', name: 'Ruturaj Gaikwad', role: 'opener', primaryPos: [1, 2], bat: 95, pow: 91, bwl: 10, wk: false, overseas: false, hand: 'RHB', trait: 'Orange Cap 635 Runs (Ton vs RR)', avatar: '👑' },
      { id: 'faf-2021', name: 'Faf du Plessis', role: 'opener', primaryPos: [1, 2], bat: 94, pow: 92, bwl: 10, wk: false, overseas: true, hand: 'RHB', trait: 'Final MoM 86 (633 Runs)', avatar: '🛡️' },
      { id: 'moeen-2021', name: 'Moeen Ali', role: 'allrounder', primaryPos: [3], bat: 86, pow: 92, bwl: 80, wk: false, overseas: true, hand: 'LHB', trait: 'Aggressive #3 357 Runs SR 137', avatar: '🧔' },
      { id: 'uthappa-2021', name: 'Robin Uthappa', role: 'middle', primaryPos: [3, 4], bat: 84, pow: 89, bwl: 10, wk: true, overseas: false, hand: 'RHB', trait: 'Qualifier 1 Hero 63(44)', avatar: '⚡' },
      { id: 'rayudu-2021', name: 'Ambati Rayudu', role: 'middle', primaryPos: [4, 5], bat: 84, pow: 88, bwl: 10, wk: false, overseas: false, hand: 'RHB', trait: '72* off 27 vs MI', avatar: '⚔️' },
      { id: 'jaddu-2021', name: 'Ravindra Jadeja', role: 'allrounder', primaryPos: [6, 7], bat: 86, pow: 92, bwl: 89, wk: false, overseas: false, hand: 'LHB', trait: '37-Run Over vs Harshal (227 R)', avatar: '🗡️' },
      { id: 'msd-2021', name: 'MS Dhoni', role: 'wk', primaryPos: [6, 7], bat: 82, pow: 88, bwl: 10, wk: true, overseas: false, hand: 'RHB', trait: 'Thala Finish vs DC in Q1', avatar: '🚁' },
      { id: 'bravo-2021', name: 'Dwayne Bravo', role: 'allrounder', primaryPos: [7, 8], bat: 75, pow: 85, bwl: 88, wk: false, overseas: true, hand: 'RHB', trait: '14 Wickets Econ 7.8', avatar: '🕺' },
      { id: 'shardul-2021', name: 'Shardul Thakur', role: 'bowler', primaryPos: [8, 9, 10], bat: 60, pow: 75, bwl: 91, wk: false, overseas: false, hand: 'RHB', trait: 'Leading Wicket-Taker 21 Wkts', avatar: '🙏' },
      { id: 'chahar-2021', name: 'Deepak Chahar', role: 'bowler', primaryPos: [9, 10, 11], bat: 45, pow: 55, bwl: 88, wk: false, overseas: false, hand: 'RHB', trait: 'Powerplay Destroyer 14 Wkts', avatar: '🎯' },
      { id: 'hazlewood-2021', name: 'Josh Hazlewood', role: 'bowler', primaryPos: [9, 10, 11], bat: 18, pow: 22, bwl: 92, wk: false, overseas: true, hand: 'RHB', trait: 'Aussie Metronome 11 Wkts', avatar: '🔥' }
    ]
  },
  {
    id: 'csk-2023',
    name: 'CSK 2023',
    shortName: 'CSK',
    year: '2023',
    edition: 'The 5th Star',
    badge: '⭐',
    color: '#F9CD05',
    secondaryColor: '#0081E9',
    accent: '#D4AC0D',
    description: 'Jadeja 10 off 2 balls in rain thriller, Rahane 2.0 explosive resurgence, Dube sixes, Pathirana sling.',
    players: [
      { id: 'conway-2023', name: 'Devon Conway', role: 'opener', primaryPos: [1, 2], bat: 94, pow: 89, bwl: 10, wk: true, overseas: true, hand: 'LHB', trait: 'Final MoM 672 Runs Avg 51', avatar: '🥝' },
      { id: 'rutu-2023', name: 'Ruturaj Gaikwad', role: 'opener', primaryPos: [1, 2], bat: 93, pow: 90, bwl: 10, wk: false, overseas: false, hand: 'RHB', trait: 'Classy 590 Runs 30 Sixes', avatar: '👑' },
      { id: 'rahane-2023', name: 'Ajinkya Rahane', role: 'middle', primaryPos: [3], bat: 89, pow: 94, bwl: 10, wk: false, overseas: false, hand: 'RHB', trait: 'Rahane 2.0 SR 172 (326 Runs)', avatar: '🚀' },
      { id: 'dube-2023', name: 'Shivam Dube', role: 'middle', primaryPos: [4, 5], bat: 88, pow: 98, bwl: 35, wk: false, overseas: false, hand: 'LHB', trait: 'Spin Slayer 35 Sixes (418 Runs)', avatar: '💥' },
      { id: 'rayudu-2023', name: 'Ambati Rayudu', role: 'middle', primaryPos: [5, 6], bat: 82, pow: 90, bwl: 10, wk: false, overseas: false, hand: 'RHB', trait: 'Farewell Hero 19(8) in Final', avatar: '⚔️' },
      { id: 'msd-2023', name: 'MS Dhoni', role: 'wk', primaryPos: [7, 8], bat: 88, pow: 96, bwl: 10, wk: true, overseas: false, hand: 'RHB', trait: 'Thala Cameos SR 182 (Captain)', avatar: '🚁' },
      { id: 'jaddu-2023', name: 'Ravindra Jadeja', role: 'allrounder', primaryPos: [6, 7], bat: 82, pow: 88, bwl: 92, wk: false, overseas: false, hand: 'LHB', trait: '10 off 2 in Final! 16 Wkts', avatar: '🗡️' },
      { id: 'moeen-2023', name: 'Moeen Ali', role: 'allrounder', primaryPos: [4, 5, 6], bat: 80, pow: 86, bwl: 83, wk: false, overseas: true, hand: 'LHB', trait: 'Off-Spin & Free Flow Hitter', avatar: '🧔' },
      { id: 'pathirana-2023', name: 'Matheesha Pathirana', role: 'bowler', primaryPos: [9, 10, 11], bat: 12, pow: 15, bwl: 95, wk: false, overseas: true, hand: 'RHB', trait: 'Baby Malinga 19 Wkts Death King', avatar: '🎯' },
      { id: 'tushar-2023', name: 'Tushar Deshpande', role: 'bowler', primaryPos: [8, 9, 10], bat: 20, pow: 25, bwl: 86, wk: false, overseas: false, hand: 'RHB', trait: 'Leading Wicket-Taker 21 Wkts', avatar: '🔥' },
      { id: 'theekshana-2023', name: 'Maheesh Theekshana', role: 'bowler', primaryPos: [9, 10, 11], bat: 14, pow: 18, bwl: 86, wk: false, overseas: true, hand: 'RHB', trait: 'Carrom Ball Specialist 11 Wkts', avatar: '🔮' }
    ]
  },
  {
    id: 'csk-2010',
    name: 'CSK 2010',
    shortName: 'CSK',
    year: '2010',
    edition: 'The First Dynasty',
    badge: '👑',
    color: '#F9CD05',
    secondaryColor: '#124191',
    accent: '#B7950B',
    description: 'Dhoni Dharamshala roar, Raina 520 runs, Ashwin powerplay carrom ball, Bollinger.',
    players: [
      { id: 'hayden-2010', name: 'Matthew Hayden', role: 'opener', primaryPos: [1, 2], bat: 88, pow: 94, bwl: 10, wk: false, overseas: true, hand: 'LHB', trait: 'Mongoose Bat Blaster', avatar: '🦘' },
      { id: 'vijay-2010', name: 'Murali Vijay', role: 'opener', primaryPos: [1, 2], bat: 90, pow: 91, bwl: 10, wk: false, overseas: false, hand: 'RHB', trait: '127 vs RR (458 Runs)', avatar: '⚡' },
      { id: 'raina-2010', name: 'Suresh Raina', role: 'middle', primaryPos: [3, 4], bat: 93, pow: 92, bwl: 60, wk: false, overseas: false, hand: 'LHB', trait: 'Final MoM 57* (520 Runs)', avatar: '👑' },
      { id: 'msd-2010', name: 'MS Dhoni', role: 'wk', primaryPos: [4, 5], bat: 92, pow: 94, bwl: 10, wk: true, overseas: false, hand: 'RHB', trait: 'Dharamshala 54*(29) Heist', avatar: '🚁' },
      { id: 'badri-2010', name: 'Subramaniam Badrinath', role: 'middle', primaryPos: [4, 5], bat: 84, pow: 78, bwl: 10, wk: false, overseas: false, hand: 'RHB', trait: 'Crisis Man 356 Runs', avatar: '🛡️' },
      { id: 'morkel-2010', name: 'Albie Morkel', role: 'allrounder', primaryPos: [6, 7], bat: 80, pow: 94, bwl: 86, wk: false, overseas: true, hand: 'LHB', trait: 'Protea Finisher & Seam', avatar: '💥' },
      { id: 'ashwin-2010', name: 'Ravichandran Ashwin', role: 'bowler', primaryPos: [8, 9], bat: 65, pow: 70, bwl: 92, wk: false, overseas: false, hand: 'RHB', trait: 'Powerplay Carrom Ball 13 Wkts', avatar: '🧠' },
      { id: 'bollinger-2010', name: 'Doug Bollinger', role: 'bowler', primaryPos: [9, 10, 11], bat: 18, pow: 22, bwl: 94, wk: false, overseas: true, hand: 'LHB', trait: 'Turnaround Factor 12 Wkts (Econ 6.1)', avatar: '⚡' },
      { id: 'murali-2010', name: 'Muttiah Muralitharan', role: 'bowler', primaryPos: [10, 11], bat: 15, pow: 18, bwl: 95, wk: false, overseas: true, hand: 'RHB', trait: 'Spin Wizard 15 Wickets', avatar: '🔮' },
      { id: 'jakati-2010', name: 'Shadab Jakati', role: 'bowler', primaryPos: [9, 10, 11], bat: 16, pow: 20, bwl: 84, wk: false, overseas: false, hand: 'LHB', trait: 'Left-Arm Spin 13 Wkts', avatar: '🌪️' },
      { id: 'joginder-2010', name: 'Joginder Sharma', role: 'allrounder', primaryPos: [7, 8], bat: 60, pow: 70, bwl: 76, wk: false, overseas: false, hand: 'RHB', trait: 'Domestic Medium Pace', avatar: '🏏' }
    ]
  },

  // --- KKR SQUADS ---
  {
    id: 'kkr-2024',
    name: 'KKR 2024',
    shortName: 'KKR',
    year: '2024',
    edition: 'The Champion Carnage',
    badge: '⚔️',
    color: '#3A225D',
    secondaryColor: '#B3995D',
    accent: '#26143F',
    description: 'Gambhir mentee powerhouse: Narine opener blitz, Russell muscle, Starc in finals, Strikers everywhere.',
    players: [
      { id: 'narine-2024', name: 'Sunil Narine', role: 'allrounder', primaryPos: [1, 2], bat: 89, pow: 98, bwl: 96, wk: false, overseas: true, hand: 'LHB', trait: 'MVP 488 Runs (SR 180) + 17 Wkts', avatar: '🎩' },
      { id: 'salt-2024', name: 'Phil Salt', role: 'wk', primaryPos: [1, 2], bat: 91, pow: 97, bwl: 10, wk: true, overseas: true, hand: 'RHB', trait: 'Ultra Aggressive SR 182 (435 R)', avatar: '⚡' },
      { id: 'shreyas-2024', name: 'Shreyas Iyer', role: 'middle', primaryPos: [3, 4], bat: 89, pow: 87, bwl: 10, wk: false, overseas: false, hand: 'RHB', trait: 'Title Winning Captain 351 R', avatar: '👑' },
      { id: 'venky-2024', name: 'Venkatesh Iyer', role: 'middle', primaryPos: [3, 4], bat: 87, pow: 91, bwl: 60, wk: false, overseas: false, hand: 'LHB', trait: 'Final Hero 52* (SR 158)', avatar: '💥' },
      { id: 'russell-2024', name: 'Andre Russell', role: 'allrounder', primaryPos: [5, 6, 7], bat: 89, pow: 99, bwl: 90, wk: false, overseas: true, hand: 'RHB', trait: 'Dre Russ 222 R (SR 185) + 19 Wkts', avatar: '🦍' },
      { id: 'rinku-2024', name: 'Rinku Singh', role: 'middle', primaryPos: [5, 6, 7], bat: 92, pow: 96, bwl: 15, wk: false, overseas: false, hand: 'LHB', trait: 'God of Finishes Ice Veins', avatar: '🧊' },
      { id: 'ramandeep-2024', name: 'Ramandeep Singh', role: 'allrounder', primaryPos: [7, 8], bat: 76, pow: 94, bwl: 55, wk: false, overseas: false, hand: 'RHB', trait: 'Death Over Cameo SR 201', avatar: '🚀' },
      { id: 'starc-2024', name: 'Mitchell Starc', role: 'bowler', primaryPos: [8, 9, 10], bat: 45, pow: 62, bwl: 95, wk: false, overseas: true, hand: 'LHB', trait: 'Big Game Monster Final MoM', avatar: '⚡' },
      { id: 'varun-2024', name: 'Varun Chakaravarthy', role: 'bowler', primaryPos: [9, 10, 11], bat: 12, pow: 15, bwl: 94, wk: false, overseas: false, hand: 'RHB', trait: 'Mystery Web 21 Wickets', avatar: '🕸️' },
      { id: 'harshit-2024', name: 'Harshit Rana', role: 'bowler', primaryPos: [8, 9, 10], bat: 26, pow: 35, bwl: 88, wk: false, overseas: false, hand: 'RHB', trait: 'Flying Kiss Enforcer 19 Wkts', avatar: '🔥' },
      { id: 'vaibhav-2024', name: 'Vaibhav Arora', role: 'bowler', primaryPos: [9, 10, 11], bat: 18, pow: 22, bwl: 83, wk: false, overseas: false, hand: 'RHB', trait: 'Powerplay Inswinger 11 Wkts', avatar: '🌪️' }
    ]
  },
  {
    id: 'kkr-2014',
    name: 'KKR 2014',
    shortName: 'KKR',
    year: '2014',
    edition: 'The 9 in a Row Title',
    badge: '⚔️',
    color: '#3A225D',
    secondaryColor: '#B3995D',
    accent: '#26143F',
    description: 'Robin Uthappa Orange Cap 660 runs, Manish Pandey 94 in final, Narine mystery 21 wickets.',
    players: [
      { id: 'uthappa-2014', name: 'Robin Uthappa', role: 'opener', primaryPos: [1, 2], bat: 95, pow: 91, bwl: 10, wk: true, overseas: false, hand: 'RHB', trait: 'Orange Cap 660 Runs Record', avatar: '👑' },
      { id: 'gambhir-2014', name: 'Gautam Gambhir', role: 'opener', primaryPos: [1, 2], bat: 91, pow: 86, bwl: 10, wk: false, overseas: false, hand: 'LHB', trait: '2x Champion Captain 501 Runs', avatar: '🧢' },
      { id: 'manish-2014', name: 'Manish Pandey', role: 'middle', primaryPos: [3, 4], bat: 90, pow: 92, bwl: 10, wk: false, overseas: false, hand: 'RHB', trait: 'Final MoM 94 off 50 (401 R)', avatar: '💥' },
      { id: 'shakib-2014', name: 'Shakib Al Hasan', role: 'allrounder', primaryPos: [4, 5], bat: 85, pow: 88, bwl: 90, wk: false, overseas: true, hand: 'LHB', trait: '227 Runs + 11 Wkts (Econ 6.6)', avatar: '🇧🇩' },
      { id: 'yusuf-2014', name: 'Yusuf Pathan', role: 'allrounder', primaryPos: [5, 6], bat: 84, pow: 98, bwl: 65, wk: false, overseas: false, hand: 'RHB', trait: 'Fastest 50 in 15 Balls vs SRH', avatar: '💣' },
      { id: 'sky-2014', name: 'Suryakumar Yadav', role: 'middle', primaryPos: [6, 7], bat: 78, pow: 88, bwl: 10, wk: false, overseas: false, hand: 'RHB', trait: 'Young Finisher SR 140', avatar: '🪄' },
      { id: 'narine-2014', name: 'Sunil Narine', role: 'bowler', primaryPos: [8, 9, 10], bat: 55, pow: 75, bwl: 98, wk: false, overseas: true, hand: 'LHB', trait: 'Mystery Spin 21 Wkts Econ 6.35', avatar: '🎩' },
      { id: 'piyush-2014', name: 'Piyush Chawla', role: 'bowler', primaryPos: [8, 9, 10], bat: 60, pow: 72, bwl: 87, wk: false, overseas: false, hand: 'LHB', trait: 'Final Winning Four + 14 Wkts', avatar: '🎯' },
      { id: 'morkel-2014', name: 'Morne Morkel', role: 'bowler', primaryPos: [9, 10, 11], bat: 22, pow: 30, bwl: 89, wk: false, overseas: true, hand: 'RHB', trait: 'Steep Bounce 12 Wickets', avatar: '⚡' },
      { id: 'umesh-2014', name: 'Umesh Yadav', role: 'bowler', primaryPos: [9, 10, 11], bat: 20, pow: 25, bwl: 86, wk: false, overseas: false, hand: 'RHB', trait: 'Domestic Outswing 11 Wkts', avatar: '🔥' },
      { id: 'vinay-2014', name: 'Vinay Kumar', role: 'bowler', primaryPos: [8, 9, 10], bat: 25, pow: 30, bwl: 81, wk: false, overseas: false, hand: 'RHB', trait: 'Utility Seamer', avatar: '🌪️' }
    ]
  },
  {
    id: 'kkr-2012',
    name: 'KKR 2012',
    shortName: 'KKR',
    year: '2012',
    edition: 'The First Glory (Korbo Lorbo)',
    badge: '🏆',
    color: '#3A225D',
    secondaryColor: '#B3995D',
    accent: '#26143F',
    description: 'Gambhir 590 runs, Bisla 89 in final, Kallis 409 runs, Narine Player of Tournament.',
    players: [
      { id: 'gambhir-2012', name: 'Gautam Gambhir', role: 'opener', primaryPos: [1, 2], bat: 94, pow: 88, bwl: 10, wk: false, overseas: false, hand: 'LHB', trait: 'Skipper Passion 590 Runs', avatar: '🧢' },
      { id: 'bisla-2012', name: 'Manvinder Bisla', role: 'wk', primaryPos: [1, 2], bat: 85, pow: 93, bwl: 10, wk: true, overseas: false, hand: 'RHB', trait: 'Final Hero 89 off 48 balls', avatar: '🧤' },
      { id: 'kallis-2012', name: 'Jacques Kallis', role: 'allrounder', primaryPos: [3, 4], bat: 92, pow: 86, bwl: 90, wk: false, overseas: true, hand: 'RHB', trait: 'Greatest All-Rounder 409 R + 15 Wkts', avatar: '🇿🇦' },
      { id: 'tiwary-2012', name: 'Manoj Tiwary', role: 'middle', primaryPos: [4, 5], bat: 83, pow: 82, bwl: 20, wk: false, overseas: false, hand: 'RHB', trait: 'Final Winning Boundaries (260 R)', avatar: '⚔️' },
      { id: 'yusuf-2012', name: 'Yusuf Pathan', role: 'allrounder', primaryPos: [5, 6], bat: 80, pow: 95, bwl: 68, wk: false, overseas: false, hand: 'RHB', trait: 'Destructive Finisher', avatar: '💣' },
      { id: 'mccullum-2012', name: 'Brendon McCullum', role: 'opener', primaryPos: [1, 2], bat: 86, pow: 94, bwl: 10, wk: true, overseas: true, hand: 'RHB', trait: 'Baz Powerplay Striker 289 Runs', avatar: '🥝' },
      { id: 'narine-2012', name: 'Sunil Narine', role: 'bowler', primaryPos: [8, 9, 10], bat: 40, pow: 60, bwl: 99, wk: false, overseas: true, hand: 'LHB', trait: 'Player of Tournament 24 Wkts Econ 5.47', avatar: '🎩' },
      { id: 'balaji-2012', name: 'Laxmipathy Balaji', role: 'bowler', primaryPos: [9, 10, 11], bat: 18, pow: 22, bwl: 88, wk: false, overseas: false, hand: 'RHB', trait: 'Smiling Seamer 11 Wkts Econ 5.4', avatar: '😊' },
      { id: 'lee-2012', name: 'Brett Lee', role: 'bowler', primaryPos: [9, 10, 11], bat: 45, pow: 65, bwl: 90, wk: false, overseas: true, hand: 'RHB', trait: 'Bing 150 km/h Thunder', avatar: '⚡' },
      { id: 'bhatia-2012', name: 'Rajat Bhatia', role: 'allrounder', primaryPos: [7, 8], bat: 72, pow: 74, bwl: 85, wk: false, overseas: false, hand: 'RHB', trait: '13 Wickets Slower Ball Master', avatar: '🎯' },
      { id: 'shakib-2012', name: 'Shakib Al Hasan', role: 'allrounder', primaryPos: [5, 6], bat: 83, pow: 86, bwl: 88, wk: false, overseas: true, hand: 'LHB', trait: '12 Wickets Econ 6.5', avatar: '🇧🇩' }
    ]
  },

  // --- SRH SQUADS ---
  {
    id: 'srh-2024',
    name: 'SRH 2024',
    shortName: 'SRH',
    year: '2024',
    edition: 'The 287 Machine',
    badge: '🦅',
    color: '#F26522',
    secondaryColor: '#000000',
    accent: '#D04E17',
    description: 'Broke the all-time IPL record score twice: 277 & 287! Travis Head & Klaasen nuclear hitting.',
    players: [
      { id: 'head-2024', name: 'Travis Head', role: 'opener', primaryPos: [1, 2], bat: 94, pow: 99, bwl: 45, wk: false, overseas: true, hand: 'LHB', trait: 'Head Havoc 567 Runs SR 191', avatar: '🪓' },
      { id: 'abhishek-2024', name: 'Abhishek Sharma', role: 'opener', primaryPos: [1, 2], bat: 91, pow: 99, bwl: 60, wk: false, overseas: false, hand: 'LHB', trait: '42 Sixes! 484 Runs SR 204', avatar: '⚡' },
      { id: 'klaasen-2024', name: 'Heinrich Klaasen', role: 'wk', primaryPos: [4, 5], bat: 96, pow: 99, bwl: 10, wk: true, overseas: true, hand: 'RHB', trait: 'Spin Annihilator 479 Runs SR 171', avatar: '💥' },
      { id: 'nkr-2024', name: 'Nitish Kumar Reddy', role: 'allrounder', primaryPos: [4, 5, 6], bat: 85, pow: 90, bwl: 76, wk: false, overseas: false, hand: 'RHB', trait: 'Emerging Player 303 R + 3 Wkts', avatar: '🌟' },
      { id: 'samad-2024', name: 'Abdul Samad', role: 'middle', primaryPos: [6, 7], bat: 77, pow: 95, bwl: 30, wk: false, overseas: false, hand: 'RHB', trait: 'Pure Power Hitter SR 168', avatar: '💣' },
      { id: 'shahbaz-2024', name: 'Shahbaz Ahmed', role: 'allrounder', primaryPos: [6, 7, 8], bat: 75, pow: 80, bwl: 80, wk: false, overseas: false, hand: 'LHB', trait: 'Qualifier 2 Hero 3/23', avatar: '🛡️' },
      { id: 'cummins-2024', name: 'Pat Cummins', role: 'bowler', primaryPos: [7, 8, 9], bat: 66, pow: 85, bwl: 92, wk: false, overseas: true, hand: 'RHB', trait: 'Silence Master 18 Wkts', avatar: '🤫' },
      { id: 'bhuvi-2024', name: 'Bhuvneshwar Kumar', role: 'bowler', primaryPos: [9, 10, 11], bat: 38, pow: 45, bwl: 90, wk: false, overseas: false, hand: 'RHB', trait: 'Swing Legend 11 Wkts Econ 7.9', avatar: '🎯' },
      { id: 'nattu-2024', name: 'T Natarajan', role: 'bowler', primaryPos: [9, 10, 11], bat: 15, pow: 20, bwl: 90, wk: false, overseas: false, hand: 'LHB', trait: 'Yorker King 19 Wkts', avatar: '🚀' },
      { id: 'markram-2024', name: 'Aiden Markram', role: 'middle', primaryPos: [3, 4], bat: 84, pow: 84, bwl: 55, wk: false, overseas: true, hand: 'RHB', trait: 'Solid South African Anchor', avatar: '🏰' },
      { id: 'markande-2024', name: 'Mayank Markande', role: 'bowler', primaryPos: [9, 10, 11], bat: 18, pow: 22, bwl: 80, wk: false, overseas: false, hand: 'RHB', trait: 'Googly Specialist', avatar: '🔮' }
    ]
  },
  {
    id: 'srh-2016',
    name: 'SRH 2016',
    shortName: 'SRH',
    year: '2016',
    edition: 'The Warner Charge (Champions)',
    badge: '🏆',
    color: '#F26522',
    secondaryColor: '#000000',
    accent: '#D04E17',
    description: 'Warner 848 runs captaincy masterclass, Bhuvi Purple Cap 23 wickets, Fizz cutter magic.',
    players: [
      { id: 'warner-2016', name: 'David Warner', role: 'opener', primaryPos: [1, 2], bat: 98, pow: 96, bwl: 10, wk: false, overseas: true, hand: 'LHB', trait: 'Captain Fantastic 848 Runs (Final 69)', avatar: '👑' },
      { id: 'dhawan-2016', name: 'Shikhar Dhawan', role: 'opener', primaryPos: [1, 2], bat: 90, pow: 87, bwl: 10, wk: false, overseas: false, hand: 'LHB', trait: 'Gabbar Anchor 501 Runs', avatar: '🦁' },
      { id: 'yuvi-2016', name: 'Yuvraj Singh', role: 'middle', primaryPos: [4, 5], bat: 86, pow: 92, bwl: 65, wk: false, overseas: false, hand: 'LHB', trait: 'Six King Final 38 off 23', avatar: '💥' },
      { id: 'henriques-2016', name: 'Moises Henriques', role: 'allrounder', primaryPos: [3, 4, 5], bat: 82, pow: 85, bwl: 82, wk: false, overseas: true, hand: 'RHB', trait: '182 Runs + 12 Wickets', avatar: '🇦🇺' },
      { id: 'cutting-2016', name: 'Ben Cutting', role: 'allrounder', primaryPos: [6, 7], bat: 84, pow: 99, bwl: 85, wk: false, overseas: true, hand: 'RHB', trait: 'Final MoM 39*(15) & 2/35', avatar: '⚡' },
      { id: 'hooda-2016', name: 'Deepak Hooda', role: 'allrounder', primaryPos: [5, 6], bat: 77, pow: 88, bwl: 55, wk: false, overseas: false, hand: 'RHB', trait: 'Aggressive Power Hitter', avatar: '🏏' },
      { id: 'ojha-2016', name: 'Naman Ojha', role: 'wk', primaryPos: [5, 6], bat: 78, pow: 82, bwl: 10, wk: true, overseas: false, hand: 'RHB', trait: 'Clean Gloveman', avatar: '🧤' },
      { id: 'bhuvi-2016', name: 'Bhuvneshwar Kumar', role: 'bowler', primaryPos: [9, 10, 11], bat: 35, pow: 40, bwl: 97, wk: false, overseas: false, hand: 'RHB', trait: 'Purple Cap 23 Wickets Econ 7.4', avatar: '🎯' },
      { id: 'fizz-2016', name: 'Mustafizur Rahman', role: 'bowler', primaryPos: [9, 10, 11], bat: 10, pow: 12, bwl: 96, wk: false, overseas: true, hand: 'LHB', trait: 'Emerging Player 17 Wkts Fizz Cutters', avatar: '🌪️' },
      { id: 'nehra-2016', name: 'Ashish Nehra', role: 'bowler', primaryPos: [9, 10, 11], bat: 15, pow: 18, bwl: 88, wk: false, overseas: false, hand: 'LHB', trait: 'Nehraji Powerplay Seam 9 Wkts', avatar: '🔥' },
      { id: 'sran-2016', name: 'Barinder Sran', role: 'bowler', primaryPos: [9, 10, 11], bat: 15, pow: 18, bwl: 84, wk: false, overseas: false, hand: 'LHB', trait: 'Left-Arm Pace 14 Wkts', avatar: '🌪️' }
    ]
  },
  {
    id: 'srh-2018',
    name: 'SRH 2018',
    shortName: 'SRH',
    year: '2018',
    edition: 'The Low-Score Defenders',
    badge: '🛡️',
    color: '#F26522',
    secondaryColor: '#000000',
    accent: '#D04E17',
    description: 'Defended 118, 132, 140! Williamson Orange Cap 735 runs, Rashid Khan magician 21 wickets.',
    players: [
      { id: 'kane-2018', name: 'Kane Williamson', role: 'opener', primaryPos: [1, 2, 3], bat: 97, pow: 90, bwl: 15, wk: false, overseas: true, hand: 'RHB', trait: 'Orange Cap 735 Runs (8 Fifties)', avatar: '🇳🇿' },
      { id: 'dhawan-2018', name: 'Shikhar Dhawan', role: 'opener', primaryPos: [1, 2], bat: 91, pow: 88, bwl: 10, wk: false, overseas: false, hand: 'LHB', trait: 'Gabbar 497 Runs', avatar: '🦁' },
      { id: 'manish-2018', name: 'Manish Pandey', role: 'middle', primaryPos: [3, 4], bat: 82, pow: 80, bwl: 10, wk: false, overseas: false, hand: 'RHB', trait: 'Middle Order 284 Runs', avatar: '⚔️' },
      { id: 'shakib-2018', name: 'Shakib Al Hasan', role: 'allrounder', primaryPos: [4, 5], bat: 82, pow: 84, bwl: 89, wk: false, overseas: true, hand: 'LHB', trait: '239 Runs + 14 Wickets', avatar: '🇧🇩' },
      { id: 'yusuf-2018', name: 'Yusuf Pathan', role: 'allrounder', primaryPos: [5, 6], bat: 82, pow: 93, bwl: 55, wk: false, overseas: false, hand: 'RHB', trait: 'Big Striker 260 Runs', avatar: '💣' },
      { id: 'saha-2018', name: 'Wriddhiman Saha', role: 'wk', primaryPos: [1, 2], bat: 80, pow: 84, bwl: 10, wk: true, overseas: false, hand: 'RHB', trait: 'Acrobatic Wicketkeeper', avatar: '🧤' },
      { id: 'rashid-2018', name: 'Rashid Khan', role: 'allrounder', primaryPos: [7, 8], bat: 78, pow: 94, bwl: 99, wk: false, overseas: true, hand: 'RHB', trait: 'Qualifier 2 Masterclass 34*(10) + 3/19', avatar: '🐍' },
      { id: 'bhuvi-2018', name: 'Bhuvneshwar Kumar', role: 'bowler', primaryPos: [9, 10, 11], bat: 35, pow: 40, bwl: 93, wk: false, overseas: false, hand: 'RHB', trait: 'Death Yorker Maestro 9 Wkts', avatar: '🎯' },
      { id: 'kaul-2018', name: 'Siddharth Kaul', role: 'bowler', primaryPos: [8, 9, 10], bat: 20, pow: 25, bwl: 91, wk: false, overseas: false, hand: 'RHB', trait: 'Knuckle Ball King 21 Wkts', avatar: '🔥' },
      { id: 'sandeep-2018', name: 'Sandeep Sharma', role: 'bowler', primaryPos: [9, 10, 11], bat: 18, pow: 22, bwl: 89, wk: false, overseas: false, hand: 'RHB', trait: 'Swing Specialist 14 Wkts', avatar: '🌪️' },
      { id: 'thampi-2018', name: 'Basil Thampi', role: 'bowler', primaryPos: [9, 10, 11], bat: 15, pow: 20, bwl: 80, wk: false, overseas: false, hand: 'RHB', trait: 'Express Yorker Pace', avatar: '⚡' }
    ]
  },

  // --- RR SQUADS ---
  {
    id: 'rr-2022',
    name: 'RR 2022',
    shortName: 'RR',
    year: '2022',
    edition: 'The Royal Charge',
    badge: '👑',
    color: '#EA1A85',
    secondaryColor: '#254AA5',
    accent: '#C7106C',
    description: 'Jos Buttler 863 runs with 4 centuries, Chahal Purple Cap 27 wickets, Boult powerplay magic.',
    players: [
      { id: 'buttler-2022', name: 'Jos Buttler', role: 'opener', primaryPos: [1, 2], bat: 99, pow: 98, bwl: 10, wk: true, overseas: true, hand: 'RHB', trait: 'Jos the Boss 863 Runs (4 Tons)', avatar: '👑' },
      { id: 'jaiswal-2022', name: 'Yashasvi Jaiswal', role: 'opener', primaryPos: [1, 2], bat: 86, pow: 92, bwl: 15, wk: false, overseas: false, hand: 'LHB', trait: 'Fearless Youth Prodigy', avatar: '⚡' },
      { id: 'samson-2022', name: 'Sanju Samson', role: 'wk', primaryPos: [3, 4], bat: 91, pow: 94, bwl: 10, wk: true, overseas: false, hand: 'RHB', trait: 'Captain Sanju 458 Runs SR 147', avatar: '🎯' },
      { id: 'dgp-2022', name: 'Devdutt Padikkal', role: 'middle', primaryPos: [3, 4], bat: 82, pow: 81, bwl: 10, wk: false, overseas: false, hand: 'LHB', trait: 'Graceful Left-Hand Anchor', avatar: '🗡️' },
      { id: 'hetmyer-2022', name: 'Shimron Hetmyer', role: 'middle', primaryPos: [5, 6], bat: 88, pow: 97, bwl: 10, wk: false, overseas: true, hand: 'LHB', trait: 'Ice-Cool Finisher 314 R SR 154', avatar: '🧊' },
      { id: 'parag-2022', name: 'Riyan Parag', role: 'allrounder', primaryPos: [6, 7], bat: 75, pow: 85, bwl: 65, wk: false, overseas: false, hand: 'RHB', trait: 'Bihu Dance Gun Fielder', avatar: '🕺' },
      { id: 'ashwin-2022', name: 'Ravichandran Ashwin', role: 'allrounder', primaryPos: [7, 8], bat: 74, pow: 78, bwl: 90, wk: false, overseas: false, hand: 'RHB', trait: 'Tactical Genius 191 R + 12 Wkts', avatar: '🧠' },
      { id: 'boult-2022', name: 'Trent Boult', role: 'bowler', primaryPos: [9, 10, 11], bat: 22, pow: 28, bwl: 93, wk: false, overseas: true, hand: 'RHB', trait: '1st Over Wicket Wizard 16 Wkts', avatar: '⚡' },
      { id: 'chahal-2022', name: 'Yuzvendra Chahal', role: 'bowler', primaryPos: [9, 10, 11], bat: 15, pow: 18, bwl: 97, wk: false, overseas: false, hand: 'RHB', trait: 'Purple Cap 27 Wkts Hat-trick', avatar: '🎩' },
      { id: 'prasidh-2022', name: 'Prasidh Krishna', role: 'bowler', primaryPos: [9, 10, 11], bat: 16, pow: 20, bwl: 87, wk: false, overseas: false, hand: 'RHB', trait: 'Hit-the-Deck Heat 19 Wkts', avatar: '🔥' },
      { id: 'mccoy-2022', name: 'Obed McCoy', role: 'bowler', primaryPos: [8, 9, 10], bat: 20, pow: 30, bwl: 83, wk: false, overseas: true, hand: 'LHB', trait: 'Death Slower Ball Enchanter', avatar: '🧙' }
    ]
  },
  {
    id: 'rr-2008',
    name: 'RR 2008',
    shortName: 'RR',
    year: '2008',
    edition: 'Warne’s Underdogs (Inaugural Winners)',
    badge: '🏆',
    color: '#004BA0',
    secondaryColor: '#D1AB3E',
    accent: '#002B49',
    description: 'Shane Warne legendary mentorship, Watson MVP, Sohail Tanvir Purple Cap 22 wickets, Yusuf Pathan.',
    players: [
      { id: 'watto-2008', name: 'Shane Watson', role: 'allrounder', primaryPos: [3, 4], bat: 94, pow: 96, bwl: 92, wk: false, overseas: true, hand: 'RHB', trait: 'Player of Tournament 472 R + 17 Wkts', avatar: '💥' },
      { id: 'yusuf-2008', name: 'Yusuf Pathan', role: 'allrounder', primaryPos: [4, 5], bat: 90, pow: 98, bwl: 78, wk: false, overseas: false, hand: 'RHB', trait: 'Final MoM 56(39) & 3/22', avatar: '💣' },
      { id: 'asnodkar-2008', name: 'Swapnil Asnodkar', role: 'opener', primaryPos: [1, 2], bat: 84, pow: 88, bwl: 10, wk: false, overseas: false, hand: 'RHB', trait: 'Goa Cannon 311 Runs', avatar: '⚡' },
      { id: 'smith-2008', name: 'Graeme Smith', role: 'opener', primaryPos: [1, 2], bat: 89, pow: 84, bwl: 10, wk: false, overseas: true, hand: 'LHB', trait: 'Biff Anchor 441 Runs', avatar: '🇿🇦' },
      { id: 'kaif-2008', name: 'Mohammad Kaif', role: 'middle', primaryPos: [3, 4], bat: 80, pow: 78, bwl: 10, wk: false, overseas: false, hand: 'RHB', trait: 'Electric Fielder & Stabilizer', avatar: '🏃' },
      { id: 'jaddu-2008', name: 'Ravindra Jadeja', role: 'allrounder', primaryPos: [6, 7], bat: 78, pow: 82, bwl: 70, wk: false, overseas: false, hand: 'LHB', trait: 'Rockstar 135 Runs SR 131', avatar: '🌟' },
      { id: 'akmal-2008', name: 'Kamran Akmal', role: 'wk', primaryPos: [1, 2, 7], bat: 82, pow: 90, bwl: 10, wk: true, overseas: true, hand: 'RHB', trait: 'Quickfire Wicketkeeper', avatar: '🧤' },
      { id: 'warne-2008', name: 'Shane Warne', role: 'bowler', primaryPos: [8, 9, 10], bat: 60, pow: 70, bwl: 97, wk: false, overseas: true, hand: 'RHB', trait: 'The Spin King Captain 19 Wkts', avatar: '👑' },
      { id: 'tanvir-2008', name: 'Sohail Tanvir', role: 'bowler', primaryPos: [9, 10, 11], bat: 30, pow: 40, bwl: 98, wk: false, overseas: true, hand: 'LHB', trait: 'Purple Cap 22 Wkts (6/14 Record!)', avatar: '🎯' },
      { id: 'munaf-2008', name: 'Munaf Patel', role: 'bowler', primaryPos: [9, 10, 11], bat: 18, pow: 20, bwl: 88, wk: false, overseas: false, hand: 'RHB', trait: 'Disciplined Seam 14 Wkts', avatar: '🔥' },
      { id: 'trivedi-2008', name: 'Siddharth Trivedi', role: 'bowler', primaryPos: [9, 10, 11], bat: 16, pow: 20, bwl: 86, wk: false, overseas: false, hand: 'RHB', trait: 'Domestic Workhorse 13 Wkts', avatar: '🌪️' }
    ]
  },
  {
    id: 'rr-2024',
    name: 'RR 2024',
    shortName: 'RR',
    year: '2024',
    edition: 'The Royal Renaissance',
    badge: '👑',
    color: '#EA1A85',
    secondaryColor: '#254AA5',
    accent: '#C7106C',
    description: 'Parag 573 runs redemption, Samson 531 runs, Buttler 2 tons, Boult & Chahal.',
    players: [
      { id: 'buttler-2024', name: 'Jos Buttler', role: 'opener', primaryPos: [1, 2], bat: 92, pow: 96, bwl: 10, wk: true, overseas: true, hand: 'RHB', trait: '2 Chasing Tons vs KKR & RCB', avatar: '👑' },
      { id: 'jaiswal-2024', name: 'Yashasvi Jaiswal', role: 'opener', primaryPos: [1, 2], bat: 89, pow: 93, bwl: 10, wk: false, overseas: false, hand: 'LHB', trait: '104* vs MI (435 Runs)', avatar: '⚡' },
      { id: 'samson-2024', name: 'Sanju Samson', role: 'wk', primaryPos: [3], bat: 93, pow: 93, bwl: 10, wk: true, overseas: false, hand: 'RHB', trait: '531 Runs (Avg 48, SR 153)', avatar: '🎯' },
      { id: 'parag-2024', name: 'Riyan Parag', role: 'middle', primaryPos: [4], bat: 94, pow: 95, bwl: 60, wk: false, overseas: false, hand: 'RHB', trait: 'Redemption Season 573 Runs (SR 149)', avatar: '🌟' },
      { id: 'hetmyer-2024', name: 'Shimron Hetmyer', role: 'middle', primaryPos: [5, 6], bat: 85, pow: 95, bwl: 10, wk: false, overseas: true, hand: 'LHB', trait: 'Last Over Hero SR 163', avatar: '🧊' },
      { id: 'powell-2024', name: 'Rovman Powell', role: 'allrounder', primaryPos: [6, 7], bat: 81, pow: 95, bwl: 60, wk: false, overseas: true, hand: 'RHB', trait: 'Calypso Muscle Power', avatar: '🌴' },
      { id: 'ashwin-2024', name: 'Ravichandran Ashwin', role: 'allrounder', primaryPos: [7, 8], bat: 70, pow: 74, bwl: 86, wk: false, overseas: false, hand: 'RHB', trait: 'Tactical Spinner 9 Wkts', avatar: '🧠' },
      { id: 'boult-2024', name: 'Trent Boult', role: 'bowler', primaryPos: [9, 10, 11], bat: 20, pow: 25, bwl: 92, wk: false, overseas: true, hand: 'RHB', trait: '16 Wickets Powerplay Lightning', avatar: '⚡' },
      { id: 'avesh-2024', name: 'Avesh Khan', role: 'bowler', primaryPos: [8, 9, 10], bat: 25, pow: 30, bwl: 89, wk: false, overseas: false, hand: 'RHB', trait: '19 Wickets Death Overs', avatar: '🔥' },
      { id: 'chahal-2024', name: 'Yuzvendra Chahal', role: 'bowler', primaryPos: [9, 10, 11], bat: 15, pow: 18, bwl: 92, wk: false, overseas: false, hand: 'RHB', trait: '18 Wickets (200 IPL Wickets)', avatar: '🎩' },
      { id: 'sandeep-2024', name: 'Sandeep Sharma', role: 'bowler', primaryPos: [9, 10, 11], bat: 18, pow: 22, bwl: 91, wk: false, overseas: false, hand: 'RHB', trait: '5/18 vs MI Slower Ball Sorcerer', avatar: '🧙' }
    ]
  },

  // --- PBKS / KXIP SQUADS ---
  {
    id: 'kxip-2014',
    name: 'KXIP 2014',
    shortName: 'PBKS',
    year: '2014',
    edition: 'The Big Show Storm',
    badge: '🦁',
    color: '#ED1B24',
    secondaryColor: '#C4CED3',
    accent: '#B00E15',
    description: 'Maxwell and Miller unleashing unprecedented mayhem across UAE and India, chasing 200+ for fun.',
    players: [
      { id: 'maxwell-2014', name: 'Glenn Maxwell', role: 'allrounder', primaryPos: [3, 4], bat: 94, pow: 99, bwl: 75, wk: false, overseas: true, hand: 'RHB', trait: 'The Big Show 552 Runs SR 187', avatar: '🎪' },
      { id: 'miller-2014', name: 'David Miller', role: 'middle', primaryPos: [4, 5], bat: 92, pow: 97, bwl: 10, wk: false, overseas: true, hand: 'LHB', trait: 'Killer Miller 446 Runs SR 149', avatar: '🔪' },
      { id: 'sehwag-2014', name: 'Virender Sehwag', role: 'opener', primaryPos: [1, 2], bat: 89, pow: 96, bwl: 25, wk: false, overseas: false, hand: 'RHB', trait: 'Viru 122 in Qualifier 2', avatar: '⚔️' },
      { id: 'vohra-2014', name: 'Manan Vohra', role: 'opener', primaryPos: [1, 2], bat: 81, pow: 85, bwl: 10, wk: false, overseas: false, hand: 'RHB', trait: 'Final Hero 67(52)', avatar: '⚡' },
      { id: 'saha-2014', name: 'Wriddhiman Saha', role: 'wk', primaryPos: [3, 4, 5], bat: 86, pow: 90, bwl: 10, wk: true, overseas: false, hand: 'RHB', trait: 'Final Century 115*(55)', avatar: '🧤' },
      { id: 'bailey-2014', name: 'George Bailey', role: 'middle', primaryPos: [4, 5, 6], bat: 82, pow: 81, bwl: 10, wk: false, overseas: true, hand: 'RHB', trait: 'Always Smiling Captain', avatar: '😁' },
      { id: 'axar-2014', name: 'Axar Patel', role: 'allrounder', primaryPos: [7, 8], bat: 77, pow: 83, bwl: 89, wk: false, overseas: false, hand: 'LHB', trait: 'Emerging Player 17 Wkts Econ 6.1', avatar: '🎯' },
      { id: 'johnson-2014', name: 'Mitchell Johnson', role: 'bowler', primaryPos: [8, 9, 10], bat: 56, pow: 75, bwl: 92, wk: false, overseas: true, hand: 'LHB', trait: 'Thunderbolt 17 Wickets', avatar: '⚡' },
      { id: 'sandeep-2014', name: 'Sandeep Sharma', role: 'bowler', primaryPos: [9, 10, 11], bat: 15, pow: 18, bwl: 89, wk: false, overseas: false, hand: 'RHB', trait: 'Master Inswinger 18 Wkts', avatar: '🌪️' },
      { id: 'awana-2014', name: 'Parvinder Awana', role: 'bowler', primaryPos: [9, 10, 11], bat: 16, pow: 20, bwl: 79, wk: false, overseas: false, hand: 'RHB', trait: 'Hit-the-Deck Seamer', avatar: '🔥' },
      { id: 'rishi-2014', name: 'Rishi Dhawan', role: 'allrounder', primaryPos: [7, 8], bat: 69, pow: 71, bwl: 77, wk: false, overseas: false, hand: 'RHB', trait: 'Himachal All-Rounder 13 Wkts', avatar: '🏏' }
    ]
  },
  {
    id: 'pbks-2024',
    name: 'PBKS 2024',
    shortName: 'PBKS',
    year: '2024',
    edition: 'Record 262 Chasers',
    badge: '🦁',
    color: '#ED1B24',
    secondaryColor: '#C4CED3',
    accent: '#B00E15',
    description: 'Chased world-record 262 vs KKR in 18.4 overs! Shashank, Ashutosh, Harshal Patel Purple Cap.',
    players: [
      { id: 'bairstow-2024', name: 'Jonny Bairstow', role: 'opener', primaryPos: [1, 2], bat: 89, pow: 98, bwl: 10, wk: true, overseas: true, hand: 'RHB', trait: '108* off 48 in 262 Record Chase', avatar: '🇬🇧' },
      { id: 'prabh-2024', name: 'Prabhsimran Singh', role: 'opener', primaryPos: [1, 2], bat: 84, pow: 94, bwl: 10, wk: true, overseas: false, hand: 'RHB', trait: '54 off 20 Blitz vs KKR (334 Runs)', avatar: '⚡' },
      { id: 'shashank-2024', name: 'Shashank Singh', role: 'middle', primaryPos: [5, 6], bat: 92, pow: 97, bwl: 10, wk: false, overseas: false, hand: 'RHB', trait: 'Accidental Hero 354 Runs (SR 164)', avatar: '🌟' },
      { id: 'ashutosh-2024', name: 'Ashutosh Sharma', role: 'middle', primaryPos: [6, 7], bat: 86, pow: 98, bwl: 10, wk: false, overseas: false, hand: 'RHB', trait: 'Sweep Shot Sixes vs Bumrah (SR 167)', avatar: '💥' },
      { id: 'rossouw-2024', name: 'Rilee Rossouw', role: 'middle', primaryPos: [3, 4], bat: 85, pow: 93, bwl: 10, wk: false, overseas: true, hand: 'LHB', trait: 'Aggressive Southpaw SR 180', avatar: '🇿🇦' },
      { id: 'curran-2024', name: 'Sam Curran', role: 'allrounder', primaryPos: [4, 5, 6], bat: 82, pow: 84, bwl: 86, wk: false, overseas: true, hand: 'LHB', trait: 'Captain 270 Runs + 16 Wkts', avatar: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' },
      { id: 'jitesh-2024', name: 'Jitesh Sharma', role: 'wk', primaryPos: [6, 7], bat: 78, pow: 88, bwl: 10, wk: true, overseas: false, hand: 'RHB', trait: 'Attacking Gloveman', avatar: '🧤' },
      { id: 'harshal-2024', name: 'Harshal Patel', role: 'bowler', primaryPos: [8, 9, 10], bat: 45, pow: 60, bwl: 96, wk: false, overseas: false, hand: 'RHB', trait: 'Purple Cap 24 Wickets (2x Winner)', avatar: '🏆' },
      { id: 'arshdeep-2024', name: 'Arshdeep Singh', role: 'bowler', primaryPos: [9, 10, 11], bat: 18, pow: 22, bwl: 91, wk: false, overseas: false, hand: 'LHB', trait: 'Left-Arm Death Specialist 19 Wkts', avatar: '🎯' },
      { id: 'rchahar-2024', name: 'Rahul Chahar', role: 'bowler', primaryPos: [9, 10, 11], bat: 22, pow: 26, bwl: 83, wk: false, overseas: false, hand: 'RHB', trait: 'Wrist Spin 10 Wickets', avatar: '🌪️' },
      { id: 'rabada-2024', name: 'Kagiso Rabada', role: 'bowler', primaryPos: [9, 10, 11], bat: 28, pow: 40, bwl: 90, wk: false, overseas: true, hand: 'LHB', trait: 'Protea Express 11 Wkts', avatar: '🔥' }
    ]
  },

  // --- DC / DD SQUADS ---
  {
    id: 'dc-2020',
    name: 'DC 2020',
    shortName: 'DC',
    year: '2020',
    edition: 'The Capital Renaissance',
    badge: '🐯',
    color: '#004C97',
    secondaryColor: '#EF1C24',
    accent: '#002B5C',
    description: 'Rabada 30 wickets, Nortje 156.2 km/h, Dhawan back-to-back tons, Stoinis & Pant flair.',
    players: [
      { id: 'dhawan-2020', name: 'Shikhar Dhawan', role: 'opener', primaryPos: [1, 2], bat: 95, pow: 91, bwl: 10, wk: false, overseas: false, hand: 'LHB', trait: 'Gabbar Back-to-Back Tons (618 Runs)', avatar: '🦁' },
      { id: 'shaw-2020', name: 'Prithvi Shaw', role: 'opener', primaryPos: [1, 2], bat: 85, pow: 93, bwl: 10, wk: false, overseas: false, hand: 'RHB', trait: 'First Over Punisher', avatar: '⚡' },
      { id: 'iyer-2020', name: 'Shreyas Iyer', role: 'middle', primaryPos: [3, 4], bat: 89, pow: 86, bwl: 10, wk: false, overseas: false, hand: 'RHB', trait: 'Captain Calm 519 Runs', avatar: '👑' },
      { id: 'pant-2020', name: 'Rishabh Pant', role: 'wk', primaryPos: [4, 5], bat: 91, pow: 96, bwl: 10, wk: true, overseas: false, hand: 'LHB', trait: 'Spiderman Fearless Finisher', avatar: '🕷️' },
      { id: 'stoinis-2020', name: 'Marcus Stoinis', role: 'allrounder', primaryPos: [5, 6, 7], bat: 85, pow: 95, bwl: 81, wk: false, overseas: true, hand: 'RHB', trait: 'The Hulk 352 Runs + 13 Wkts', avatar: '💪' },
      { id: 'hetmyer-2020', name: 'Shimron Hetmyer', role: 'middle', primaryPos: [5, 6], bat: 85, pow: 94, bwl: 10, wk: false, overseas: true, hand: 'LHB', trait: 'Late Order Rocket', avatar: '🚀' },
      { id: 'axar-2020', name: 'Axar Patel', role: 'allrounder', primaryPos: [7, 8], bat: 75, pow: 81, bwl: 89, wk: false, overseas: false, hand: 'LHB', trait: 'Choke King Econ 6.41', avatar: '🎯' },
      { id: 'ashwin-2020', name: 'Ravichandran Ashwin', role: 'bowler', primaryPos: [7, 8, 9], bat: 69, pow: 72, bwl: 88, wk: false, overseas: false, hand: 'RHB', trait: 'Powerplay Carrom 13 Wkts', avatar: '🧠' },
      { id: 'rabada-2020', name: 'Kagiso Rabada', role: 'bowler', primaryPos: [9, 10, 11], bat: 30, pow: 45, bwl: 98, wk: false, overseas: true, hand: 'LHB', trait: 'Purple Cap 30 Wickets!', avatar: '🏆' },
      { id: 'nortje-2020', name: 'Anrich Nortje', role: 'bowler', primaryPos: [9, 10, 11], bat: 20, pow: 28, bwl: 95, wk: false, overseas: true, hand: 'RHB', trait: '156.2 km/h Rocket 22 Wkts', avatar: '🚀' },
      { id: 'tushar-2020', name: 'Tushar Deshpande', role: 'bowler', primaryPos: [9, 10, 11], bat: 18, pow: 22, bwl: 78, wk: false, overseas: false, hand: 'RHB', trait: 'Aggressive Mumbai Seamer', avatar: '🔥' }
    ]
  },
  {
    id: 'dd-2012',
    name: 'DD 2012',
    shortName: 'DD',
    year: '2012',
    edition: 'Viru & Pietersen Table Toppers',
    badge: '⚡',
    color: '#004C97',
    secondaryColor: '#EF1C24',
    accent: '#002B5C',
    description: 'Sehwag five consecutive fifties, KP 305 runs, Morne Morkel Purple Cap 25 wickets.',
    players: [
      { id: 'viru-2012', name: 'Virender Sehwag', role: 'opener', primaryPos: [1, 2], bat: 95, pow: 98, bwl: 25, wk: false, overseas: false, hand: 'RHB', trait: '5 Straight Fifties (495 Runs)', avatar: '⚔️' },
      { id: 'kp-2012', name: 'Kevin Pietersen', role: 'middle', primaryPos: [3, 4], bat: 94, pow: 97, bwl: 40, wk: false, overseas: true, hand: 'RHB', trait: 'Switch Hit Master 305 R (SR 147)', avatar: '🚀' },
      { id: 'mahela-2012', name: 'Mahela Jayawardene', role: 'opener', primaryPos: [1, 2, 3], bat: 89, pow: 84, bwl: 10, wk: false, overseas: true, hand: 'RHB', trait: 'Class & Finesse 335 Runs', avatar: '🇱🇰' },
      { id: 'warner-2012', name: 'David Warner', role: 'opener', primaryPos: [1, 2], bat: 88, pow: 94, bwl: 10, wk: false, overseas: true, hand: 'LHB', trait: '109* in Hyderabad 256 Runs', avatar: '🦘' },
      { id: 'taylor-2012', name: 'Ross Taylor', role: 'middle', primaryPos: [4, 5], bat: 83, pow: 88, bwl: 10, wk: false, overseas: true, hand: 'RHB', trait: 'Slog Sweep Sensation', avatar: '🥝' },
      { id: 'irfan-2012', name: 'Irfan Pathan', role: 'allrounder', primaryPos: [6, 7], bat: 80, pow: 84, bwl: 88, wk: false, overseas: false, hand: 'LHB', trait: '176 Runs + 15 Wickets', avatar: '🎯' },
      { id: 'naman-2012', name: 'Naman Ojha', role: 'wk', primaryPos: [3, 4, 7], bat: 81, pow: 85, bwl: 10, wk: true, overseas: false, hand: 'RHB', trait: 'Aggressive Keeper 255 Runs', avatar: '🧤' },
      { id: 'morne-2012', name: 'Morne Morkel', role: 'bowler', primaryPos: [9, 10, 11], bat: 25, pow: 32, bwl: 97, wk: false, overseas: true, hand: 'RHB', trait: 'Purple Cap 25 Wickets', avatar: '🏆' },
      { id: 'umesh-2012', name: 'Umesh Yadav', role: 'bowler', primaryPos: [9, 10, 11], bat: 18, pow: 22, bwl: 90, wk: false, overseas: false, hand: 'RHB', trait: 'Express Outswing 19 Wkts', avatar: '🔥' },
      { id: 'negi-2012', name: 'Pawan Negi', role: 'allrounder', primaryPos: [7, 8], bat: 70, pow: 75, bwl: 81, wk: false, overseas: false, hand: 'LHB', trait: 'Left-Arm Spin', avatar: '🌪️' },
      { id: 'aaron-2012', name: 'Varun Aaron', role: 'bowler', primaryPos: [9, 10, 11], bat: 15, pow: 20, bwl: 83, wk: false, overseas: false, hand: 'RHB', trait: '145+ km/h Heat 8 Wkts', avatar: '⚡' }
    ]
  },

  // --- GT SQUADS ---
  {
    id: 'gt-2022',
    name: 'GT 2022',
    shortName: 'GT',
    year: '2022',
    edition: 'The Debut Miracle',
    badge: '⚡',
    color: '#0B4973',
    secondaryColor: '#D1AB3E',
    accent: '#083353',
    description: 'Underestimated debutants claiming the trophy: Hardik captaincy masterclass, Miller & Tewatia heist kings, Rashid Khan.',
    players: [
      { id: 'hardik-2022', name: 'Hardik Pandya', role: 'allrounder', primaryPos: [3, 4], bat: 92, pow: 93, bwl: 89, wk: false, overseas: false, hand: 'RHB', trait: 'Final MoM 3/17 & 487 Runs', avatar: '👑' },
      { id: 'gill-2022', name: 'Shubman Gill', role: 'opener', primaryPos: [1, 2], bat: 91, pow: 88, bwl: 10, wk: false, overseas: false, hand: 'RHB', trait: 'Classic Prince 483 Runs', avatar: '🤴' },
      { id: 'miller-2022', name: 'David Miller', role: 'middle', primaryPos: [4, 5], bat: 93, pow: 95, bwl: 10, wk: false, overseas: true, hand: 'LHB', trait: 'Clutch Finisher Avg 68 (481 Runs)', avatar: '🧊' },
      { id: 'tewatia-2022', name: 'Rahul Tewatia', role: 'allrounder', primaryPos: [6, 7], bat: 83, pow: 97, bwl: 64, wk: false, overseas: false, hand: 'LHB', trait: 'Lord of Heists 2 Sixes off 2 Balls', avatar: '🪄' },
      { id: 'saha-2022', name: 'Wriddhiman Saha', role: 'wk', primaryPos: [1, 2], bat: 84, pow: 87, bwl: 10, wk: true, overseas: false, hand: 'RHB', trait: 'Powerplay Exploiter 317 Runs', avatar: '🧤' },
      { id: 'rashid-2022', name: 'Rashid Khan', role: 'allrounder', primaryPos: [7, 8], bat: 80, pow: 95, bwl: 98, wk: false, overseas: true, hand: 'RHB', trait: 'Snake Shot & Afghan Magician 19 Wkts', avatar: '🐍' },
      { id: 'shami-2022', name: 'Mohammed Shami', role: 'bowler', primaryPos: [9, 10, 11], bat: 25, pow: 35, bwl: 95, wk: false, overseas: false, hand: 'RHB', trait: 'Seam Up Seam King 20 Wkts', avatar: '🎯' },
      { id: 'lockie-2022', name: 'Lockie Ferguson', role: 'bowler', primaryPos: [8, 9, 10], bat: 20, pow: 30, bwl: 88, wk: false, overseas: true, hand: 'RHB', trait: '150+ km/h Thunder 12 Wkts', avatar: '⚡' },
      { id: 'dayal-2022', name: 'Yash Dayal', role: 'bowler', primaryPos: [9, 10, 11], bat: 15, pow: 18, bwl: 82, wk: false, overseas: false, hand: 'LHB', trait: 'Left-Arm Swing 11 Wkts', avatar: '🌪️' },
      { id: 'saikishore-2022', name: 'Sai Kishore', role: 'bowler', primaryPos: [8, 9, 10], bat: 25, pow: 30, bwl: 83, wk: false, overseas: false, hand: 'LHB', trait: 'Tall Spin Miser Econ 7.5', avatar: '🦒' },
      { id: 'wade-2022', name: 'Matthew Wade', role: 'wk', primaryPos: [3, 4], bat: 78, pow: 82, bwl: 10, wk: true, overseas: true, hand: 'LHB', trait: 'Aussie Scrapper', avatar: '🥊' }
    ]
  },
  {
    id: 'gt-2023',
    name: 'GT 2023',
    shortName: 'GT',
    year: '2023',
    edition: 'Shubman Gill 890 Runs Dominance',
    badge: '👑',
    color: '#0B4973',
    secondaryColor: '#D1AB3E',
    accent: '#083353',
    description: 'Gill 890 runs (3 centuries!), Shami 28 wickets Purple Cap, Mohit 27 wickets, Rashid 27 wickets.',
    players: [
      { id: 'gill-2023', name: 'Shubman Gill', role: 'opener', primaryPos: [1, 2], bat: 99, pow: 96, bwl: 10, wk: false, overseas: false, hand: 'RHB', trait: 'Orange Cap 890 Runs (3 Tons!)', avatar: '🤴' },
      { id: 'saha-2023', name: 'Wriddhiman Saha', role: 'wk', primaryPos: [1, 2], bat: 85, pow: 88, bwl: 10, wk: true, overseas: false, hand: 'RHB', trait: 'Final Fifty 371 Runs', avatar: '🧤' },
      { id: 'sai-2023', name: 'Sai Sudharsan', role: 'middle', primaryPos: [3], bat: 92, pow: 93, bwl: 10, wk: false, overseas: false, hand: 'LHB', trait: 'Final Masterpiece 96 off 47', avatar: '🌟' },
      { id: 'hardik-2023', name: 'Hardik Pandya', role: 'allrounder', primaryPos: [4, 5], bat: 88, pow: 89, bwl: 78, wk: false, overseas: false, hand: 'RHB', trait: 'Captain Composure 346 Runs', avatar: '👑' },
      { id: 'miller-2023', name: 'David Miller', role: 'middle', primaryPos: [5, 6], bat: 87, pow: 94, bwl: 10, wk: false, overseas: true, hand: 'LHB', trait: 'Finisher 259 Runs SR 145', avatar: '🧊' },
      { id: 'tewatia-2023', name: 'Rahul Tewatia', role: 'allrounder', primaryPos: [6, 7], bat: 81, pow: 96, bwl: 55, wk: false, overseas: false, hand: 'LHB', trait: 'Death Over Ice Man SR 152', avatar: '🪄' },
      { id: 'rashid-2023', name: 'Rashid Khan', role: 'allrounder', primaryPos: [7, 8], bat: 82, pow: 98, bwl: 98, wk: false, overseas: true, hand: 'RHB', trait: '79*(32) vs MI + 27 Wickets Hat-trick', avatar: '🐍' },
      { id: 'shami-2023', name: 'Mohammed Shami', role: 'bowler', primaryPos: [9, 10, 11], bat: 22, pow: 30, bwl: 98, wk: false, overseas: false, hand: 'RHB', trait: 'Purple Cap 28 Wickets Seam King', avatar: '🏆' },
      { id: 'mohit-2023', name: 'Mohit Sharma', role: 'bowler', primaryPos: [8, 9, 10], bat: 20, pow: 25, bwl: 96, wk: false, overseas: false, hand: 'RHB', trait: 'Comeback Legend 27 Wkts 5/10 in Q2', avatar: '🔥' },
      { id: 'noor-2023', name: 'Noor Ahmad', role: 'bowler', primaryPos: [9, 10, 11], bat: 14, pow: 18, bwl: 89, wk: false, overseas: true, hand: 'LHB', trait: 'Afghan Chinaman 16 Wkts', avatar: '🔮' },
      { id: 'little-2023', name: 'Josh Little', role: 'bowler', primaryPos: [9, 10, 11], bat: 16, pow: 20, bwl: 84, wk: false, overseas: true, hand: 'LHB', trait: 'Irish Pacer', avatar: '🇮🇪' }
    ]
  },

  // --- LSG SQUADS ---
  {
    id: 'lsg-2023',
    name: 'LSG 2023',
    shortName: 'LSG',
    year: '2023',
    edition: 'The Power Surge',
    badge: '🦅',
    color: '#0057E7',
    secondaryColor: '#F38120',
    accent: '#003399',
    description: 'Pooran 15-ball 50, Stoinis beast mode, KL Rahul class, Bishnoi googlies.',
    players: [
      { id: 'pooran-2023', name: 'Nicholas Pooran', role: 'wk', primaryPos: [4, 5], bat: 93, pow: 99, bwl: 10, wk: true, overseas: true, hand: 'LHB', trait: '15-Ball Fifty SR 173 (358 Runs)', avatar: '💥' },
      { id: 'stoinis-2023', name: 'Marcus Stoinis', role: 'allrounder', primaryPos: [3, 4, 5], bat: 90, pow: 96, bwl: 78, wk: false, overseas: true, hand: 'RHB', trait: '89* Beast Mode (408 Runs)', avatar: '💪' },
      { id: 'klr-2023', name: 'KL Rahul', role: 'opener', primaryPos: [1, 2], bat: 92, pow: 86, bwl: 10, wk: true, overseas: false, hand: 'RHB', trait: 'Consistent Anchor 274 Runs', avatar: '🧢' },
      { id: 'mayers-2023', name: 'Kyle Mayers', role: 'allrounder', primaryPos: [1, 2], bat: 87, pow: 95, bwl: 68, wk: false, overseas: true, hand: 'LHB', trait: 'Calypso Assault 379 Runs SR 144', avatar: '⚡' },
      { id: 'qdk-2023', name: 'Quinton de Kock', role: 'opener', primaryPos: [1, 2], bat: 88, pow: 91, bwl: 10, wk: true, overseas: true, hand: 'LHB', trait: 'Lightning Southpaw', avatar: '🧤' },
      { id: 'badoni-2023', name: 'Ayush Badoni', role: 'middle', primaryPos: [5, 6], bat: 81, pow: 89, bwl: 35, wk: false, overseas: false, hand: 'RHB', trait: 'Baby AB Improviser 238 Runs', avatar: '🪄' },
      { id: 'krunal-2023', name: 'Krunal Pandya', role: 'allrounder', primaryPos: [5, 6, 7], bat: 78, pow: 81, bwl: 84, wk: false, overseas: false, hand: 'LHB', trait: 'Captain Utility 9 Wkts', avatar: '🛡️' },
      { id: 'bishnoi-2023', name: 'Ravi Bishnoi', role: 'bowler', primaryPos: [9, 10, 11], bat: 18, pow: 22, bwl: 91, wk: false, overseas: false, hand: 'RHB', trait: 'Speed Googly 16 Wkts', avatar: '🎯' },
      { id: 'naveen-2023', name: 'Naveen-ul-Haq', role: 'bowler', primaryPos: [9, 10, 11], bat: 22, pow: 25, bwl: 86, wk: false, overseas: true, hand: 'RHB', trait: 'Back of Hand Slower Balls 11 Wkts', avatar: '🥭' },
      { id: 'mohsin-2023', name: 'Mohsin Khan', role: 'bowler', primaryPos: [9, 10, 11], bat: 18, pow: 22, bwl: 87, wk: false, overseas: false, hand: 'LHB', trait: 'Defended 9 Runs in Final Over', avatar: '🔥' },
      { id: 'mishra-2023', name: 'Amit Mishra', role: 'bowler', primaryPos: [10, 11], bat: 22, pow: 25, bwl: 85, wk: false, overseas: false, hand: 'RHB', trait: '3x Hat-trick Legend 7 Wkts', avatar: '👴' }
    ]
  },

  // --- HISTORIC NOSTALGIA SQUADS ---
  {
    id: 'dchargers-2009',
    name: 'DC 2009',
    shortName: 'DCH',
    year: '2009',
    edition: 'Deccan Fairytale (South Africa)',
    badge: '🐂',
    color: '#D4AF37',
    secondaryColor: '#002B49',
    accent: '#B38F24',
    description: 'Gilchrist 85(35), young Rohit Sharma hat-trick, RP Singh Purple Cap in South Africa.',
    players: [
      { id: 'gilly-2009', name: 'Adam Gilchrist', role: 'wk', primaryPos: [1, 2], bat: 94, pow: 98, bwl: 10, wk: true, overseas: true, hand: 'LHB', trait: 'Captain Carnage 85(35) in Semi (495 R)', avatar: '🧤' },
      { id: 'rohit-2009', name: 'Rohit Sharma', role: 'allrounder', primaryPos: [3, 4], bat: 89, pow: 90, bwl: 76, wk: false, overseas: false, hand: 'RHB', trait: 'Emerging Player 362 R + Hat-Trick!', avatar: '🎩' },
      { id: 'gibbs-2009', name: 'Herschelle Gibbs', role: 'opener', primaryPos: [1, 2], bat: 88, pow: 90, bwl: 15, wk: false, overseas: true, hand: 'RHB', trait: 'Final Hero 53* (371 Runs)', avatar: '🇿🇦' },
      { id: 'symonds-2009', name: 'Andrew Symonds', role: 'allrounder', primaryPos: [4, 5], bat: 88, pow: 94, bwl: 85, wk: false, overseas: true, hand: 'RHB', trait: 'Unstoppable Force 249 R + 7 Wkts', avatar: '🦘' },
      { id: 'dsmith-2009', name: 'Dwayne Smith', role: 'allrounder', primaryPos: [5, 6], bat: 81, pow: 95, bwl: 70, wk: false, overseas: true, hand: 'RHB', trait: 'Calypso Six Striker 215 Runs', avatar: '🌴' },
      { id: 'venu-2009', name: 'Venugopal Rao', role: 'middle', primaryPos: [5, 6], bat: 77, pow: 76, bwl: 40, wk: false, overseas: false, hand: 'RHB', trait: 'Crisis Man Anchor', avatar: '🛡️' },
      { id: 'rpsingh-2009', name: 'RP Singh', role: 'bowler', primaryPos: [9, 10, 11], bat: 25, pow: 30, bwl: 95, wk: false, overseas: false, hand: 'LHB', trait: 'Purple Cap 23 Wickets in SA', avatar: '🏆' },
      { id: 'ojha-2009', name: 'Pragyan Ojha', role: 'bowler', primaryPos: [9, 10, 11], bat: 16, pow: 20, bwl: 90, wk: false, overseas: false, hand: 'LHB', trait: 'Classical Left-Arm Spin 18 Wkts', avatar: '🎯' },
      { id: 'fidel-2009', name: 'Fidel Edwards', role: 'bowler', primaryPos: [9, 10, 11], bat: 14, pow: 18, bwl: 86, wk: false, overseas: true, hand: 'RHB', trait: 'Round-Arm Thunderbolt 16 Wkts', avatar: '⚡' },
      { id: 'harmeet-2009', name: 'Harmeet Singh', role: 'bowler', primaryPos: [8, 9, 10], bat: 20, pow: 24, bwl: 80, wk: false, overseas: false, hand: 'RHB', trait: 'Disciplined Seamer', avatar: '🌪️' },
      { id: 'suman-2009', name: 'Tirumalasetti Suman', role: 'middle', primaryPos: [3, 4], bat: 76, pow: 80, bwl: 25, wk: false, overseas: false, hand: 'RHB', trait: 'Key 237 Runs Contributor', avatar: '🏏' }
    ]
  },
  {
    id: 'rps-2017',
    name: 'RPS 2017',
    shortName: 'RPS',
    year: '2017',
    edition: 'Rising Pune Supergiant Finalists',
    badge: '👑',
    color: '#8A1538',
    secondaryColor: '#D1AB3E',
    accent: '#4A0E17',
    description: 'Stokes MVP season (century + 12 wkts), Smith 472 runs, Dhoni finishing masterclass, Unadkat 24 wickets hat-trick.',
    players: [
      { id: 'smith-2017', name: 'Steve Smith', role: 'middle', primaryPos: [3, 4], bat: 93, pow: 88, bwl: 20, wk: false, overseas: true, hand: 'RHB', trait: 'Captain Fantastic 472 Runs', avatar: '🇦🇺' },
      { id: 'stokes-2017', name: 'Ben Stokes', role: 'allrounder', primaryPos: [4, 5], bat: 92, pow: 97, bwl: 92, wk: false, overseas: true, hand: 'LHB', trait: 'MVP 316 Runs (103* vs GL) + 12 Wkts', avatar: '🦁' },
      { id: 'rahane-2017', name: 'Ajinkya Rahane', role: 'opener', primaryPos: [1, 2], bat: 88, pow: 82, bwl: 10, wk: false, overseas: false, hand: 'RHB', trait: 'Opening Anchor 382 Runs', avatar: '🛡️' },
      { id: 'tripathi-2017', name: 'Rahul Tripathi', role: 'opener', primaryPos: [1, 2], bat: 88, pow: 93, bwl: 10, wk: false, overseas: false, hand: 'RHB', trait: 'Breakout Star 391 Runs SR 146', avatar: '⚡' },
      { id: 'msd-2017', name: 'MS Dhoni', role: 'wk', primaryPos: [5, 6], bat: 89, pow: 94, bwl: 10, wk: true, overseas: false, hand: 'RHB', trait: 'Thala 61*(34) vs SRH + 40*(26) Q1', avatar: '🚁' },
      { id: 'tiwary-2017', name: 'Manoj Tiwary', role: 'middle', primaryPos: [5, 6], bat: 84, pow: 86, bwl: 10, wk: false, overseas: false, hand: 'RHB', trait: 'Crisis Finisher 324 Runs', avatar: '⚔️' },
      { id: 'christian-2017', name: 'Dan Christian', role: 'allrounder', primaryPos: [6, 7], bat: 78, pow: 88, bwl: 83, wk: false, overseas: true, hand: 'RHB', trait: 'Utility Big Hitter 11 Wkts', avatar: '🦘' },
      { id: 'washi-2017', name: 'Washington Sundar', role: 'bowler', primaryPos: [8, 9], bat: 65, pow: 70, bwl: 90, wk: false, overseas: false, hand: 'LHB', trait: 'Q1 Hero 3/16 (Econ 6.16)', avatar: '🧠' },
      { id: 'unadkat-2017', name: 'Jaydev Unadkat', role: 'bowler', primaryPos: [9, 10, 11], bat: 22, pow: 28, bwl: 95, wk: false, overseas: false, hand: 'LHB', trait: '24 Wickets + Maiden Hat-Trick!', avatar: '🎩' },
      { id: 'tahir-2017', name: 'Imran Tahir', role: 'bowler', primaryPos: [9, 10, 11], bat: 12, pow: 18, bwl: 92, wk: false, overseas: true, hand: 'RHB', trait: '18 Wickets in 12 Matches', avatar: '🏃' },
      { id: 'shardul-2017', name: 'Shardul Thakur', role: 'bowler', primaryPos: [8, 9, 10], bat: 45, pow: 60, bwl: 84, wk: false, overseas: false, hand: 'RHB', trait: 'Emerging Pacer 11 Wickets', avatar: '🔥' }
    ]
  }
];

// Target stats to chase
export const CHASE_SCENARIO = {
  target: 251, // Needs 251 to win (Target 250 tied)
  totalBalls: 120, // 20 overs
  overs: 20,
  requiredRunRate: 12.55,
  opponentScore: '250/0 (20.0)',
  opponentTeam: 'Opposition Juggernaut',
  thresholds: {
    battingTop7: {
      min: 560,
      solid: 600,
      legendary: 640,
      description: 'Batting Survival & Anchor Rating across Top 7 batters'
    },
    powerTop7: {
      min: 610,
      solid: 645,
      legendary: 675,
      description: 'Power & Strike Acceleration rating across Top 7 power hitters'
    },
    bowlingTop4: {
      min: 320,
      solid: 350,
      legendary: 375,
      description: 'Bowling pedigree & Dugout balance across Top 4 bowlers'
    }
  },
  squadRules: {
    maxOverseas: 4,
    minWicketKeepers: 1,
    minBowlers: 5
  }
};
