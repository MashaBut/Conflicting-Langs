import {Game} from "../controllers/controller-main-module"
import "./start/ux/css/main.css";
import "./start/ux/css/players.css";
import "../assets/images/VS.jpg";
///------------------Start---------------------

let game:Game= new Game();
/*let canvasObj:any = (<HTMLCanvasElement> document.getElementById('fuildGame')).getContext('2d');
let game=new Game(canvasObj);

///----------------WorkWithCanvas------------------

addEventListener("keydown",(e:KeyboardEvent)=>{
  game.setPositionBlockOnFuild(e.keyCode);
});

let buttonAA:any=document.getElementById("AA");
buttonAA.onclick = () => game.game(player1, player2)
*/