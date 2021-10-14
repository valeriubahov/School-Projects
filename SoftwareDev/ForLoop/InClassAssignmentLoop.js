const rls = require("readline-sync");

const TEAM_NUMBERS = 3;
const PLAYERS_NUMBER = 5;
let teamsCount = 1;
let arr_playersNames = [PLAYERS_NUMBER];

//TEAMS LOOP
while (teamsCount <= TEAM_NUMBERS) {

    //INSERTING TEAM NAMES - Not accepting null or empty space only
    let teamName;
    do {
        teamName = rls.question("Please enter Team " + teamsCount + " name: ");
    }
    while (teamName == null || teamName.trim() === '');

    console.log('', '');

    //INSERTING PLAYER NAMES - Not accepting blanck space only or nulls
    for (let i = 1; i <= PLAYERS_NUMBER; i++) {
        let playerName;
        do {
            playerName = rls.question("Please enter the " + i + " player name for the Team " + teamName + " ");
        }
        while (playerName == null || playerName.trim() === '');

        const k = i - 1;
        arr_playersNames[k] = playerName;
    }

    console.log('', '');
    console.log("Team", teamName, "Players");

    //PRINTING PLAYER NAMES
    for (let j = 0; j < arr_playersNames.length; j++) {
        const u = j + 1;
        console.log("Player", u, "name is: ", arr_playersNames[j]);
    }

    teamsCount++;

    console.log('', '');
}