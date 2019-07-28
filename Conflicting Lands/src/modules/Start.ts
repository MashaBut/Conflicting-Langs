import {Game} from "./controllers/controller-main-module"
import {take} from "rxjs/operators";
import {fromEvent} from "rxjs";
import {ManipulationWithDOM} from "./controllers/manipulations-with-dom";
import {ConcealCanvas} from "./start/ux/scripts/hide-function";
import {DiceRollerButton} from "./game/dice/dice-roller";
import {diceCollection} from "./game/dice/dice";
import {CreateImage} from "./start/ux/scripts/push-image";

import "./start/ux/css/main.css";
import "./start/ux/css/players.css";
import "./start/ux/css/canvas.css";
import "./start/ux/css/blocks-for-players.css";
import "../assets/images/VS.jpg";
import "../assets/images/dicesAnimation.gif";

let playGame = require ('../assets/sounds/playGame.wav');
let soundForDice = require ('../assets/sounds/rollTheDice2.wav');

ConcealCanvas.hideGamePage();
let game: Game = new Game();
let diceRollerButton = new DiceRollerButton();

fromEvent(ManipulationWithDOM.writeNames, 'click')
    .pipe(take(1))
    .subscribe(() => {
        game.setPlayerNames();
        ConcealCanvas.hideStartPage();
        ManipulationWithDOM.playSound(playGame);
        CreateImage.createImage();
    })

fromEvent(ManipulationWithDOM.tossDice, 'click')
    .subscribe(() => {
        CreateImage.returmAnimate();
        ManipulationWithDOM.playSound(soundForDice);
        ManipulationWithDOM.disabledButtonDice();
        diceRollerButton.roll(diceCollection);
        setTimeout(timer,2500);
    }) 
    
function timer() {
    game.createPositionsBlockForMap(diceRollerButton.numberOfDices());
    game.draw();
    game.turnTime();
}