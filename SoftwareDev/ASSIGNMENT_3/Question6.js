const rls = require('readline-sync');

const userSentence = rls.question("Insert your sentence: ");

const arrSentence = userSentence.split(" ");

//Randomly shuffle the array
for (let i = arrSentence.length - 1; i >= 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let tmp = arrSentence[i];
    arrSentence[i] = arrSentence[j];
    arrSentence[j] = tmp;
    //Add the period at the end
    if (i === arrSentence.length - 1) {
        arrSentence[i] = arrSentence[i] + "!";
    }
    //Cpaitalize the first char on the first word
    else if (i === 0) {
        arrSentence[i] = arrSentence[i].charAt(0).toUpperCase() + arrSentence[i].substr(1);
    }
}
console.log('', '');
console.log("The randomly printed sentence is: ");
console.log(arrSentence.join(" "));
console.log('', '');