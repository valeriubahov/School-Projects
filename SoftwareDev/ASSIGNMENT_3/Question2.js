// Ask the user how many numbers they would like to process. - V
// Then accept that many numbers from the user. - V
// After they enter the final number, present them with:  - V
// the averageof the numbers entered,   - V
// the minimum value entered,   - V
// and the maximum value entered.   - V

const rls = require('readline-sync');

console.log("Question Number 2");
console.log('', '');

let averageNumber = 0;
let minNumber = 0;
let maxNumber = 0;
let num_of_nums = 0;
do {
    num_of_nums = parseInt(rls.question("Please type how many nymbers you want to insert: "));
}
while (isNaN(num_of_nums) || num_of_nums <= 0);

const arrayOfNums = [];

for (let i = 0; i < num_of_nums; i++) {
    let userInput = 0;
    do {
        userInput = parseInt(rls.question("Insert number " + (i + 1) + ": "));
    }
    while (isNaN(num_of_nums));
    arrayOfNums.push(userInput);

    //checking and saving the min, max and average number
    averageNumber += userInput;

    if (i > 0) {
        if (userInput > maxNumber) {
            maxNumber = userInput;
        }
        else if (userInput < minNumber) {
            minNumber = userInput;
        }
    }
    else {
        minNumber = userInput;
        maxNumber = userInput
    }

}

averageNumber = Math.floor(averageNumber / num_of_nums);

console.log('', '');
console.log("Average Number: " + averageNumber);
console.log("Minimum value: " + minNumber);
console.log("Maximun value: " + maxNumber);