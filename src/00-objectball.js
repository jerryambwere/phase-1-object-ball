const game = {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7
        },
        // Other players...
      }
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2
        },
        "Bismack Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 22,
          blocks: 15,
          slamDunks: 10
        },
        // Other players...
      }
    }
  };
  
  // Function: numPointsScored
  function numPointsScored(playerName) {
    for (let team in game) {
      if (game[team].players[playerName]) {
        return game[team].players[playerName].points;
      }
    }
    return null; // Player not found
  }
  
  // Function: shoeSize
  function shoeSize(playerName) {
    for (let team in game) {
      if (game[team].players[playerName]) {
        return game[team].players[playerName].shoe;
      }
    }
    return null; // Player not found
  }
  
  // Function: teamColors
  function teamColors(teamName) {
    for (let team in game) {
      if (game[team].teamName === teamName) {
        return game[team].colors;
      }
    }
    return null; // Team not found
  }
  
  // Function: teamNames
  function teamNames() {
    return [game.home.teamName, game.away.teamName];
  }
  
  // Function: playerNumbers
  function playerNumbers(teamName) {
    for (let team in game) {
      if (game[team].teamName === teamName) {
        let numbers = [];
        for (let player in game[team].players) {
          numbers.push(game[team].players[player].number);
        }
        return numbers;
      }
    }
    return null; // Team not found
  }
  
  // Function: playerStats
  function playerStats(playerName) {
    for (let team in game) {
      if (game[team].players[playerName]) {
        return game[team].players[playerName];
      }
    }
    return null; // Player not found
  }
  
  // Function: bigShoeRebounds
  function bigShoeRebounds() {
    let largestShoeSize = -Infinity;
    let playerWithLargestShoe = null;
  
    for (let team in game) {
      for (let player in game[team].players) {
        if (game[team].players[player].shoe > largestShoeSize) {
          largestShoeSize = game[team].players[player].shoe;
          playerWithLargestShoe = player;
        }
      }
    }
  
    return game[team].players[playerWithLargestShoe].rebounds;
  }
  
  // Bonus: mostPointsScored
  function mostPointsScored() {
    let mostPoints = -Infinity;
    let playerWithMostPoints = null;
  
    for (let team in game) {
      for (let player in game[team].players) {
        if (game[team].players[player].points > mostPoints) {
          mostPoints = game[team].players[player].points;
          playerWithMostPoints = player;
        }
      }
    }
  
    return playerWithMostPoints;
  }
  
  // Bonus: winningTeam
  function winningTeam() {
    let highestScore = -Infinity;
    let winningTeamName = null;
  
    for (let team in game) {
      let teamScore = 0;
      for (let player in game[team].players) {
        teamScore += game[team].players[player].points;
      }
      if (teamScore > highestScore) {
        highestScore = teamScore;
        winningTeamName = game[team].teamName;
      }
    }
  
    return winningTeamName;
  }
  
  // Bonus: playerWithLongestName
  function playerWithLongestName() {
    let longestNameLength = -Infinity;
    let playerWithLongestName = null;
  
    for (let team in game) {
      for (let player in game[team].players) {
        if (player.length > longestNameLength) {
          longestNameLength = player.length;
          playerWithLongestName = player;
        }
      }
    }
  
    return playerWithLongestName;
  }
  
  // Super Bonus: doesLongNameStealATon
  function doesLongNameStealATon() {
    let longestName = playerWithLongestName();
    let mostStealsPlayer = null;
  
    for (let team in game) {
      for (let player in game[team].players) {
        if (!mostStealsPlayer || game[team].players[player].steals > game[team].players[mostStealsPlayer].steals) {
          mostStealsPlayer = player;
        }
      }
    }
  
    return mostStealsPlayer === longestName;
  }
  