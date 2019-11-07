import { MessageType } from "../../library/dist/index";
import { Room } from "./room";
import { EventHandling } from "./event-handling";
const express = require('express');
const webSocket = require('ws');
const { createServer } = require('http');
const app = express();
const server = createServer(app);
const wss = new webSocket.Server({ server });
const uuidv1 = require('uuid/v1');
import * as jwt from "jsonwebtoken";
const request = require('request');

app.use(express.static('client/dist'));
let eventHanding = new EventHandling();
let sockets: Map<string, any> = new Map();
let clients: Map<string, string> = new Map();
let rooms = new Array<Room>();

eventHanding.initPicture();
wss.on('connection', function (ws: any) {
    let id = String(uuidv1());
    let token: any;
    let picture: any;
    ws.on('message', (message: any) => {
        const msg = JSON.parse(message);
        switch (msg.type) {
            case MessageType.Token:
                token = jwt.decode(msg.token);
                sockets.set(id, ws);
                clients.set(id, token.username);
                request('https://cooper.games/platform/profile/hunroll',function(error:any,response:any,body:any){
                    console.log("error ",error);
                    console.log('statusCode: ' ,response && response.statusCode);
                    console.log('body:',body);
                });
                picture = eventHanding.picture.get(token.username);
                console.log(picture);
                eventHanding.sendRooms(rooms, sockets);
                break;
            case MessageType.SetName://get cooper
                /* sockets.set(id, ws);
                 clients.set(id, msg.name);
                 eventHanding.sendRooms(rooms, sockets);*/
                break;
            case MessageType.SetNameRoom://+
                let room = new Room(msg.name, id, eventHanding.picture.get(token.username), clients.get(id));
                room.settingsRoom(msg.settings);
                rooms.push(room);
                eventHanding.sendRooms(rooms, sockets);
                break;
            case MessageType.JoinTheRoom://+
                eventHanding.sendRooms(rooms, sockets);
                for (let room of rooms) {
                    if (room.id === msg.id) {
                        eventHanding.gameStart(room, sockets, clients, id, eventHanding.picture.get(token.username));
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
                eventHanding.setResultOfGame(id, rooms, sockets);
                eventHanding.sendRooms(rooms, sockets);
                break;
            default:
                console.log(msg);
                token = jwt.decode(msg);
                console.log("i am " + token);
                break;
        }
    })
    /*ws.on('close', function () {
    });*/
});

server.listen(8080, function () {
    console.log('Listening on http://localhost:8080');
});