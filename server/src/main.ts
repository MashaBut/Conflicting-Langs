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

app.use(express.static('client/dist'));
let eventHanding = new EventHandling();
let sockets: Map<string, any> = new Map();
let clients: Map<string, string> = new Map();
let rooms = new Array<Room>();

wss.on('connection', function (ws: any) {
    let id = String(uuidv1());
    ws.on('message', (message: any) => {
        const msg = JSON.parse(message);
        switch (msg.type) {
            case MessageType.SetName://get cooper
                sockets.set(id, ws);
                clients.set(id, msg.name);
                eventHanding.sendRooms(rooms, sockets);
                break;
            case MessageType.SetNameRoom://+
                let room = new Room(msg.name, id, clients.get(id));
                room.settingsRoom(msg.settings);
                rooms.push(room);
                eventHanding.sendRooms(rooms, sockets);
                break;
            case MessageType.JoinTheRoom://+
                eventHanding.sendRooms(rooms, sockets);
                for (let room of rooms) {
                    if (room.id === msg.id) {
                        eventHanding.gameStart(room, sockets, clients, id);
                        break;
                    }
                }
                break;
            case MessageType.GridSending:
                eventHanding.setLines(msg.verticalLines, msg.horizontalLines);
                break;
            case MessageType.BlockReversalEvent:
                eventHanding.rotateBlock(id,msg.dices, msg.color, rooms, sockets);
                break;
            case MessageType.PositionCheck:
                eventHanding.positionCheck(id, rooms, msg.block, sockets);
                break;
            case MessageType.EventTossDice:
                eventHanding.sendTossDice(id,rooms, sockets, msg.color);
                break;
            case MessageType.GameActionEvents:
                eventHanding.sendEvent(id,msg.event, rooms, sockets);
                break;
            case MessageType.MoveToHollPage:
                eventHanding.sendDisconnect(id,rooms,sockets);
                eventHanding.sendRooms(rooms, sockets);
                break;
            case MessageType.SaveBlock:
                eventHanding.saveBlock(id, rooms, msg.block, sockets);
                break;
            case MessageType.ResultOfGame:
                console.log("Area: " + msg.area);
                eventHanding.setResultOfGame(id,rooms,sockets);
                eventHanding.sendRooms(rooms, sockets);
                break;
        }
    })
    /*ws.on('close', function () {
    });*/
});

server.listen(8080, function () {
    console.log('Listening on http://localhost:8080');
});