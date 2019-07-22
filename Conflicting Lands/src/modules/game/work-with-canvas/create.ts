export class CoordinateTransformation {
    private static swapDice: number;
    private static firstDiceConversionToPixel: number;
    private static secondDiceConversionToPixel: number;

    public static conversionToPixels(aspectRatio: number, dice :number[]): number[] {
        this.firstDiceConversionToPixel = aspectRatio*dice[0] + 2 * (dice[0] - 1);
        this.secondDiceConversionToPixel = aspectRatio*dice[1] + 2 * (dice[1] - 1);
        console.log(this.firstDiceConversionToPixel, this.secondDiceConversionToPixel);
        return [this.firstDiceConversionToPixel, this.secondDiceConversionToPixel];
    }

    public static turnSize(): number[] {
        this.swapDice = this.firstDiceConversionToPixel;
        this.firstDiceConversionToPixel = this.secondDiceConversionToPixel;
        this.secondDiceConversionToPixel = this.swapDice;
        return [this.firstDiceConversionToPixel, this.secondDiceConversionToPixel];
    }
}