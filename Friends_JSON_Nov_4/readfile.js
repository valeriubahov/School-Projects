const fs = require('fs');

const content = fs.readFile('friends.txt',(err,data)=>{
    console.log(data.toString());
});


console.log("WE ARE DONE");