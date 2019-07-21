import {Dice,getRandomIntInclusive} from "./dice";

export class DiceRollerButton {
  private dices = new Array();

  public roll(diceCollection: Array<Dice>) {
    let i=0;
      diceCollection.forEach((item) => {
            item.span.textContent = getRandomIntInclusive(1,6);
            this.dices[i] = circumference(item.span.textContent);
            i++;
      });

      this.numberOfDices();
  }

  public numberOfDices(): number[] {
    return [this.dices[0], this.dices[1]];
  }
}

function circumference(r: any) {
  return parseFloat(r);
}