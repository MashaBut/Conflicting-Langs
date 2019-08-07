import { KeyDesignations } from './key-designations';

export class ManipulationWithDOM {

    static imageFlag: boolean = false;
    private static arrayOfAudios = new Array();

    static pathToAnimate = require ('../../assets/images/dicesAnimation.gif');
    static volumeImage = require ('../../assets/images/volume.jpg');
    static noVolumeImage = require ('../../assets/images/no_volume.jpg');
    static life8 = require ('../../assets/images/lives/life8.png');
    static life7 = require ('../../assets/images/lives/life7.png');
    static life6 = require ('../../assets/images/lives/life6.png');
    static life5 = require ('../../assets/images/lives/life5.png');
    static life4 = require ('../../assets/images/lives/life4.png');
    static life3 = require ('../../assets/images/lives/life3.png');
    static life2 = require ('../../assets/images/lives/life2.png');
    static life1 = require ('../../assets/images/lives/life1.png');
    static life0 = require ('../../assets/images/lives/life0.png');


    static playGame = require('../../assets/sounds/playGame.wav');
    static soundForDice = require('../../assets/sounds/rollTheDice2.wav');
    static enterSound = require('../../assets/sounds/soundForBlock6.wav');
    static movementsOfBlock = require('../../assets/sounds/moveblock3.wav');

    static tossDice: HTMLElement = <HTMLElement>document.getElementById("rollTheDice");
    static soundOff: HTMLElement = <HTMLElement>document.getElementById("soundOff");

    static dice1: HTMLElement = <HTMLElement>document.getElementById('dice1');
    static dice2: HTMLElement = <HTMLElement>document.getElementById('dice2');
    static writeNames: HTMLElement = <HTMLButtonElement>document.getElementById('writeNames');
    static player1: HTMLInputElement = <HTMLInputElement>document.getElementById("player1");
    static player2: HTMLInputElement = <HTMLInputElement>document.getElementById("player2");
    static canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('fuildGame');

    static currentPlayer: HTMLElement = <HTMLElement>document.getElementById('currentPlayer');

    static imageHolder: HTMLElement = <HTMLElement>document.getElementById('dice');

    static nameplayer1: HTMLElement = <HTMLElement>document.getElementById("nameplayer1");
    static nameplayer2: HTMLElement = <HTMLElement>document.getElementById("nameplayer2");

    static livesForPlayerOne: HTMLElement = <HTMLElement>document.getElementById("divForLives1");
    static livesForPlayerTwo: HTMLElement = <HTMLElement>document.getElementById("divForLives2");

    static territoryplayer1: HTMLElement = <HTMLElement>document.getElementById("territoryplayer1");
    static territoryplayer2: HTMLElement = <HTMLElement>document.getElementById("territoryplayer2");

    static coinsplayer1: HTMLElement = <HTMLElement>document.getElementById("coinsplayer1");
    static coinsplayer2: HTMLElement = <HTMLElement>document.getElementById("coinsplayer2");

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
        let sound1 = new Audio(this.playGame);
        let sound2 = new Audio(this.soundForDice);
        let sound3 = new Audio(this.enterSound);
        let sound4 = new Audio(this.movementsOfBlock);

        this.arrayOfAudios.push(sound1);
        this.arrayOfAudios.push(sound2);
        this.arrayOfAudios.push(sound3);
        this.arrayOfAudios.push(sound4);
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
            this.soundOff.style.cssText = "background-image: url('volume.jpg');";
            this.imageFlag = false;
        }
        else if(this.imageFlag === false) {
            this.soundOff.style.cssText = "background-image: url('no_volume.jpg');";
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