export class PlayersLives {
    
    static life8 = require ('../../../assets/images/lives/life8.png');
    static life7 = require ('../../../assets/images/lives/life7.png');
    static life6 = require ('../../../assets/images/lives/life6.png');
    static life5 = require ('../../../assets/images/lives/life5.png');
    static life4 = require ('../../../assets/images/lives/life4.png');
    static life3 = require ('../../../assets/images/lives/life3.png');
    static life2 = require ('../../../assets/images/lives/life2.png');
    static life1 = require ('../../../assets/images/lives/life1.png');
    static life0 = require ('../../../assets/images/lives/life0.png');

    public static checkLife ( numberLife: number, player: HTMLElement ) {

        if(numberLife === 8) {
            player.style.cssText = "background-image: url(" + PlayersLives.life8 + ");"; 
        }
        else if(numberLife === 7) {
            player.style.cssText = "background-image: url(" + PlayersLives.life7 + ");"; 
        }
        else if(numberLife === 6) {
            player.style.cssText = "background-image: url(" + PlayersLives.life6 + ");"; 
        }
        else if(numberLife === 5) {
            player.style.cssText = "background-image: url(" + PlayersLives.life5 + ");"; 
        }
        else if(numberLife === 4) {
            player.style.cssText = "background-image: url(" + PlayersLives.life4 + ");"; 
        }
        else if(numberLife === 3) {
            player.style.cssText = "background-image: url(" + PlayersLives.life3 + ");"; 
        }
        else if(numberLife === 2) {
            player.style.cssText = "background-image: url(" + PlayersLives.life2 + ");"; 
        }
        else if(numberLife === 1) {
            player.style.cssText = "background-image: url(" + PlayersLives.life1 + ");"; 
        }
        else if(numberLife === 0) {
            player.style.cssText = "background-image: url(" + PlayersLives.life0 + ");"; 
        }
    }


}