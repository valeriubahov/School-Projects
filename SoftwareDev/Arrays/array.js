const rls = require('readline-sync');


const NUM_TEAMS = 2;
const NUM_PLAYERS = 2;
let teams = [3];


console.log("Create the teams!");
for (let i = 0; i < NUM_TEAMS; i++) {
    console.log('','');
    let players = [2];
    for (let k = 0; k < NUM_PLAYERS; k++) {
        let datas = [2];
        for (let j = 0; j < NUM_TEAMS; j++) {
            if (j == 0) {
                datas[j] = rls.question("Insert your name ");
            }
            else {
                datas[j] = rls.question("Insert your last name ");
            }
        }
        players[k] = datas;
    }
    teams[i] = players;
}

console.log(teams);