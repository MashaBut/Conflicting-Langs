import { MessageFactory } from "./message-factory";
//import express from "express";
const express = require('express');
const webSocket = require('ws');
const { createServer } = require('http');
const app = express();
const server = createServer(app);
const wss = new webSocket.Server({ server });

app.use(express.static('ConflictingLands.client/dist'));

let clients = new Array<Client>();
let messageFactory = new MessageFactory();
wss.room = new Array<Room>();
wss.on('connection', function (ws: any) {
    let client = new Client(DataGenerator.idClient());
    ws.on('message', (message: any) => {
        let info: any = JSON.parse(message);
        switch (info.Type) {
            case 0:
                client.setName(info.Name);
                wss.room.forEach((room: Room) => {
                    if (room.countUsers === 1) {
                        wss.clients.forEach((cl: any) => {
                            cl.send(messageFactory.createMessageSetNameRoom(room.name,client.name));
                        })
                    }
                });
                break;
            case 1:
                client.setNameRoom(info.nameRoom);
                let creator: Room = new Room(info.nameRoom, client.id);
                wss.room.push(creator);
                wss.clients.forEach((client: any) => {
                    client.send(messageFactory.createMessageNewRoom(info.nameRoom));
                });
                break;
            case 2:
                let idClient:number;
                clients.forEach((c: Client) => {
                    if(c.name===info.client) {
                        idClient = c.id;
                    }
                })
                wss.room.forEach((room: Room) => {
                    if (room.name == info.nameRoom) {
                        room.secondClient = idClient;
                        room.countUsers = 2;
                    }
                });
                break;
        }
    })
    /* ws.on('close', function () {
         clients.splice(clients.indexOf(client), 1);
         console.log('stopping client interval');
     });*/
});


server.listen(8080, function () {
    console.log('Listening on http://localhost:8080');
});

class Client {
    public id: number;
    public name: string;
    public nameRoom: string;

    constructor(id: number) {
        this.id = id;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public setNameRoom(nameRoom: string): void {
        this.nameRoom = nameRoom;
    }
}

class DataGenerator {
    public static idClient(): number {
        let id: number = (Math.random() * (999999 - 100000 + 1) + 100000);
        return Number(id.toPrecision(6));
    }
}

class Room {
    public name: string;
    public countUsers: number;
    public fisrtClient: number;
    public secondClient: number;

    constructor(name: string, firstClient: number) {
        this.name = name;
        this.fisrtClient = firstClient;
        this.countUsers = 1;
    }
}