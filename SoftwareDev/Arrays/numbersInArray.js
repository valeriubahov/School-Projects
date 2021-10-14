const rls = require('readline-sync');
let arraySize;
do {
    arraySize = (rls.question("How many numbers you want to insert? "));
}
while (isNaN(arraySize));

let arrData = [parseInt(arraySize)];
let inputNum;
let sumOfNumbers = 0;

for (let i = 0; i < arraySize; i++) {
    do {
        inputNum = rls.question("Insert your number: ");
    }
    while (isNaN(inputNum));


    inputNum = parseInt(inputNum);
    sumOfNumbers = parseInt(sumOfNumbers) + inputNum;
    arrData[i] = inputNum;
}

const averageNum = sumOfNumbers / arraySize;


let maxNumber = 0;
for (let k = 0; k < arraySize; k++) {
    for (let j = 1; j < arraySize; j++) {
        if (arrData[k] > arrData[j] && arrData[k] > maxNumber) {
            maxNumber = arrData[k];
        }
    }
}

let maxSoFar =0;
for (num of arrData){
    if (num > maxSoFar) {
        maxSoFar = num;
    }
}

console.log('', '');
console.log("The higher number is", maxNumber);

console.log("New method", maxNumber);

console.log("The average number is", averageNum);


