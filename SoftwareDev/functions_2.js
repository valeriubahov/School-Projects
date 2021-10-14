const rls = require("readline-sync");

let userChoise = rls.question("What program you want to run: ");

switch (userChoise) {
    case '1':
        runProgram1();
        break;

    case '2':
        runProgram2();
        break;

    case '3':
        runProgram3();
        break;
}

function runProgram1() {
    const userName = rls.question("Insert your name: ");
    const userAge = rls.question("Insert your age: ");
    console.log(printNameAge(userName, userAge));
}

function runProgram2() {
    const quoteArray = [
        "The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela",
        "The way to get started is to quit talking and begin doing. -Walt Disney",
        "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. -Steve Jobs",
        "If life were predictable it would cease to be life, and be without flavor. -Eleanor Roosevelt",
        "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. -Oprah Winfrey",
        "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. -James Cameron",
        "Life is what happens when you're busy making other plans. -John Lennon"
    ]

    for (let i = 0; i < quoteArray.length; i++) {
        printRandomQuote(quoteArray);
    }
}

function runProgram3() {
    console.log("Please follow the instruction to make 10 deposits to your bank account: ")
    const bankAccount = [];
    for (let j = 0; j < 10; j++) {
        const deposit = rls.question("Deposit " + (j + 1) + ": ");
        bankAccount.push(deposit);
    }
    console.log(bankAccount);
}


function printRandomQuote(myArray) {
    const quotePosition = Math.ceil(Math.random() * myArray.length - 1);
    console.log(myArray[quotePosition]);
}

function printNameAge(name, age) {
    const msg = "Hey " + name + " you are " + age + " years old!";
    return msg;
}

