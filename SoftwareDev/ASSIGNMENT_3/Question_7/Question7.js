const fs = require('fs');
const rls = require('readline-sync');
//  DEAN - JUST CHANGE THE PATH OF THE FILES 
const PATH_ORIGINAL_FILE = "SoftwareDev/ASSIGNMENT_3/Question_7/file.txt";

const fileContents = fs.readFileSync(PATH_ORIGINAL_FILE, "utf-8");
let userChoise = 0;
let numOfWords = 0;
let numOfChars = 0;
do {
    userChoise = parseInt(rls.question("Press 1 to count the empty characters or 2 to count only the printed characters: "));
}
while (isNaN(userChoise) || (userChoise < 1 || userChoise > 2));
let lines = fileContents.split("\r\n");
const numOfLines = lines.length;

switch (userChoise) {
    case 1:
        const chars = fileContents.length;
        for (let i = 0; i < lines.length; i++) {
            const arrWords = lines[i].split(" ");
            for (let j = 0; j < arrWords.length; j++) {
                if (arrWords[j] !== "") {
                    numOfWords++;
                }
            }
        }
        console.log("The file have", chars, "characters including spaces");
        console.log("Containing", numOfWords, "words");
        console.log("With a total of", numOfLines, "lines");
        break;
    case 2:
        for (let i = 0; i < lines.length; i++) {
            const arrWords = lines[i].split(" ");

            for (let j = 0; j < arrWords.length; j++) {
                if (arrWords[j] !== "") {
                    numOfWords++;
                }
                numOfChars += arrWords[j].length;
            }
        }

        console.log("The file have", numOfChars, "characters without spaces");
        console.log("Containing", numOfWords, "words");
        console.log("With a total of", numOfLines, "lines");
        break;
}



