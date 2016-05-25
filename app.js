"use strict";

const http = require("http");
const fs = require('fs');
const url = require("url");
const path = require('path');

let mimeTypes = {
    '.js': 'text/javascript',
    '.html': 'text/html',
    '.css': 'text/css',
    '.jpg': 'image/jpeg',
    '.png': 'image/png',
    '.svg': 'image/svg+xml',
};

http.createServer(function onRequest(request, response) {
    let pathname = url.parse(request.url).pathname;
    if (pathname == '/') {
        pathname = '/index.html';
    }
    pathname = pathname.substring(1, pathname.length);
    let extname = path.extname(pathname);
    let mimeType = mimeTypes[extname];

    console.log(`Запрос: ${pathname}`);

    if (extname == ".jpg" || extname == ".png" || extname == ".svg") {
        let img = fs.readFileSync('app/' + pathname);
        response.writeHead(200, {
            'ContentType': mimeType
        });
        response.end(img, 'binary');
    } else {
        fs.readFile('app/' + pathname, 'utf-8', (err, data) => {
            if (err) {
                console.log(`Не могу прочитать: ${pathname}`);
            } else {
                //console.log(path.extname(pathname));
                response.writeHead(200, {
                    'Content-Type': mimeType
                });

                response.end(data);
            }
        })
    }
}).listen(8888);