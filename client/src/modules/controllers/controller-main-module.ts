import { Player } from "../game/player/player";
import { ManipulationWithDOM } from "../work-with-html/manipulations-with-dom";
import { Draw } from "../game/work-with-canvas/draw";
import { CoordinateTransformation } from "../game/work-with-canvas/coordinate-transformation";
import { Position } from "../game/work-with-canvas/position";
import { Block } from "../game/work-with-canvas/block";
import { Timer } from "../game/timer/timer";
import { PlayersLives } from "../game/lives/lives";
import { PathToMedia } from "../work-with-html/path-to-media";
import { ColorPlayers } from "../game/enums/color-players";
import { Change } from "../start";

export class Game {

    private player1: Player;
    private player2: Player;
    private currentPlayer: Player;
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
    private currentColor: string = ColorPlayers.Green;
    private possiblePositions = false;

    constructor() { }

    public initCanvas(sizeX: number, sizeY: number, colorMap: string, colorGrid: string): void {
        this.canvasDraw = new Draw(ManipulationWithDOM.canvas, sizeX, sizeY, colorMap, colorGrid);
    }

    public drawNewCanvas(sizeX: number, sizeY: number, colorMap: string, colorGrid: string): void{
        this.canvasDraw.reDrawCanvas(sizeX, sizeY, colorMap, colorGrid);
    }

    public createPositionsBlockForMap(dice: number[]): void {
        //this.position.blocksWithDices(dice);
        this.position.InitDice(dice);
        this.size = CoordinateTransformation.conversionToPixels(this.canvasDraw.aspectRatio-2, this.canvasDraw.aspectRatio1-2, dice);
        this.calculatePosition();
    }

    private calculatePosition() {
        this.counterBlocksInArray = 0;
        this.arrayCurrentPosition.length = 0;
        if (this.currentPlayer.isFirstMove()) {
            let coord: number[] = this.firstStep();
            let block = new Block(coord[0], coord[1], this.size[0], this.size[1], this.currentPlayer.getColor());
            this.currentPosition = block;
            this.draw();
        }
        else {
            this.calculateAllPosition(this.position.di);
            if (this.arrayCurrentPosition.length != 0) {
                this.setFirstStep();
            }
            else {
                this.position.change();
                this.calculateAllPosition(this.position.di);
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

    private calculateAllPosition(d:number[]): void {
        const xSize = d[0];
        const ySize = d[1];
        for (let y = 1; y <= ManipulationWithDOM.canvas.height - ySize*this.canvasDraw.aspectRatio1; y += this.canvasDraw.aspectRatio1) {
            for (let x = 1; x <= ManipulationWithDOM.canvas.width - xSize*this.canvasDraw.aspectRatio; x += this.canvasDraw.aspectRatio) {
                if (x != ManipulationWithDOM.canvas.width + 1 && y != ManipulationWithDOM.canvas.height + 1) {
                    let block = new Block(x, y, xSize*this.canvasDraw.aspectRatio, ySize*this.canvasDraw.aspectRatio1, this.currentPlayer.getColor());
                    if (this.position.checkPosition(block)) {
                        this.arrayCurrentPosition.push(block);
                    }
                }
            }
        }
    }

    private firstStep(): number[] {
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
                ManipulationWithDOM.playSound(PathToMedia.lostLife);
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
        Change.changePlayer();
    }

    private repetitionAtCompletion(): void {
        this.canvasDraw.redraw(this.currentPosition, this.currentPlayer.getColor());
        this.currentPosition.color = this.currentPlayer.getColor();
        let block = new Block (this.currentPosition.x,this.currentPosition.y, this.position.di[0],this.position.di[1],this.currentPosition.color);
        this.position.saveBlockOnMap(block);
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
          //  ManipulationWithDOM.nameplayer1.style.cssText = "color: #ed1818";
           // ManipulationWithDOM.nameplayer2.style.cssText = "color: yellow";
           ManipulationWithDOM.rightPlayer.style.cssText = "display: block";
           ManipulationWithDOM.leftPlayer.style.cssText = "display: none";
        }
        else { 
            this.flagGame = true;
            this.currentPlayer = this.player1;
            this.currentPlayer.soundsForPlayer = true;
           // ManipulationWithDOM.nameplayer2.style.cssText = "color: #0719e6";
           // ManipulationWithDOM.nameplayer1.style.cssText = "color: yellow";
           ManipulationWithDOM.leftPlayer.style.cssText = "display: block";
           ManipulationWithDOM.rightPlayer.style.cssText = "display: none";

        }
    }

    public turnTime() {
        this.timer = setTimeout(() => this.endOfturn(), 20000);
        this.flag = true;
    }

    public setPlayer1(name: string, color: string): void {
        this.player1 = new Player(name, color, 1, ManipulationWithDOM.canvas.height);
        this.currentPlayer = this.player1;
        ManipulationWithDOM.nameplayer1.style.cssText = "color: " + color;
        ManipulationWithDOM.setupNamePlayer(ManipulationWithDOM.nameplayer1, this.player1.getName());
        ManipulationWithDOM.engagedTerritory(ManipulationWithDOM.territoryplayer1, this.player1.getOccupiedArea());
        PlayersLives.checkLife(this.player1.getLives(), ManipulationWithDOM.livesForPlayerOne);
        //ManipulationWithDOM.rightPlayer.style.cssText = "display: block";
        //ManipulationWithDOM.leftPlayer.style.cssText = "display: none";
    }

    public setPlayer2(name: string, color: string): void {
        this.player2 = new Player(name, color, ManipulationWithDOM.canvas.width, 1);
        this.currentPlayer = this.player1;
        ManipulationWithDOM.nameplayer2.style.cssText = "color: " + color;
        ManipulationWithDOM.setupNamePlayer(ManipulationWithDOM.nameplayer2, this.player2.getName());
        ManipulationWithDOM.engagedTerritory(ManipulationWithDOM.territoryplayer2, this.player2.getOccupiedArea());
        PlayersLives.checkLife(this.player2.getLives(), ManipulationWithDOM.livesForPlayerTwo);
       // ManipulationWithDOM.leftPlayer.style.cssText = "display: block";
       // ManipulationWithDOM.rightPlayer.style.cssText = "display: none";
    }

    public keyCode(e: KeyboardEvent) {
        ManipulationWithDOM.disableStandardKeyOperation(e);
    }

    public clearFuildForPlayerData(color1: string, color2: string): void {
        this.setPlayer1("", color1);
        this.setPlayer2("", color2);
    }
    public rotateBlock() {
        if (this.flag) {
            this.size = CoordinateTransformation.turnSize();
            if (!this.currentPlayer.isFirstMove()) {
                this.position.change();
                this.currentPosition.width = this.size[0];
                this.currentPosition.height = this.size[1];
            }
            this.calculatePosition();
            this.draw();
        }
        else if (!this.flag) {
            return;
        }
        ManipulationWithDOM.playSound(PathToMedia.movementsOfBlock);
    }

    public moveToRight(){
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
        ManipulationWithDOM.playSound(PathToMedia.movementsOfBlock);
    }

    public moveToLeft() {
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
        ManipulationWithDOM.playSound(PathToMedia.movementsOfBlock);
    }

    public setUpBlock() {
        if (this.flag) {
            ManipulationWithDOM.playSound(PathToMedia.enterSound);
            this.position.blocksWithDices();
            Timer.flagForTimer = false;
            this.endOfturn();
            this.flag = false;
        }
        else if (!this.flag) {
            return;
        }
    }

    public setBlockPositionOnMap(event:string): void {
        switch (event) {
            case "rotateBlock":
                this.rotateBlock();
                break;
            case "moveToRight":
                this.moveToRight();
                break;
            case "moveToLeft":
                this.moveToLeft();
                break;
            case "setUpBlock":
                this.setUpBlock();
                break;
        }
    }

    public draw(): void {
        this.canvasDraw.redraw(this.currentPosition, this.currentColor);
    }
}