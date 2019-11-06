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

import { DiceRoller } from "./game/dice-roller";
import { Block } from "../../../library/dist";

import { Timer } from "./game/timer";

import { Game } from "./controller-main-module";

import { MessageCreator } from "../../../library/dist/message-creator";
import { MessageType } from "../../../library/dist/index";
import { KeyCodes } from "./key-codes";
import { Settings } from "../../../library/dist/index";
import { json } from "body-parser";

const socketProtocol = (window.location.protocol === 'https:' ? 'wss:' : 'ws:');
let socketUrl = socketProtocol + '//' + location.host;
const socket = new WebSocket(socketUrl);

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    createButtonForMobileVersion();
} else {
    createDivMobVersion();
}

let messageCreator = new MessageCreator();
let game: Game = new Game();
let timerForPlayer: Timer = new Timer();
let name: string = "";
let dices: number[];
let arrayRooms: Array<any>;
let settings: Settings = new Settings();
setUpSettings();

View.StartPage();

socket.onmessage = function (message: any) {
    let msg = JSON.parse(message.data);
    switch (msg.type) {
        case MessageType.CreateRoom:
            clearRooms();
            arrayRooms = msg.rooms;
            arrayRooms.forEach((room: any) => {
                viewRoom(room.id, room.name, room.creatorName);
            });
            break;
        case MessageType.SendInfoToPlayerRooms:
            settings = msg.settings;
            game.initCanvas(settings);
            if (msg.currentPlayer == 0) {
                game.setPlayer1(msg.firstPlayerName, settings.firstPlayerColor);
                game.setPlayer2(msg.secondPlayerName, settings.secondPlayerColor);
            }
            else if (msg.currentPlayer == 1) {
                game.setPlayer2(msg.firstPlayerName, settings.firstPlayerColor);
                game.setPlayer1(msg.secondPlayerName, settings.secondPlayerColor);
            }
            socket.send(JSON.stringify(messageCreator.createMessageGridSending(settings)));
            break;
        case MessageType.SendDice:
            dices = msg.dices;
            tossDice();
            break;
        case MessageType.IsPosition:
            console.log("good");
            game.currentPosition = game.convertBlockSizeToPixels(game.currentPosition);
            game.draw();
            break;
        case MessageType.GameActionEvents:
            game.setBlockPositionOnMap(msg.event);
            break;
        case MessageType.Failure:
            game.failute();
            break;
        case MessageType.MoveToHollPage:
            View.HollPage();
            setUpSettings();
            game.clearFuildForPlayerData(settings.firstPlayerColor, settings.secondPlayerColor);
            break;
        // case MessageType.RunTimer:
        //     console.log("Timer is running!");
        //     timerForPlayer.Timer();
        //     break;
        // case MessageType.StopTimer:
        //     console.log("Timer is stopped!");
        //     break;
    }
};

fromEvent(DOM.writeNames, 'click')
    .subscribe(() => {
        name = (DOM.playerInit).value;
        if (name != "") {
            View.HollPage();
            socket.send(JSON.stringify(messageCreator.createMessageSetName(name)));
        }
    });

fromEvent(DOM.createRoom, 'click')
    .subscribe(() => {
        const nameRoom = (DOM.nameRoom).value;
        if (nameRoom != "" && (settings.firstPlayerColor != settings.secondPlayerColor)) {
            socket.send(JSON.stringify(messageCreator.createMessageSetNameRoom(nameRoom, settings)));
            game = new Game();
            game.initCanvas(settings);
            game.setPlayer1(name, settings.firstPlayerColor);
            View.GamePage();
            game.initCanvas(settings);
            DOM.playSound(PathToMedia.playGame);
            PushImage.createImage();
            DOM.initSounds();
        }
        else {
            Allerts.viewWarning();
        }
    });

setTimeout(function () {
    window.onresize = function () {
        setTimeout(function () {
            game.drawNewCanvas(settings.width, settings.height, settings.mapColor, settings.gridColor);
            game.calculatePosition();
        }, 20);
    }
}, 200);


DOM.infoButton.addEventListener('click', function (event: any) { Allerts.viewInfo(); });

DOM.hideInformationAboutGame.addEventListener('click', function (event: any) { Allerts.hideInfo(); });

DOM.hideWarning.addEventListener('click', function (event: any) { Allerts.hideWarning(); });


function createButtonForMobileVersion(): void {
    buttonForMobileVersion("moveToLeft", "←");
    buttonForMobileVersion("moveToRight", "→");
    buttonForMobileVersion("setUp", "Set Up");
    buttonForMobileVersion("rotate", "Rotate");
}

function buttonForMobileVersion(id: string, text: string): void {
    let div = DOM.divMobVersion;
    let newButton = document.createElement('button');
    newButton.id = id;
    newButton.textContent = text;
    div.appendChild(newButton);
}

function createDivMobVersion(): void {
    let idDiv: any = DOM.divMobVersion;
    while (idDiv.hasChildNodes()) {
        idDiv.removeChild(idDiv.lastChild);
    }
}

DOM.divMobVersion.addEventListener('click', (event: any) => {
    let idBtn = event.srcElement.id;
    switch (idBtn) {
        case "moveToLeft":
            socket.send(JSON.stringify(messageCreator.createMessageGameActionEvents("moveToLeft")));
            break;
        case "moveToRight":
            socket.send(JSON.stringify(messageCreator.createMessageGameActionEvents("moveToRight")));
            break;
        case "setUp":
            socket.send(JSON.stringify(messageCreator.createMessageGameActionEvents("setUpBlock")));
            break;
        case "rotate":
            socket.send(JSON.stringify(messageCreator.createMessageGameActionEvents("rotateBlock")));
            break;
    }
})

function viewRoom(id: string, name: string, nameOfPlayer: string): void {//+
    let roomsDiv = DOM.rooms;
    let newButton = document.createElement('button');
    newButton.id = "clientRoom";
    newButton.value = id;
    newButton.textContent = name;
    newButton.dataset.title = nameOfPlayer;
    roomsDiv.appendChild(newButton);
}

function clearRooms(): void {//+
    let idDiv: any = DOM.rooms;
    while (idDiv.hasChildNodes()) {
        idDiv.removeChild(idDiv.lastChild);
    }
}

function setUpSettings(): void {
    settings.firstPlayerColor = ColorPlayers.Red;
    settings.secondPlayerColor = ColorPlayers.Blue;
    settings.mapColor = ColorMap.BlueMap;
    settings.gridColor = ColorMap.BlueGrid;
    settings.width = SizeMap.BigX;
    settings.height = SizeMap.BigY;
}

DOM.rooms.addEventListener('click', function (event: any) {
    let idJoinRoom = event.srcElement.value;
    for (let room of arrayRooms) {
        if (room.id === idJoinRoom) {
            socket.send(JSON.stringify(messageCreator.createMessageJoinTheRoom(idJoinRoom)));
            View.GamePage();
            DOM.playSound(PathToMedia.playGame);
            PushImage.createImage();
            DOM.initSounds();
            break;
        }
    }
});

DOM.settings.addEventListener('click', (event: any) => {
    const setting = event.srcElement.id;
    switch (setting) {
        case "orangeButton1":
            settings.firstPlayerColor = ColorPlayers.Orange;
            DOM.orangeButton1.textContent = "✔";
            DOM.redButton1.textContent = " ";
            DOM.blueButton1.textContent = " ";
            break;
        case "redButton1":
            settings.firstPlayerColor = ColorPlayers.Red;
            DOM.redButton1.textContent = "✔";
            DOM.blueButton1.textContent = " ";
            DOM.orangeButton1.textContent = " ";
            break;
        case "blueButton1":
            settings.firstPlayerColor = ColorPlayers.Blue;
            DOM.blueButton1.textContent = "✔";
            DOM.orangeButton1.textContent = " ";
            DOM.redButton1.textContent = " ";
            break;
        case "orangeButton2":
            settings.secondPlayerColor = ColorPlayers.Orange;
            DOM.orangeButton2.textContent = "✔";
            DOM.redButton2.textContent = " ";
            DOM.blueButton2.textContent = " ";
            break;
        case "redButton2":
            settings.secondPlayerColor = ColorPlayers.Red;
            DOM.redButton2.textContent = "✔";
            DOM.blueButton2.textContent = " ";
            DOM.orangeButton2.textContent = " ";
            break;
        case "blueButton2":
            settings.secondPlayerColor = ColorPlayers.Blue;
            DOM.blueButton2.textContent = "✔";
            DOM.orangeButton2.textContent = " ";
            DOM.redButton2.textContent = " ";
            break;
        case "blueMap":
            settings.mapColor = ColorMap.BlueMap;
            settings.gridColor = ColorMap.BlueGrid;
            DOM.blueMap.textContent = "✔";
            DOM.brownMap.textContent = " ";
            DOM.whiteMap.textContent = " ";
            break;
        case "brownMap":
            settings.mapColor = ColorMap.BrownMap;
            settings.gridColor = ColorMap.BrownGrid;
            DOM.brownMap.textContent = "✔";
            DOM.whiteMap.textContent = " ";
            DOM.blueMap.textContent = " ";
            break;
        case "whiteMap":
            settings.mapColor = ColorMap.WhiteMap;
            settings.gridColor = ColorMap.WhiteGrid;
            DOM.whiteMap.textContent = "✔";
            DOM.blueMap.textContent = " ";
            DOM.brownMap.textContent = " ";
            break;
        case "smallMap":
            settings.width = SizeMap.SmallX;
            settings.height = SizeMap.SmallY;
            DOM.smallMap.textContent = "✔";
            DOM.mediumMap.textContent = "Medium";
            DOM.bigMap.textContent = "Big";
            break;
        case "mediumMap":
            settings.width = SizeMap.MediumX;
            settings.height = SizeMap.MediumY;
            DOM.mediumMap.textContent = "✔";
            DOM.smallMap.textContent = "Small";
            DOM.bigMap.textContent = "Big";
            break;
        case "bigMap":
            settings.width = SizeMap.BigX;
            settings.height = SizeMap.BigY;
            DOM.bigMap.textContent = "✔";
            DOM.smallMap.textContent = "Small";
            DOM.mediumMap.textContent = "Medium";
            break;
    }
})

fromEvent(document.body, 'keydown')
    .subscribe((e: KeyboardEvent) => {
        switch (e.keyCode) {
            case KeyCodes.Space:
            case KeyCodes.Up:
            case KeyCodes.Down:
                socket.send(JSON.stringify(messageCreator.createMessageGameActionEvents("rotateBlock")));
                break;
            case KeyCodes.Right:
                socket.send(JSON.stringify(messageCreator.createMessageGameActionEvents("moveToRight")));
                break;
            case KeyCodes.Left:
                socket.send(JSON.stringify(messageCreator.createMessageGameActionEvents("moveToLeft")));
                break;
            case KeyCodes.Enter:
                socket.send(JSON.stringify(messageCreator.createMessageGameActionEvents("setUpBlock")));
                break;
        }
    })

fromEvent(DOM.tossDice, 'click')
    .subscribe(() => {
        socket.send(JSON.stringify(messageCreator.createMessageEventTossDice(game.currentPlayer.getColor())));
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
        socket.send(JSON.stringify(messageCreator.createMessageMoveToHollPage())); // здесь лежал аллерт выхода из игры
    })

function tossDice(): void {
    PushImage.returmAnimate();
    DOM.playSound(PathToMedia.soundForDice);
    DOM.disabledButtonDice();
    DiceRoller.getPathOfImage(dices);
    setTimeout(timer, 1790);//1890
}

function timer() {
    PushImage.returnImage(dices);
    //timerForPlayer.Timer();
    //game.turnTime();
    game.createPositionsBlockForMap(dices);
}

export class SendMmessage {

    public static sendBlock(block: Block): void {
        console.log("Save block" + " x: " + block.x + " y: " + block.y + " h: " + block.height + " w: " + block.width + " color: " + block.color);
        socket.send(JSON.stringify(messageCreator.createMessageSaveBlock(block)));
    }

    public static rotateBlock(dices: number[], color: string): void {
        socket.send(JSON.stringify(messageCreator.createMessageBlockReversalEvent(dices, color)));
    }

    //public static andOfTimer(): void {
   //     socket.send(JSON.stringify(messageCreator.createMessageStopTimer()));
   // }

    public static positionCheck(block: Block): void {
        if (game.arrayCurrentPosition.length != 0) {
            console.log("checkBlock" + " x: " + block.x + " y: " + block.y + " h: " + block.height + " w: " + block.width + " color: " + block.color);
            socket.send(JSON.stringify(messageCreator.createMessagePositionCheck(block)));
        }
    }

    public static resultOfGame(area: number): void {
      socket.send(JSON.stringify(messageCreator.createMessageResultOfGame(area)));
    }
}