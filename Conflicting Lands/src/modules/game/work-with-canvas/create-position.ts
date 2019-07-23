export class Position {
    private blocksSetOnMap = new Array;

    private positionBlocksForCurrentPlayer = new Array<object>();

    public saveBlockOnMap(element: number[], colorBlock:string): void {
        let blockObj:object = {element, colorBlock};
        this.blocksSetOnMap.push(blockObj);
    }

    public createPositionForCurrentPlayer(size: number[], colorBlock: string): object[] {
        this.positionBlocksForCurrentPlayer.shift();
        let a: object = size;
        this.positionBlocksForCurrentPlayer.push(a);
        return this.positionBlocksForCurrentPlayer;
    }
}