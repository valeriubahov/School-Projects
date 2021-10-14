const rls = require('readline-sync');
let replay;
let map = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];


let counter = 0;
while (counter < 10) {
    //random generated positions - GENERATED 10 positions of 100
    map[(Math.ceil(Math.random() * 10)) - 1][(Math.ceil(Math.random() * 10)) - 1] = 1;
    counter++;
}


do {
    const position = rls.question("Please enter the row and the column that you want to fire at separated by :: ");
    const arrPosition = position.split("::");

    //check if they hit or not the zone they entered
    if (map[arrPosition[0]][arrPosition[1]] == 1) {
        console.log("You hit something!");
    }
    else {
        console.log("You missed the hit!");
    }

    replay = rls.question("Write 'quit' if you want to stop playing: ");
}
while (replay !== 'quit');

console.log(map);