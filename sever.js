/**
 * Created by Branden on 2016-09-08.
 */
// link to the http library that ships with node
    var http = require('http');

// launch the http serber and send a request asynchronously
http.createServer(function (request, response) {
    response.writeHead(200); // status ok
    response.end('First node page');
}).listen(3000);

console.log('server running on port 3000');