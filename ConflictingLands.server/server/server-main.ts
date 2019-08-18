import { MessageSetName } from "../message-modules/message-set-name";
import { MessageSetNameRoom } from "../message-modules/message-set-name-room";
import * as express from "express";
const webSocket = require('ws');
const { createServer } = require('http'); 

const app = express();
const server = createServer(app);
const wss = new webSocket.Server({ server });

app.use(express.static('ConflictingLands.client/dist'));

let clients = new Array<Client>();
let rooms = new Array<Room>();

wss.on('connection', function (ws: any) {
    ws.room;
    let client = new Client(DataGenerator.idClient());
    clients.push(client);
    ws.on('message', (message: any) => {
        console.log(JSON.parse(message));
        switch (JSON.parse(message).Type) {
            case 0:
                let name: MessageSetName = JSON.parse(message);
                client.setName(name.Name);
                //  ws.send("I am here");
                break;
            case 1:
                let nameRoom: MessageSetNameRoom = JSON.parse(message);
                client.setNameRoom(nameRoom.nameRoom);
                let room;
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
}