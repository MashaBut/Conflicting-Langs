import { Color } from "./color";
export class Position {
    private blocksSetOnMap = new Array<any>();
    asperio: number = 20;
    coefArea: number = 5000;
    sum: number;
    xSavedElement: number;
    ySavedElement: number;
    xSizeSavedElement: number;
    ySizeSavedElement: number;
    xCurrentElement: number;
    yCurrentElement: number;
    xSizeCurrentElement: number;
    ySizeCurrentElement: number;

    horizontalShiftCounter: number;
    verticalShiftCounter: number;

    public saveBlockOnMap(element: number[], colorBlock: string): void {
        let blockObj: object = { element, colorBlock };
        this.blocksSetOnMap.push(blockObj);
    }

    public countingTheAreaOfTheCurrentPlayer(currentColor: string): number {
        this.sum = 0;
        for (let i = 0; i < this.blocksSetOnMap.length; i++) {
            if (this.blocksSetOnMap[i].colorBlock === currentColor) {
                this.sum += (this.blocksSetOnMap[i].element[2] * this.blocksSetOnMap[i].element[3]) / this.coefArea;
            }
        }
        this.sum = parseFloat((this.sum).toPrecision(3));
        return this.sum;
    }

    public createPositionForCurrentPlayer(elem: number[], colorBlock: string): boolean {
        this.xCurrentElement = elem[0];
        this.yCurrentElement = elem[1];
        this.xSizeCurrentElement = elem[0] + elem[2];
        this.ySizeCurrentElement = elem[1] + elem[3];
        for (let i = 0; i < this.blocksSetOnMap.length; i++) {
            this.xSavedElement = this.blocksSetOnMap[i].element[0];
            this.ySavedElement = this.blocksSetOnMap[i].element[1];
            this.xSizeSavedElement = this.blocksSetOnMap[i].element[0] + this.blocksSetOnMap[i].element[2];
            this.ySizeSavedElement = this.blocksSetOnMap[i].element[1] + this.blocksSetOnMap[i].element[3];

            for (let j = this.xSavedElement; j <= this.xSizeSavedElement; j += this.asperio) {
                for (let n = this.ySavedElement; n <= this.ySizeSavedElement; n += this.asperio) {
                    for (let m = this.yCurrentElement; m <= this.ySizeCurrentElement; m++) {
                        if (n === m) {
                            let t = j;
                            for (let k = this.xCurrentElement; k <= this.xSizeCurrentElement; k++) {
                                if (k === t++) {
                                    return false;
                                }
                            }
                        }
                    }
                }
            }
            for (let j = this.ySavedElement; j <= this.ySizeSavedElement; j += this.asperio) {
                for (let n = this.yCurrentElement; n <= this.ySizeCurrentElement; n += this.asperio) {
                    for (let m = this.xCurrentElement; m <= this.xSizeCurrentElement; m += this.asperio) {
                        if (j === n) {
                            if (m === this.xSavedElement || m === this.xSizeSavedElement)
                                return false;
                        }
                    }
                }
            }
        }
        for (let i = 0; i < this.blocksSetOnMap.length; i++) {
            if (this.blocksSetOnMap[i].colorBlock === colorBlock) {
                this.horizontalShiftCounter = 0;
                this.verticalShiftCounter = 0;

                this.xSavedElement = this.blocksSetOnMap[i].element[0];
                this.ySavedElement = this.blocksSetOnMap[i].element[1];
                this.xSizeSavedElement = this.blocksSetOnMap[i].element[0] + this.blocksSetOnMap[i].element[2];
                this.ySizeSavedElement = this.blocksSetOnMap[i].element[1] + this.blocksSetOnMap[i].element[3];
                for (let j = this.xSavedElement; j <= this.xSizeSavedElement; j++) {
                    this.horizontalShiftCounter++;
                    if (j === elem[0]) {
                        if (this.blocksSetOnMap[i].element[2] - this.horizontalShiftCounter + 1 >= elem[2]) {
                            if (this.ySizeSavedElement + 2 === elem[1]) {
                                return true;
                            }
                            else if (this.ySavedElement - elem[1] === elem[3] + 2) {
                                return true;
                            }
                        }
                        else if (this.blocksSetOnMap[i].element[2] - this.horizontalShiftCounter + 1 < elem[2]) {
                            for (let key = 0; key < this.blocksSetOnMap.length; key++) {
                                if (this.blocksSetOnMap[key].colorBlock === colorBlock) {
                                    if (this.blocksSetOnMap[i].element[2] - this.horizontalShiftCounter + this.blocksSetOnMap[key].element[2] + 10 >= elem[2]) {
                                        if (this.blocksSetOnMap[i].element[1] === this.blocksSetOnMap[key].element[1]) {
                                            if (this.xSizeSavedElement + 2 === this.blocksSetOnMap[key].element[0]) {
                                                if (this.ySavedElement - elem[1] === elem[3] + 2) {
                                                    return true;
                                                }
                                                else if (this.ySizeSavedElement + 2 === elem[1]) {
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
                for (let j = this.ySavedElement; j <= this.ySizeSavedElement; j++) {
                    this.verticalShiftCounter++;
                    if (j === elem[1]) {
                        if (this.blocksSetOnMap[i].element[3] - this.verticalShiftCounter + 1 >= elem[3]) {
                            if (this.xSizeSavedElement + 2 === elem[0]) {
                                return true;
                            }
                            else if (this.xSavedElement - elem[0] === elem[2] + 2) {
                                return true;
                            }
                        }
                        else if (this.blocksSetOnMap[i].element[3] - this.verticalShiftCounter + 1 < elem[3]) {
                            for (let key = 0; key < this.blocksSetOnMap.length; key++) {
                                if (this.blocksSetOnMap[key].colorBlock === colorBlock) {
                                    if (this.blocksSetOnMap[i].element[3] - this.verticalShiftCounter + this.blocksSetOnMap[key].element[3] + 10 >= elem[3]) {
                                        if (this.ySizeSavedElement + 2 === this.blocksSetOnMap[key].element[1]) {
                                            if (this.blocksSetOnMap[i].element[0] === this.blocksSetOnMap[key].element[0]) {
                                                if (this.xSavedElement - elem[0] === elem[2] + 2) {
                                                    return true;
                                                }
                                                else if (this.xSizeSavedElement + 2 === elem[0]) {
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
}