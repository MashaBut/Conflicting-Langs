export class ConcealCanvas
{
    public static hide() {
        let elementForHide1: HTMLElement = <HTMLElement>document.getElementById('startpage');
        elementForHide1.style.display = 'none'; 
        let elementForHide2: HTMLElement = <HTMLElement>document.getElementById('canvas');
        elementForHide2.style.display = 'block';
        let buttonDice: HTMLElement = <HTMLElement>document.getElementById('dice');
        buttonDice.style.display = 'block';
        let dice1: HTMLElement = <HTMLElement>document.getElementById('dice1');
        dice1.style.display = 'block';
        let dice2: HTMLElement = <HTMLElement>document.getElementById('dice2');
        dice2.style.display = 'block';
    }
}

