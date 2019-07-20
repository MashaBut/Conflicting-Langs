export class ConcealCanvas {
    
    private elementForHide1: HTMLElement = <HTMLElement>document.getElementById('startpage');
    private elementForHide2: HTMLElement = <HTMLElement>document.getElementById('canvas');
    private buttonDice: HTMLElement = <HTMLElement>document.getElementById('dice');
    private dice1: HTMLElement = <HTMLElement>document.getElementById('dice1');
    private dice2: HTMLElement = <HTMLElement>document.getElementById('dice2');

    public hide() {
        this.elementForHide1.style.display = 'none'; 
        this.elementForHide2.style.display = 'block';
        this.buttonDice.style.display = 'block';
        this.dice1.style.display = 'block';
        this.dice2.style.display = 'block';
    }
}

