import { Game } from "./controllers/controller-main-module"
import { fromEvent } from "rxjs";
import { ManipulationWithDOM } from "./work-with-html/manipulations-with-dom";
import { ConcealCanvas } from "./work-with-html/hide-function";
import { DiceRoller } from "./game/dice/dice-roller";
import { diceCollection } from "./game/dice/dice";
import { PushImage } from "./work-with-html/push-image";
import { Timer } from "./game/timer/timer";
import { Media } from "./work-with-html/media";
import "./work-with-html/path-to-multimedia";
import * as $ from 'jquery';
const socketProtocol = (window.location.protocol === 'https:' ? 'wss:' : 'ws:')
let echoSocketUrl = socketProtocol + '//' + location.host;
//const socket = new WebSocket(echoSocketUrl);
console.log(echoSocketUrl);
let maps: [];
ConcealCanvas.hideGamePage();
let game: Game = new Game();
let timerForPlayer: Timer = new Timer();
fromEvent(ManipulationWithDOM.writeNames, 'click')
    .subscribe(() => {
       // let ob=new Message();
      //  ob.type ="message";


        
        //socket.send(ob);
        // echoSocketUrl = socketProtocol + '//' + location.host+'/home;'
       // socket.send("Look am me");
        game.setPlayerNames();
        ConcealCanvas.hideStartPage();
        ManipulationWithDOM.playSound(Media.playGame);
        PushImage.createImage();
        ManipulationWithDOM.initSounds();
    })
class Message {
    public type: string;
    public message: string;
}
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

$.ajax({
    type: "GET",
    url: "api/allRounds",
    contentType: "text/plain",
    success: function (result: []) {
        maps = result;
    },
    error: function (xhr: any, resp: any, text: any) {
        console.log("error");
    }
});