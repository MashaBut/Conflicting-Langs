import { MessageFactory } from "../../library/dist/message-factory";
import { MessageType } from "../../library/dist/index";
import { Room } from "./room";
import { Player } from "./player";
import { RoomControl } from "./room-control";

const express = require('express');
const webSocket = require('ws');
const { createServer } = require('http');
const app = express();
const server = createServer(app);
const wss = new webSocket.Server({ server });
const uuidv1 = require('uuid/v1');

app.use(express.static('client/dist'));
wss.room = new Array<Room>();
let rooms = new RoomControl();
let messageFactory = new MessageFactory();

let sockets: Map<string, any> = new Map();
let clients = new Array<Player>();

wss.on('connection', function (ws: any) {
    let id: string = String(uuidv1());
    ws.on('message', (message: any) => {
        let msg: any = JSON.parse(message);
        switch (msg.type) {
            case MessageType.SetName:
                let client = new Player(id, msg.name);
                sockets.set(id, ws);
                clients.push(client);
                console.log(client);
                pushRooms();
                break;
            case MessageType.SetNameRoom:
                //first
                // wss.room = new Room(msg.nameRoom, find(id,clients));
                //second
                rooms.add(new Room(msg.name, find(id, clients)));
                pushRooms();
                break;
            case MessageType.JoinRoom:
                rooms.joinRoom(find(id ,clients),msg.id);
                console.log(msg.id);
                console.log("Cuurent Id:  "+ id);
                break;
            /*
          case MessageType.TossDice:
              tossDice(msg.dices);
              break;
          case MessageType.KeyCode:
              keyDown(msg.e);
              break;*/
        }
    })
    /*ws.on('close', function () {
        clients.splice(clients.indexOf(client), 1);
        console.log('stopping client interval');
    });*/
});

server.listen(8080, function () {
    console.log('Listening on http://localhost:8080');
});

function find(id: string, clients: Array<Player>): Player {//map
    for (let client of clients) {
        if (client.id === id) {
            return client;
        }
    }
    return new Player("non", "non");
}

function pushRooms(): void {
    clients.forEach((client: Player) => {
        sockets.get(client.id).send(messageFactory.createMessageCreateRoom(rooms.pushToClient()));
    })
}
/*
function tossDice(dices: number[]): void {
    if (flagForFirstClient) {
        user[currentRoom.fisrtClient].send(messageFactory.createMessageTossDice(dices));
        if (flagforSecondclient) {
            user[currentRoom.secondClient].send(messageFactory.createMessageTossDice(dices));
        }
    }
}

function keyDown(keyCode: any): void {
    if (flagForFirstClient) {
        user[currentRoom.fisrtClient].send(messageFactory.createMessageKeycode(keyCode));
        if (flagforSecondclient) {
            user[currentRoom.secondClient].send(messageFactory.createMessageKeycode(keyCode));
        }
    }
}

function JoiningToRoom(info: any, id: number): void {
    let idClient: number;
    clients.forEach((client: Client) => {
        if (client.name === info.client) {
            idClient = client.id;
        }
    })
    wss.room.forEach((room: Room) => {
        if (room.name == info.nameRoom) {
            room.secondClient = idClient;
            room.countUsers = 2;
            let nameF: string = "";
            clients.forEach((c: Client) => {
                if (c.id === room.fisrtClient) {
                    nameF = c.name;
                }
            })
            flagForFirstClient = flagforSecondclient = true;
            currentRoom = room;
            user[id].send(messageFactory.createMessagePushNameToRoom(nameF));
            user[room.fisrtClient].send(messageFactory.craeteMessageConnectionUser(info.client));
        }
    });
}*/