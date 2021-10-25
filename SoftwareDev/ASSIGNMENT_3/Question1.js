const rls = require('readline-sync');

console.log("Question Number 1");

//For the user input I accept only a string, if he enters empty or nymbers he will need to insert a valid phrase
let input = "";
do {
    input = rls.question("Insert a sentence and watch the result: ");
}
while (input != null && !isNaN(input));

// Splitting the string and change the first letter to UPPERCASE
const arrString = input.split(" ");
for (let i = 0; i < arrString.length; i++) {
    arrString[i] = arrString[i].charAt(0).toUpperCase() + arrString[i].substr(1);
}

console.log('', '');
console.log("Final result is: ");

// Join the array with underscore
console.log(arrString.join("_"));