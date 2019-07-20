import {DiceValues,getRandomIntInclusive,DiceRoller} from "./dice";
import {CanvasCreate} from "../work-with-canvas/create";

export class DiceRollerButton {

  private smth = new CanvasCreate(); 
  private dices: number[];

  constructor() {
    this.dices = this.smth.setSizeBlockForFuild();;
  }

  public roll(diceCollection: Array<DiceRoller>) {
      diceCollection.forEach((item) => {
        for(var i = 0; i <= 1; i++) {
          item.span.textContent = DiceValues[this.dices[i]];
          console.log(this.dices[i]);
        }
      });
  }
  }