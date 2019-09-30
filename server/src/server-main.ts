import { MessageFactory } from "../../library/dist/message-factory";
//import { MessageFactory } from '@message-facroty';
import { MessageType, MessageJoinRoom } from "../../library/dist/index";
import { Room } from "./room";
//const MessageFactory =  require('@message-facroty');
const express = require('express');
const webSocket = require('ws');
const { createServer } = require('http');
const app = express();
const server = createServer(app);
const wss = new webSocket.Server({ server });
const uuidv1 = require('uuid/v1');

app.use(express.static('client/dist'));
wss.room = new Array<Room>();
let messageFactory = new MessageFactory();

let sockets: Map<string, any> = new Map();
let clients: Map<string, string> = new Map();
let rooms: Map<string, string> = new Map();
let roomsConn: Map<string, Map<string, string>> = new Map();

wss.on('connection', function (ws: any, r: any, client: any) {
    let id: string = String(uuidv1());
    ws.on('message', (message: any) => {
        let msg: any = JSON.parse(message);
        switch (msg.type) {
            case MessageType.SetName:
                sockets.set(id, ws);
                clients.set(id, msg.name);
                pushRooms();
                break;
            case MessageType.SetNameRoom:
                rooms.set(id, msg.name);
                pushRooms();
                break;
            case MessageType.JoinRoom:
                join(id, msg.id);
                console.log(msg.id);
                console.log("Cuurent Id:  " + id);
                break;
        }
    })
    /*ws.on('close', function () {
    });*/
});

server.listen(8080, function () {
    console.log('Listening on http://localhost:8080');
});

function join(idCurrentClient: string, idRoom: string): void {
    let a: any = rooms.get(idRoom);
    roomsConn.set(idCurrentClient, a);
    console.log(rooms.get(idCurrentClient));
}

function pushRooms(): void {
    console.log(rooms);
    rooms.forEach((value: string, key: string, map: Map<string, string>) => {
        sockets.get(key).send(messageFactory.createMessageCreateRoom(rooms));
        console.log(messageFactory.createMessageCreateRoom(rooms));
    })
}