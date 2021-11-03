const http = require('http');

http.createServer((req, res) => {
    res.setHeader('Content-Type','text/html');
    res.write("Hello <b>world</b>");
    
    res.end();
}).listen(8888);
