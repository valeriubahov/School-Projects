const rls = require("readline-sync");

console.log("Try to guess the hidden number inserting a number between 1 and 10. You will have 5 guesses.");
const GUESSES = 5;
let tentative = 0;
let input;
const randomNum = Math.ceil(Math.random() * 10);

while (GUESSES > tentative) {
    getGuess();
    if (checkIfWin()) {
        break;
    }
}


function getGuess() {
    do {
        input = rls.question("Please enter a number between 1 and 10 ");
        tentative++;
    } //JS likes to have the Number verificator with a NOT statement
    while ((isNaN(input) || (input < 1 || input > 10)) && tentative < GUESSES);
}


function checkIfWin() {
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
        return true;
    }
}