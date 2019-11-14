export class View {
    private static startPage: HTMLElement = <HTMLElement>document.getElementById('startpage');
    private static hollPage: HTMLElement = <HTMLElement>document.getElementById('hollpage');
    private static gamePage: HTMLElement = <HTMLElement>document.getElementById('gamepage');
    private static statisticsPage: HTMLElement = <HTMLElement>document.getElementById('statisticspage');


    public static StartPage(): void {
        this.startPage.style.display = 'block';
        this.hollPage.style.display = 'none';
        this.gamePage.style.display = 'none';
    }

    public static HollPage(): void {
        this.startPage.style.display = 'none';
        this.statisticsPage.style.display = 'none';
        this.gamePage.style.display = 'none';
        this.hollPage.style.display = 'block';
    }

    public static GamePage(): void {
        this.startPage.style.display = 'none';
        this.hollPage.style.display = 'none';
        this.statisticsPage.style.display = 'none';
        this.gamePage.style.display = 'block';
    }

    public static StatisticsPage() : void {
        this.startPage.style.display = 'none';
        this.hollPage.style.display = 'none';
        this.gamePage.style.display = 'none';
        this.statisticsPage.style.display = 'block';
    }
}