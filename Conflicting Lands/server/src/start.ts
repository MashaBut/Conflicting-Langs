import { send } from "q";

const express = require('express');
const path = require('path');
const { createServer } = require('http');
const webSocket = require('ws');
const app = express();

app.use(express.static('dist'));
const server = createServer(app);
const wss = new webSocket.Server({ server });

let clients = new Array<Client>();

wss.on('connection', function (ws: any) {
    let client = new Client(DataGenerator.idClient());
    console.log(client.id);
    clients.push(client);
    ws.on('message', (message: any) => {
        switch (message.type) {
            case 'writename':
                console.log('Name: ', message);
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

    constructor(id: number) {
        this.id = id;
    }

    public setName(name: string): void {
        this.name = name;
    }
}

class DataGenerator {
    public static idClient(): number {
        let id: number = (Math.random() * (999999 - 100000 + 1) + 100000);
        return Number(id.toPrecision(6));
    }
}

class Message {
    public type: string;
    public info: string;
}