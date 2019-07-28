import {Player} from "../player";
import {Identification} from "../start/write-names";
import {ManipulationWithDOM} from "./manipulations-with-dom";
import {fromEvent, Observable} from "rxjs";
import {Directions} from './key-designations';
import {CanvasDraw} from "../game/work-with-canvas/draw";
import {CoordinateTransformation} from "../game/work-with-canvas/create";
import {Position} from "../game/work-with-canvas/create-position";
import { threadId } from "worker_threads";

let enterSound = require ('../../assets/sounds/soundForBlock3.wav');
let movementsOfBlock = require ('../../assets/sounds/moveblock2.wav');
export class Game {
    
    private player1: Player;
    private player2: Player;
    private currentPlayer: Player;
    private keyDown: Observable <Event> = fromEvent(document,'keydown');
    private flagGame: boolean = true;
    private timer: any;

    private position = new Position();
    private canvasDraw: CanvasDraw;
    private size: number[];

    private positionCurrentPlayer: object[];
    private currentPositionforBlockOnMap: any;
    private x: number;
    private y: number;
    private a: string = "Green";
    constructor() {
        this.initCanvas();
        this.manipulationKeyBoard();
    }

    private initCanvas(): void {
        this.canvasDraw = new CanvasDraw(ManipulationWithDOM.canvas);
    }

    public createPositionsBlockForMap(dice: number[]) {
        this.size = CoordinateTransformation.conversionToPixels(this.canvasDraw.aspectRatio-2,dice);
        this.calculatePosition();
    }

    private calculatePosition() {
        let coord = this.firstStep(this.size);
        this.currentPositionforBlockOnMap=[coord[0],coord[1],this.size[0],this.size[1]];
    }
    private firstStep(coordinates: number[]): number[] {
        this.x = this.currentPlayer.getXCoordinate()-this.size[0]-1;
        this.y = this.currentPlayer.getYCoordinate()-this.size[1]-1;
        this.x > 0 ? this.x : this.x = 1;
        this.y > 0 ? this.y : this.y = 1;
        return [this.x,this.y];
    }

    private endOfturn(){
        ManipulationWithDOM.undisabledButtonDice();
        this.canvasDraw.redraw(this.currentPositionforBlockOnMap,this.currentPlayer.getColor());
        this.position.saveBlockOnMap(this.currentPositionforBlockOnMap, this.currentPlayer.getColor());
        console.log(this.currentPositionforBlockOnMap);
        this.canvasDraw.saveCanvasToImage();
        if(this.currentPlayer.isFirstMove()) {
            this.currentPlayer.firstMove = false;
        }
        this.changePlayer();
    }

    private changePlayer():void {
        if(this.flagGame) {
            this.flagGame = false;
            this.currentPlayer = this.player2;
            ManipulationWithDOM.currentPlayer.style.cssText = "color: #0719e6";
        }
        else {
            this.flagGame = true;
            this.currentPlayer = this.player1;
            ManipulationWithDOM.currentPlayer.style.cssText = "color: #ed1818";
        }
    }

    public turnTime() {
        this.timer = setTimeout(() => this.endOfturn(),20000);
    }

    public setPlayerNames(): void {
        let namePlayer1: string = (ManipulationWithDOM.player1).value;
        let namePlayer2: string = (ManipulationWithDOM.player2).value;

        this.player1 = new Player(Identification.setName(namePlayer1, "Player 1"), "Red", 1, ManipulationWithDOM.canvas.height);
        this.player2 = new Player(Identification.setName(namePlayer2, "Player 2"), "Blue", ManipulationWithDOM.canvas.width, 1);
        ManipulationWithDOM.nameplayer1.innerHTML=this.player1.getName();
        ManipulationWithDOM.nameplayer2.innerHTML=this.player2.getName();
        this.currentPlayer=this.player1;
        ManipulationWithDOM.currentPlayer.style.cssText = "color: #ed1818";
    }

    public manipulationKeyBoard():void {
        this.keyDown
            .subscribe((e: KeyboardEvent) => {
                ManipulationWithDOM.disableStandardKeyOperation(e);
                this.setBlockPositionOnMap(e);
            })
    }

    private setBlockPositionOnMap(keyCode: KeyboardEvent): void {
        switch(keyCode.keyCode) {
            case 16: {
                this.size = CoordinateTransformation.turnSize();
                if(this.currentPlayer.isFirstMove()) {
                    this.calculatePosition();
                }
                else {
                    this.currentPositionforBlockOnMap[2] = this.size[0];
                    this.currentPositionforBlockOnMap[3] = this.size[1];
                }
                this.a = this.position.createPositionForCurrentPlayer(this.currentPositionforBlockOnMap,this.currentPlayer.getColor(),"Green");
                this.draw();
                ManipulationWithDOM.playSound(movementsOfBlock);
            }
                break;
            case Directions.Down: {
                    if(!this.currentPlayer.isFirstMove()) {
                    this.currentPositionforBlockOnMap[1] +=this.canvasDraw.aspectRatio;
                    this.a = this.position.createPositionForCurrentPlayer(this.currentPositionforBlockOnMap,this.currentPlayer.getColor(),"Green");
                    this.draw();
                    ManipulationWithDOM.playSound(movementsOfBlock);
                    }
                }
                    break;
            case Directions.Up: {
                if(!this.currentPlayer.isFirstMove()) {
                    this.currentPositionforBlockOnMap[1] -= this.canvasDraw.aspectRatio;
                    this.a = this.position.createPositionForCurrentPlayer(this.currentPositionforBlockOnMap,this.currentPlayer.getColor(),"Green");
                    this.draw();
                }
                ManipulationWithDOM.playSound(movementsOfBlock);
            }
                break;
            
            case Directions.Right: {
                if(!this.currentPlayer.isFirstMove()) {
                this.currentPositionforBlockOnMap[0] +=this.canvasDraw.aspectRatio;
                this.a = this.position.createPositionForCurrentPlayer(this.currentPositionforBlockOnMap,this.currentPlayer.getColor(),"Green");
                this.draw();
                }
                ManipulationWithDOM.playSound(movementsOfBlock);
            }
                break;
            case Directions.Left: {
                if(!this.currentPlayer.isFirstMove()) {
                this.currentPositionforBlockOnMap[0] -=this.canvasDraw.aspectRatio;
                this.a = this.position.createPositionForCurrentPlayer(this.currentPositionforBlockOnMap,this.currentPlayer.getColor(),"Green");
                this.draw();
                }
                ManipulationWithDOM.playSound(movementsOfBlock);
            }
                break;
            case Directions.Enter: {
                ManipulationWithDOM.playSound(enterSound);
                clearTimeout(this.timer);
                this.endOfturn();
            }
                break;
            default :
                break;
        }
    }

    public draw(): void {
       this.canvasDraw.redraw(this.currentPositionforBlockOnMap,this.a);  
    }
}