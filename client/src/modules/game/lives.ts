export class PlayersLives {
    static countLifes :number = 8;
    public static checkLife(numberLife: number, player: HTMLElement) {
        for (let i = 0; i <= this.countLifes; i++) {
            if (numberLife === i) {
                let path: string = require('../../../assets/images/lives/life' + i + '.png');
                player.style.cssText = "background-image: url(" + path + ");";
            }
        }
    }
}