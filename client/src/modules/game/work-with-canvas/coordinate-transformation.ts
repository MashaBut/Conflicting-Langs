export class CoordinateTransformation {
    private static firstDice: number;
    private static secondDice: number;

    public static conversionToPixels(aspectRatio: number, aspectRatio1: number, dice: number[]): number[] {
        this.firstDice = aspectRatio * dice[0] + 2 * dice[0];
        this.secondDice = aspectRatio1 * dice[1] + 2 * dice[1];
        return [this.firstDice, this.secondDice];
    }
}