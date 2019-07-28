import {Color} from "./color";
export class Position {
    private blocksSetOnMap = new Array<any>();
    private positionBlocksForCurrentPlayer = new Array<object>();

    public saveBlockOnMap(element: number[], colorBlock: string): void {
        let blockObj: object = { element, colorBlock };
        this.blocksSetOnMap.push(blockObj);
    }

    public createPositionForCurrentPlayer(elem: number[], colorBlock: string): string {
        let w = 20;
        let xSavedElement: number;
        let ySavedElement: number;
        let xSizeSavedElement: number;
        let ySizeSavedElement: number;

        let xCurrentElement: number = elem[0];
        let yCurrentElement: number = elem[1];
        let xSizeCurrentElement: number = elem[0] + elem[2];
        let ySizeCurrentElement: number = elem[1] + elem[3];

        for (let i = 0; i < this.blocksSetOnMap.length; i++) {

            xSavedElement = this.blocksSetOnMap[i].element[0];
            ySavedElement = this.blocksSetOnMap[i].element[1];
            xSizeSavedElement = this.blocksSetOnMap[i].element[0] + this.blocksSetOnMap[i].element[2];
            ySizeSavedElement = this.blocksSetOnMap[i].element[1] + this.blocksSetOnMap[i].element[3];

            for (let j = xSavedElement; j <= xSizeSavedElement; j += w) {
                for (let n = ySavedElement; n <= ySizeSavedElement; n += w) {
                    for (let m = yCurrentElement; m <= ySizeCurrentElement; m++) {
                        if (n === m) {
                            let t = j;
                            for (let k = xCurrentElement; k <= xSizeCurrentElement; k++) {
                                if (k === t++) {
                                    return Color.Orange;
                                }
                            }
                        }
                    }
                }
            }
            for (let j = ySavedElement; j <= ySizeSavedElement; j += w) {
                for (let n = yCurrentElement; n <= ySizeCurrentElement; n += w) {
                    for (let m = xCurrentElement; m <= xSizeCurrentElement; m += w) {
                        if (j === n) {
                            if (m === xSavedElement || m === xSizeSavedElement)
                                return Color.Orange;
                        }
                    }
                }
            }
        }
        //TODO:
        //check on touching the desired item
        return Color.Green;
    }
}