import { Block } from "./block";

export class Position {
    public blocks = new Array<Array<string>>();
    public currentDices: number[];
    private flagOfRotate: boolean = true;
    private height: number;
    private width: number;

    public setSize(height: number, width: number): void {
        this.height = height;
        this.width = width;
    }

    public initBlocks(blocks: Array<Array<string>>): void {
        this.blocks = blocks;
    }

    public change(): void {
        this.currentDices = [this.currentDices[1], this.currentDices[0]];
        this.flagOfRotate == true ? this.flagOfRotate = false : this.flagOfRotate = true;
    }

    public initDice(dices: number[]): void {
        this.currentDices = dices;
    }

    private isBlockInOtherBlock(newBlock: Block): boolean {
        if (this.blocks === undefined) { return false; }
        for (let x = newBlock.x; x < newBlock.x + newBlock.width; x++) {
            for (let y = newBlock.y; y < newBlock.y + newBlock.height; y++) {
                if (this.blocks[x][y] !== '') {
                    return false;
                }
            }
        }

        return true;
    }

    private isTouchBlock(newBlock: Block): boolean {
        const t1 = this.isBlocksX(newBlock.x, newBlock.y, newBlock.width);
        const t2 = this.isBlocksY(newBlock.y, newBlock.x, newBlock.height);
        console.log('X: ' + t1);
        console.log('Y: ' + t2);
        if (!t1 && !t2) { return false; }
        const newY = newBlock.y - newBlock.height;
        if (newY >= 0 && this.checkSide(newBlock.x, newY, newBlock.width, newBlock.height)) { return true; } // top side
        const newX = newBlock.x - newBlock.x;
        if (newX >= 0 && this.checkSide(newX, newBlock.y, newBlock.width, newBlock.height)) { return true; } // left side
        const newY1 = newBlock.y + newBlock.height;
        if (newY1 <= this.height && this.checkSide(newBlock.x, newY1, newBlock.width, newBlock.height)) { return true; } // right side
        const newX1 = newBlock.x + newBlock.x;
        if (newX1 <= this.width && this.checkSide(newX1, newBlock.y, newBlock.width, newBlock.height)) { return true; } // bottom side

        return false;
    }

    private checkSide(xStart: number, yStart: number, width: number, height: number): boolean {
        for (let x = xStart; x < xStart + width; x++) {
            for (let y = yStart; y < yStart + height; y++) {
                if (this.blocks[x][y] !== '') {
                    return false;
                }
            }
        }
        return true;
    }

    private isBlocksX(xStart: number, yStart: number, width: number): boolean {
        for (let x = xStart; x < xStart + width; x++) {
            if (this.blocks[x][yStart] !== '') {
                return false;
            }
        }
        return true;
    }

    private isBlocksY(yStart: number, xStart: number, height: number): boolean {
        for (let y = yStart; y < yStart + height; y++) {
            if (this.blocks[xStart][y] !== '') {
                return false;
            }
        }
        return true;
    }

    public checkPosition(newBlock: Block): boolean {
        const bl1 = this.isBlockInOtherBlock(newBlock);
        const bl2 = this.isTouchBlock(newBlock);
        return bl2;
    }
}