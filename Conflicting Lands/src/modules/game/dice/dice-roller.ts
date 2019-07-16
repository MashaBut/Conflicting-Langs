import {DiceValues,getRandomIntInclusive,DiceRoller} from "./dice";
import {CanvasCreate} from "../work-with-canvas/create";

export class DiceRollerButton {
  public static roll(diceCollection: Array<DiceRoller>) {
      diceCollection.forEach((item) => {
        item.span.textContent = DiceValues[getRandomIntInclusive(1, 6)];
      });
  }
  }