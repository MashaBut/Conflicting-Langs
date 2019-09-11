import "./work-with-html/path-to-dices";
import "./work-with-html/path-to-css";
import { PathToMedia } from "./work-with-html/path-to-media";
import { View } from "./work-with-html/view";
import { ManipulationWithDOM } from "./work-with-html/manipulations-with-dom";
import { PushImage } from "./work-with-html/push-image";

import { fromEvent } from "rxjs";

import { DiceRoller } from "./game/dice/dice-roller";
import { diceCollection } from "./game/dice/dice";
import { Timer } from "./game/timer/timer";

import { Game } from "./controllers/controller-main-module"

import { MessageFactory } from "./message-factory";
import { MessageType } from "./message-modules/message-type";

const socketProtocol = (window.location.protocol === 'https:' ? 'wss:' : 'ws:')
let socketUrl = socketProtocol + '//' + location.host;
const socket = new WebSocket(socketUrl);

let rooms = new Array<string>();
let messageFactory = new MessageFactory();
let game: Game = new Game();
let timerForPlayer: Timer = new Timer();
let name: string = "";
let dices: number[];

View.StartPage();

socket.onmessage = function (message: any) {
    let info = JSON.parse(message.data);
    switch (info.type) {
        case MessageType.SetNameRoom:
            viewRoom(info.nameRoom);
            break;
        case MessageType.NewRoom:
            if (name !== "")
                viewRoom(info.nameRoom);
            break;
        case MessageType.PushNameToRoom:
            game.setPlayer1(info.name);
            break;
        case MessageType.ConnectionUser:
            game.setPlayer2(info.name);
            break;
        case MessageType.TossDice:
            dices = info.dices;
            tossDice();
            break;
        case MessageType.KeyCode:
            game.keyCode(info.e);
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
                ManipulationWithDOM.playSound(PathToMedia.playGame);
                PushImage.createImage();
                ManipulationWithDOM.initSounds();
                break;
            }
        }
    };
});

fromEvent(ManipulationWithDOM.writeNames, 'click')
    .subscribe(() => {
        name = (ManipulationWithDOM.playerInit).value;
        if (name !== "") {
            View.HollPage();
            socket.send(messageFactory.createMessageSetName(name));
            clearDivForViewRoom();
        }
    });

fromEvent(ManipulationWithDOM.createRoom, 'click')
    .subscribe(() => {
        let nameRoom = (ManipulationWithDOM.nameRoom).value;
        if (nameRoom !== "") {
            socket.send(messageFactory.createMessageSetNameRoom(nameRoom));
            game.setPlayer1(name);
            View.GamePage();
            ManipulationWithDOM.playSound(PathToMedia.playGame);
            PushImage.createImage();
            ManipulationWithDOM.initSounds();
        }
    });

fromEvent(document, 'keydown')
    .subscribe((e: KeyboardEvent) => {
        socket.send(messageFactory.createMessageKeyCode(e));
    })

fromEvent(ManipulationWithDOM.tossDice, 'click')
    .subscribe(() => {
        DiceRoller.roll(diceCollection);
        socket.send(messageFactory.createMessageTossDice(DiceRoller.numberOfDices()));
    });

fromEvent(ManipulationWithDOM.soundOff, 'click')
    .subscribe(() => {
        ManipulationWithDOM.soundsOff();
    });

fromEvent(ManipulationWithDOM.endGame, 'click')
    .subscribe(() => {
        View.GamePage();
        ManipulationWithDOM.playSound(PathToMedia.endOfTheGame);
    });

function viewRoom(nameRoom: string): void {
    let roomsDiv = ManipulationWithDOM.rooms;
    let newButton = document.createElement('button');
    newButton.id = "clientRoom";
    newButton.value = nameRoom;
    newButton.textContent = nameRoom;
    roomsDiv.appendChild(newButton);

   // roomsDiv.insertAdjacentHTML('afterend', "<button type='button' id='clientRoom' value=" + nameRoom + ">" + nameRoom + "</button>");
    rooms.push(nameRoom);
}

function clearDivForViewRoom(): void {
    let roomsDiv: any = ManipulationWithDOM.rooms;
    roomsDiv.Nodes.clear();
}

function tossDice(): void {
    PushImage.returmAnimate();
    ManipulationWithDOM.playSound(PathToMedia.soundForDice);
    ManipulationWithDOM.disabledButtonDice();
    DiceRoller.getPathOfImage(dices);
    setTimeout(timer, 1790);
}

function timer() {
    PushImage.returnImage(dices);
    timerForPlayer.Timer();
    game.turnTime();
    game.createPositionsBlockForMap(dices);
}