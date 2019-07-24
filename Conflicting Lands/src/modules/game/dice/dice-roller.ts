import {Dice,getRandomIntInclusive} from "./dice";

export class DiceRollerButton {
  private dices = new Array();

  public roll(diceCollection: Array<Dice>) {
    let i=0;
      diceCollection.forEach((item) => {
            this.dices[i] = getRandomIntInclusive(1,6);
            i++;
      });

      this.numberOfDices();
  }

  public numberOfDices(): number[] {
    return [this.dices[0], this.dices[1]];
  }
}
