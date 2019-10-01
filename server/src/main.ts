import { MessageFactory } from "../../library/dist/message-factory";
import { MessageType } from "../../library/dist/index";
import { Room } from "./room";
const express = require('express');
const webSocket = require('ws');
const { createServer } = require('http');
const app = express();
const server = createServer(app);
const wss = new webSocket.Server({ server });
const uuidv1 = require('uuid/v1');

app.use(express.static('client/dist'));

let messageFactory = new MessageFactory();
let sockets: Map<string, any> = new Map();
let clients: Map<string, string> = new Map();
let rooms = new Array<Room>();

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
                rooms.push(new Room(msg.name, id));
                pushRooms();
                break;
            case MessageType.JoinRoom:
                join(id, msg.id);
                pushRooms();
                break;
            case MessageType.TossDice:
                pushTossDice(id, msg.dices);
                break;
        }
    })
    /*ws.on('close', function () {
    });*/
});

server.listen(8080, function () {
    console.log('Listening on http://localhost:8080');
});

function join(idSecondClient: string, idRoom: string): void {
    for (let room of rooms) {
        if (room.id === idRoom) {
            room.add(idSecondClient);
            let idFirstClient: any = room.players.get(1);
            let nameFirstClient: any = clients.get(idFirstClient);
            let nameSecondClient: any = clients.get(idSecondClient);
            pushName(nameFirstClient, nameSecondClient, idFirstClient);
            pushName(nameFirstClient, nameSecondClient, idSecondClient);
            break;
        }
    }
}

function pushName(nameFisrtClient: string, nameSecondClient: string, idClient: string): void {
    sockets.get(idClient).send(messageFactory.createMessagePushNamesToRoom(nameFisrtClient, nameSecondClient));
}

function pushRooms(): void {
    let openRooms = new Array<Room>();
    rooms.forEach((room: Room) => {
        if (room.players.size === 1) {
            openRooms.push(room);
        }
    });
    sockets.forEach((value: string, key: string, map: Map<string, string>) => {
        sockets.get(key).send(messageFactory.createMessageCreateRoom(openRooms));
    })
    openRooms.length = 0;
}

function getClientInRoom(): Array<Room> {
    let playingRoom = new Array<Room>();
    rooms.forEach((room: Room) => {
        if (room.players.size === 2) {
            playingRoom.push(room);
        }
    });
    return playingRoom;
}

function pushTossDice(id: string, dices: []): void {
    rooms.forEach((room: Room) => {
        let iter = room.players.values();
        if (id == iter.next().value || id == iter.next().value) {
            room.players.forEach((key: string) => {
                sockets.get(key).send(messageFactory.createMessageTossDice(dices));
            })
        }
    });
}