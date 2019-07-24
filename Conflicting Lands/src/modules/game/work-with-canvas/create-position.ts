export class Position {
    private blocksSetOnMap = new Array;

    private positionBlocksForCurrentPlayer = new Array<object>();

    public saveBlockOnMap(element: number[], colorBlock:string): void {
        let blockObj:object = {element, colorBlock};
        this.blocksSetOnMap.push(blockObj);
    }

    public createPositionForCurrentPlayer(elem: number[],colorBlock: string,colorCurrent :string="Green"): string {
        let w=20;
        for(let i = 0 ; i<this.blocksSetOnMap.length ; i++) {

            for(let n = elem[0]; n<=elem[0]+elem[2]; n++) {
                for(let m = elem[1]; m<=elem[1]+elem[3]; m++) {
                    if(this.blocksSetOnMap[i].element[0]===n && this.blocksSetOnMap[i].element[1]===m){
                        return "Orange";
                    }
                }
            }

            for(let n=elem[0]+elem[2]; n>=elem[0];n--) {
                for(let m = elem[1]; m<=elem[1]+elem[3]; m++) {
                    if(this.blocksSetOnMap[i].element[0]+this.blocksSetOnMap[i].element[2]===n && this.blocksSetOnMap[i].element[1]+this.blocksSetOnMap[i].element[3]===m){
                        return "Orange";
                    }
                }
            }

            for(let n=elem[0]+elem[2]; n>=elem[0];n--) {
                for(let m = elem[1]+elem[3]; m>=elem[1]; m--) {
                    if(this.blocksSetOnMap[i].element[0]+this.blocksSetOnMap[i].element[2]===n && this.blocksSetOnMap[i].element[1]+this.blocksSetOnMap[i].element[3]===m){
                        return "Orange";
                    }
                }
            }

            for(let m = elem[1]; m<=elem[1]+elem[3]; m++) {
                for(let n = elem[0]; n<=elem[0]+elem[2]; n++) {
                    if(this.blocksSetOnMap[i].element[0]===n && this.blocksSetOnMap[i].element[1]===m){
                        return "Orange";
                    }
                }
            }

            for( let a = this.blocksSetOnMap[i].element[0]; a<=this.blocksSetOnMap[i].element[0]+elem[2]; a++){
                for( let b = this.blocksSetOnMap[i].element[1]; b<=this.blocksSetOnMap[i].element[1]-elem[3]; b++) {
                    if(a===elem[0] || b===elem[1]){
                        return "Orange";
                    }
                }
            }
        }
        return colorCurrent;
    }
}
