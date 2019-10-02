export class DiceRoller {
  public static getPathOfImage(dices: number[]): string {
    let path = dices[0] + "_" + dices[1] + ".png";
    return path;
  }
}
