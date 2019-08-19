import { Player } from "../game/player/player";
import { Identification } from "../game/player/write-names";
import { ManipulationWithDOM } from "../work-with-html/manipulations-with-dom";
import { fromEvent, Observable } from "rxjs";
import { KeyCodes } from '../key-codes/key-codes';
import { Draw } from "../game/work-with-canvas/draw";
import { CoordinateTransformation } from "../game/work-with-canvas/coordinate-transformation";
import { Position } from "../game/work-with-canvas/position";
import { Block } from "../game/work-with-canvas/block";
import { Color } from "../game/work-with-canvas/color";
import { Timer } from "../game/timer/timer";
import { PlayersLives } from "../game/lives/players-lives";
import { Media } from "../work-with-html/media";

export class Game {

    private player1: Player;
    private player2: Player;
    private currentPlayer: Player;
    private keyDown: Observable<Event> = fromEvent(document, 'keydown');
    private flagGame: boolean = true;
    private flag: boolean = true;
    private timer: any;

    private position = new Position();
    private canvasDraw: Draw;
    private size: number[];

    private arrayCurrentPosition = new Array<Block>();
    private currentPosition: Block;
    private counterBlocksInArray: number = 0;

    private x: number;
    private y: number;
    private currentColor: string = Color.Green;
    private possiblePositions = false;

    constructor() {
        this.initCanvas();
        this.manipulationKeyBoard();
    }

    private initCanvas(): void {
        this.canvasDraw = new Draw(ManipulationWithDOM.canvas);
    }

    public createPositionsBlockForMap(dice: number[]): void {
        this.size = CoordinateTransformation.conversionToPixels(this.canvasDraw.aspectRatio - 2, dice);
        this.calculatePosition();
    }

    private calculatePosition() {
        this.counterBlocksInArray = 0;
        this.arrayCurrentPosition.length = 0;
        if (this.currentPlayer.isFirstMove()) {
            let coord: number[] = this.firstStep(this.size);
            let block = new Block(coord[0], coord[1], this.size[0], this.size[1], this.currentPlayer.getColor());
            this.currentPosition = block;
            this.draw();
        }
        else {
            this.calculateAllPosition(this.size[0], this.size[1]);
            if (this.arrayCurrentPosition.length != 0) {
                this.setFirstStep();
            }
            else {
                this.calculateAllPosition(this.size[1], this.size[0]);
                if (this.arrayCurrentPosition.length != 0) {
                    this.setFirstStep();
                }
                else {
                    this.possiblePositions = false;
                    this.endOfturn();
                }
            }
        }
    }

    private setFirstStep(): void {
        this.currentPosition = this.arrayCurrentPosition[0];
        this.draw();
        this.possiblePositions = true;
    }

    private calculateAllPosition(xSize: number, ySize: number): void {
        for (let y = 1; y <= ManipulationWithDOM.canvas.height - ySize; y += this.canvasDraw.aspectRatio) {
            for (let x = 1; x <= ManipulationWithDOM.canvas.width - xSize; x += this.canvasDraw.aspectRatio) {
                if (x != ManipulationWithDOM.canvas.width + 1 && y != ManipulationWithDOM.canvas.height + 1) {
                    let block = new Block(x, y, xSize, ySize, this.currentPlayer.getColor());
                    if (this.position.checkPosition(block)) {
                        this.arrayCurrentPosition.push(block);
                    }
                }
            }
        }
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
        clearTimeout(this.timer);
        this.flag = false;
        if (this.currentPlayer.isFirstMove()) {
            this.currentPlayer.setFirstMove(false);
            this.repetitionAtCompletion();
        }
        else {
            if (this.possiblePositions) {
                this.repetitionAtCompletion();
            }
            else if (!this.possiblePositions) {
                alert("Oh, no. Sorry:(");
                this.currentPlayer.setLives();
                ManipulationWithDOM.playSound(Media.lostLife);
                if (this.currentPlayer === this.player1) {
                    PlayersLives.checkLife(this.player1.getLives(), ManipulationWithDOM.livesForPlayerOne);
                    Timer.flagForTimer = false;
                }
                else if (this.currentPlayer === this.player2) {
                    PlayersLives.checkLife(this.player2.getLives(), ManipulationWithDOM.livesForPlayerTwo);
                    Timer.flagForTimer = false;
                }
                if (this.currentPlayer.getLives() === 0) {
                    alert(this.currentPlayer.getName() + " loser");
                }
            }
        }
        this.repetititonAtEachTurn();
        this.changePlayer();
    }

    private repetitionAtCompletion(): void {
        this.canvasDraw.redraw(this.currentPosition, this.currentPlayer.getColor());
        this.currentPosition.color = this.currentPlayer.getColor();
        this.position.saveBlockOnMap(this.currentPosition);
        this.canvasDraw.saveCanvasToImage();
    }

    private repetititonAtEachTurn(): void {
        this.currentPlayer.setOccupiedArea(this.position.countingTheAreaOfTheCurrentPlayer(this.currentPlayer.getColor()));
        ManipulationWithDOM.engagedTerritory(ManipulationWithDOM.territoryplayer1, this.player1.getOccupiedArea());
        ManipulationWithDOM.engagedTerritory(ManipulationWithDOM.territoryplayer2, this.player2.getOccupiedArea());
    }

    private changePlayer(): void {
        if (this.flagGame) {
            this.flagGame = false;
            this.currentPlayer = this.player2;
            ManipulationWithDOM.nameplayer1.style.cssText = "color: #ed1818";
            ManipulationWithDOM.nameplayer2.style.cssText = "color: yellow";
        }
        else {
            this.flagGame = true;
            this.currentPlayer = this.player1;
            this.currentPlayer.soundsForPlayer = true;
            ManipulationWithDOM.nameplayer2.style.cssText = "color: #0719e6";
            ManipulationWithDOM.nameplayer1.style.cssText = "color: yellow";
        }
    }

    public turnTime() {
        this.timer = setTimeout(() => this.endOfturn(), 20000);
        this.flag = true;
    }

    public setPlayer1(name: string): void {
        this.player1 = new Player(name, Color.Red, 1, ManipulationWithDOM.canvas.height);
        this.currentPlayer = this.player1;
        ManipulationWithDOM.nameplayer1.style.cssText = "color: yellow";
        ManipulationWithDOM.setupNamePlayer(ManipulationWithDOM.nameplayer1, this.player1.getName());
        ManipulationWithDOM.engagedTerritory(ManipulationWithDOM.territoryplayer1, this.player1.getOccupiedArea());
        ManipulationWithDOM.engagedCoins(ManipulationWithDOM.coinsplayer1, this.player1.getCoints());
        PlayersLives.checkLife(this.player1.getLives(), ManipulationWithDOM.livesForPlayerOne);
    }

    public setPlayer2(name: string): void {
        this.player2 = new Player(name, Color.Blue, ManipulationWithDOM.canvas.width, 1);
        this.currentPlayer = this.player1;
        ManipulationWithDOM.nameplayer1.style.cssText = "color: yellow";
        ManipulationWithDOM.setupNamePlayer(ManipulationWithDOM.nameplayer2, this.player2.getName());
        ManipulationWithDOM.engagedTerritory(ManipulationWithDOM.territoryplayer2, this.player2.getOccupiedArea());
        ManipulationWithDOM.engagedCoins(ManipulationWithDOM.coinsplayer2, this.player2.getCoints());
        PlayersLives.checkLife(this.player2.getLives(), ManipulationWithDOM.livesForPlayerTwo);
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
            case KeyCodes.Space:
            case KeyCodes.Up:
            case KeyCodes.Down: {
                if (this.flag) {
                    this.size = CoordinateTransformation.turnSize();
                    if (!this.currentPlayer.isFirstMove()) {
                        this.currentPosition.width = this.size[0];
                        this.currentPosition.height = this.size[1];
                    }
                    this.calculatePosition();
                    this.draw();
                }
                else if (!this.flag) {
                    return;
                }
                ManipulationWithDOM.playSound(Media.movementsOfBlock);
                break;
            }
            case KeyCodes.Right: {
                if (this.flag) {
                    if (!this.currentPlayer.isFirstMove()) {
                        this.counterBlocksInArray++;
                        if (this.counterBlocksInArray >= this.arrayCurrentPosition.length || this.counterBlocksInArray < 0) {
                            this.counterBlocksInArray = 0;
                        }
                        this.currentPosition = this.arrayCurrentPosition[this.counterBlocksInArray];
                        this.draw();
                    }
                }
                else if (!this.flag) {
                    return;
                }
                ManipulationWithDOM.playSound(Media.movementsOfBlock);
                break;
            }
            case KeyCodes.Left: {
                if (this.flag) {
                    if (!this.currentPlayer.isFirstMove()) {
                        this.counterBlocksInArray--;
                        if (this.counterBlocksInArray >= this.arrayCurrentPosition.length || this.counterBlocksInArray < 0) {
                            this.counterBlocksInArray = 0;
                        }
                        this.currentPosition = this.arrayCurrentPosition[this.counterBlocksInArray];
                        this.draw();
                    }
                }
                else if (!this.flag) {
                    return;
                }
                ManipulationWithDOM.playSound(Media.movementsOfBlock);
                break;
            }
            case KeyCodes.Enter: {
                if (this.flag) {
                    ManipulationWithDOM.playSound(Media.enterSound);
                    Timer.flagForTimer = false;
                    this.endOfturn();
                    this.flag = false;
                }
                else if (!this.flag) {
                    return;
                }
                break;
            }
        }
    }

    public draw(): void {
        this.canvasDraw.redraw(this.currentPosition, this.currentColor);
    }
}