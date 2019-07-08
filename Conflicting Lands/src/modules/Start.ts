import {NamePlayers} from "./StartPage/WriteNames";
import {CanvasKeyPress} from "./GamePage/WorkWithCanvas/KeyPress";

///------------------StartPage---------------------

document.getElementById("writeNames").onclick=setNamePlayersStart;

function setNamePlayersStart() {
    let player1:string = (<HTMLInputElement>document.getElementById("player1")).value;
    let player2:string = (<HTMLInputElement>document.getElementById("player2")).value;
    let namePlayers =new NamePlayers();
    namePlayers.setNamePlayers(player1,player2);

    drawGridStart();
}

///----------------WorkWithCanvas------------------

addEventListener("keydown",setPositionBlockOnFuildStart);
let canvasKeyPress;

function drawGridStart() {
    let canvasObj = (<HTMLCanvasElement> document.getElementById('fuildGame')).getContext('2d');
    canvasKeyPress = new CanvasKeyPress(canvasObj);
}

function setPositionBlockOnFuildStart(e:KeyboardEvent) {
  canvasKeyPress.setPositionBlockOnFuild(e.keyCode);
}