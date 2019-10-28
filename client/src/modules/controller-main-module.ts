import { Player } from "./game/player";
import { ColorPlayers } from "./game/enums/color-players";
import { Draw } from "./game/work-with-canvas/draw";
import { CoordinateTransformation } from "./game/work-with-canvas/coordinate-transformation";
import { Position } from "./game/work-with-canvas/position";
import { Block } from "./game/work-with-canvas/block";
import { Timer } from "./game/timer";
import { PlayersLives } from "./game/lives";

import { ManipulationWithDOM as DOM } from "./work-with-html/manipulations-with-dom";
import { PathToMedia } from "./work-with-html/path-to-media";
import { SendMmessage } from "./start";

export class Game {

    private player1: Player;
    private player2: Player;
    public currentPlayer: Player;
    private flagGame: boolean = true;
    private timer: any;

    private position = new Position();
    public canvasDraw: Draw;
    private sizeFirstBlock: number[];

    public arrayCurrentPosition = new Array<Block>();
    public currentPosition: Block;
    private counterBlocksInArray: number = 0;

    public initCanvas(sizeX: number, sizeY: number, colorMap: string, colorGrid: string): void {
        this.canvasDraw = new Draw(DOM.canvas, sizeX, sizeY, colorMap, colorGrid, this.position.blocks);
        this.drawNewCanvas(sizeX, sizeY, colorMap, colorGrid);
        this.position.areaMap(sizeX, sizeY);
    }

    public drawNewCanvas(sizeX: number, sizeY: number, colorMap: string, colorGrid: string): void {
        this.canvasDraw.reDrawCanvas(sizeX, sizeY, colorMap, colorGrid, this.position.blocks);
    }

    public createPositionsBlockForMap(dice: number[]): void {
        this.position.initDice(dice);
        this.calculatePosition();
    }

    private firstStepInNumbers(x: number, y: number): number[] {
        x == 0 ? x = 0 : x = this.canvasDraw.numberOfVerticalLines - this.position.currentDices[0];
        y == 0 ? y = 0 : y = this.canvasDraw.numberOfHorizontalLines - this.position.currentDices[1];
        return [x * this.canvasDraw.aspectRatioWidth, y * this.canvasDraw.aspectRatioHeight];
    }

    public calculatePosition() {
        if (this.currentPlayer.isFirstMove()) {
            let coord: number[] = this.firstStepInNumbers(this.currentPlayer.getX(), this.currentPlayer.getY());
            this.sizeFirstBlock = CoordinateTransformation.conversionToPixels(this.canvasDraw.aspectRatioWidth - 2, this.canvasDraw.aspectRatioHeight - 2, this.position.currentDices);
            this.currentPosition = new Block(coord[0], coord[1], this.sizeFirstBlock[0], this.sizeFirstBlock[1], this.currentPlayer.getColor());
            this.draw();
        }
    }

    public setFirstStep(): void {
        this.currentPosition = this.arrayCurrentPosition[0];
        this.draw();
    }

    public convertBlockSizeToPixels(x: number, y: number, Xsize: number, Ysize: number, color: string): Block {
        return new Block(x * this.canvasDraw.aspectRatioWidth, y * this.canvasDraw.aspectRatioHeight, Xsize * this.canvasDraw.aspectRatioWidth,
            Ysize * this.canvasDraw.aspectRatioHeight, color);
    }

    private endOfturn() {
        DOM.undisabledButtonDice();
        clearTimeout(this.timer);
        if (this.currentPlayer.isFirstMove()) {
            this.currentPlayer.setFirstMove(false);
            this.repetitionAtCompletion();
        }
        else {
            this.repetitionAtCompletion();
        }
        this.repetititonAtEachTurn();
        this.changePlayer();
        SendMmessage.changePlayer();
    }

    public failute(): void {
        this.currentPlayer.setLives();
        DOM.playSound(PathToMedia.lostLife);
        if (this.currentPlayer === this.player1) {
            PlayersLives.checkLife(this.player1.getLives(), DOM.livesForPlayerOne);
            Timer.flagForTimer = false;
        }
        else if (this.currentPlayer === this.player2) {
            PlayersLives.checkLife(this.player2.getLives(), DOM.livesForPlayerTwo);
            Timer.flagForTimer = false;
        }
        if (this.currentPlayer.getLives() === 0) {
            alert(this.currentPlayer.getName() + " loser");
        }
    }

    private repetitionAtCompletion(): void {
        this.canvasDraw.redraw(this.currentPosition, this.position.blocks, this.currentPlayer.getColor());
        this.position.save(Math.floor(this.currentPosition.x / this.canvasDraw.aspectRatioWidth), Math.floor(this.currentPosition.y / this.canvasDraw.aspectRatioHeight), this.currentPlayer.getColor());
        let block = new Block(Math.floor(this.currentPosition.x / this.canvasDraw.aspectRatioWidth), Math.floor(this.currentPosition.y / this.canvasDraw.aspectRatioHeight),
            this.position.currentDices[0], this.position.currentDices[1], this.currentPlayer.getColor())
        SendMmessage.sendBlock(block);
    }

    private repetititonAtEachTurn(): void {
        this.currentPlayer.setOccupiedArea(this.position.countingTheAreaOfTheCurrentPlayer(this.currentPlayer.getColor()));
        DOM.engagedTerritory(DOM.territoryplayer1, this.player1.getOccupiedArea());
        DOM.engagedTerritory(DOM.territoryplayer2, this.player2.getOccupiedArea());
    }

    public changePlayer(): void {
        if (this.flagGame) {
            this.flagGame = false;
            this.currentPlayer = this.player2;
            DOM.rightPlayer.style.cssText = "display: block";
            DOM.leftPlayer.style.cssText = "display: none";
        }
        else {
            this.flagGame = true;
            this.currentPlayer = this.player1;
            this.currentPlayer.soundsForPlayer = true;
            DOM.leftPlayer.style.cssText = "display: block";
            DOM.rightPlayer.style.cssText = "display: none";
        }
    }

    public turnTime() {
        this.timer = setTimeout(() => this.endOfturn(), 20000);
    }

    public setPlayer1(name: string, color: string): void {
        this.player1 = new Player(name, color, 0, 1);
        this.currentPlayer = this.player1;
        DOM.nameplayer1.style.cssText = "color: " + color;
        DOM.setupNamePlayer(DOM.nameplayer1, this.player1.getName());
        DOM.engagedTerritory(DOM.territoryplayer1, this.player1.getOccupiedArea());
        PlayersLives.checkLife(this.player1.getLives(), DOM.livesForPlayerOne);
    }

    public setPlayer2(name: string, color: string): void {
        this.player2 = new Player(name, color, 1, 0);
        this.currentPlayer = this.player1;
        DOM.nameplayer2.style.cssText = "color: " + color;
        DOM.setupNamePlayer(DOM.nameplayer2, this.player2.getName());
        DOM.engagedTerritory(DOM.territoryplayer2, this.player2.getOccupiedArea());
        PlayersLives.checkLife(this.player2.getLives(), DOM.livesForPlayerTwo);
    }

    public keyCode(e: KeyboardEvent) {
        DOM.disableStandardKeyOperation(e);
    }

    public clearFuildForPlayerData(color1: string, color2: string): void {
        this.setPlayer1("", color1);
        this.setPlayer2("", color2);
    }

    public rotateBlock() {
        if (!this.currentPlayer.isFirstMove()) {
            this.position.change();
            SendMmessage.rotateBlock(this.position.currentDices, this.currentPlayer.getColor());
        }
        if (this.currentPlayer.isFirstMove()) {
            this.position.change();
            this.calculatePosition();
            this.draw();
        }
        DOM.playSound(PathToMedia.movementsOfBlock);
    }

    public moveToRight() {
        if (!this.currentPlayer.isFirstMove()) {
            this.counterBlocksInArray++;
            if (this.counterBlocksInArray >= this.arrayCurrentPosition.length || this.counterBlocksInArray < 0) {
                this.counterBlocksInArray = 0;
            }
            this.currentPosition = this.arrayCurrentPosition[this.counterBlocksInArray];
            this.draw();
        }
        DOM.playSound(PathToMedia.movementsOfBlock);
    }

    public moveToLeft() {
        if (!this.currentPlayer.isFirstMove()) {
            this.counterBlocksInArray--;
            if (this.counterBlocksInArray >= this.arrayCurrentPosition.length || this.counterBlocksInArray < 0) {
                this.counterBlocksInArray = 0;
            }
            this.currentPosition = this.arrayCurrentPosition[this.counterBlocksInArray];
            this.draw();
        }
        DOM.playSound(PathToMedia.movementsOfBlock);
    }

    public setUpBlock() {
        DOM.playSound(PathToMedia.enterSound);
        Timer.flagForTimer = false;
        this.endOfturn();
    }

    public setBlockPositionOnMap(event: string): void {
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
        this.canvasDraw.redraw(this.currentPosition, this.position.blocks, ColorPlayers.Green);
    }
}