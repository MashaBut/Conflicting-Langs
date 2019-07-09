import { Player } from "../Player";
import {CanvasDraw} from "../GamePage/WorkWithCanvas/Draw";
export class Game {

    flagGame:boolean=true;
    colorPlayer:any;
    canvasDraw:CanvasDraw;
    
    constructor (canvasObj:CanvasRenderingContext2D) {
        this.canvasDraw = new CanvasDraw(canvasObj);
    }
  
    public game(player1:Player,player2:Player) {
      
      if(this.flagGame===true) {
        this.flagGame=false;
        this.colorPlayer=player1.getColor();
        console.log(this.colorPlayer);
      }
      else {
        this.flagGame=true; 
        this.colorPlayer=player2.getColor();
        console.log(this.colorPlayer);
      }
      this.Time();
    }

    public setPositionBlockOnFuild(KeyCode:any) {
        switch(KeyCode) {
            case 38: { //up
                this.canvasDraw.setSizeBlock();
                this.canvasDraw.drawGrid();
                break;
            }
            case 39: {//right
                break;
            }
            case 37: {//left
                break;
            }
            case 40: {//down
                this.canvasDraw.setSizeBlock();
                this.canvasDraw.drawGrid();
                break;
            }
            case 13: {//enter
                this.canvasDraw.saveBlockToArray();
                this.canvasDraw.drawGrid(); 
                break;
            }
            default :
                break;
        }
    }

    Time() {
        //...
    }
  }