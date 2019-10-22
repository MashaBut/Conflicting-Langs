import "./work-with-html/path-to-dices";
import "./work-with-html/path-to-css";
import { PathToMedia } from "./work-with-html/path-to-media";
import { View } from "./work-with-html/view";
import { Allerts } from "./work-with-html/work-with-allerts";
import { ManipulationWithDOM as DOM } from "./work-with-html/manipulations-with-dom";
import { PushImage } from "./work-with-html/push-image";
import { ColorPlayers } from "./game/enums/color-players";
import { ColorMap } from "./game/enums/color-map";
import { SizeMap } from "./game/enums/size-map";

import { fromEvent } from 'rxjs';
//import { fromEvent } from "@node-modules/rxjs/index";

import { DiceRoller } from "./game/dice/dice-roller";

import { Timer } from "./game/timer/timer";

import { Game } from "./controllers/controller-main-module";

//import { MessageFactory } from "@message-facroty/message-factory";
import { MessageFactory } from "../../../library/dist/message-factory";
import { MessageType } from "../../../library/dist/index";
import { KeyCodes } from "./key-codes/key-codes";

const socketProtocol = (window.location.protocol === 'https:' ? 'wss:' : 'ws:');
let socketUrl = socketProtocol + '//' + location.host;
const socket = new WebSocket(socketUrl);

let messageFactory = new MessageFactory();
let game: Game = new Game();
let timerForPlayer: Timer = new Timer();
let properties: Array<any> = new Array();
let name: string = "";
let dices: number[];
let arrayRooms: Array<any>;
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
            properties = msg.settings;
            game.initCanvas(properties[4], properties[5], properties[2], properties[3]);
            if (msg.currentPlayer == 0) {
                game.setPlayer1(msg.name1, properties[0]);
                game.setPlayer2(msg.name2, properties[1]);
            }
            else if (msg.currentPlayer == 1) {
                game.setPlayer2(msg.name1, properties[0]);
                game.setPlayer1(msg.name2, properties[1]);
            }
            break;
        case MessageType.TossDice:
            dices = msg.dices;
            tossDice();
            break;
        case MessageType.Event:
            game.setBlockPositionOnMap(msg.event);
            break;
        case MessageType.Disconnect:
            alert("Извените ваш опонент вышел");
            game.clearFuildForPlayerData(properties[0], properties[1]);
            View.HollPage();
            break;
    }
};

fromEvent(DOM.writeNames, 'click')//+
    .subscribe(() => {
        name = (DOM.playerInit).value;
        if (name != "") {
            View.HollPage();
            properties = [ColorPlayers.Red, ColorPlayers.Blue, ColorMap.BlueMap, ColorMap.BlueGrid, SizeMap.BigX, SizeMap.BigY];
            socket.send(messageFactory.createMessageSetName(name));
        }
    });

fromEvent(DOM.createRoom, 'click')//+
    .subscribe(() => {
        const nameRoom = (DOM.nameRoom).value;
        if (nameRoom != "" && (properties[0] != properties[1])) {
            socket.send(messageFactory.createMessageSetNameRoom(nameRoom, properties));
            game.initCanvas(properties[4], properties[5], properties[2], properties[3]);
            game.setPlayer1(name, properties[0]);
            View.GamePage();
            DOM.playSound(PathToMedia.playGame);
            PushImage.createImage();
            DOM.initSounds();
        }
    });

setTimeout(function () {
    window.onresize = function () {
        setTimeout(function () {
            game.drawNewCanvas(properties[4], properties[5], properties[2], properties[3]);
        }, 20);
    }
}, 200);


DOM.infoButton.addEventListener('click', function (event: any) {
    Allerts.viewInfo();
});

DOM.hideInformationAboutGame.addEventListener('click', function (event: any) {
    Allerts.hideInfo();
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

DOM.properties.addEventListener('click', (event: any) => {
    const property = event.srcElement.id;
    switch (property) {
        case "orangeButton1":
            properties[0] = ColorPlayers.Orange;
            break;
        case "redButton1":
            properties[0] = ColorPlayers.Red;
            break;
        case "blueButton1":
            properties[0] = ColorPlayers.Blue;
            break;
        case "orangeButton2":
            properties[1] = ColorPlayers.Orange;
            break;
        case "redButton2":
            properties[1] = ColorPlayers.Red;
            break;
        case "blueButton2":
            properties[1] = ColorPlayers.Blue;
            break;
        case "blueMap":
            properties[2] = ColorMap.BlueMap;
            properties[3] = ColorMap.BlueGrid;
            break;
        case "brownMap":
            properties[2] = ColorMap.BrownMap;
            properties[3] = ColorMap.BrownGrid;
            break;
        case "whiteMap":
            properties[2] = ColorMap.WhiteMap;
            properties[3] = ColorMap.WhiteGrid;
            break;
        case "smallMap":
            properties[4] = SizeMap.SmallX;
            properties[5] = SizeMap.SmallY;
            break;
        case "mediumMap":
            properties[4] = SizeMap.MediumX;
            properties[5] = SizeMap.MediumY;
            break;
        case "bigMap":
            properties[4] = SizeMap.BigX;
            properties[5] = SizeMap.BigY;
            break;
    }
})

fromEvent(document.body, 'keydown')
    .subscribe((e: KeyboardEvent) => {
        switch (e.keyCode) {
            case KeyCodes.Space:
            case KeyCodes.Up:
            case KeyCodes.Down:
                socket.send(messageFactory.createMessageEvent("rotateBlock"));
                break;
            case KeyCodes.Right:
                socket.send(messageFactory.createMessageEvent("moveToRight"));
                break;
            case KeyCodes.Left:
                socket.send(messageFactory.createMessageEvent("moveToLeft"));
                break;
            case KeyCodes.Enter:
                socket.send(messageFactory.createMessageEvent("setUpBlock"));
                break;
        }
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
        game.clearFuildForPlayerData(properties[0], properties[1]);
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