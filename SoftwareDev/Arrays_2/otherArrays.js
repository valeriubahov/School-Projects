
const rls = require('readline-sync');

//Possible, but don't use it until more info, weird stuff
//const names = ['Dean', 'Valeriu', 'Tim','Kim', true, 13, 3.14159];

const names = ['Dean', 'Valeriu', 'Tim', 'Kim'];

const names2 = Array(7);

console.log(names);
console.log(names2);



const countries = ['Canada', 'Italy', 'Moldova'];

console.log(typeof (countries));
console.log(Array.isArray(countries));
console.log(countries instanceof Array);l

//Concat the array in a single variable like a String - you can put a simbol in the join parameters to tell what separator you want to have instead of a comma
const stringCountries = new String(countries.join());

console.log(stringCountries);

console.log(stringCountries instanceof String);

console.log(typeof (stringCountries));



const lineCSV = "Dean,MacDonald Street,50";

const datas = lineCSV.split(",");

console.log(datas);



const test = "Hello, my name is: Valeriu Bahov!";

const splitUp = test.split(" ");

console.log(splitUp);
console.log(Array.isArray(splitUp));