import { Directions } from './key-designations';



export class ManipulationWithDOM {

    static imageFlag: boolean = false;
    private static audio = document.createElement('audio');

    static pathToAnimate = require ('../../assets/images/dicesAnimation.gif');
    static volumeImage = require ('../../assets/images/volume.jpg');
    static noVolumeImage = require ('../../assets/images/no_volume.jpg');

    static playGame = require('../../assets/sounds/playGame.wav');
    static soundForDice = require('../../assets/sounds/rollTheDice2.wav');
    static enterSound = require('../../assets/sounds/soundForBlock3.wav');
    static movementsOfBlock = require('../../assets/sounds/moveblock2.wav');

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
    static soundHolder: HTMLElement = <HTMLElement>document.getElementById('holderForSounds');

    static nameplayer1: HTMLElement = <HTMLElement>document.getElementById("nameplayer1");
    static nameplayer2: HTMLElement = <HTMLElement>document.getElementById("nameplayer2");

    static territoryplayer1: HTMLElement = <HTMLElement>document.getElementById("territoryplayer1");
    static territoryplayer2: HTMLElement = <HTMLElement>document.getElementById("territoryplayer2");

    static coinsplayer1: HTMLElement = <HTMLElement>document.getElementById("coinsplayer1");
    static coinsplayer2: HTMLElement = <HTMLElement>document.getElementById("coinsplayer2");

    public static disabledButtonDice(): void {
        this.tossDice.setAttribute("disabled", "true");
        this.tossDice.style.cssText = "background-color: #2c2d32;"
    }

    public static undisabledButtonDice(): void {
        this.tossDice.removeAttribute("disabled");
        this.tossDice.style.cssText = "background-color: #0e0e0e;"
    }

    public static disableStandardKeyOperation(e: KeyboardEvent): void {
        if ([Directions.Enter, Directions.Down, Directions.Left, Directions.Right, Directions.Up].indexOf(e.keyCode) > -1) {
            e.preventDefault();
        }
    }

    public static playSound(path: string): void {
        let sound = new Audio(path);
        this.audio.id = "audio";
        this.audio = sound;
        this.soundHolder.appendChild(this.audio);
        this.audio.play();
    }

    public static disableSound(): void {
        let audios = new Array();
        if(this.imageFlag === true)
        {
           this.soundOff.style.cssText = "background-image: url('volume.jpg');";
           this.imageFlag = false;
        }
        else if(this.imageFlag === false) {
            this.soundOff.style.cssText = "background-image: url('no_volume.jpg');"; 
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