// Program created by Valeriu Bahov - W0459263
const readLine = require("readline-sync");
const emptyRow = "";
const space = " ";

console.log("Imperial To Metric Conversion");
console.log(emptyRow, emptyRow);

const tons = parseInt(readLine.question("Enter the number of tons:" + space));
const stone = parseInt(readLine.question("Enter the number of stone:" + space));
const pounds = parseInt(readLine.question("Enter the number of pounds:" + space));
const ounces = parseInt(readLine.question("Enter the number of ounces:" + space));

//Calculate the total weight in Ounces
const totalOunces = (35840 * tons) + (224 * stone) + (16 * pounds) + ounces;
//Convert the total Ounces in Kilos
const totalKilos = totalOunces / 35.274;

//Calculate the metric Tons and convert the result in Integer
const metricTons = parseInt(totalKilos / 1000);

//Calculate the metric kilos
const kilos = totalKilos - (metricTons * 1000);
// and convert the result in Integer
const metricKilos = parseInt(kilos);

//Calculate the metric grams and round the result to 1 decimal
const metricGrams = ((kilos - metricKilos) * 1000).toFixed(1);

console.log(emptyRow, emptyRow);

//Printing the results
console.log("The metric weight is" + space + metricTons + space + "metric tons," + space + metricKilos + space + "kilos, and" + space + metricGrams + space + "grams.");