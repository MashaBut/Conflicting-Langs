import "../start/ux/css/main.css";
import "../start/ux/css/players.css";
import "../start/ux/css/start-page.css";

import "../game/ux/css/game-page.css";
import "../game/ux/css/canvas.css";
import "../game/ux/css/blocks-for-players.css";

//#region "dices"
import "../../assets/images/dices/1_1.png";
import "../../assets/images/dices/1_2.png";
import "../../assets/images/dices/1_3.png";
import "../../assets/images/dices/1_4.png";
import "../../assets/images/dices/1_5.png";
import "../../assets/images/dices/1_6.png";
import "../../assets/images/dices/2_1.png";
import "../../assets/images/dices/2_2.png";
import "../../assets/images/dices/2_3.png";
import "../../assets/images/dices/2_4.png";
import "../../assets/images/dices/2_5.png";
import "../../assets/images/dices/2_6.png";
import "../../assets/images/dices/3_1.png";
import "../../assets/images/dices/3_2.png";
import "../../assets/images/dices/3_3.png";
import "../../assets/images/dices/3_4.png";
import "../../assets/images/dices/3_5.png";
import "../../assets/images/dices/3_6.png";
import "../../assets/images/dices/4_1.png";
import "../../assets/images/dices/4_2.png";
import "../../assets/images/dices/4_3.png";
import "../../assets/images/dices/4_4.png";
import "../../assets/images/dices/4_5.png";
import "../../assets/images/dices/4_6.png";
import "../../assets/images/dices/5_1.png";
import "../../assets/images/dices/5_2.png";
import "../../assets/images/dices/5_3.png";
import "../../assets/images/dices/5_4.png";
import "../../assets/images/dices/5_5.png";
import "../../assets/images/dices/5_6.png";
import "../../assets/images/dices/6_1.png";
import "../../assets/images/dices/6_2.png";
import "../../assets/images/dices/6_3.png";
import "../../assets/images/dices/6_4.png";
import "../../assets/images/dices/6_5.png";
import "../../assets/images/dices/6_6.png";
//#endregion "dices"

export class Media {
    static pathToAnimate = require ('../../assets/images/dicesAnimation.gif');
    static volumeImage = require ('../../assets/images/volume.jpg');
    static noVolumeImage = require ('../../assets/images/no_volume.jpg');
    
    static playGame = require ('../../assets/sounds/playGame.wav');
    static soundForDice = require ('../../assets/sounds/rollTheDice.wav');
    static enterSound = require ('../../assets/sounds/soundForBlock3.wav');
    static movementsOfBlock = require ('../../assets/sounds/moveblock2.wav');
    static endOfTheGame = require ('../../assets/sounds/endOfTheGame.wav');
    static lostLife = require ('../../assets/sounds/lostLife.wav');
    static clock = require ('../../assets/sounds/clock.wav');
}
