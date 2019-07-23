import {Player} from "../player";
import {Identification} from "../start/write-names";
import {ManipulationWithDOM} from "./manipulations-with-dom";
import {fromEvent, Observable} from "rxjs";
import {Directions} from './key-designations';
import {CanvasDraw} from "../game/work-with-canvas/draw";
import {CoordinateTransformation} from "../game/work-with-canvas/create";
import {Position} from "../game/work-with-canvas/create-position";

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
        if(this.currentPlayer.isFirstMove()) {
            let x:number;
            let y:number;
            if(this.currentPlayer.getXCoordinate()-this.coordinates[0]-1>0) {
                x = this.currentPlayer.getXCoordinate()-this.coordinates[0]-1;
            }
            else {
                x = 1;
            }

            if(this.currentPlayer.getYCoordinate()-this.coordinates[1]-1>0) {
                y = this.currentPlayer.getYCoordinate()-this.coordinates[1]-1;
            }
            else {
                y = 1;
            }
            this.currentPositionforBlockOnMap=[x,y,this.coordinates[0],this.coordinates[1]];
            console.log(this.currentPositionforBlockOnMap);
        }
        else {
            this.positionCurrentPlayer = this.position.createPositionForCurrentPlayer(this.coordinates,this.currentPlayer.getColor());
            this.currentPositionforBlockOnMap=this.positionCurrentPlayer[0];
        }
    }

    private firstStep(coordinates: number[]): number[] {
        return [];
    }

    private endOfturn(){
        ManipulationWithDOM.undisabledButtonDice();
        this.position.saveBlockOnMap(this.currentPositionforBlockOnMap, this.currentPlayer.getColor());
        this.canvasDraw.saveCanvasToImage();
        if(this.currentPlayer.isFirstMove()) {
            this.currentPlayer.firstMove = false;
        }
        this.changePlayer();
        console.log(this.currentPlayer.getName());
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
        this.player2 = new Player(Identification.setName(namePlayer2, "Player 2"), "Blue",ManipulationWithDOM.canvas.width, 1);

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
                ManipulationWithDOM.playSound(movementsOfBlock);
            }
                break;
            case Directions.Right: {
                ManipulationWithDOM.playSound(movementsOfBlock);
            }
                break;
            case Directions.Left: {
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
       this.canvasDraw.redraw(this.currentPositionforBlockOnMap,this.currentPlayer.getColor());  
    }
}