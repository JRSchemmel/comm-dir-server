var http = require('http');
var fs = require('fs');

var config = function(request, response) {
  fs.readFile('index.html', function(err, data) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(data);
    response.end();
  });
}
var http = require('http');
var fs = require('fs');

var config = function(request, response) {
  fs.readFile('index.html', function(err, data) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(data);
    response.end();
  });
}

http.createServer(config).listen(5000);