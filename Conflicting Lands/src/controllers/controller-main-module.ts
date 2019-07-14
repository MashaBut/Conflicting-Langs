import {Player} from "../modules/player";
import {NamePlayers} from "../modules/start/write-names";
import {CanvasDraw} from "../modules/game/work-with-canvas/draw";
import {Subject, fromEvent} from "rxjs";
import { HideFunction } from "../modules/start/ux/scripts/hide-function";
let Rx=require('rxjs');
export class Game {
    
    private player1:Player;
    private player2:Player;
    private currentPlayer:Player;

    private keyDown$:any;
    private gameEvents$= new Subject();

    private flagGame:boolean=true;
    private canvasDraw:CanvasDraw;
    
    private button = document.querySelector('button');
    
    constructor() {
        let canvasNone:any=document.getElementById('canvas');
        canvasNone.style.display = 'none';
        
        this.getCanvas();

        this.keyDown$ = fromEvent(document,'keydown')
            .subscribe((e:KeyboardEvent)=> {
                window.addEventListener("keydown",(e:KeyboardEvent)=>{
                    if([13, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
                        e.preventDefault();
                    }
                this.setPositionBlockOnFuild(e);
            });
        })

        Rx.fromEvent(this.button, 'click')
        .subscribe(() =>  {
            this.setNamePlayers();
            HideFunction.hide();
            this.gameEvents$.next();  
        })
            
        this.gameEvents$.subscribe(()=>this.currentPlayer = this.changePlayer());
        this.gameEvents$.subscribe(()=>this.tossDice());
        this.gameEvents$.subscribe(()=>this.setPositionForBlock());
        this.keyDown$.next();


      //  setTimeout(()=> {this.repidStream(),4000});
    }

    private repeatStream():void {
        this.keyDown$.next();
        this.gameEvents$.next();
    }

    private setNamePlayers():void {
        let namePlayer1:string = (<HTMLInputElement>document.getElementById("player1")).value;
        let namePlayer2:string = (<HTMLInputElement>document.getElementById("player2")).value;

        this.player1 = new Player(NamePlayers.setNamePlayer(namePlayer1,"Player 1"),"Red",1,500);
        this.player2 = new Player(NamePlayers.setNamePlayer(namePlayer2,"Player 2"),"Blue",1,500);
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

    private getCanvas():void {
        let canvasObj:any = (<HTMLCanvasElement> document.getElementById('fuildGame')).getContext('2d');
        this.canvasDraw = new CanvasDraw(canvasObj);
    }

    private setPositionBlockOnFuild(keyCode:KeyboardEvent):void {
        switch(keyCode.keyCode) {
            case 38: { //up
                this.canvasDraw.drawBlockOnFuild();
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
                this.canvasDraw.drawBlockOnFuild();
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
    }

    private tossDice():number[] {
        return [];
    }

    private setTimer():void {
        Rx.Observable.range(10, 0).timer(1000)
            .subscribe((x:any) => console.log(x));       
    }

    private setPositionForBlock():number[] {
        return [];
    }
  }