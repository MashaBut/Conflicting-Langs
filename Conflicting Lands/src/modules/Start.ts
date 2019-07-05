import setNamePlayers from "./StartPage/WriteNames";
import {Canvas} from "./GamePage/WorkWithCanvas/Draw";

///------------------StartPage---------------------

document.getElementById("writeNames").onclick=setNamePlayersStart;
function setNamePlayersStart() {
    let player1:string = (<HTMLInputElement> document.getElementById("player1")).value;
    let player2:string = (<HTMLInputElement> document.getElementById("player2")).value; 
    setNamePlayers(player1,player2);

    drawGridStart();
}

///----------------WorkWithCanvas------------------

function drawGridStart() {
    let canvasObj = (<HTMLCanvasElement> document.getElementById('fuildGame')).getContext('2d');
    Canvas.drawGrid(canvasObj);
}