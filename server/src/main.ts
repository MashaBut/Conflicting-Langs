import { MessageType } from "../../library/dist/index";
import { MessageCreator } from "../../library/dist/message-creator";
import { Room } from "./room";
import { EventHandling } from "./event-handling";
const express = require('express');
const webSocket = require('ws');
const { createServer } = require('http');
const app = express();
const server = createServer(app);
const wss = new webSocket.Server({ server });
const uuidv1 = require('uuid/v1');
const request = require('request');
import * as jwt from "jsonwebtoken";
import { User } from "./user";
import { Result } from "./result";

app.use(express.static('client/dist'));
let eventHanding = new EventHandling();
let sockets: Map<string, any> = new Map();
let clients: Map<string, string> = new Map();
let tokens: Map<string, any> = new Map();
let rooms = new Array<Room>();
let messageCreator = new MessageCreator();
let results: Array<Result> = new Array<Result>();
wss.on('connection', function (ws: any) {
    let id = String(uuidv1());
    let token: any;
    let user: User = new User();
    ws.on('message', (message: any) => {
        const msg = JSON.parse(message);
        switch (msg.type) {
            case MessageType.Token:
                token = jwt.decode(msg.token);
                tokens.set(id, msg.token);
                sockets.set(id, ws);
                clients.set(id, token.username);
                var options1 = {
                    url: 'https://cooper.games/api/users/nickname/' + token.username,
                    headers: {
                        'authorization': 'Bearer ' + msg.token
                    }
                };
                request(options1, function (error: any, response: any, body: string) {
                    const info = JSON.parse(body);
                    user.photoURL = String(info.photoURL);
                    user.id = info.id;
                    user.nickname = info.nickname;
                });
                sockets.get(id).send(JSON.stringify(messageCreator.createMessageSetName(user.nickname, user.photoURL)));
                eventHanding.sendRooms(rooms, sockets);
                break;
            case MessageType.SetName:
                sockets.get(id).send(JSON.stringify(messageCreator.createMessageSetName(user.nickname, user.photoURL)));
                break;
            case MessageType.SetNameRoom:
                let room = new Room(msg.name, id, user.photoURL, clients.get(id));
                room.settingsRoom(msg.settings);
                rooms.push(room);
                eventHanding.sendRooms(rooms, sockets);
                break;
            case MessageType.JoinTheRoom:
                eventHanding.sendRooms(rooms, sockets);
                for (let room of rooms) {
                    if (room.id === msg.id) {
                        eventHanding.gameStart(room, sockets, clients, id, user.photoURL);
                        break;
                    }
                }
                break;
            case MessageType.GridSending:
                eventHanding.setLines(msg.verticalLines, msg.horizontalLines);
                break;
            case MessageType.BlockReversalEvent:
                eventHanding.rotateBlock(id, msg.dices, msg.color, rooms, sockets);
                break;
            case MessageType.PositionCheck:
                eventHanding.positionCheck(id, rooms, msg.block, sockets);
                break;
            case MessageType.EventTossDice:
                eventHanding.sendTossDice(id, rooms, sockets, msg.color);
                break;
            case MessageType.GameActionEvents:
                eventHanding.sendEvent(id, msg.event, rooms, sockets);
                break;
            case MessageType.MoveToHollPage:
                eventHanding.sendDisconnect(id, rooms, sockets);
                eventHanding.sendRooms(rooms, sockets);
                break;
            case MessageType.SaveBlock:
                eventHanding.saveBlock(id, rooms, msg.block, sockets);
                break;
            case MessageType.ResultOfGame:
                eventHanding.setResult(id, rooms, msg.area1, msg.area2, results, clients, sockets);
                eventHanding.setResultOfGame(id, rooms, sockets);
                eventHanding.sendRooms(rooms, sockets);
                break;
        }
    })
    ws.on('close', function () {
        eventHanding.sendDisconnect(id, rooms, sockets);
        sockets.delete(id);
        clients.delete(id);
        tokens.delete(id);
    });
});

server.listen(8080, function () {
    console.log('Listening on http://localhost:8080');
});