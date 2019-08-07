import { ManipulationWithDOM} from "../../../controllers/manipulations-with-dom";

export class Timer {
    static flagForTimer:boolean = true;
    constructor(public counter = 20) { }
    async Timer() {
    let intervalId = setInterval(() => {
            this.counter = this.counter - 1;
            if(this.counter>=10) {
                ManipulationWithDOM.timer.textContent = "00:" + this.counter;
            }
            else {
                ManipulationWithDOM.timer.textContent = "00:0" + this.counter;
            }
            if(this.counter === 0) {
                clearInterval(intervalId);
                this.counter = 20;
            }
            else if(Timer.flagForTimer === false) {
                clearInterval(intervalId);
                ManipulationWithDOM.timer.textContent = "00:00";
                this.counter = 20;
                Timer.flagForTimer = true;
            }
    }, 1000)
    }
}
