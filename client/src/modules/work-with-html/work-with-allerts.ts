import { ManipulationWithDOM } from "../work-with-html/manipulations-with-dom";

export class Allerts {

    public static viewInfo(): void {
        ManipulationWithDOM.informationAboutGame.style.display = 'block';
    }

    public static hideInfo(): void {
        ManipulationWithDOM.informationAboutGame.style.display = 'none';
    }

    public static viewWarning(warning: any): void {
        warning.style.display = 'block';
    }

    public static hideWarning(warning: any): void {
        warning.style.display = 'none';
    }

    public static viewInfoAboutLoosingLife(): void {
        ManipulationWithDOM.warningAboutLoosingLife.style.display = 'block';
    }

    public static hideInfoAboutLoosingLife(): void {
        ManipulationWithDOM.warningAboutLoosingLife.style.display = 'none';
    }

    public static viewInfoAboutEndingOfTheGame(): void {
        ManipulationWithDOM.warningAboutуEndingOfTheGame.style.display = 'block';
    }

    public static hideInfoAboutEndingOfTheGame(): void {
        ManipulationWithDOM.warningAboutуEndingOfTheGame.style.display = 'none';
    }

    public static viewResultsOfTheGame(): void {
        ManipulationWithDOM.resultsOfTheGame.style.display = "block";
    }

    public static hideResultsOfTheGame(): void {
        ManipulationWithDOM.resultsOfTheGame.style.display = "none";
    }

}