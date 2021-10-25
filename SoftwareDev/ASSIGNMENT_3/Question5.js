const rls = require('readline-sync');

const userSentence = rls.question("Insert your sentence: ");

const arrSentence = userSentence.split(" ");

let reversedArray = [];

for (let i = arrSentence.length - 1; i >= 0; i--) {
    let word = arrSentence.pop(arrSentence[i]);
    if (reversedArray.length === 0) {
        word = word.charAt(0).toUpperCase() + word.substr(1);
    }

    if (i === 0) {
        word = word + "!";
    }
    reversedArray.push(word);
}

const reversedSentence = reversedArray.join(" ");

console.log('', '');
console.log("This is the reversed sentence:");
console.log(reversedSentence);
console.log('', '');