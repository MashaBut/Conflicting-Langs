import { MessageFactory } from "./message-factory";
import { MessageType } from "./message-modules/message-type";
import { DataGenerator } from "./data-generator";
import { Room } from "./room";
import { Client } from "./client";

const express = require('express');
const webSocket = require('ws');
const { createServer } = require('http');
const app = express();
const server = createServer(app);
const wss = new webSocket.Server({ server });

app.use(express.static('client/dist'));
wss.room = new Array<Room>();
let currentRoom: Room;
let messageFactory = new MessageFactory();

let user: any = [];
let clients = new Array<Client>();

let flagforSecondclient: boolean = false;
let flagForFirstClient: boolean = false;

wss.on('connection', function (ws: any) {
    let numb = DataGenerator.idClient();
    user[numb] = ws;
    let client = new Client(numb);
    clients.push(client);
    ws.on('message', (message: any) => {
        let info: any = JSON.parse(message);
        switch (info.type) {
            case MessageType.SetName:
                client.setName(info.name);
                wss.room.forEach((room: Room) => {
                    if (room.countUsers === 1) {
                        user[numb].send(messageFactory.createMessageSetNameRoom(room.name, client.name));
                    }
                });
                break;
            case MessageType.SetNameRoom:
                client.setNameRoom(info.nameRoom);
                addRoom(info,client);
                break;
            case MessageType.JoiningToRoom:
                JoiningToRoom(info, numb);
                break;
            case MessageType.TossDice:
                tossDice(info.dices);
                break;
            case MessageType.KeyCode:
                keyDown(info.e);
                break;
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

function addRoom(info:any,client:Client): void {
    let creator: Room = new Room(info.nameRoom, client.id);
    wss.room.push(creator);
    currentRoom = creator;
    flagForFirstClient = true;
    wss.clients.forEach((client: any) => {
        client.send(messageFactory.createMessageNewRoom(info.nameRoom));
    });
}

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
}