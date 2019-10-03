import { ManipulationWithDOM } from "../../work-with-html/manipulations-with-dom";
import { PathToMedia } from "../../work-with-html/path-to-media";
import {Change} from "../../start";

export class Timer {
    static flagForTimer: boolean = true;
    static soundOfClock = new Audio(PathToMedia.clock);
    public counter = 20;
    async Timer() {
        let intervalId = setInterval(() => {
            this.counter = this.counter - 1;
            Timer.soundOfClock.play();
            if (this.counter >= 10) {
                ManipulationWithDOM.timer.textContent = "00:" + this.counter;
            }
            else {
                ManipulationWithDOM.timer.textContent = "00:0" + this.counter;
            }
            if (this.counter === 0) {
                clearInterval(intervalId);
                Change.changePlayer();
                Timer.soundOfClock.pause();
                Timer.soundOfClock.currentTime = 0;
                this.counter = 20;
            }
            else if (Timer.flagForTimer === false) {
                clearInterval(intervalId);
                ManipulationWithDOM.timer.textContent = "00:00";
                Timer.soundOfClock.pause();
                Timer.soundOfClock.currentTime = 0;
                this.counter = 20;
                Timer.flagForTimer = true;
            }
        }, 1000)
    }
}
