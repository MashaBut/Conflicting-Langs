
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
let rooms =  new RoomControl();
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
                /* wss.room.forEach((room: Room) => {
                     if (room.countUsers === 1) {
                         user[numb].send(messageFactory.createMessageSetNameRoom(room.name, client.name));
                     }
                 });*/
                break;
            case MessageType.SetNameRoom:
                // client.setNameRoom(msg.nameRoom);

                //first
                wss.room = new Room(msg.nameRoom, find(id,clients));

                //second
                rooms.add(new Room(msg.nameRoom, find(id,clients)));
                // addRoom(msg, client);
                break;/*
              case MessageType.JoiningToRoom:
                  JoiningToRoom(msg, numb);
                  break;
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

function find(id: string, clients: Array<Player>): any {
    clients.forEach((client: Player) => {
        if (client.id === id) {
            return client;
        }
        return undefined;
    })
}
/*function addRoom(info:any,client:Client): void {
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
}*/