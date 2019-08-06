import { Game } from "./controllers/controller-main-module"
import { take } from "rxjs/operators";
import { fromEvent } from "rxjs";
import { ManipulationWithDOM } from "./controllers/manipulations-with-dom";
import { ConcealCanvas } from "./start/ux/scripts/hide-function";
import { DiceRoller } from "./game/dice/dice-roller";
import { diceCollection } from "./game/dice/dice";
import { PushImage } from "./start/ux/scripts/push-image";

import "./start/ux/css/main.css";
import "./start/ux/css/players.css";
import "./start/ux/css/canvas.css";
import "./start/ux/css/blocks-for-players.css";

//#region "dices"
import "../assets/images/dices/1_1.png";
import "../assets/images/dices/1_2.png";
import "../assets/images/dices/1_3.png";
import "../assets/images/dices/1_4.png";
import "../assets/images/dices/1_5.png";
import "../assets/images/dices/1_6.png";
import "../assets/images/dices/2_1.png";
import "../assets/images/dices/2_2.png";
import "../assets/images/dices/2_3.png";
import "../assets/images/dices/2_4.png";
import "../assets/images/dices/2_5.png";
import "../assets/images/dices/2_6.png";
import "../assets/images/dices/3_1.png";
import "../assets/images/dices/3_2.png";
import "../assets/images/dices/3_3.png";
import "../assets/images/dices/3_4.png";
import "../assets/images/dices/3_5.png";
import "../assets/images/dices/3_6.png";
import "../assets/images/dices/4_1.png";
import "../assets/images/dices/4_2.png";
import "../assets/images/dices/4_3.png";
import "../assets/images/dices/4_4.png";
import "../assets/images/dices/4_5.png";
import "../assets/images/dices/4_6.png";
import "../assets/images/dices/5_1.png";
import "../assets/images/dices/5_2.png";
import "../assets/images/dices/5_3.png";
import "../assets/images/dices/5_4.png";
import "../assets/images/dices/5_5.png";
import "../assets/images/dices/5_6.png";
import "../assets/images/dices/6_1.png";
import "../assets/images/dices/6_2.png";
import "../assets/images/dices/6_3.png";
import "../assets/images/dices/6_4.png";
import "../assets/images/dices/6_5.png";
import "../assets/images/dices/6_6.png";

//#endregion "dices"


ConcealCanvas.hideGamePage();
let game: Game = new Game();

fromEvent(ManipulationWithDOM.writeNames, 'click')
    .pipe(take(1))
    .subscribe(() => {
        game.setPlayerNames();
        ConcealCanvas.hideStartPage();
        ManipulationWithDOM.playSound(ManipulationWithDOM.playGame);
        PushImage.createImage();
        ManipulationWithDOM.initSounds();
    })

fromEvent(ManipulationWithDOM.tossDice, 'click')
    .subscribe(() => {
        PushImage.returmAnimate();
        ManipulationWithDOM.playSound(ManipulationWithDOM.soundForDice);
        ManipulationWithDOM.disabledButtonDice();
        DiceRoller.roll(diceCollection);
        DiceRoller.getPathOfImage();
        setTimeout(timer,1790);
    })

fromEvent(ManipulationWithDOM.soundOff, 'click')
    .subscribe(() => {
        ManipulationWithDOM.soundsOff();
    })
    
function timer() {
    PushImage.returnImage();
    game.turnTime();
    game.createPositionsBlockForMap(DiceRoller.numberOfDices());  
}
