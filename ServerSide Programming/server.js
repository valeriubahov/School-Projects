const http = require('http');

const myServer = http.createServer((req, resp) => {
    const body = '<h1>hello world</h1>';
   
});

myServer.listen(8888,()=>"I am alive");