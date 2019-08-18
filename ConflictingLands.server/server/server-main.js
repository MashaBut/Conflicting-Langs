"use strict";
exports.__esModule = true;
var express = require("express");
var webSocket = require('ws');
var createServer = require('http').createServer;
var app = express();
var server = createServer(app);
var wss = new webSocket.Server({ server: server });
app.use(express.static('dist'));
var clients = new Array();
var rooms = new Array();
wss.on('connection', function (ws) {
    ws.room;
    var client = new Client(DataGenerator.idClient());
    clients.push(client);
    ws.on('message', function (message) {
        console.log(JSON.parse(message));
        switch (JSON.parse(message).Type) {
            case 0:
                var name_1 = JSON.parse(message);
                client.setName(name_1.Name);
                //  ws.send("I am here");
                break;
            case 1:
                var nameRoom = JSON.parse(message);
                client.setNameRoom(nameRoom.nameRoom);
                var room = void 0;
                break;
        }
    });
    /* ws.on('close', function () {
         clients.splice(clients.indexOf(client), 1);
         console.log('stopping client interval');
     });*/
});
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
    Client.prototype.setNameRoom = function (nameRoom) {
        this.nameRoom = nameRoom;
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
var Room = /** @class */ (function () {
    function Room() {
    }
    return Room;
}());
