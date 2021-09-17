// Program name: Guessing Game
// Created by: Valeriu Bahov - W0459263
// Date: 2021-09-15
const rls = require("readline-sync");

console.log('', '');
console.log("---------------------------GUESSING GAME---------------------------")
console.log('', '');
console.log("Welcome to the Guessing Game!");
console.log('', '');
console.log("Enter a number between 0 and 10 which will be your guessing number.");
console.log("If you guess the hidden number, YOU WIN! :)");
console.log("Otherwise, YOU LOSE! :(");
console.log('', '');
console.log("TIME TO START!!!");
console.log('', '');

let isPlayAgain = false;
// do-while loop to let the player retry to guess the random number
do {
    const userGuess = parseInt(rls.question("Enter your guessing number! "));
    console.log('', '');

    const randomNum = Math.ceil(Math.random() * 10);

    if (userGuess == randomNum) {
        console.log("CONGRATULATION! YOU WON!");
    }
    else {
        console.log("OHHHH! YOU LOST... TRY AGAIN!");
    }
    console.log("THE NUMBER TO GUESS WAS: " + randomNum);

    console.log('', '');
    // Player choice to try again or exit the game
    const playAgain = parseInt(rls.question("If you want to play again press 1 or 0 to exit "));
    // Choise 1 to play again
    if (playAgain == 1) {
        isPlayAgain = true;
    }
    else { //Choise 0 to exit the game
        isPlayAgain = false;
    }
}
while (isPlayAgain);


