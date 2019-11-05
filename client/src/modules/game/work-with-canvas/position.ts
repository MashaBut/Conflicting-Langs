import { Block } from "./block";

export class Position {
    public blocks: Array<Array<string>>;
    public currentDices: number[];
    private area: number = 0;
    private height: number;
    private width: number;

    public areaMap(h: number, v: number): void {
        this.width = v;
        this.height = h;
        this.area = (h * v)/100;
        this.blocks = new Array<Array<string>>(this.width);
        for (let i = 0; i < this.width; i++) {
            this.blocks[i] = new Array<string>(this.height).fill('');
        }
    }

    public countingTheAreaOfTheCurrentPlayer(currentColor: string): number {
        console.log(this.blocks + ' ' + this.area + ' ' + currentColor);
        if (this.blocks === undefined) { return 0; }
        let occupiedFields: number = 0;
        for (let x = 0; x < this.width; x++) {
            for (let y = 0; y < this.height; y++) {
                if (this.blocks[x][y] === currentColor) {
                    occupiedFields++;
                }
            }
        }
        const sum = occupiedFields / this.area;
        return parseFloat((sum).toPrecision(3));
    }

    public save(blockX: number, blockY: number, color: string): void {
        //new Block(x, y, this.currentDices[0], this.currentDices[1], color)
        console.log(blockX + " " + blockY + " " + color);
        for (let x = blockX; x < this.currentDices[0] + blockX; x++) {
            for (let y = blockY; y < this.currentDices[1] + blockY; y++) {
                this.blocks[x][y] = color;
            }
        }
    }

    public change(): void {
        this.currentDices = [this.currentDices[1], this.currentDices[0]];
    }

    public initDice(dices: number[]): void {
        this.currentDices = dices;
    }
}