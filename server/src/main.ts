import { MessageType } from "../../library/dist/index";
import { Room } from "./room";
import { ServerMessages } from "./server-messages";
const express = require('express');
const webSocket = require('ws');
const { createServer } = require('http');
const app = express();
const server = createServer(app);
const wss = new webSocket.Server({ server });
const uuidv1 = require('uuid/v1');

app.use(express.static('client/dist'));

let serverMessages = new ServerMessages();
let sockets: Map<string, any> = new Map();
let clients: Map<string, string> = new Map();
let rooms = new Array<Room>();

wss.on('connection', function (ws: any) {
    let id: string = String(uuidv1());
    ws.on('message', (message: any) => {
        const msg = JSON.parse(message);
        switch (msg.type) {
            case MessageType.SetName:
                sockets.set(id, ws);
                clients.set(id, msg.name);
                serverMessages.sendRooms(rooms, sockets);
                break;
            case MessageType.SetNameRoom:
                let room = new Room(msg.name, id, clients.get(id));
                room.settingsRoom(msg.properties);
                rooms.push(room);
                serverMessages.sendRooms(rooms, sockets);
                break;
            case MessageType.JoinRoom:
                serverMessages.sendRooms(rooms, sockets);
                serverMessages.gameStart(rooms, sockets, clients, id, msg.id);
                break;
            case MessageType.EventTossDice:
                serverMessages.sendTossDice(id, rooms, sockets);
                break;
            case MessageType.Event:
                serverMessages.sendEvent(id, msg.event, rooms, sockets);
                break;
            case MessageType.ChangePlayer:
                serverMessages.changePlayerInCurrentRoom(id, rooms);
                break;
            case MessageType.MoveToHollPage:
                // navigateToHollPage(id);
                break;
        }
    })
    /*ws.on('close', function () {
    });*/
});

server.listen(8080, function () {
    console.log('Listening on http://localhost:8080');
});

/*function navigateToHollPage(id: string): void {
    let a = 0;
    for (let room of rooms) {
        let iter = room.players.values();
        if (id == iter.next().value || id == iter.next().value) {
            room.players.forEach((key: string) => {
                if (key != id) {
                    sockets.get(key).send(messageFactory.createMessageDisconnect());
                }
            })
            rooms.slice(a, 1);
            break;
        }
        a++;
    }
}*/