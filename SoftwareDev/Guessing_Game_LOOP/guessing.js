const rls = require("readline-sync");

console.log("Try to guess the hidden number inserting a number between 1 and 10. You will have 5 guesses.");
const GUESSES = 5;
let tentative = 0;
let input;

//NUMBER TO GUESS
const randomNum = Math.ceil(Math.random() * 10);
//GAME STARTS
while (GUESSES > tentative) {
    do {
        input = rls.question("Please enter a number between 1 and 10 ");
        tentative++;

    } //JS likes to have the Number verificator with a NOT statement
    while ((isNaN(input) || (input < 1 || input > 10)) && tentative < GUESSES);

    if (input > randomNum) {
        console.log("WRONG! Your guess is to high");

    }
    else if (input < randomNum) {
        console.log("WRONG! Your guess is to low");

    }
    else if (isNaN(input)) {
        console.log("Sorry you used all your tentatives!");
    }
    else {
        console.log("CORRECT!, the number was " + randomNum);
        break;
    }
}