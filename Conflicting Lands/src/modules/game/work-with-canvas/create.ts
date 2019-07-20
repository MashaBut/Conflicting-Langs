export class CanvasCreate {

    private firstDice: number;
    private secondDice: number;
 
    private swapDice: number;
    private firstDiceConversionToPixel: number;
    private secondDiceConversionToPixel: number;

    public random(): number[] {
        this.firstDice = Math.floor(Math.random() * 6) + 1;
        this.secondDice = Math.floor(Math.random() * 6) + 1;
        console.log(this.firstDice, this.secondDice);
        return [this.firstDice, this.secondDice];
    }

    public conversionToPixels(aspectRatio: number): number[] {
        this.firstDiceConversionToPixel = aspectRatio*this.firstDice + 2 * (this.firstDice - 1);
        this.secondDiceConversionToPixel = aspectRatio*this.secondDice + 2 * (this.secondDice - 1);
        console.log(this.firstDiceConversionToPixel, this.secondDiceConversionToPixel);
        return [this.firstDiceConversionToPixel, this.secondDiceConversionToPixel];
    }

    public turnSize(): number[] {
        this.swapDice = this.firstDiceConversionToPixel;
        this.firstDiceConversionToPixel = this.secondDiceConversionToPixel;
        this.secondDiceConversionToPixel = this.swapDice;
        return [this.firstDiceConversionToPixel, this.secondDiceConversionToPixel];
    }
}