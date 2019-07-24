export class Position {
    private blocksSetOnMap = new Array;

    private positionBlocksForCurrentPlayer = new Array<object>();

    public saveBlockOnMap(element: number[], colorBlock:string): void {
        let blockObj:object = {element, colorBlock};
        this.blocksSetOnMap.push(blockObj);
    }

    //  1-18  2-38    3-58    4-78    5-98    6-118
    public createPositionForCurrentPlayer(size: number[],coef:number, colorBlock: string): object[] {
        this.positionBlocksForCurrentPlayer.shift();
        for(let i = 0 ; i<this.blocksSetOnMap.length ; i++) {
            if(size[0] <= this.blocksSetOnMap[i].element[2] && colorBlock ===this.blocksSetOnMap[i].colorBlock) {
                console.log("i am here");
                for(let j = this.blocksSetOnMap[i].element[0]; j <= this.blocksSetOnMap[i].element[0] + size[0]; j += coef) {//y
                    for(let k = this.blocksSetOnMap[i].element[1]-size[1]; k <= this.blocksSetOnMap[i].element[1]; k += coef) {//x
                        for(let m = 0 ; m<this.blocksSetOnMap.length ; m++) {
                            if(k === this.blocksSetOnMap[m].element[0] && j === this.blocksSetOnMap[m].element[1]) {
                                console.log("LOX");
                                break;
                            }
                            else {
                                console.log("good");
                            }
                        }
                    }
                }
            }
        }
       
        let a: object = size;
        this.positionBlocksForCurrentPlayer.push(a);
        return this.positionBlocksForCurrentPlayer;
    }
}