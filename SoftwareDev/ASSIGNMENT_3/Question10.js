// A bubble sort is similar to the simple exchange sort we looked at in class.
// Read about bubble sort on Wikipedia.
// Write a function that takes an array of integers as a parameter and returns an array sorted using bubble sort.
const rls = require('readline-sync');
let arrayNumbers = [];
let isValidNumber;
let userInput;
let isExit = false;

do {
    isValidNumber = true;
    userInput = rls.question("Please insert a number or press Q to complete the input operation: ");
    if (userInput.toUpperCase() === 'Q') {
        isExit = true;
    }
    else if (isNaN(userInput) || userInput === '') {
        console.log('', '');
        console.log("Only numbers greater or equals to 0 are accepted.");
        console.log('', '');
        isValidNumber = false;
    }
    else {
        arrayNumbers.push(parseInt(userInput));
    }
}
while (!isValidNumber || !isExit);
console.log('', '');
console.log("Your input numbers were:\n", arrayNumbers.join(","));
console.log('', '');
arrayNumbers = bubbleSortArray(arrayNumbers);
console.log("Your ordered input numbers are:\n", arrayNumbers.join(","));

function bubbleSortArray(myArr) {
    for (let i = 0; i < myArr.length; i++) {
        for (let j = 0; j < myArr.length; j++) {
            if (myArr[j] > myArr[j + 1]) {
                let tmp = myArr[j];
                myArr[j] = myArr[j + 1];
                myArr[j + 1] = tmp;
            }
        }
    }
    return myArr;
}
