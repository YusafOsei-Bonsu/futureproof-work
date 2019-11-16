const http = require('http');
const url = require('url');

const localServer = http.createServer(function (request, response) {
    let name = url.parse(request.url, true).query;

    /* Response headers (including status code & content-type) */
    response.writeHead(200, {"Content-Type": 'text/html'});
    response.end(`${reverseWord(name.name)}`);
});

// Reverses the word
const reverseWord = (word) => word != undefined ? word.split("").reverse().join("") : null;

/* Listening to the port (3000) on the IP address (127.0.0.1) */
localServer.listen(3000, '127.0.0.1');