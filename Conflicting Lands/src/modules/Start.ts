import {NamePlayers} from "./StartPage/WriteNames";
import {CanvasKeyPress} from "./GamePage/WorkWithCanvas/KeyPress";
import {HideF} from "./Front/scripts/Hide";
import "./Front/css/main.css";
import "./Front/css/Players.css";
import "./Front/images/VS.jpg";


///------------------StartPage---------------------
document.getElementById('canvas').style.display = 'none';
document.getElementById("writeNames").onclick=setNamePlayersStart;

function setNamePlayersStart() {
    let player1:string = (<HTMLInputElement>document.getElementById("player1")).value;
    let player2:string = (<HTMLInputElement>document.getElementById("player2")).value;
    let namePlayers =new NamePlayers();
    namePlayers.setNamePlayers(player1,player2);

    HideHTML();
    drawGridStart();
}

let hideF;
function HideHTML()
{
hideF = new HideF();
hideF.Hide();
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