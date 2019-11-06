//import { MessageCreator } from "../../dist/message-creator";
//import { Room } from "../room";


export class Timer {
    static flagForTimer: boolean = true;
   // messageCreator = new MessageCreator();
    constructor(public counter = 38) { }
    async Timer() { //rooms: Array<Room>, sockets: Map<string, any>

        let intervalId = setInterval(() => {

            console.log(this.counter);
            this.counter = this.counter - 1;
            if (this.counter === 0) {
                clearInterval(intervalId);
                Timer.flagForTimer = false;

                // for(let room of rooms) {
                //     room.players.forEach((key: string) => {
                //         sockets.get(key).send(JSON.stringify(this.messageCreator.createMessageStopTimer()));
                //     })    
                // }
                //this.counter = 20;
            }
            else if (Timer.flagForTimer === false) {
                clearInterval(intervalId);
                this.counter = 38;
                Timer.flagForTimer = true;

                // for(let room of rooms) {
                //     room.players.forEach((key: string) => {
                //         sockets.get(key).send(JSON.stringify(this.messageCreator.createMessageStopTimer()));
                //     })    
                // }

            }
        }, 1000)
    }

    public initCounter () {
        return this.counter;
    }
}