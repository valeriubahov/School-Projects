const rls = require('readline-sync');
const fs = require('fs');

let gameMap = [];
let numbersOfHits = 0;

//Read the file and create the matrix with ships positions
const MAP_PATH = "SoftwareDev/ASSIGNMENT_2/Battleship/map.txt";
const MAP_CONTENT = fs.readFileSync(MAP_PATH, "utf-8");

const SPLIT_LINES = MAP_CONTENT.split("\r\n");

for (let i = 0; i < SPLIT_LINES.length; i++) {
    const ARR_POSITIONS = SPLIT_LINES[i].split(',');
    numbersOfHits += ARR_POSITIONS.filter(x => x === '1').length;
    gameMap[i] = ARR_POSITIONS;
}
//END OF THE MATRIX SETTING

let missiles = 30;
console.log("Let's play Battleship!");
console.log("You have", missiles, "missiles to fire to sink all five ships.")

//GENERATE THE MAP THAT THE USER WILL USE - THE MAP WILL COUNT ROWS FROM 0 AND NOT FROM 1 
const HEADER_ARRAY = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
let viewMap = [
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
console.table(viewMap, HEADER_ARRAY);

let countHitShips = 0;

while (missiles > 0) {
    playGame();
}

//If the user finish all the missiles - GAME OVER
if (countHitShips < numbersOfHits) {
    console.log("You have 0 missiles remaining");
    console.log("GAME OVER.");
    console.log("You had", countHitShips, "of", numbersOfHits, "hits, but didn't sink all the ships");
    console.log("Better luck next time.");
}


////////////////////////////////////////////////        FUNCTIONS AREA      ////////////////////////////////////////////////

function playGame() {
    let columnPosition = "";
    let rowPosition = "";
    //Input check and validation
    do {
        const position = rls.question("Choose your targer (Ex. A0 to A9): ").toUpperCase();
        columnPosition = position.charAt(0, 1);
        rowPosition = parseInt(position.substr(1));
    }
    while (!isColumnPositionVlaid(columnPosition) || !isRowPositionValid(rowPosition));
    //Once the input is validated it counts as a shot.
    missiles--;

    //Check if the user hit or missed the ship
    checkIfHit(columnPosition, rowPosition);

    //Check if the user hit all the ships
    if (countHitShips == numbersOfHits) {
        console.log("YOU SANK MY ENTIRE FLEET!");
        console.log("You had", countHitShips, "of", numbersOfHits, "hits, whitch sank all ships");
        console.log("You won, congratulations!");
    }
}

function checkIfHit(column, row) {
    if (gameMap[row][HEADER_ARRAY.indexOf(column)] === '1') {
        console.log("HIT!!!!!");
        console.log("You have", missiles, "missiles remaining");
        viewMap[row][column] = 'X';
        console.table(viewMap, HEADER_ARRAY);
        countHitShips++;
    }
    else {
        console.log("Miss");
        console.log("You have", missiles, "missiles remaining");
        viewMap[row][column] = 'O';
        console.table(viewMap, HEADER_ARRAY);
    }
}


function isColumnPositionVlaid(column) {
    if (column.match(/[A-J]/i)) {
        return true;
    }
    else {
        console.log("Please enter a valid column position between A and J.");
        return false;
    }
}


function isRowPositionValid(row) {
    if (!isNaN(row)) {
        if ((parseInt(row) >= 0 && parseInt(row) < 10)) {
            return true;
        }
        else {
            console.log("Please enter a valid row position between 0 and 10.");
            return false;
        }
    }
    else {
        console.log("Please enter a valid row position.");
        return false;
    }
}