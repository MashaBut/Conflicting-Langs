import {Game} from "./controllers/controller-main-module"
import {take} from "rxjs/operators";
import {fromEvent} from "rxjs";
import {ManipulationWithDOM} from "./controllers/manipulations-with-dom";
import {ConcealCanvas} from "./start/ux/scripts/hide-function";
import {DiceRollerButton} from "./game/dice/dice-roller";
import {diceCollection} from "./game/dice/dice";

import "./start/ux/css/main.css";
import "./start/ux/css/players.css";
import "./start/ux/css/canvas.css";
import "../assets/images/VS.jpg";
import "../assets/sounds/rollTheDice2.wav";
import "../assets/sounds/soundForBlock.wav";

ConcealCanvas.hideGamePage();
let game: Game = new Game();
let diceRollerButton = new DiceRollerButton();

fromEvent(ManipulationWithDOM.writeNames, 'click')
    .pipe(take(1))
    .subscribe(() => {
        game.setPlayerNames();
        ConcealCanvas.hideStartPage();
    })

fromEvent(ManipulationWithDOM.tossDice, 'click')
    .subscribe(() => {
        ManipulationWithDOM.disabledButtonDice();
        diceRollerButton.roll(diceCollection);
        game.createPositionsBlockForMap(diceRollerButton.numberOfDices());
        game.manipulationKeyBoard();
        game.turnTime();
    })   