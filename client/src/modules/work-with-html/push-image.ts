import { ManipulationWithDOM } from "./manipulations-with-dom";
import { DiceRoller } from "../game/dice/dice-roller";
import { PathToMedia } from "./path-to-media";

export class PushImage {
    private static image = document.createElement('img');

    public static createImage() {
        this.image.id = "img";
        this.image.src = PathToMedia.pathToAnimate;
        ManipulationWithDOM.imageHolder.appendChild(this.image);
    }

    public static returmAnimate() {
        this.image.src = PathToMedia.pathToAnimate;
    }

    public static returnImage(dices :number[]) {
        let path = DiceRoller.getPathOfImage(dices);
        let pathToImage = "./images/png/" + path;
        this.image.src = pathToImage;
    }

    public static setPlayersPhoto(pathToPhoto :string, player: HTMLElement) {
        player.style.cssText = "background-image: url(" + pathToPhoto + ");";
    }
}