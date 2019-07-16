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

    private keyDown$: Observable<Event> = fromEvent(document,'keydown');;
    private gameEvents$ = new Subject();

    private flagGame: boolean = true;
    private canvasDraw: CanvasDraw;

    constructor() {
        let canvas: HTMLElement = <HTMLElement>document.getElementById('canvas');
        canvas.style.display = 'none';

        this.setCanvas();

        this.keyDown$
            .subscribe((e: KeyboardEvent)=> {

               if([Directions.Enter, Directions.Down, Directions.Left, Directions.Right, Directions.Up].indexOf(e.keyCode) > -1) {
                    e.preventDefault();
                }  

                this.setBlockPositionOnMap(e);
            })

       fromEvent(<HTMLButtonElement>document.getElementById('writeNames'), 'click')
            .pipe(take(1))
            .subscribe(() =>  {
                this.setPlayerNames();
                ConcealCanvas.hide();
                this.gameEvents$.next();  
            })

        fromEvent(<HTMLButtonElement>document.getElementById('dice'),'click')
            .subscribe(() => {
                DiceRollerButton.roll(diceCollection);
            })
      
        this.gameEvents$.subscribe(() => this.currentPlayer = this.changePlayer());
        this.gameEvents$.subscribe(() => this.tossDice());
        this.gameEvents$.subscribe(() => this.setPositionForBlock());

    }

    private setPlayerNames(): void {
        let namePlayer1: string = (<HTMLInputElement>document.getElementById("player1")).value;
        let namePlayer2: string = (<HTMLInputElement>document.getElementById("player2")).value;

        this.player1 = new Player(Identification.setName(namePlayer1,"Player 1"),"Red",1,500);
        this.player2 = new Player(Identification.setName(namePlayer2,"Player 2"),"Blue",1,500);
    }

    private changePlayer(): Player {
        if(this.flagGame === true) {
            this.flagGame = false;
            return this.player1;
        }
        else {
            this.flagGame = true;
            return this.player2;
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
                this.canvasDraw.saveBlockToArray();
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