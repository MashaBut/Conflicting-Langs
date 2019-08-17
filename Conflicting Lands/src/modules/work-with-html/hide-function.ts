export class ConcealCanvas {
    
    private static elementForHide1: HTMLElement = <HTMLElement> document.getElementById('startpage');
    private static elementForHide2: HTMLElement = <HTMLElement> document.getElementById('gamepage');

    public static hideStartPage() {
        this.elementForHide1.style.display = 'none'; 
        this.elementForHide2.style.display = 'block';
    }

    public static hideGamePage() {
        this.elementForHide1.style.display = 'block'; 
        this.elementForHide2.style.display ='none';
    }
}

