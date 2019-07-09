import {NamePlayers} from "./StartPage/WriteNames";
import {Player} from "./Player";
import {Game} from "./Controllers/ControllerMain"
///------------------StartPage---------------------
let player1:Player;
let player2:Player;

let canvasObj:any = (<HTMLCanvasElement> document.getElementById('fuildGame')).getContext('2d');
let game=new Game(canvasObj);

let buttonWriteNames:any= document.getElementById("writeNames");
buttonWriteNames.onclick=()=>{
    let namePlayer1:string = (<HTMLInputElement>document.getElementById("player1")).value;
    let namePlayer2:string = (<HTMLInputElement>document.getElementById("player2")).value;

    player1 = new Player(NamePlayers.setNamePlayer(namePlayer1,"Player 1"),"Red",1,500);
    player2 = new Player(NamePlayers.setNamePlayer(namePlayer2,"Player 2"),"Blue",1,500);
    
    game.game(player1,player2);
}

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