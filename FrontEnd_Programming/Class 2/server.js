const http = require('http');
const express = require('express');
const fs = require('fs');

const app = express();
let content = "";
fs.readFile('calculator.html', 'utf8', (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    content = data;
});

app.get('/', (req, res) => {
    res.writeHeader(200, { "Content-Type": "text/html" });
    res.write(content);
    res.end();
});

app.get('/films', (req, res) => {
    fs.readFile('json.js', 'utf8', (err, data) => {
        if (err) {
            console.error(err)
            return
        }

        // const jsonObj = JSON.stringify(data);
        res.write(JSON.stringify(data));
        res.end();
    });

});

app.listen(8888, () => console.log('server running on port ' + 8888));