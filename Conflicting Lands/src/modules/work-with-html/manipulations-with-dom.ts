import { KeyDesignations } from '../key-designations/key-designations';
import { Media } from "./media";

export class ManipulationWithDOM {
    static imageFlag: boolean = false;
    private static arrayOfAudios = new Array();
//buttons
    static tossDice: HTMLElement = <HTMLElement>document.getElementById("rollTheDice");
    static soundOff: HTMLElement = <HTMLElement>document.getElementById("soundOff");
    static endGame: HTMLElement = <HTMLElement>document.getElementById("endGame");
    static goToStartPage: HTMLElement = <HTMLElement>document.getElementById("goToStartPage");

//dices
    static dice1: HTMLElement = <HTMLElement>document.getElementById('dice1');
    static dice2: HTMLElement = <HTMLElement>document.getElementById('dice2');
    static imageHolder: HTMLElement = <HTMLElement>document.getElementById('dice');

//players
    static writeNames: HTMLElement = <HTMLButtonElement>document.getElementById('writeNames');
    static player1: HTMLInputElement = <HTMLInputElement>document.getElementById("player1");
    static player2: HTMLInputElement = <HTMLInputElement>document.getElementById("player2");
    static nameplayer1: HTMLElement = <HTMLElement>document.getElementById("nameplayer1");
    static nameplayer2: HTMLElement = <HTMLElement>document.getElementById("nameplayer2");

//canvas element
    static canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('fuildGame');

//resources of players
    static livesForPlayerOne: HTMLElement = <HTMLElement>document.getElementById("divForLives1");
    static livesForPlayerTwo: HTMLElement = <HTMLElement>document.getElementById("divForLives2");
    static territoryplayer1: HTMLElement = <HTMLElement>document.getElementById("territoryplayer1");
    static territoryplayer2: HTMLElement = <HTMLElement>document.getElementById("territoryplayer2");
    static coinsplayer1: HTMLElement = <HTMLElement>document.getElementById("coinsplayer1");
    static coinsplayer2: HTMLElement = <HTMLElement>document.getElementById("coinsplayer2");

//timer
    static timer:HTMLElement = <HTMLElement>document.getElementById("timer");

    public static disabledButtonDice(): void {
        this.tossDice.setAttribute("disabled", "true");
        this.tossDice.style.cssText = "background-color: #2c2d32;"
    }

    public static undisabledButtonDice(): void {
        this.tossDice.removeAttribute("disabled");
        this.tossDice.style.cssText = "background-color: #0e0e0e;"
    }

    public static disableStandardKeyOperation(e: KeyboardEvent): void {
        if ([KeyDesignations.Enter, KeyDesignations.Down, KeyDesignations.Left, KeyDesignations.Right, KeyDesignations.Up].indexOf(e.keyCode) > -1) {
            e.preventDefault();
        }
    }

    public static initSounds(): void {
        let sound1 = new Audio(Media.playGame);
        let sound2 = new Audio(Media.soundForDice);
        let sound3 = new Audio(Media.enterSound);
        let sound4 = new Audio(Media.movementsOfBlock);
        let sound5 = new Audio(Media.endOfTheGame);

        this.arrayOfAudios.push(sound1);
        this.arrayOfAudios.push(sound2);
        this.arrayOfAudios.push(sound3);
        this.arrayOfAudios.push(sound4);
        this.arrayOfAudios.push(sound5);
    }

    public static playSound(path: string): void {
            let sound = new Audio(path);
            if(this.imageFlag === true) {
             //  console.log("SoundOff");
            }
            else if(this.imageFlag === false) {
                sound.play(); 
            }
    }

    public static soundsOff(): void {
        if(this.imageFlag === true) {
            this.soundOff.style.cssText = "background-image: url('./images/jpg/volume.jpg');";
            this.imageFlag = false;
        }
        else if(this.imageFlag === false) {
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

    public static engagedCoins(path: HTMLElement, coins: number): void {
        path.innerHTML = String(coins);
    }
    
}