import {ManipulationWithDOM} from "../../../controllers/manipulations-with-dom";
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
    this.image.src = this.image.src;
}  
}