import { Game } from "./controllers/controller-main-module"
import { fromEvent } from "rxjs";
import { ManipulationWithDOM } from "./work-with-html/manipulations-with-dom";
import { View } from "./work-with-html/view";
import { DiceRoller } from "./game/dice/dice-roller";
import { diceCollection } from "./game/dice/dice";
import { PushImage } from "./work-with-html/push-image";
import { Timer } from "./game/timer/timer";
import { Media } from "./work-with-html/media";
import "./work-with-html/path-to-multimedia";
import { MessageFactory } from "./message-factory";

const socketProtocol = (window.location.protocol === 'https:' ? 'wss:' : 'ws:')
let echoSocketUrl = socketProtocol + '//' + location.host;
const socket = new WebSocket(echoSocketUrl);

View.StartPage();

let messageFactory = new MessageFactory();
let game: Game = new Game();
let timerForPlayer: Timer = new Timer();

socket.onmessage = function (event) {
    console.log(event.data);
};

fromEvent(ManipulationWithDOM.writeNames, 'click')
    .subscribe(() => {
        let name: string = (ManipulationWithDOM.playerInit).value;
        if (name !== "") {
            socket.send(messageFactory.createMessageSetName(name));
            View.HollPage();
        }
        /* game.setPlayerNames();
         ManipulationWithDOM.playSound(Media.playGame);
         PushImage.createImage();
         ManipulationWithDOM.initSounds();*/
    })

fromEvent(ManipulationWithDOM.createRoom, 'click')
    .subscribe(() => {
        let nameRoom: string = (ManipulationWithDOM.nameRoom).value;
        if (nameRoom !== "") {
            socket.send(messageFactory.createMessageSetNameRoom(nameRoom));
            View.GamePage();
        }
    });

fromEvent(ManipulationWithDOM.tossDice, 'click')
    .subscribe(() => {
        PushImage.returmAnimate();
        ManipulationWithDOM.playSound(Media.soundForDice);
        ManipulationWithDOM.disabledButtonDice();
        DiceRoller.roll(diceCollection);
        DiceRoller.getPathOfImage();
        setTimeout(timer, 1790);
    })

fromEvent(ManipulationWithDOM.soundOff, 'click')
    .subscribe(() => {
        ManipulationWithDOM.soundsOff();
    })

fromEvent(ManipulationWithDOM.endGame, 'click')
    .subscribe(() => {
        View.GamePage();
        ManipulationWithDOM.playSound(Media.endOfTheGame);
    })

function timer() {
    PushImage.returnImage();
    timerForPlayer.Timer();
    game.turnTime();
    game.createPositionsBlockForMap(DiceRoller.numberOfDices());
}