import {NamePlayers} from "./start/write-names";
import {Player} from "./player";
import {Game} from "../controllers/controller-main-module"
import {HideFunction} from "./start/ux/scripts/hide-function";
import "./start/ux/css/main.css";
import "./start/ux/css/players.css";
import "../assets/images/VS.jpg";

///------------------StartPage---------------------
let player1:Player;
let player2:Player;

let hideF = new HideFunction;
let canvasObj:any = (<HTMLCanvasElement> document.getElementById('fuildGame')).getContext('2d');
let game=new Game(canvasObj);
let canvasNone:any=document.getElementById('canvas');
canvasNone.style.display = 'none';


let buttonWriteNames:any= document.getElementById("writeNames");
buttonWriteNames.onclick=()=>{
    let namePlayer1:string = (<HTMLInputElement>document.getElementById("player1")).value;
    let namePlayer2:string = (<HTMLInputElement>document.getElementById("player2")).value;

    player1 = new Player(NamePlayers.setNamePlayer(namePlayer1,"Player 1"),"Red",1,500);
    player2 = new Player(NamePlayers.setNamePlayer(namePlayer2,"Player 2"),"Blue",1,500);
    hideHTML();
    game.game(player1,player2);
}

function hideHTML() { hideF.hide(); }

///----------------WorkWithCanvas------------------
window.addEventListener("keydown",(e)=>{
  if([13, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
      e.preventDefault();
  }
}, false);

addEventListener("keydown",(e:KeyboardEvent)=>{
  game.setPositionBlockOnFuild(e.keyCode);
});

let buttonAA:any=document.getElementById("AA");
buttonAA.onclick = () => game.game(player1, player2)