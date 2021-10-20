const fs = require('fs');

//  DEAN - JUST CHANGE THE PATH OF THE FILES 
const PATH_ORIGINAL_FILE = "SoftwareDev/ASSIGNMENT_2/A-TEAM/fileOriginal.txt";
const PATH_MODIFIED_FILE = "SoftwareDev/ASSIGNMENT_2/A-TEAM/fileModified.txt";
const DASHES = "----------------------------------";

printHeader("Original Text");

//Read the file and retrieve the content
const fileContents = fs.readFileSync(PATH_ORIGINAL_FILE, "utf-8");
console.log(fileContents);

//Split the content into the array
let phraseArr = fileContents.split("\r\n");

//Generate a random number based on the array length which will identify the line to skip
const lineToSkip = Math.ceil(Math.random() * phraseArr.length);

//Create the new file where the modified content will be saved, if the file exists the contend will be cleared
fs.openSync(PATH_MODIFIED_FILE, "w");

for (let i = 0; i < phraseArr.length; i++) {
    //If the id is equal to the line to skip -1 I will print an empty line
    if (i === lineToSkip - 1) {
        phraseArr[i] = "";
    }
    else {
        //Add the line number at the beggining of the row
        phraseArr[i] = (i + 1) + ": " + checkLines(phraseArr[i]);
    }
    writeLine(phraseArr[i]);
}

console.log('', '');
printHeader("Altered Text");

const fileContentsModified = fs.readFileSync(PATH_MODIFIED_FILE, "utf-8");
console.log(fileContentsModified);


//  FUNCTIONS

//Printing the headers
function printHeader(msg) {
    console.log(DASHES);
    console.log(msg);
    console.log(DASHES);
}


//Writing the lines from array to the new file
function writeLine(text) {
    fs.writeFileSync(PATH_MODIFIED_FILE, text + "\n",
        {
            encoding: "utf8",
            flag: "a"
        });
}


function checkLines(lineText) {
    //If the line has more than 20 character all the phrase will be converted to lower case
    if (lineText.length > 20) {
        lineText = lineText.toLowerCase();
    }
    else {
        //if the line lenght is lesser than 20 then convert all to UPPER CASE
        lineText = lineText.toUpperCase();
    }
    return lineText;
}