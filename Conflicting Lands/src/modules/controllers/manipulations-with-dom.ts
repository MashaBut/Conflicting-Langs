import {CanvasDraw} from "../game/work-with-canvas/draw";
export class ManipulationWithDOM {
    static tossDice: HTMLElement = <HTMLElement> document.getElementById("dice");
    static canvas: HTMLElement = <HTMLElement> document.getElementById('canvas');
    static dice1: HTMLElement = <HTMLElement> document.getElementById('dice1');
    static dice2: HTMLElement = <HTMLElement> document.getElementById('dice2');
    static writeNames: HTMLElement= <HTMLButtonElement> document.getElementById('writeNames')
    private canvasDraw: CanvasDraw;

    public static hideElementOnPage(): void {
        this.canvas.style.display = 'none';
        this.dice1.style.display = 'none';
        this.dice2.style.display = 'none';
        this.tossDice.style.display = 'none';
    }

    private  initCanvas(): void {
        let canvasObj:HTMLCanvasElement = <HTMLCanvasElement> document.getElementById('fuildGame');
        this.canvasDraw = new CanvasDraw(canvasObj);
    }

    public static disabledButtonDice(): void {
        this.tossDice.setAttribute("disabled", "true");
    }

    public static undisabledButtonDice(): void {
        this.tossDice.removeAttribute("disabled");
    }
}