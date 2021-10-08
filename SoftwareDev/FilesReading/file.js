//Read a file

const fs = require('fs');

const fileContents = fs.readFileSync("SoftwareDev/FilesReading/my.txt", "utf-8");


console.log(fileContents);
