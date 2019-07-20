import {Dice,getRandomIntInclusive} from "./dice";

export class DiceRollerButton {
  private counter: number;
  private dices = new Array();

  public roll(diceCollection: Array<Dice>) {
    var i=0;
      diceCollection.forEach((item) => {
            item.span.textContent = getRandomIntInclusive(1,6);
            this.dices[i]=circumference(item.span.textContent);
            i++;
      });
  }

  public numberOfDices(): number[] {
    console.log(this.dices);
    return this.dices;
  }

  }

  function circumference(r:any) {
    return parseFloat(r);
}