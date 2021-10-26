//  Request that the user enter a sentence that is exactly 5 words long,
//  with no word longer than 10 characters.
//  The whole sentence must contain no more than 8 vowels.
//  Keep asking the user for another sentence until they give you a valid entry

const rls = require('readline-sync');
let userInput;
let isSentenceValid;
let vowelsCount;

do {
    isSentenceValid = true;
    vowelsCount = 0;
    console.log('', '');
    userInput = rls.question("Insert a sentence that must have exactly 5 words. \nThe words need to be less than 11 characters. \nThe whole sentence must contain no more than 8 vowels: ");
    console.log('', '');

    const arrWords = userInput.split(" ");
    // Check that the user inserted exactly 5 words
    if (arrWords.length !== 5) {
        isSentenceValid = false;
        console.log("Please enter a sentence with exactly 5 words in it.");
    }
    else {
        for (let i = 0; i < arrWords.length; i++) {
            //Check words length to be no more than 10 characters
            if (arrWords[i].length > 10) {
                isSentenceValid = false;
                console.log("Please enter only words that does not have more than 10 characters.");
            }

            // Check with regular expression how many vowels the word contains
            const wordVowels = arrWords[i].match(/[aeiou]/gi);
            if (wordVowels !== null) {
                vowelsCount += wordVowels.length;
            }
        }
        if (vowelsCount > 8) {
            console.log("The sentence must contain no more than 8 vowels");
            isSentenceValid = false;
        }
    }
}
while (!isSentenceValid);

console.log("The sentense:\n'" + userInput + "'\nIs a VALID sentence");
console.log('', '');