import { Block } from "./block";
import { Position } from "./position";

export class Calculation {
    private counterBlocksInArray: number = 0;
    public arrayCurrentPosition = new Array<Block>();
    private possiblePositions = false;
    public color: string = "";
    private numberOfVerticalLines: number = 0;
    private numberOfHorizontalLines: number = 0;
    position = new Position();

    public setLines(vertical: number, horizontal: number): void {
        this.numberOfHorizontalLines = horizontal;
        this.numberOfVerticalLines = vertical;
    }
    public CalculatePosition(dices:number[],blocks:Array<Block>): void {
        this.position.initDice(dices);
        this.position.initBlocks(blocks);
        this.counterBlocksInArray = 0;
        this.arrayCurrentPosition.length = 0;
        this.calculateAllPosition(this.position.currentDices);
        if (this.arrayCurrentPosition.length != 0) {
            console.log("first Position");
            console.log(this.arrayCurrentPosition);
            //  this.setFirstStep();
        }
        else {
            this.position.change();
            this.calculateAllPosition(this.position.currentDices);
            if (this.arrayCurrentPosition.length != 0) {
                console.log("second Position");
                console.log(this.arrayCurrentPosition);
                //   this.setFirstStep();
            }
            else {
                this.possiblePositions = false;
                console.log("feil");
                //  this.endOfturn();
            }
        }
    }

    private calculateAllPosition(size: number[]): void {
        for (let x = 0; x <= this.numberOfVerticalLines; x++) {
            for (let y = 0; y <= this.numberOfHorizontalLines; y++) {
                let block = new Block(x, y, size[0], size[1], this.color);
                if (this.position.checkPosition(block)) {
                    this.arrayCurrentPosition.push(block);
                }
            }
        }
    }
}