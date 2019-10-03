import { MessageFactory } from "../../library/dist/message-factory";
import { MessageType } from "../../library/dist/index";
import { Room } from "./room";
import { KeyCodes } from "./key-code";

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
let a = 0;
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
            case MessageType.EventTossDice:
                pushTossDice(id, [generationNumber(), generationNumber()]);
                break;
            case MessageType.KeyCode:
                pushKeyCode(id, msg.keyCode);
                break;
            case MessageType.ChangePlayer:
                changePlayerInCurrentRoom(id);
                break;
            case MessageType.MoveToHollPage:
                moveToHollPage(id);
                break;
        }
    })
    /*ws.on('close', function () {
    });*/
});

server.listen(8080, function () {
    console.log('Listening on http://localhost:8080');
});

//prisoedenitsya_k_komnate :)
function join(idSecondClient: string, idRoom: string): void {
    for (let room of rooms) {
        if (room.id === idRoom) {
            room.add(idSecondClient);
            let idFirstClient: any = room.players.get(1);
            let nameFirstClient: any = clients.get(idFirstClient);
            let nameSecondClient: any = clients.get(idSecondClient);
            pushName(nameFirstClient, nameSecondClient, idFirstClient);
            pushName(nameFirstClient, nameSecondClient, idSecondClient);
            room.setUpCurrentPlayer();
            break;
        }
    }
}

//sgenerirovat_chisla :)
function generationNumber(): number {
    return Math.floor((Math.random() * 6) + 1);
}

//otpravit_spisock_imen :)
function pushName(nameFisrtClient: string, nameSecondClient: string, idClient: string): void {
    sockets.get(idClient).send(messageFactory.createMessagePushNamesToRoom(nameFisrtClient, nameSecondClient));
}

//otpravit_spisock_otkritix_komnat :)
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

//otpravit_podkinutie_kubicki :)
function pushTossDice(id: string, dices: number[]): void {
    rooms.forEach((room: Room) => {
        let iter = room.players.values();
        if (id == iter.next().value || id == iter.next().value) {
            if (room.isCurrentPlayer() === id) {
                room.players.forEach((key: string) => {
                    sockets.get(key).send(messageFactory.createMessageTossDice(dices));
                })
            }
        }
    });
}

function changePlayerInCurrentRoom(id: string): void {
    for (let room of rooms) {
        let iter = room.players.values();
        if (id === room.isCurrentPlayer()) {
            room.setUpCurrentPlayer();
            break;
        }
    }
}

//otpravit_nomer_klavishi :)
function pushKeyCode(id: string, keyCode: number): void {
    rooms.forEach((room: Room) => {
        let iter = room.players.values();
        if (id == iter.next().value || id == iter.next().value) {
            if (room.isCurrentPlayer() === id) {
                room.players.forEach((key: string) => {
                    sockets.get(key).send(messageFactory.createMessageKeyCode(keyCode));
                })
                if (keyCode === KeyCodes.Enter) {
                    room.setUpCurrentPlayer();
                }
            }
        }
    });
}

function moveToHollPage(id: string): void {
    let a=0;
    for (let room of rooms) {
        let iter = room.players.values();
        if (id == iter.next().value || id == iter.next().value) {
            room.players.forEach((key: string) => {
                if (key != id) {
                    sockets.get(key).send(messageFactory.createMessageDisconnect());
                }
            })
            rooms.slice(a,1);
            break;
        }
        a++;
    }
}
//ps.masha and nastya with huge love
