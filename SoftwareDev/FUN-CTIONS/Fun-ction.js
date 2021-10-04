const rls = require("readline-sync");
const number1 = parseInt(rls.question("Enter your first number: "));
const number2 = parseInt(rls.question("Enter your second number: "));
const symbol = "-";
console.log(printSymbol(symbol, 22));
console.log("|      SUMULATOR!     |");
console.log(printSymbol(symbol, 22));
console.log("|      THE SUM IS     |");
console.log("|          " + addNums(number1, number2) + "         |");
console.log(printSymbol(symbol, 22));


function printSymbol(symbol, manyTime) {
    let symbolMsg = "";
    for (let i = 0; i < manyTime; i++) {
        symbolMsg += symbol;
    }
    return symbolMsg;
}



function addNums(num1, num2) {
    return num1 + num2;
}