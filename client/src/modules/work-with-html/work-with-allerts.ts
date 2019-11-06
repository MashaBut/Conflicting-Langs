import { ManipulationWithDOM } from "../work-with-html/manipulations-with-dom";

export class Allerts {

    public static viewInfo(): void {
        ManipulationWithDOM.informationAboutGame.style.display = 'block';
    }

    public static hideInfo(): void {
        ManipulationWithDOM.informationAboutGame.style.display = 'none';
    }

    public static viewWarning(): void {
        ManipulationWithDOM.warningAboutColor.style.display = 'block';
    }

    public static hideWarning(): void {
        ManipulationWithDOM.warningAboutColor.style.display = 'none';
    }

}