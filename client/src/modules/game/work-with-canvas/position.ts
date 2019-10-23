import { Block } from "./block";

const coefArea: number = 5000;

export class Position {
    private blocks = new Array<Block>();
    public blockInNumber = new Array();
    private asperioRatioWidth: number;
    private asperioRatioHeight: number;
    private bool: boolean = true;
    public currentsizeBlock: any;

    public setAsperio(widht: number, height: number): void {
        this.asperioRatioHeight = height;
        this.asperioRatioWidth = widht;
    }

    public saveBlockOnMap(block: Block): void {
        this.blocks.push(block);
        console.log("set up block");
        console.log(block);
    }

    public countingTheAreaOfTheCurrentPlayer(currentColor: string): number {
        let sum: number = 0;
        this.blocks.forEach(block => {
            if (block.color === currentColor) {
                sum += (block.width * block.height) / coefArea;
            }
        })
        return parseFloat((sum).toPrecision(3));
    }

    public save(x: number, y: number, color: string): void {
        let block = new Block(x, y, this.currentsizeBlock[0], this.currentsizeBlock[1], color);
        this.blockInNumber.push(block);
    }

    private calcPixels(asperio1: number, asperio2: number): void {
        for (let block in this.blocks) {

        }
    }

    public change(): void {
        this.currentsizeBlock = [this.currentsizeBlock[1], this.currentsizeBlock[0]];
        if (this.bool == true) {
            this.bool = false;
        }
        else this.bool = true;
    }

    public isChange(): boolean {
        return this.bool;
    }

    public InitDice(dices: number[]): void {
        this.currentsizeBlock = dices;
    }

    private isBlockInOtherBlock(newBlock: Block): boolean {
        let right = newBlock.x + newBlock.width;
        let bottom = newBlock.y + newBlock.height;
        let oldX: number;
        for (let block of this.blocks) {
            for (let x = block.x; x <= block.x + block.width; x++) {
                for (let y = block.y; y <= block.y + block.height; y++) {
                    for (let newY = newBlock.y; newY <= bottom; newY++) {
                        if (y === newY) {
                            oldX = x;
                            for (let newX = newBlock.x; newX <= right; newX++) {
                                if (newX === oldX++) {
                                    return false;
                                }
                                if (newX === block.x || newX === block.x + block.width)
                                    return false;
                            }
                        }
                    }
                }
            }
        }
        return true;
    }

    private isTouchTheRightBlockForX(newBlock: Block): boolean {
        let xOfSet: number;
        for (let block of this.blocks) {
            if (block.color === newBlock.color) {
                xOfSet = 0;
                for (let x = block.x; x <= block.x + block.width; x++) {
                    xOfSet++;
                    if (x === newBlock.x) {
                        if (block.width - xOfSet + 1 >= newBlock.width) {
                            if (block.y + block.height + 2 === newBlock.y) {
                                return true;
                            }
                            else if (block.y - newBlock.y === newBlock.height + 2) {
                                return true;
                            }
                        }
                        else if (block.width - xOfSet + 1 < newBlock.width) {
                            for (let otherBlock of this.blocks) {
                                if (otherBlock.color === newBlock.color) {
                                    if (block.width - xOfSet + otherBlock.width + 10 >= newBlock.width) {
                                        if (block.x + block.width + 2 === otherBlock.x) {
                                            if (block.y - newBlock.y === newBlock.height + 2) {
                                                if (block.y === otherBlock.y) {
                                                    return true;
                                                }
                                            }
                                            else if (block.y + block.height + 2 === newBlock.y) {
                                                if (block.y + block.height === otherBlock.y + otherBlock.height) {
                                                    return true;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return false;
    }

    private isTouchTheRightBlockForY(newBlock: Block): boolean {
        let yOfSet: number;
        for (let block of this.blocks) {
            if (block.color === newBlock.color) {
                yOfSet = 0;
                for (let y = block.y; y <= block.y + block.height; y++) {
                    yOfSet++;
                    if (y === newBlock.y) {
                        if (block.height - yOfSet + 1 >= newBlock.height) {
                            if (block.x + block.width + 2 === newBlock.x) {
                                return true;

                            }
                            else if (block.x - newBlock.x === newBlock.width + 2) {
                                return true;
                            }
                        }
                        else if (block.height - yOfSet + 1 < newBlock.height) {
                            for (let otherBlock of this.blocks) {
                                if (otherBlock.color === newBlock.color) {
                                    if (block.height - yOfSet + otherBlock.height + 10 >= newBlock.height) {
                                        if (block.y + block.height + 2 === otherBlock.y) {
                                            if (block.x - newBlock.x === newBlock.width + 2) {
                                                if (block.x === otherBlock.x) {
                                                    return true;
                                                }
                                            }
                                            else if (block.x + block.width + 2 === newBlock.x) {
                                                if (block.x + block.width === otherBlock.x + otherBlock.width) {
                                                    return true;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return false;
    }

    public checkPosition(newBlock: Block): boolean {
        if (this.isBlockInOtherBlock(newBlock) && (this.isTouchTheRightBlockForX(newBlock) || this.isTouchTheRightBlockForY(newBlock)))
            return true;
        else
            return false;
    }
}