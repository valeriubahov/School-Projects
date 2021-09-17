const rls = require("readline-sync");

const randomNum = Math.ceil(Math.random() * 10);
const guessingNumber = Math.ceil(Math.random() * 10);
console.log('', '');
console.log("----------------------GUESSING GAME----------------------")
console.log('', '');
console.log("Enter '>' if you think is BIGGER than the number to guess ");
console.log("Enter '<' if you think is LOWER than the number to guess ");
console.log("Enter '=' if you think is EQUAL to the number to guess ");
console.log('', '');
const inputUser = rls.question("Is the number lower, bigger or equal to " + randomNum + "? ");
console.log('', '');


if (inputUser === '>' && guessingNumber > randomNum) {
    console.log("YOU WIN! The number to guess was: " + guessingNumber);
}
else if (inputUser === '>' && guessingNumber < randomNum) {
    console.log("YOU LOST! The number to guess was: " + guessingNumber);
}
else if (inputUser === '<' && guessingNumber < randomNum) {
    console.log("YOU WIN! The number to guess was: " + guessingNumber);
}
else if (inputUser === '<' && guessingNumber > randomNum) {
    console.log("YOU LOST! The number to guess was: " + guessingNumber);
}
else if (inputUser === '=' && guessingNumber == randomNum) {
    console.log("YOU WIN! The number to guess was: " + guessingNumber);
}
else {
    console.log("YOU LOST! The number to guess was: " + guessingNumber);
}