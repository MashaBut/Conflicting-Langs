export class View {

    private static elementForHide1: HTMLElement = <HTMLElement>document.getElementById('startpage');
    private static elementForHide2: HTMLElement = <HTMLElement>document.getElementById('hollpage');
    private static elementForHide3: HTMLElement = <HTMLElement>document.getElementById('gamepage');

    public static StartPage(): void {
        this.elementForHide1.style.display = 'block';
        this.elementForHide2.style.display = 'none';
        this.elementForHide3.style.display = 'none';
    }

    public static HollPage(): void {
        this.elementForHide1.style.display = 'none';
        this.elementForHide2.style.display = 'block';
        this.elementForHide3.style.display = 'none';
    }

    public static GamePage(): void {
        this.elementForHide1.style.display = 'none';
        this.elementForHide2.style.display = 'none';
        this.elementForHide3.style.display = 'block';
    }
}

