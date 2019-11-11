import { Block } from "./block";

export class PositionCalculation {
    public blocks = new Array<Block>();
    public currentDices: number[];
    private flagOfRotate: boolean = true;
    private area: number = 0;

    public areaMap(h: number, v: number): void {
        this.area = (h * v) / 100;
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

    public initBlocks(blocks: Array<Block>): void {
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
        let right = newBlock.x + newBlock.width;
        let bottom = newBlock.y + newBlock.height;
        let oldX: number;
        for (let block of this.blocks) {
            for (let x = block.x; x < block.x + block.width; x++) {
                for (let y = block.y; y < block.y + block.height; y++) {
                    for (let newY = newBlock.y; newY < bottom; newY++) {
                        if (y === newY) {
                            oldX = x;
                            for (let newX = newBlock.x; newX < right; newX++) {
                                if (newX === oldX++) {
                                    return false;
                                }
                                if (newX === block.x)
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

                    if (x === newBlock.x) {
                        if (block.width - xOfSet >= newBlock.width) {
                            if (block.y + block.height === newBlock.y) {
                                return true;
                            }
                            else if (block.y - newBlock.y === newBlock.height) {
                                return true;
                            }
                        }
                        else if (block.width - xOfSet < newBlock.width) {
                            for (let otherBlock of this.blocks) {
                                if (otherBlock.color === newBlock.color) {
                                    if (block.width - xOfSet + otherBlock.width >= newBlock.width) {
                                        if (block.x + block.width === otherBlock.x) {
                                            if (block.y - newBlock.y === newBlock.height) {
                                                if (block.y === otherBlock.y) {
                                                    return true;
                                                }
                                            }
                                            else if (block.y + block.height === newBlock.y) {
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
                    xOfSet++;
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
                    if (y === newBlock.y) {
                        if (block.height - yOfSet >= newBlock.height) {
                            if (block.x + block.width === newBlock.x) {
                                return true;

                            }
                            else if (block.x - newBlock.x === newBlock.width) {
                                return true;
                            }
                        }
                        else if (block.height - yOfSet < newBlock.height) {
                            for (let otherBlock of this.blocks) {
                                if (otherBlock.color === newBlock.color) {
                                    if (block.height - yOfSet + otherBlock.height >= newBlock.height) {
                                        if (block.y + block.height === otherBlock.y) {
                                            if (block.x - newBlock.x === newBlock.width) {
                                                if (block.x === otherBlock.x) {
                                                    return true;
                                                }
                                            }
                                            else if (block.x + block.width === newBlock.x) {
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
                    yOfSet++;
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