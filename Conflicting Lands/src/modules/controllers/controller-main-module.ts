import {Player} from "../player";
import {Identification} from "../start/write-names";
import {CanvasDraw} from "../game/work-with-canvas/draw";
import {Subject, fromEvent, Observable} from "rxjs";
import {take} from "rxjs/operators";
import {ConcealCanvas} from "../start/ux/scripts/hide-function";
import {Directions} from './key-designations';
import {DiceRollerButton} from "../game/dice/dice-roller";
import {diceCollection} from "../game/dice/dice";

export class Game {
    
    private player1: Player;
    private player2: Player;
    private currentPlayer: Player;

    private keyDown$: Observable<Event> = fromEvent(document,'keydown');
    private gameEvents$ = new Subject();

    private flagGame: boolean = true;
    private canvasDraw: CanvasDraw;

    private diceRollerButton = new DiceRollerButton();
    private concealCanvas = new ConcealCanvas();

    timer:any;
    bool:boolean=false;

    buttonDice: HTMLElement = <HTMLElement>document.getElementById("dice");

    constructor() {
        let canvas: HTMLElement = <HTMLElement>document.getElementById('canvas');
        let dice1: HTMLElement = <HTMLElement>document.getElementById('dice1');
        let dice2: HTMLElement = <HTMLElement>document.getElementById('dice2');
        let buttonDice: HTMLElement = <HTMLElement>document.getElementById('dice');
        canvas.style.display = 'none';
        dice1.style.display = 'none';
        dice2.style.display = 'none';
        buttonDice.style.display = 'none';

        this.setCanvas();

        this.keyDown$
            .subscribe((e: KeyboardEvent) => {

               if([Directions.Enter, Directions.Down, Directions.Left, Directions.Right, Directions.Up].indexOf(e.keyCode) > -1) {
                    e.preventDefault();
                }  

                this.setBlockPositionOnMap(e);
            })

        fromEvent(<HTMLButtonElement>document.getElementById('writeNames'), 'click')
            .pipe(take(1))
            .subscribe(() =>  {
                this.setPlayerNames();
                this.currentPlayer = this.player1;
                this.concealCanvas.hide();
            })

        fromEvent(<HTMLButtonElement>document.getElementById('dice'),'click')
            .subscribe(() => {
                this.bool = true;
                this.diceRollerButton.roll(diceCollection);
                this.gameEvents$.next();
            })   

        this.gameEvents$
            .subscribe(() => { 
                this.buttonDice.setAttribute("disabled","true");
                console.log(this.currentPlayer.getName());

                if(this.bool === true) {
                    this.timer = setTimeout(() => this.endOfturn(),4000);
                    this.bool = false;
                }
        })
    }

    private endOfturn(){
        this.buttonDice.removeAttribute("disabled");
        this.canvasDraw.saveBlockToArray();
        this.changePlayer();
    }

    private setPlayerNames(): void {
        let namePlayer1: string = (<HTMLInputElement>document.getElementById("player1")).value;
        let namePlayer2: string = (<HTMLInputElement>document.getElementById("player2")).value;

        this.player1 = new Player(Identification.setName(namePlayer1,"Player 1"),"Red",1,500);
        this.player2 = new Player(Identification.setName(namePlayer2,"Player 2"),"Blue",1,500);
    }

    private changePlayer(): void {
        if(this.flagGame === true) {
            this.flagGame = false;
            this.currentPlayer = this.player2;
        }
        else {
            this.flagGame = true;
            this.currentPlayer = this.player1;
        }
    }

    private setCanvas(): void {
        let canvasObj: any = (<HTMLCanvasElement> document.getElementById('fuildGame')).getContext('2d');
        this.canvasDraw = new CanvasDraw(canvasObj);
    }

    private setBlockPositionOnMap(keyCode: KeyboardEvent): void {
        switch(keyCode.keyCode) {

            case Directions.Up:

            case Directions.Down: {
                this.canvasDraw.drawBlockOnFuild();
                this.canvasDraw.setSizeBlock();
                this.canvasDraw.drawGrid();
                break;
            }

            case Directions.Right: {
                break;
            }

            case Directions.Left: {
                break;
            }

            case Directions.Enter: {
                clearTimeout(this.timer);
                this.endOfturn();
                this.canvasDraw.drawGrid(); 
                break;
            }
            
            default :
                break;
        }
    }

    private tossDice(): number[] {
        return [];
    }

    private setTimer(): void {  

    }

    private setPositionForBlock(): number[] {
        return [];
    }
  }