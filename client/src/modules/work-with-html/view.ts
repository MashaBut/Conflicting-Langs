export class View {
    private static startPage: HTMLElement = <HTMLElement>document.getElementById('startpage');
    private static hollPage: HTMLElement = <HTMLElement>document.getElementById('hollpage');
    private static gamePage: HTMLElement = <HTMLElement>document.getElementById('gamepage');

    public static StartPage(): void {
        this.startPage.style.display = 'block';
        this.hollPage.style.display = 'none';
        this.gamePage.style.display = 'none';
    }

    public static HollPage(): void {
        this.startPage.style.display = 'none';
        this.hollPage.style.display = 'block';
        this.gamePage.style.display = 'none';
    }

    public static GamePage(): void {
        this.startPage.style.display = 'none';
        this.hollPage.style.display = 'none';
        this.gamePage.style.display = 'block';
    }
}