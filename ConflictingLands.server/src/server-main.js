"use strict";
exports.__esModule = true;
var message_factory_1 = require("./message-factory");
//import express from "express";
var express = require('express');
var webSocket = require('ws');
var createServer = require('http').createServer;
var app = express();
var server = createServer(app);
var wss = new webSocket.Server({ server: server });
app.use(express.static('ConflictingLands.client/dist'));
var clients = new Array();
var messageFactory = new message_factory_1.MessageFactory();
wss.room = new Array();
wss.on('connection', function (ws) {
    var client = new Client(DataGenerator.idClient());
    clients.push(client);
    ws.on('message', function (message) {
        var info = JSON.parse(message);
        switch (info.Type) {
            case 0:
                client.setName(info.Name);
                wss.room.forEach(function (room) {
                    if (room.countUsers === 1) {
                        wss.clients.forEach(function (cl) {
                            if (cl === client)
                                cl.send(messageFactory.createMessageSetNameRoom(room.name));
                        });
                    }
                });
                break;
            case 1:
                client.setNameRoom(info.nameRoom);
                var creator = new Room(info.nameRoom, client.id);
                wss.room.push(creator);
                wss.clients.forEach(function (client) {
                    client.send(messageFactory.createMessageSetNameRoom(info.nameRoom));
                });
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
    function Room(name, firstClient) {
        this.name = name;
        this.fisrtClient = firstClient;
        this.countUsers = 1;
    }
    return Room;
}());
