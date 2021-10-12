const rls = require("readline-sync");
let countries = [];

for (let i = 0; i < 3; i++) {
    countries.push(rls.question("Insert a country "));
}

countries.unshift()
console.log(countries);

