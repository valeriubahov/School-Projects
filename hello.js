
let rls = require("readline-sync");
let firstNum = rls.question("Insert the first number: ");

let secondNum = rls.question("Insert the second number: ");

let sum = parseInt(firstNum) + parseInt(secondNum);

let msg = "I am " + sum  + " years old";
console.log(msg);


