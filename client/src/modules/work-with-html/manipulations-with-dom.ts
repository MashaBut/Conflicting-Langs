import { KeyCodes } from '../key-codes';
import { PathToMedia } from "./path-to-media";

export class ManipulationWithDOM {
    static imageFlag: boolean = false;
    private static arrayOfAudios = new Array();
    static nameRoom: HTMLInputElement = <HTMLInputElement>document.getElementById("nameRoom");

    static ONE:HTMLElement = <HTMLElement>document.getElementById("player1ForGame")
    static TWO:HTMLElement = <HTMLElement>document.getElementById("player2ForGame");

    static body: HTMLElement = <HTMLElement>document.getElementById("body");


    //buttons
    static tossDice: HTMLElement = <HTMLElement>document.getElementById("rollTheDice");
    static soundOff: HTMLElement = <HTMLElement>document.getElementById("soundOff");
    static endGame: HTMLElement = <HTMLElement>document.getElementById("endGame");
    static goToStartPage: HTMLElement = <HTMLElement>document.getElementById("goToStartPage");
    static createRoom: HTMLElement = <HTMLElement>document.getElementById("createRoom");
    static clientRoom: HTMLElement = <HTMLElement>document.getElementById("clientRoom");
    static rooms: HTMLElement = <HTMLElement>document.getElementById('rooms');
    static settings: HTMLElement = <HTMLElement>document.getElementById('properties');

    //properties
    static orangeButton1: HTMLElement = <HTMLButtonElement>document.getElementById('orangeButton1');
    static redButton1: HTMLElement = <HTMLElement>document.getElementById("redButton1");
    static blueButton1: HTMLElement = <HTMLElement>document.getElementById("blueButton1");

    static orangeButton2: HTMLElement = <HTMLElement>document.getElementById("orangeButton2");
    static redButton2: HTMLElement = <HTMLElement>document.getElementById("redButton2");
    static blueButton2: HTMLElement = <HTMLElement>document.getElementById("blueButton2");

    static blueMap: HTMLElement = <HTMLElement>document.getElementById("blueMap");
    static brownMap: HTMLElement = <HTMLElement>document.getElementById('brownMap');
    static whiteMap: HTMLElement = <HTMLElement>document.getElementById('whiteMap');

    static smallMap: HTMLElement = <HTMLButtonElement>document.getElementById('smallMap');
    static mediumMap: HTMLElement = <HTMLElement>document.getElementById("mediumMap");
    static bigMap: HTMLElement = <HTMLElement>document.getElementById("bigMap");


    //dices
    static dice1: HTMLElement = <HTMLElement>document.getElementById('dice1');
    static dice2: HTMLElement = <HTMLElement>document.getElementById('dice2');
    static imageHolder: HTMLElement = <HTMLElement>document.getElementById('dice');

    //players
    static playerInit: HTMLInputElement = <HTMLInputElement>document.getElementById("player");
    static nameplayer1: HTMLElement = <HTMLElement>document.getElementById("nameplayer1");
    static nameplayer2: HTMLElement = <HTMLElement>document.getElementById("nameplayer2");

    static photoPlayer1: HTMLElement = <HTMLElement>document.getElementById("player1ForGame");
    static photoPlayer2: HTMLElement = <HTMLElement>document.getElementById("player2ForGame");

    static leftPlayer: HTMLElement = <HTMLElement>document.getElementById("left_triangle");
    static rightPlayer: HTMLElement = <HTMLElement>document.getElementById("right_triangle");

    //canvas element
    static canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('fuildGame');

    //resources of players
    static livesForPlayerOne: HTMLElement = <HTMLElement>document.getElementById("divForLives1");
    static livesForPlayerTwo: HTMLElement = <HTMLElement>document.getElementById("divForLives2");
    static territoryplayer1: HTMLElement = <HTMLElement>document.getElementById("territoryplayer1");
    static territoryplayer2: HTMLElement = <HTMLElement>document.getElementById("territoryplayer2");

    //div
    static gamePage: HTMLElement = <HTMLElement>document.getElementById("gamepage");
    static statisticsPage: HTMLElement = <HTMLElement>document.getElementById("statisticspage");
    static gridForHollPage: HTMLElement = <HTMLElement>document.getElementById("gridForHollPage");
    static gridForGamePage: HTMLElement = <HTMLElement>document.getElementById("gridForGamePage");
    static divMobVersion: HTMLElement = <HTMLElement>document.getElementById("MobVirsion");

    //info
    static infoButton: any = <HTMLElement>document.getElementById("information");
    static informationForGame: any = <HTMLElement>document.getElementById("informationForGame");
    static informationAboutGame: any = <HTMLElement>document.getElementById("informationAboutGame");
    static hideInformationAboutGame: any = <HTMLElement>document.getElementById("hideInfo");
    static viewStatistics: any = <HTMLElement>document.getElementById("viewStatistics");
    static hideStatisticsButton: any = <HTMLElement>document.getElementById("hideStatistics");

    static tableBody: any = <HTMLElement>document.getElementById("tableBody");

    //all warnings
    static warningAboutNameOfRoom: any = <HTMLElement>document.getElementById("warningAboutNameOfRoom");
    static warningAboutColor: any = <HTMLElement>document.getElementById("warningAboutColor");
    static hideWarningAboutColor: any = <HTMLElement>document.getElementById("hideWarningAboutColor");
    static hideWarningAboutNameOfRoom: any = <HTMLElement>document.getElementById("hideWarningAboutNameOfRoom");

    static warningAboutLoosingLife: any = <HTMLElement>document.getElementById("warningAboutLoosingLife");
    static hideWarningAboutLoosingLife: any = <HTMLElement>document.getElementById("hideWarningAboutLoosingLife");

    static warningAboutуEndingOfTheGame: any = <HTMLElement>document.getElementById("warningAboutуEndingOfTheGame");
    static hideWarningAboutуEndingOfTheGame: any = <HTMLElement>document.getElementById("hideWarningAboutуEndingOfTheGame");

    static resultsOfTheGame: any = <HTMLElement>document.getElementById("resultsOfTheGame");
    static hideResultsOfTheGame: any = <HTMLElement>document.getElementById("hideResultsOfTheGame");

    static territoryplayerOne: HTMLElement = <HTMLElement>document.getElementById("territoryplayerOne");
    static territoryplayerTwo: HTMLElement = <HTMLElement>document.getElementById("territoryplayerTwo");
    
    //mobileVirsion
    static flexBox1: HTMLElement = <HTMLElement>document.getElementById("flexBox1");
    static flexBox2: HTMLElement = <HTMLElement>document.getElementById("flexBox2");



    public static disabledButtonDice(): void {
        this.tossDice.setAttribute("disabled", "true");
        this.tossDice.style.cssText = "background-color: #2c2d32;"
    }

    public static undisabledButtonDice(): void {
        this.tossDice.removeAttribute("disabled");
        this.tossDice.style.cssText = "background-color: #0e0e0e;"
    }

    public static disableStandardKeyOperation(e: KeyboardEvent): void {
        if ([KeyCodes.Enter, KeyCodes.Down, KeyCodes.Left, KeyCodes.Right, KeyCodes.Up].indexOf(e.keyCode) > -1) {
            e.preventDefault();
        }
    }

    public static initSounds(): void {
        let sound1 = new Audio(PathToMedia.playGame);
        let sound2 = new Audio(PathToMedia.soundForDice);
        let sound3 = new Audio(PathToMedia.enterSound);
        let sound4 = new Audio(PathToMedia.movementsOfBlock);
        let sound5 = new Audio(PathToMedia.endOfTheGame);
        let sound6 = new Audio(PathToMedia.clock);

        this.arrayOfAudios.push(sound1);
        this.arrayOfAudios.push(sound2);
        this.arrayOfAudios.push(sound3);
        this.arrayOfAudios.push(sound4);
        this.arrayOfAudios.push(sound5);
        this.arrayOfAudios.push(sound6);
    }

    public static playSound(path: string): void {
        let sound = new Audio(path);
        if (!this.imageFlag) {
            sound.play();
        }
    }

    public static soundsOff(): void {
        if (this.imageFlag) {
            this.soundOff.style.cssText = "background-image: url('./images/jpg/volume.jpg');";
            this.imageFlag = false;
        }
        else if (!this.imageFlag) {
            this.soundOff.style.cssText = "background-image: url('./images/jpg/no_volume.jpg');";
            this.arrayOfAudios.forEach((item) => {
                item.volume = 0;
            });
            this.imageFlag = true;
        }
    }

    public static engagedTerritory(path: HTMLElement, fieldPercentage: number): void {
        path.innerHTML = fieldPercentage + " %";
    }

    public static setupNamePlayer(path: HTMLElement, name: string): void {
        path.innerHTML = name;
    }
}