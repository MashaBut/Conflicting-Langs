var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var clients = new Array();
var host = '127.0.0.1';
var port = 7000;
app.use('/', express.static('dist'));
app.use(function (req:any, res:any, next:any) {
    res.status(404).type('text/plain');
    res.send('Not found');
});
app.get('/any', function (req:any, res:any) {
    res.status(200).type('text/plain');
    res.send('all page');
});
/*app.listen(3000, () => {
  console.log(`Server listens`)
})*/
http.listen(port, host, function () { return console.log("Server listens http://" + host + ":" + port); });