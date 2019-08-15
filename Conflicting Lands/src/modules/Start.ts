import { Game } from "./controllers/controller-main-module"
import { fromEvent } from "rxjs";
import { ManipulationWithDOM } from "./controllers/manipulations-with-dom";
import { ConcealCanvas } from "./start/ux/scripts/hide-function";
import { DiceRoller } from "./game/dice/dice-roller";
import { diceCollection } from "./game/dice/dice";
import { PushImage } from "./game/ux/scripts/push-image";
import { Timer } from "./game/ux/scripts/timer";
import { Media } from "./controllers/path-to-multimedia";
import "./controllers/path-to-multimedia";

const socketProtocol = (window.location.protocol === 'https:' ? 'wss:' : 'ws:')
const echoSocketUrl = socketProtocol + '//' + location.host;
const socket = new WebSocket(echoSocketUrl);

console.log(echoSocketUrl);
socket.readyState
socket.addEventListener('open', function (event) {
    socket.send('Hello Server!');
});

/*import "./start/ux/css/main.css";
import "./start/ux/css/players.css";
import "./start/ux/css/canvas.css";
import "./start/ux/css/blocks-for-players.css";*/
ConcealCanvas.hideGamePage();
let game: Game = new Game();
let timerForPlayer: Timer = new Timer();
fromEvent(ManipulationWithDOM.writeNames, 'click')
    .subscribe(() => {
        socket.send("Look am me");
        game.setPlayerNames();
        ConcealCanvas.hideStartPage();
        ManipulationWithDOM.playSound(Media.playGame);
        PushImage.createImage();
        ManipulationWithDOM.initSounds();
    })

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
        ConcealCanvas.hideGamePage();
        ManipulationWithDOM.playSound(Media.endOfTheGame);
    })

function timer() {
    PushImage.returnImage();
    timerForPlayer.Timer();
    game.turnTime();
    game.createPositionsBlockForMap(DiceRoller.numberOfDices());
}
