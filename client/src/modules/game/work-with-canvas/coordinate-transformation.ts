export class CoordinateTransformation {
    private static swapDice: number;
    private static firstDice: number;
    private static secondDice: number;

    public static conversionToPixels(aspectRatio: number, aspectRatio1: number, dice: number[]): number[] {
        this.firstDice = aspectRatio * dice[0] + 2 * (dice[0] - 1);
        this.secondDice = aspectRatio1 * dice[1] + 2 * (dice[1] - 1);
        return [this.firstDice, this.secondDice];
    }

    public static turnSize(): number[] {
        this.swapDice = this.firstDice;
        this.firstDice = this.secondDice;
        this.secondDice = this.swapDice;
        return [this.firstDice, this.secondDice];
    }
}