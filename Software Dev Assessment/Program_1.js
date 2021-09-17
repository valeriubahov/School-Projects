// Program created by Valeriu Bahov - W0459263
const readLine = require("readline-sync");

//Constants to use for calculation and messages
const pricePerKm = 15;
const taxValue = 14;
const dollarSimbol = "$";
const space = " ";
const emptyRow = '';

console.log("Hipster's Local Vinyl Records - Customer Order Details");
console.log(emptyRow, emptyRow);

//Input requests
const customerName = readLine.question("Enter the customer's name:" + space);
const distanceKm = parseFloat(readLine.question("Enter the distance in kilometers for delivery:" + space));
const recordsCosts = parseFloat(readLine.question("Enter the cost of cost of records purchased:" + space));

console.log(emptyRow, emptyRow);

//Calculation area
const deliveryCost = distanceKm * pricePerKm;
const calculatedTaxes = (recordsCosts * taxValue) / 100;
const purchaseCost = recordsCosts + calculatedTaxes;
const totalCost = deliveryCost + purchaseCost;

//Output of the results, added 'toFixed(2)' to round up at 2 decimals the results.
console.log("Purchase summary for" + space + customerName);
console.log("Delivery Cost:" + space + dollarSimbol + deliveryCost.toFixed(2));
console.log("Purchase Cost:" + space + dollarSimbol + purchaseCost.toFixed(2));
console.log("Total Cost:" + space + dollarSimbol + totalCost.toFixed(2));