const readLine = require("readline-sync");

const firstNum = parseFloat(readLine.question("Please enter a number: "));
const secondNum = parseFloat(readLine.question("Please enter the second number: "));
const thirdNum = parseFloat(readLine.question("Please enter the third number: "));

const sumNumbers = firstNum + secondNum;
const diffNumbers = firstNum - secondNum;
const exponential = firstNum ** secondNum
const square = Math.sqrt(firstNum, secondNum);

const equation = ((-1 * secondNum) + Math.sqrt(secondNum ** 2 - 4 * firstNum * thirdNum)) / 2 * firstNum;

const equation2 = ((-1 * secondNum) - Math.sqrt(secondNum ** 2 - 4 * firstNum * thirdNum)) / 2 * firstNum;


//x= (-b +- sqrt(b**2-4*a*c)/2*a


console.log("The sum of the two numbers is: " + sumNumbers);
console.log("The difference of the two numbers is: " + diffNumbers);
console.log("The quadratic value of the two numbers is:" + exponential);
console.log("The radQ value of the two numbers is:" + square);

console.log("Equation value = " + equation);
console.log("Equation value = " + equation2);