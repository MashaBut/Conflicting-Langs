export class Settings {
    public firstPlayerColor: string;
    public secondPlayerColor: string;
    public mapColor: string;
    public gridColor: string;
    public numberOfHorizontalLines: number;
    public numberOfVerticalLines: number;

    constructor(firstPlayerColor: string, secondPlayerColor: string, mapColor: string,gruidColor:string,numberOfHorizontalLines: number,numberOfVerticalLines:number) {
        this.firstPlayerColor = firstPlayerColor;
        this.secondPlayerColor = secondPlayerColor;
        this.mapColor =mapColor;
        this.gridColor = gruidColor;
        this.numberOfHorizontalLines = numberOfHorizontalLines;
        this.numberOfVerticalLines = numberOfVerticalLines;
    }
}