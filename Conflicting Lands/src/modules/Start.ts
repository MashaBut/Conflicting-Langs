import setNamePlayers from "./StartPage/WriteNames";
import {CanvasDraw} from "./GamePage/WorkWithCanvas/Draw";
import {CanvasKeyPress} from "./GamePage/WorkWithCanvas/KeyPress";

///------------------StartPage---------------------

document.getElementById("writeNames").onclick=setNamePlayersStart;

function setNamePlayersStart() {
    let player1:string = (<HTMLInputElement> document.getElementById("player1")).value;
    let player2:string = (<HTMLInputElement> document.getElementById("player2")).value; 
    setNamePlayers(player1,player2);

    drawGridStart();
}

///----------------WorkWithCanvas------------------

addEventListener("keydown",setPositionBlockOnFuildStart);

function drawGridStart() {
    let canvasObj = (<HTMLCanvasElement> document.getElementById('fuildGame')).getContext('2d');
    CanvasDraw.canvasObj=canvasObj;
    CanvasDraw.drawGrid();
}

function setPositionBlockOnFuildStart(e:KeyboardEvent) {
  CanvasKeyPress.setPositionBlockOnFuild(e.keyCode);
}