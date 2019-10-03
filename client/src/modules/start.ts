import "./work-with-html/path-to-dices";
import "./work-with-html/path-to-css";
import { PathToMedia } from "./work-with-html/path-to-media";
import { View } from "./work-with-html/view";
import { ManipulationWithDOM as DOM } from "./work-with-html/manipulations-with-dom";
import { PushImage } from "./work-with-html/push-image";

import { fromEvent } from 'rxjs';
//import { fromEvent } from "@node-modules/rxjs/index";

import { DiceRoller } from "./game/dice/dice-roller";

import { Timer } from "./game/timer/timer";

import { Game } from "./controllers/controller-main-module";

//import { MessageFactory } from "@message-facroty/message-factory";
import { MessageFactory } from "../../../library/dist/message-factory";
import { MessageType } from "../../../library/dist/index";

const socketProtocol = (window.location.protocol === 'https:' ? 'wss:' : 'ws:');
let socketUrl = socketProtocol + '//' + location.host;
const socket = new WebSocket(socketUrl);

let messageFactory = new MessageFactory();
let game: Game = new Game();
let timerForPlayer: Timer = new Timer();
let name: string = "";
let dices: number[];
let arrayRooms: any;
View.StartPage();

socket.onmessage = function (message: any) {
    let msg = JSON.parse(message.data);
    switch (msg.type) {
        case MessageType.CreateRoom:
            clearRooms();
            arrayRooms = msg.rooms;
            arrayRooms.forEach((room: any) => {
                viewRoom(room.id, room.name);
            });
            break;
        case MessageType.PushNamesToRoom:
            game.setPlayer1(msg.name1);
            game.setPlayer2(msg.name2);
            break;
        case MessageType.TossDice:
            dices = msg.dices;
            tossDice();
            break;
        case MessageType.KeyCode:
            game.keyCode(msg.keyCode);
            break;
        case MessageType.Disconnect:
            alert("Извените ваш опонент вышел");
            game.clearFuildForPlayerData();
            View.HollPage();
            break;
    }
};

fromEvent(DOM.writeNames, 'click')//+
    .subscribe(() => {
        name = (DOM.playerInit).value;
        if (name != "") {
            View.HollPage();
            socket.send(messageFactory.createMessageSetName(name));
        }
    });

fromEvent(DOM.createRoom, 'click')//+
    .subscribe(() => {
        const nameRoom = (DOM.nameRoom).value;
        if (nameRoom != "") {
            socket.send(messageFactory.createMessageSetNameRoom(nameRoom));
            game.setPlayer1(name);
            View.GamePage();
            DOM.playSound(PathToMedia.playGame);
            PushImage.createImage();
            DOM.initSounds();
        }
    });

function viewRoom(id: string, name: string): void {//+
    let roomsDiv = DOM.rooms;
    let newButton = document.createElement('button');
    newButton.id = "clientRoom";
    newButton.value = id;
    newButton.textContent = name;
    roomsDiv.appendChild(newButton);
}

function clearRooms(): void {//+
    let idDiv: any = DOM.rooms;
    while (idDiv.hasChildNodes()) {
        idDiv.removeChild(idDiv.lastChild);
    }
}

DOM.rooms.addEventListener('click', function (event: any) {//+
    let idJoinRoom = event.srcElement.value;
    for (let room of arrayRooms) {
        if (room.id === idJoinRoom) {
            socket.send(messageFactory.createMessageJoinRoom(idJoinRoom));
            View.GamePage();
            DOM.playSound(PathToMedia.playGame);
            PushImage.createImage();
            DOM.initSounds();
            break;
        }
    }
});

fromEvent(document.body, 'keydown')
    .subscribe((e: KeyboardEvent) => {
        socket.send(messageFactory.createMessageKeyCode(e.keyCode));
    })

fromEvent(DOM.tossDice, 'click')
    .subscribe(() => {
        socket.send(messageFactory.createMessageEventTossDice());
    });

fromEvent(DOM.soundOff, 'click')
    .subscribe(() => {
        DOM.soundsOff();
    });

fromEvent(DOM.endGame, 'click')
    .subscribe(() => {
        View.GamePage();
        DOM.playSound(PathToMedia.endOfTheGame);
    });

fromEvent(DOM.endGame, 'click')
    .subscribe(() => {
        View.HollPage();
        game.clearFuildForPlayerData();
        socket.send(messageFactory.createMessageMoveToHollPage());
    })

function tossDice(): void {
    PushImage.returmAnimate();
    DOM.playSound(PathToMedia.soundForDice);
    DOM.disabledButtonDice();
    DiceRoller.getPathOfImage(dices);
    setTimeout(timer, 1790);
}



function timer() {
    PushImage.returnImage(dices);
    timerForPlayer.Timer();
    game.turnTime();
    game.createPositionsBlockForMap(dices);
}

export class Change {
    public static changePlayer(): void {
        socket.send(messageFactory.createMessageChangePlayer());
    }
}