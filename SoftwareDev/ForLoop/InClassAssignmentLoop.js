const rls = require("readline-sync");

const TEAM_NUMBERS = 3;
const PLAYERS_NUMBER = 5;
let teamsCount = 1;
let arr_playersNames = [PLAYERS_NUMBER];

//TEAMS LOOP
while (teamsCount <= TEAM_NUMBERS) {

    //INSERTING TEAM NAMES
    const teamName = rls.question("Please enter team " + teamsCount + " name: ");

    console.log('', '');

    //INSERTING PLAYER NAMES
    for (let i = 1; i <= PLAYERS_NUMBER; i++) {
        const playerName = rls.question("Please enter the " + i + " player name for the team " + teamsCount + " ");
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