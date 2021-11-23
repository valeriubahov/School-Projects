const express = require('express');
const figlet = require('figlet');

const app = express();

app.post('/ascii', (req, res) => {
    const txt =  req.query.myText;
    figlet(txt, { font: 'ghost' }, (err, data) => {
        res.setHeader('Content-type', 'text/plain')
        res.send(data);
    });
});

app.listen(8888, () => console.log("I am alive"));