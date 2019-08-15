import { Game } from "./controllers/controller-main-module"
import { fromEvent } from "rxjs";
import { ManipulationWithDOM } from "./controllers/manipulations-with-dom";
import { ConcealCanvas } from "./start/ux/scripts/hide-function";
import { DiceRoller } from "./game/dice/dice-roller";
import { diceCollection } from "./game/dice/dice";
import { PushImage } from "./game/ux/scripts/push-image";
import { Timer } from "./game/ux/scripts/timer";
import { Media } from "./controllers/path-to-multimedia";
import "./controllers/path-to-multimedia";

ConcealCanvas.hideGamePage();
let game: Game = new Game();
let timerForPlayer: Timer = new Timer();

fromEvent(ManipulationWithDOM.writeNames, 'click')
    .subscribe(() => {
        game.setPlayerNames();
        ConcealCanvas.hideStartPage();
        ManipulationWithDOM.playSound(Media.playGame);
        PushImage.createImage();
        ManipulationWithDOM.initSounds();
    })

fromEvent(ManipulationWithDOM.tossDice, 'click')
    .subscribe(() => {
        PushImage.returmAnimate();
        ManipulationWithDOM.playSound(Media.soundForDice);
        ManipulationWithDOM.disabledButtonDice();
        DiceRoller.roll(diceCollection);
        DiceRoller.getPathOfImage();
        setTimeout(timer,1790);
    })

fromEvent(ManipulationWithDOM.soundOff, 'click')
    .subscribe(() => {
        ManipulationWithDOM.soundsOff();
    })

    fromEvent(ManipulationWithDOM.endGame, 'click')
    .subscribe(() => {
        ConcealCanvas.hideGamePage();
        ManipulationWithDOM.playSound(Media.endOfTheGame);
    })
    
function timer() {
    PushImage.returnImage();
    timerForPlayer.Timer();
    game.turnTime();
    game.createPositionsBlockForMap(DiceRoller.numberOfDices());  
}
