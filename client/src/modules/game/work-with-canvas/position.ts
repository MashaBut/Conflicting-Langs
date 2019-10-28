import { Block } from "./block";

export class Position {
    public blocks = new Array<Block>();
    public currentDices: number[];
    private area: number = 0;

    public areaMap(h: number, v: number): void {
        this.area = (h * v)/100;;
    }

    public countingTheAreaOfTheCurrentPlayer(currentColor: string): number {
        let sum: number = 0;
        this.blocks.forEach(block => {
            if (block.color === currentColor) {
                sum += (block.width * block.height) / this.area;
            }
        })
        return parseFloat((sum).toPrecision(3));
    }

    public save(x: number, y: number, color: string): void {
        this.blocks.push(new Block(x, y, this.currentDices[0], this.currentDices[1], color));
    }

    public change(): void {
        this.currentDices = [this.currentDices[1], this.currentDices[0]];
    }

    public initDice(dices: number[]): void {
        this.currentDices = dices;
    }
}