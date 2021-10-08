const rls = require("readline-sync");

console.log("Try to guess the hidden number inserting a number between 1 and 10. You will have 5 guesses.");
const GUESSES = 5;
let tentative = 0;
let input;
let randomNum = Math.ceil(Math.random() * 10);

// MAIN
do {
    executeGame();
}
while (requestToPlayAgain());

// RUN the game
function executeGame() {
    while (GUESSES > tentative) {
        getUserGuess();
        if (checkIfCorrect()) {
            break;
        }
    }
    tentative = 0;
}

// Ask the user to guess the number
function getUserGuess() {
    do {
        input = rls.question("Please enter a number between 1 and 10 ");
        tentative++;
    } //JS likes to have the Number verificator with a NOT statement
    while ((isNaN(input) || (input < 1 || input > 10)) && tentative < GUESSES);
}

//Check if the guess is correct or not
function checkIfCorrect() {
    if (input > randomNum) {
        console.log("WRONG! Your guess is to high");
        return false;
    }
    else if (input < randomNum) {
        console.log("WRONG! Your guess is to low");
        return false;
    }
    else if (tentative >= GUESSES && input != randomNum) {
        console.log("You used all your guesses!");
        return false;
    }
    else {
        console.log("CORRECT!, the number was " + randomNum);
        randomNum = Math.ceil(Math.random() * 10);
        return true;
    }
}

//Ask if the player wants to play again
function requestToPlayAgain() {
    const playAgain = parseInt(rls.question("If you want to play again press 1 or 0 to exit "));
    if (playAgain == 1) {
        return true;
    }
    else {
        return false;
    }
}