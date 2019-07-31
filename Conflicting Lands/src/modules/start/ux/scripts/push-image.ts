import {ManipulationWithDOM} from "../../../controllers/manipulations-with-dom";
import {DiceRollerButton} from "../../../game/dice/dice-roller";
let pathToImage = require ('../../../../assets/images/dicesAnimation.gif');

export class CreateImage {
private static image = document.createElement('img');

public static createImage() {
    this.image.id = "img";
    this.image.src = pathToImage;
    ManipulationWithDOM.imageHolder.appendChild(this.image);
}

public static returmAnimate()
{
    this.image.src = pathToImage;
}

public static returnImage() {
    let a  = DiceRollerButton.getPathOfImage();
    let pathToImage: string = "./dices/" + a;
    this.image.src = pathToImage;
  }
}