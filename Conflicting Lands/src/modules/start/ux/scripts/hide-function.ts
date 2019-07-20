export class ConcealCanvas {
    
    private elementForHide1: HTMLElement = <HTMLElement>document.getElementById('startpage');
    private elementForHide2: HTMLElement = <HTMLElement>document.getElementById('gamepage');

    public hide() {
        this.elementForHide1.style.display = 'none'; 
        this.elementForHide2.style.display = 'block';
    }
}

