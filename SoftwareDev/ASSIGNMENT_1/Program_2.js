// Program created by Valeriu Bahov - W0459263
const readLine = require("readline-sync");

const dollarSimbol = "$";
const weeksPerYear = 52;
const emptyRow = '';
const space = " ";

console.log("Weekly Loan Calculator");
console.log(emptyRow, emptyRow);

//Input requests - convert all data types from string to Float or Integer
const loan = parseFloat(readLine.question("Enter the amount of loan:" + space));
const interest = parseFloat(readLine.question("Enter the interest rate (%):" + space));
//I assume that the years are Integer and we can't insert a value like a 2.9 years.
const years = parseInt(readLine.question("Enter the number of years:" + space));

// Calculate the number of weekly payments
const weeksToPay = years * weeksPerYear;

// Calculate the weekly interest factor
const interestCalculated = (interest / weeksPerYear) * 0.01;

// Calculate the weekly payment
const weeklyPayment = (interestCalculated / (1 - 1 / (Math.pow(1 + interestCalculated, weeksToPay)))) * loan;

// Weekly payment rounded to 2 decimals
const totalWeekly = weeklyPayment.toFixed(2);

console.log(emptyRow, emptyRow);
console.log("Your weekly payment will be:" + space + dollarSimbol + totalWeekly);