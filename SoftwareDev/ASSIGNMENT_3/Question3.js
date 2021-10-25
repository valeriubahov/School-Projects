// A prime number is a number that can only be divided evenly (zero remainder) by 1 and itself.
//  Prompt the user for a number and tell them if the number is prime or not

const rls = require('readline-sync');

console.log("Question Number 3");

let userInput;
do {
    userInput = parseInt(rls.question("Please type how many nymbers you want to insert: "));
}
while (isNaN(userInput));

if (userInput === 1) {
    console.log("The number 1 is neither prime nor composite number.");
}
else if (userInput === 2) {
    console.log("The number " + userInput + " is a prime number");
}
else if (isPrimeNumber(userInput)) {
    console.log("The number " + userInput + " is a prime number");
}
else {
    console.log("The number " + userInput + " is NOT a prime number");
}


function isPrimeNumber(number) {
    let isPrime = true;
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
        else {
            isPrime = true;
        }
    }
    return isPrime;
}