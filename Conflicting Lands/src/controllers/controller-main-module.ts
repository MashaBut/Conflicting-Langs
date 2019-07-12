import {Player} from "../modules/player";
import {NamePlayers} from "../modules/start/write-names";
import {CanvasDraw} from "../modules/game/work-with-canvas/draw";
import {Subject, Observable} from "rxjs";
import { HideFunction } from "../modules/start/ux/scripts/hide-function";
let Rx=require('rxjs');
export class Game {
    
    player1:Player;
    player2:Player;
    flagGame:boolean=true;
    private gameEvents= new Subject();
    button = document.querySelector('button');
    keydown$= Rx.Observable.fromEvent(document,"keydown");
    
    constructor() {
       let canvasNone:any=document.getElementById('canvas');
       canvasNone.style.display = 'none';
        
        Rx.fromEvent(this.button, 'click')
        .subscribe(() =>  {
            this.setNamePlayers();
            HideFunction.hide();
        })

        this.gameEvents.subscribe(()=>{
            window.addEventListener("keydown",(e)=>{
                if([13, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
                    e.preventDefault();
                }
              }, false);
        });
        this.gameEvents.next();
    }
    private managerKeydown() {
        
    }

    private setNamePlayers():void {
        let namePlayer1:string = (<HTMLInputElement>document.getElementById("player1")).value;
        let namePlayer2:string = (<HTMLInputElement>document.getElementById("player2")).value;

        this.player1 = new Player(NamePlayers.setNamePlayer(namePlayer1,"Player 1"),"Red",1,500);
        this.player2 = new Player(NamePlayers.setNamePlayer(namePlayer2,"Player 2"),"Blue",1,500);
        console.log(this.player1);
    }

    private changePlayer():Player {
        if(this.flagGame===true) {
            this.flagGame=false;
            return this.player1;
        }
        else {
            this.flagGame=true;
            return this.player2;
        }
    }

 /*   
    canvasDraw:CanvasDraw;
    
    constructor (canvasObj:CanvasRenderingContext2D) {
        this.canvasDraw = new CanvasDraw(canvasObj);
    }

    public setPositionBlockOnFuild(KeyCode:any) {
        switch(KeyCode) {
            case 38: { //up
                this.canvasDraw.setSizeBlock();
                this.canvasDraw.drawGrid();
                break;
            }
            case 39: {//right
                break;
            }
            case 37: {//left
                break;
            }
            case 40: {//down
                this.canvasDraw.setSizeBlock();
                this.canvasDraw.drawGrid();
                break;
            }
            case 13: {//enter
                this.canvasDraw.saveBlockToArray();
                this.canvasDraw.drawGrid(); 
                break;
            }
            default :
                break;
        }
    }*/
  }