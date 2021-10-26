// Request a series of numbers from the user.
// They should be able to enter a ‘q’ to stop entering numbers and see the result.
//  As a result, create a ‘sideways’ bar chart of the numbers entered.
// Example: for the following array [2,6,10,3], 

const rls = require('readline-sync');
let userInput;
let isExit = false;
let isValidNumber;
let outputString = "";
const arrNumbers = [];
do {
    isValidNumber = true;
    userInput = rls.question("Please insert a number or press Q to complete the input operation: ");
    if (userInput.toUpperCase() === 'Q') {
        isExit = true;
    }
    else if (isNaN(userInput) || userInput < 0) {
        console.log('', '');
        console.log("Only numbers greater or equals to 0 are accepted.")
        isValidNumber = false;
    }
    else {
        arrNumbers.push(parseInt(userInput));
    }
}
while (!isValidNumber || !isExit);

for (let i = 0; i < arrNumbers.length; i++) {
    let counter = arrNumbers[i];
    if (counter > 0) {
        while (counter > 0) {
            outputString += "*";
            counter--;
        }
        outputString += "\n";
    }
    else {
        outputString += "\n";
    }
}
console.log('', '');
console.log(outputString);