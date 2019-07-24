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
    private coordinates: number[];

    private positionCurrentPlayer: object[];
    private currentPositionforBlockOnMap: any;

    constructor() {
        this.initCanvas();
        this.manipulationKeyBoard();
    }

    private initCanvas(): void {
        this.canvasDraw = new CanvasDraw(ManipulationWithDOM.canvas);
    }

    public createPositionsBlockForMap(dice: number[]) {
        this.coordinates = CoordinateTransformation.conversionToPixels(this.canvasDraw.aspectRatio-2,dice);
        this.calculatePosition();
    }

    private calculatePosition() {
        if(this.currentPlayer.isFirstMove()) { 
            let coord = this.firstStep(this.coordinates);
            this.currentPositionforBlockOnMap=[coord[0],coord[1],this.coordinates[0],this.coordinates[1]];
        }
        else {
            this.positionCurrentPlayer = this.position.createPositionForCurrentPlayer(this.coordinates,this.canvasDraw.aspectRatio,this.currentPlayer.getColor());
            this.currentPositionforBlockOnMap=this.positionCurrentPlayer[0];
        }
    }
    private firstStep(coordinates: number[]): number[] {
        let x: number = this.currentPlayer.getXCoordinate()-this.coordinates[0]-1;
        let y: number = this.currentPlayer.getYCoordinate()-this.coordinates[1]-1;
        x > 0 ? x : x = 1;
        y > 0 ? y : y = 1;
        return [x,y];
    }

    private endOfturn(){
        ManipulationWithDOM.undisabledButtonDice();
        this.position.saveBlockOnMap(this.currentPositionforBlockOnMap, this.currentPlayer.getColor());
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
        }
        else {
            this.flagGame = true;
            this.currentPlayer = this.player1;
        }
    }

    public turnTime() {
        this.timer = setTimeout(() => this.endOfturn(),4000);
    }

    public setPlayerNames(): void {
        let namePlayer1: string = (ManipulationWithDOM.player1).value;
        let namePlayer2: string = (ManipulationWithDOM.player2).value;

        this.player1 = new Player(Identification.setName(namePlayer1, "Player 1"), "Red", 1, ManipulationWithDOM.canvas.height);
        this.player2 = new Player(Identification.setName(namePlayer2, "Player 2"), "Blue", ManipulationWithDOM.canvas.width, 1);

        this.currentPlayer=this.player1;
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
            case Directions.Up:
            case Directions.Down: {
                this.coordinates =CoordinateTransformation.turnSize();
                this.calculatePosition();
                this.draw();
           //     ManipulationWithDOM.playSound(movementsOfBlock);
            }
                break;
            case Directions.Right: {
           //     ManipulationWithDOM.playSound(movementsOfBlock);
                this.draw();
            }
                break;
            case Directions.Left: {
           //     ManipulationWithDOM.playSound(movementsOfBlock);
                this.draw();
            }
                break;
            case Directions.Enter: {
            //    ManipulationWithDOM.playSound(enterSound);
                clearTimeout(this.timer);
                this.endOfturn();
            }
                break;
            default :
                break;
        }
    }

    public draw(): void {
       this.canvasDraw.redraw(this.currentPositionforBlockOnMap,this.currentPlayer.getColor());  
    }
}