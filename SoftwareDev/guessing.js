const rls = require("readline-sync");

console.log("Try to guess the hidden number inserting a number between 1 and 10. You will have 5 guesses.");
const GUESSES = 5;
let tentative = 0;
const randomNum = Math.ceil(Math.random() * 10);
while (GUESSES > tentative) {
    const input = parseInt(rls.question("Please enter a number between 1 and 10 "));

    if (!Number.isInteger(input)) {
        console.log("Please enter a number, other characters are not available");
    }
    else {
    
        if (input < 1 || input > 10) {
            console.log("Please entwer a number between 1 and 10");
        }
        else if (input > randomNum) {
            console.log("WRONG! Your guess is to high");
            tentative++;
        }
        else if (input < randomNum) {
            console.log("WRONG! Your guess is to low");
            tentative++;
        }
        else {
            console.log("CORRECT!, the number was " + randomNum);
            tentative++;
            break;
        }
    }
}

