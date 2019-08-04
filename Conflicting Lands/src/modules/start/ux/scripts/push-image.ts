import {ManipulationWithDOM} from "../../../controllers/manipulations-with-dom";
import {DiceRoller} from "../../../game/dice/dice-roller";

export class PushImage {
private static image = document.createElement('img');

public static createImage() {
    this.image.id = "img";
    this.image.src = ManipulationWithDOM.pathToAnimate;
    ManipulationWithDOM.imageHolder.appendChild(this.image);
}

public static returmAnimate()
{
    this.image.src = ManipulationWithDOM.pathToAnimate;
}

public static returnImage() {
    let a  = DiceRoller.getPathOfImage();
    let pathToImage: string = "./dices/" + a;
    this.image.src = pathToImage;
}

}