import { Block } from "./block";
export class Position {
    private blocks = new Array<Block>();
    private asperio: number = 20;
    private coefArea: number = 5000;

    public saveBlockOnMap(block: Block): void {
        this.blocks.push(block);
    }

    public countingTheAreaOfTheCurrentPlayer(currentColor: string): number {
        let sum: number = 0;
        this.blocks.forEach(block => {
            if (block.color === currentColor) {
                sum += (block.width * block.height) / this.coefArea;
            }
        })
        return parseFloat((sum).toPrecision(3));
    }

    private isBlockInOtherBlock(newBlock: Block): boolean {
        let right = newBlock.x + newBlock.width;
        let bottom = newBlock.y + newBlock.height;
        let oldX: number;
        for (let block of this.blocks) {
            for (let x = block.x; x <= block.x + block.width; x += this.asperio) {
                for (let y = block.y; y <= block.y + block.height; y += this.asperio) {
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
        if (this.isBlockInOtherBlock(newBlock) && (this.isTouchTheRightBlockForX(newBlock) || this.isTouchTheRightBlockForY(newBlock))) {
            return true;
        }
        else
            return false;
    }
}