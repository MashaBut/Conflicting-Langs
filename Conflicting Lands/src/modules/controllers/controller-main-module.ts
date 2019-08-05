import { Player } from "../player";
import { Identification } from "../start/write-names";
import { ManipulationWithDOM } from "./manipulations-with-dom";
import { fromEvent, Observable } from "rxjs";
import { Directions } from './key-designations';
import { CanvasDraw } from "../game/work-with-canvas/draw";
import { CoordinateTransformation } from "../game/work-with-canvas/create";
import { Position } from "../game/work-with-canvas/create-position";
import { Color } from "../game/work-with-canvas/color";

export class Game {

    private player1: Player;
    private player2: Player;
    private currentPlayer: Player;
    private keyDown: Observable<Event> = fromEvent(document, 'keydown');
    private flagGame: boolean = true;
    private flag: boolean = true;
    private timer: any;

    private position = new Position();
    private canvasDraw: CanvasDraw;
    private size: number[];

    private positionCurrentPlayer: object[];
    private currentPositionforBlockOnMap: any;
    private x: number;
    private y: number;
    private currentColorBlockOnMap: string = Color.Green;
    constructor() {
        this.initCanvas();
        this.manipulationKeyBoard();
    }

    private initCanvas(): void {
        this.canvasDraw = new CanvasDraw(ManipulationWithDOM.canvas);
    }

    public createPositionsBlockForMap(dice: number[]) {
        this.size = CoordinateTransformation.conversionToPixels(this.canvasDraw.aspectRatio - 2, dice);
        this.calculatePosition();
    }

    private calculatePosition() {
        let coord = this.firstStep(this.size);
        this.currentPositionforBlockOnMap = [coord[0], coord[1], this.size[0], this.size[1]];
    }

    private firstStep(coordinates: number[]): number[] {
        this.x = this.currentPlayer.getXCoordinate() - this.size[0] - 1;
        this.y = this.currentPlayer.getYCoordinate() - this.size[1] - 1;
        this.x > 0 ? this.x : this.x = 1;
        this.y > 0 ? this.y : this.y = 1;
        return [this.x, this.y];
    }

    private endOfturn() {
        ManipulationWithDOM.undisabledButtonDice();
        this.canvasDraw.redraw(this.currentPositionforBlockOnMap, this.currentPlayer.getColor());
        if (this.currentColorBlockOnMap === Color.Green) {
            this.position.saveBlockOnMap(this.currentPositionforBlockOnMap, this.currentPlayer.getColor());
            this.currentPlayer.setOccupiedArea(this.position.countingTheAreaOfTheCurrentPlayer(this.currentPlayer.getColor()));
            ManipulationWithDOM.engagedTerritory(ManipulationWithDOM.territoryplayer1, this.player1.getOccupiedArea());
            ManipulationWithDOM.engagedTerritory(ManipulationWithDOM.territoryplayer2, this.player2.getOccupiedArea());
            this.canvasDraw.saveCanvasToImage();
        }
        this.currentColorBlockOnMap = Color.Orange;
        if (this.currentPlayer.isFirstMove()) {
            this.currentPlayer.firstMove = false;
            this.currentColorBlockOnMap = Color.Green;
        }
        this.changePlayer();
    }

    private changePlayer(): void {
        if (this.flagGame) {
            this.flagGame = false;
            this.currentPlayer = this.player2;
            this.currentPlayer.soundsForPlayer = false;
            ManipulationWithDOM.nameplayer2.style.cssText = "color: #068d03";
            ManipulationWithDOM.nameplayer1.style.cssText = "color: #ed1818";
        }
        else {
            this.flagGame = true;
            this.currentPlayer = this.player1;
            this.currentPlayer.soundsForPlayer = true;
            ManipulationWithDOM.nameplayer1.style.cssText = "color: #068d03";
            ManipulationWithDOM.nameplayer2.style.cssText = "color: #0719e6";
        }
    }

    public turnTime() {
        this.timer = setTimeout(() => this.endOfturn(), 20000);
        this.flag = true;
    }

    private initComponentOnMapForPlayers(): void {
        ManipulationWithDOM.setupNamePlayer(ManipulationWithDOM.nameplayer1, this.player1.getName());
        ManipulationWithDOM.setupNamePlayer(ManipulationWithDOM.nameplayer2, this.player2.getName());

        ManipulationWithDOM.engagedTerritory(ManipulationWithDOM.territoryplayer1, this.player1.getOccupiedArea());
        ManipulationWithDOM.engagedTerritory(ManipulationWithDOM.territoryplayer2, this.player2.getOccupiedArea());

        ManipulationWithDOM.engagedCoins(ManipulationWithDOM.coinsplayer1, this.player1.getCoints());
        ManipulationWithDOM.engagedCoins(ManipulationWithDOM.coinsplayer2, this.player2.getCoints());
    }

    public setPlayerNames(): void {
        let namePlayer1: string = (ManipulationWithDOM.player1).value;
        let namePlayer2: string = (ManipulationWithDOM.player2).value;

        this.player1 = new Player(Identification.setName(namePlayer1, "Player 1"), Color.Red, 1, ManipulationWithDOM.canvas.height);
        this.player2 = new Player(Identification.setName(namePlayer2, "Player 2"), Color.Blue, ManipulationWithDOM.canvas.width, 1);
        this.initComponentOnMapForPlayers();
        this.currentPlayer = this.player1;
        ManipulationWithDOM.nameplayer1.style.cssText = "color: #068d03";
    }

    public manipulationKeyBoard(): void {
        this.keyDown
            .subscribe((e: KeyboardEvent) => {
                ManipulationWithDOM.disableStandardKeyOperation(e);
                this.setBlockPositionOnMap(e);
            })
    }

    private setBlockPositionOnMap(keyCode: KeyboardEvent): void {
        switch (keyCode.keyCode) {
            case 32: {
                if(this.flag === true) {
                    this.size = CoordinateTransformation.turnSize();
                    if (this.currentPlayer.isFirstMove()) {
                        this.calculatePosition();
                        this.currentColorBlockOnMap = Color.Green;
                    }
                    else {
                        this.currentPositionforBlockOnMap[2] = this.size[0];
                        this.currentPositionforBlockOnMap[3] = this.size[1];
                        this.currentColorBlockOnMap = this.position.createPositionForCurrentPlayer(this.currentPositionforBlockOnMap, this.currentPlayer.getColor());
                    }
                    this.draw();
                    ManipulationWithDOM.playSound(ManipulationWithDOM.movementsOfBlock);
                }
                else if(keyCode.keyCode === 32) {
                    if(this.flag === false) {
                        return;   
                    }
                }
            }
                break;
            case Directions.Down: {
                if(this.flag === true) {
                    if (!this.currentPlayer.isFirstMove()) {
                        this.currentPositionforBlockOnMap[1] += this.canvasDraw.aspectRatio;
                        this.currentColorBlockOnMap = this.position.createPositionForCurrentPlayer(this.currentPositionforBlockOnMap, this.currentPlayer.getColor());
                        this.draw();
                    }   
                    ManipulationWithDOM.playSound(ManipulationWithDOM.movementsOfBlock); 
                }
                else if(keyCode.keyCode === Directions.Down) {
                    if(this.flag === false) {
                        return;   
                    }
                }
            }
                break;
            case Directions.Up: {
                if(this.flag === true) {
                    if (!this.currentPlayer.isFirstMove()) {
                        this.currentPositionforBlockOnMap[1] -= this.canvasDraw.aspectRatio;
                        this.currentColorBlockOnMap = this.position.createPositionForCurrentPlayer(this.currentPositionforBlockOnMap, this.currentPlayer.getColor());
                        this.draw();
                    }
                    ManipulationWithDOM.playSound(ManipulationWithDOM.movementsOfBlock);    
                }
                else if(keyCode.keyCode === Directions.Up) {
                    if(this.flag === false) {
                        return;   
                    }
                }
            }
                break;

            case Directions.Right: {
                if(this.flag === true) {
                    if (!this.currentPlayer.isFirstMove()) {
                        this.currentPositionforBlockOnMap[0] += this.canvasDraw.aspectRatio;
                        this.currentColorBlockOnMap = this.position.createPositionForCurrentPlayer(this.currentPositionforBlockOnMap, this.currentPlayer.getColor());
                        this.draw();
                    }
                    ManipulationWithDOM.playSound(ManipulationWithDOM.movementsOfBlock);    
                }
                else if (keyCode.keyCode === Directions.Right) {
                    if(this.flag === false) {
                        return;   
                    }
                }
            }
                break;
            case Directions.Left: {
                if(this.flag === true) {
                    if (!this.currentPlayer.isFirstMove()) {
                        this.currentPositionforBlockOnMap[0] -= this.canvasDraw.aspectRatio;
                        this.currentColorBlockOnMap = this.position.createPositionForCurrentPlayer(this.currentPositionforBlockOnMap, this.currentPlayer.getColor());
                        this.draw();
                    }
                    ManipulationWithDOM.playSound(ManipulationWithDOM.movementsOfBlock);
                }
                else if(keyCode.keyCode === Directions.Left) { 
                    if(this.flag === false) {
                        return;   
                    }
                }
            }
                break;
            case Directions.Enter: {
                if(this.flag === true) {
                    ManipulationWithDOM.playSound(ManipulationWithDOM.enterSound);
                    clearTimeout(this.timer);
                    this.endOfturn();  
                    this.flag = false;  
                }
                else if (keyCode.keyCode === Directions.Enter) { 
                    if(this.flag === false) {
                        return;   
                    }
                }
            }
                break;
            default:
                break;
        }
    }

    public draw(): void {
        this.canvasDraw.redraw(this.currentPositionforBlockOnMap, this.currentColorBlockOnMap);
    }
}