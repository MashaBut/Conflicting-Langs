var express = require('express');
var path = require('path');
var createServer = require('http').createServer;
var webSocket = require('ws');
var app = express();
app.use(express.static('dist'));
var server = createServer(app);
var wss = new webSocket.Server({ server: server });
var clients = new Array();
wss.on('connection', function (ws) {
    var client = new Client(DataGenerator.idClient());
    console.log(client.id);
    clients.push(client);
    ws.on('message', function (message) { return console.log('Message: ', message); });
    ws.on('close', function () {
        clients.splice(clients.indexOf(client), 1);
        console.log('stopping client interval');
    });
});
app.get('/home', function (req, res) { return res.render('index.html'); });
server.listen(8080, function () {
    console.log('Listening on http://localhost:8080');
});
var Client = /** @class */ (function () {
    function Client(id) {
        this.id = id;
    }
    Client.prototype.setName = function (name) {
        this.name = name;
    };
    return Client;
}());
var DataGenerator = /** @class */ (function () {
    function DataGenerator() {
    }
    DataGenerator.idClient = function () {
        var id = (Math.random() * (999999 - 100000 + 1) + 100000);
        return Number(id.toPrecision(6));
    };
    return DataGenerator;
}());
