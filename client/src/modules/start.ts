import "./work-with-html/path-to-dices";
import "./work-with-html/path-to-css";
import { PathToMedia } from "./work-with-html/path-to-media";
import { View } from "./work-with-html/view";
import { ManipulationWithDOM as DOM } from "./work-with-html/manipulations-with-dom";
import { PushImage } from "./work-with-html/push-image";

import { fromEvent } from "rxjs";

import { DiceRoller } from "./game/dice/dice-roller";
import { diceCollection } from "./game/dice/dice";
import { Timer } from "./game/timer/timer";

import { Game } from "./controllers/controller-main-module"

import { MessageFactory } from "../../../library/dist/message-factory";
import { MessageType } from "../../../library/dist/index";

const socketProtocol = (window.location.protocol === 'https:' ? 'wss:' : 'ws:');
let socketUrl = socketProtocol + '//' + location.host;
const socket = new WebSocket(socketUrl);

let rooms = new Array<string>();
let messageFactory = new MessageFactory();
let game: Game = new Game();
let timerForPlayer: Timer = new Timer();
let name: string = "";
let dices: number[];
let id: number;
View.StartPage();

socket.onmessage = function (message: any) {
    let msg = JSON.parse(message.data);
    switch (msg.type) {
        case MessageType.SetNameRoom:
            viewRoom(msg.nameRoom);
            break;
        case MessageType.NewRoom:
            if (name !== "")
                viewRoom(msg.nameRoom);
            break;
        case MessageType.PushNameToRoom:
            game.setPlayer1(msg.name);
            break;
        case MessageType.ConnectionUser:
            game.setPlayer2(msg.name);
            break;
        case MessageType.TossDice:
            dices = msg.dices;
            tossDice();
            break;
        case MessageType.KeyCode:
            game.keyCode(msg.e);
            break;
        case MessageType.Disconnect:
            alert(msg.connect);
            View.HollPage();
            rooms.length = 0;
           // clearRooms();
            break;
    }
};

document.body.addEventListener('click', function (event: any) {
    if (event.srcElement.id == 'clientRoom') {
        for (let room of rooms) {
            if (room === event.srcElement.value) {
                socket.send(messageFactory.createMessageJoiningRoom(room, name));
                View.GamePage();
                game.setPlayer2(name);
                DOM.playSound(PathToMedia.playGame);
                PushImage.createImage();
                DOM.initSounds();
                break;
            }
        }
    };
});

fromEvent(DOM.writeNames, 'click')
    .subscribe(() => {
        name = (DOM.playerInit).value;
        if (name !== "") {
            View.HollPage();
            socket.send(messageFactory.createMessageSetName(name));
          //  clearRooms();
        }
    });

fromEvent(DOM.createRoom, 'click')
    .subscribe(() => {
        let nameRoom = (DOM.nameRoom).value;
        if (nameRoom !== "") {
            socket.send(messageFactory.createMessageSetNameRoom(nameRoom));
            game.setPlayer1(name);
            View.GamePage();
            DOM.playSound(PathToMedia.playGame);
            PushImage.createImage();
            DOM.initSounds();
        }
    });

fromEvent(document, 'keydown') 
    .subscribe((e: KeyboardEvent) => {
        socket.send(messageFactory.createMessageKeyCode(e));
    })

fromEvent(DOM.tossDice, 'click')
    .subscribe(() => {
        DiceRoller.roll(diceCollection);
        socket.send(messageFactory.createMessageTossDice(DiceRoller.numberOfDices()));
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

function viewRoom(nameRoom: string): void {
    let roomsDiv = DOM.rooms;
    let newButton = document.createElement('button');
    newButton.id = "clientRoom";
    newButton.value = nameRoom;
    newButton.textContent = nameRoom;
    roomsDiv.appendChild(newButton);

   // roomsDiv.insertAdjacentHTML('afterend', "<button type='button' id='clientRoom' value=" + nameRoom + ">" + nameRoom + "</button>");
    rooms.push(nameRoom);
}

function clearRooms(): void {
    let roomsDiv: any = DOM.rooms;
    roomsDiv.Nodes.clear();
}

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