export class Position {
    private blocksSetOnMap: object[];
    private positionBlocksForCurrentPlayer: number[];

    public saveBlockOnMap(xCoordinate: number, yCoordinate: number, xSize: number, ySize: number, colorBlock:string): void {
        let blockObj:object = {xCoordinate, yCoordinate, xSize, ySize, colorBlock};
        this.blocksSetOnMap.push(blockObj);
    }

    public createPositionForCurrentPlayer(size: number[], colorBlock: string): object[] {
        return [];
    }
}