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

let messageFactory = new MessageFactory();
let game: Game = new Game();
let timerForPlayer: Timer = new Timer();
let name: string = "";
let dices: number[];
let arrayRooms: Map<string,string>;
View.StartPage();

socket.onmessage = function (message: any) {
    let msg = JSON.parse(message.data);
    switch (msg.type) {
        case MessageType.CreateRoom:
            clearRooms();
            let a = JSON.parse(msg)
            console.log("a   :"+ a);
            for (const a of msg.rooms) {
               console.log(a.next());
            }
            
            a.forEach((value: string, key: string, map: Map<string, string>) => {
                console.log("Key:" + key + " value: " + value);
            })

            /*arrayRooms.forEach((room: any) => {
              //  viewRoom(room.id, room.name);
                console.log(room);
            });*/
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
            break;
    }
};

fromEvent(DOM.writeNames, 'click')//+
    .subscribe(() => {
        name = (DOM.playerInit).value;
        if (name !== "") {
            View.HollPage();
            socket.send(messageFactory.createMessageSetName(name));
        }
    });

fromEvent(DOM.createRoom, 'click')//+
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

/*document.body.addEventListener('click', function (event: any) {//+
    let idJoinRoom = event.srcElement.value;
    for (let room of arrayRooms) {
        if (room.id === idJoinRoom) {
            socket.send(messageFactory.createMessageJoinRoom(idJoinRoom));
            View.GamePage();
            game.setPlayer2(name);
            DOM.playSound(PathToMedia.playGame);
            PushImage.createImage();
            DOM.initSounds();
            break;
        }
    }
});*/

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