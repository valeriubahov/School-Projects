const fs = require('fs');
const rls = require('readline-sync');

const PATH_STORY_FILE = "SoftwareDev/ASSIGNMENT_2/ITSY-BITSY/the_story_file.txt";
const PATH_CHOISES_FILE = "SoftwareDev/ASSIGNMENT_2/ITSY-BITSY/the_choices_file.csv";

console.log("The Itsy Bitsy Aardvark");
console.log('', '');

const storyContent = fs.readFileSync(PATH_STORY_FILE, "utf-8");
const choisesContent = fs.readFileSync(PATH_CHOISES_FILE, "utf-8");

const storyArray = storyContent.split("\r\n");

//We have the number of how many choises the user needs to do
const listOfChoises = choisesContent.split("\r\n");
const userChoises = Array(listOfChoises.length);

for (let i = 0; i < listOfChoises.length; i++) {
    const choisesArr = listOfChoises[i].split(",");
    console.log(printChoises(choisesArr));
    userChoises[i] = decriptChoise(choisesArr);
}

console.log('', '');
console.log("Your Completed Story: ");
console.log('', '');

//BUILD AND PRINT THE STORY
console.log(buildCompleteStory(storyArray, userChoises));


// FUNCTIONS SECTION

function buildCompleteStory(story, choises) {
    let completeStory = "";
    for (let k = 0; k < story.length; k++) {//4 lines
        for (let v = 0; v < choises.length; v++) { //7 choises
            story[k] = story[k].replace("_" + (v + 1) + "_", choises[v]);
        }
        completeStory += story[k] + "\n";
    }
    return completeStory;
}


function decriptChoise(array) {
    let userChoise;
    do {
        userChoise = rls.question("Enter choise (a-e): ").toLowerCase();
        console.log('', '');
        if (userChoise === 'a') {
            return array[1].toUpperCase();
        }
        else if (userChoise === 'b') {
            return array[2].toUpperCase();
        }
        else if (userChoise === 'c') {
            return array[3].toUpperCase();
        }
        else if (userChoise === 'd') {
            return array[4].toUpperCase();
        }
        else if (userChoise === 'e') {
            return array[5].toUpperCase();
        }
        else {
            console.log("Enter a valid choise from the choises listed above");
        }
    }
    while (
        userChoise !== 'a' ||
        userChoise !== 'b' ||
        userChoise !== 'c' ||
        userChoise !== 'd' ||
        userChoise !== 'e');
}


function printChoises(array) {
    let output = "";
    for (let j = 0; j < array.length; j++) {

        if (j === 0) {
            output += "Please choose " + array[j] + "\n";
        }
        if (j === 1) {
            output += "a) " + array[j] + "\n";
        }
        if (j === 2) {
            output += "b) " + array[j] + "\n";
        }
        if (j === 3) {
            output += "c) " + array[j] + "\n";
        }
        if (j === 4) {
            output += "d) " + array[j] + "\n";
        }
        if (j === 5) {
            output += "e) " + array[j] + "\n";
        }
    }
    return output;
}