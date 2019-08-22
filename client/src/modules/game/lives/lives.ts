export class PlayersLives {
    public static checkLife(numberLife: number, player: HTMLElement) {
        for (let i = 0; i <= 8; i++) {
            if (numberLife === i) {
                let path: string = require('../../../assets/images/lives/life' + i + '.png');
                player.style.cssText = "background-image: url(" + path + ");";
            }
        }
    }
}