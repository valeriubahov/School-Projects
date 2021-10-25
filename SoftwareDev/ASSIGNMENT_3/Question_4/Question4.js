// Ask the user for a title, a heading, a sentence, and their favorite website URL.
// Output an HTML file that uses the information they provided.

const rls = require('readline-sync');
const fs = require('fs');

console.log("Question Number 4");


const HTML_TAG_START = "<!DOCTYPE html>" + "\n" + '<html lang="en">';
const HTML_TAG_END = "</html>";

const HTML_HEAD_START = '<head>' + "\n" + '<meta charset="UTF-8">' + "\n" + '<meta http-equiv="X-UA-Compatible" content="IE=edge">' + "\n" + '<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>';
const HTML_HEAD_END = "</head>";

const HTML_BODY_START = "<body>";
const HTML_BODY_END = "</body>";

const HTML_TITLE_START = "<title>";
const HTML_TITLE_END = "</title>";

const HTML_HEADER_START = "<header>";
const HTML_HEADER_END = "</header>";

//User input title
const userTitle = rls.question("Insert you page title: ");

//User input header
const userHeading = rls.question("Insert the page heading: ");

//User input sentence
const userSentence = '<p>' + rls.question("Insert a sentence: ") + '</p>';

//user input URL without HTTPS://
const userUrl = rls.question("Insert your favourite website URL (without HTTPS://): ");
const URL_TAG = '\n' + '<p>This is your favourite website: <a href="https://' + userUrl + '">' + userUrl + '</a></p>';

//PLEASE CHANGE THE URL TO YOUR PREFERENCE
const PATH_HTML_FILE = "SoftwareDev/ASSIGNMENT_3/Question_4/index.html";
fs.openSync(PATH_HTML_FILE, "w");

createHTMLPage();



function createHTMLPage() {
    //HTML
    writeHtmlTags(PATH_HTML_FILE, HTML_TAG_START);

    // HEAD TAG
    writeHtmlTags(PATH_HTML_FILE, HTML_HEAD_START);
    //TITLE TAG
    writeHtmlTags(PATH_HTML_FILE, HTML_TITLE_START);
    // TITLE
    writeHtmlTags(PATH_HTML_FILE, userTitle);
    //TITLE TAG END
    writeHtmlTags(PATH_HTML_FILE, HTML_TITLE_END);
    // HEAD END
    writeHtmlTags(PATH_HTML_FILE, HTML_HEAD_END);

    //BODY
    writeHtmlTags(PATH_HTML_FILE, HTML_BODY_START);

    // HEADER START
    writeHtmlTags(PATH_HTML_FILE, HTML_HEADER_START);

    // INSERT USER HEADER WITH H1
    writeHtmlTags(PATH_HTML_FILE, "<h1>" + userHeading + "</h1>");
    //HEADER END
    writeHtmlTags(PATH_HTML_FILE, HTML_HEADER_END);

    //PRINTING THE SENTENCE IN THE P TAG
    writeHtmlTags(PATH_HTML_FILE, userSentence);

    //PRINTING THE URL IN THE A HREF TAG
    writeHtmlTags(PATH_HTML_FILE, URL_TAG);

    //BODY END
    writeHtmlTags(PATH_HTML_FILE, HTML_BODY_END);
    // HTML END
    writeHtmlTags(PATH_HTML_FILE, HTML_TAG_END);
}


function writeHtmlTags(file, text) {
    fs.writeFileSync(file, text + "\n",
        {
            encoding: "utf8",
            flag: "a"
        });
}