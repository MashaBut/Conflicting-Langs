import {Directions} from './key-designations';

export class ManipulationWithDOM {

    static tossDice: HTMLElement = <HTMLElement> document.getElementById("rollTheDice");
    static dice1: HTMLElement = <HTMLElement> document.getElementById('dice1');
    static dice2: HTMLElement = <HTMLElement> document.getElementById('dice2');
    static writeNames: HTMLElement = <HTMLButtonElement> document.getElementById('writeNames');
    static player1: HTMLInputElement = <HTMLInputElement>document.getElementById("player1");
    static player2: HTMLInputElement = <HTMLInputElement>document.getElementById("player2");
    static canvas:HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('fuildGame');

    static currentPlayer:HTMLElement = <HTMLElement>document.getElementById('currentPlayer');

    static imageHolder: HTMLElement = <HTMLElement>document.getElementById('dice');

    static nameplayer1:HTMLElement = <HTMLElement>document.getElementById("nameplayer1");
    static nameplayer2:HTMLElement = <HTMLElement>document.getElementById("nameplayer2");

    public static disabledButtonDice(): void {
        this.tossDice.setAttribute("disabled", "true");
        this.tossDice.style.cssText = "background-color: #202125;"
    }

    public static undisabledButtonDice(): void {
        this.tossDice.removeAttribute("disabled");
        this.tossDice.style.cssText = "background-color: #0e0e0e;"
    }

    public static disableStandardKeyOperation(e: KeyboardEvent): void {
        if([Directions.Enter, Directions.Down, Directions.Left, Directions.Right, Directions.Up].indexOf(e.keyCode) > -1) {
            e.preventDefault();
        }  
    }

    public static playSound(path:string): void {
        let sound = new Audio(path);
        sound.play();
    }
}