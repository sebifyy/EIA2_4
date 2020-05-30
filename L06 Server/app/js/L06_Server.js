var url = require('url');
var http = require('http');
//create a server object:
http.createServer(function (req, res) {
    var url_parts = url.parse(req.url, true);
    res.write(url_parts); //write a response to the client
    res.end(); //end the response
}).listen(80); //the server object listens on port 80


