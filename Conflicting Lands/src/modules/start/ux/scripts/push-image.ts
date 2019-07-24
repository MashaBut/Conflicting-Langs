let pathToImage = require ('../../../../assets/images/dicesAnimation.gif');

export class CreateImage {
private static imageHolder: HTMLElement = <HTMLElement> document.getElementById('dice');
private static image = document.createElement('img');


public static createImage() {
    this.image.id = "img";
    this.image.src = pathToImage;
    this.imageHolder.appendChild(this.image);
}

public static returmAnimate()
{
    this.image.src = this.image.src;
}  
}