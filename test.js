// course link - https://www.youtube.com/watch?v=bdHE2wHT-gQ&list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU&index=5

const http = require('http');
const fs = require('fs');
const _ = require('lodash');


PORT_NUM = 3000;

const server = http.createServer((req, res) => {
    console.log('request made');
    console.log(req.url,req.method);

    res.setHeader('Content-type','text-html');

    let path = './';
    switch(req.url){
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    /*response status codes */
    // 200 - ok
    // 301 - resource moved
    // 404 - Not found
    // 500 - internal server error

    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);

        }
        else {
            res.end(data);
        }
    })

})

server.listen(PORT_NUM,'localhost',() => {
    console.log(`listening on port ${PORT_NUM}`);
})