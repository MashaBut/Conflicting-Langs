import { CanvasDraw } from "./Draw";

export class CanvasKeyPress {

    canvasDraw;
    
    constructor (canvasObj:CanvasRenderingContext2D) {
        this.canvasDraw = new CanvasDraw(canvasObj);
    }
   
    setPositionBlockOnFuild(KeyCode) {
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
            case 16: {//shift
                this.canvasDraw.saveBlockToArray();
                this.canvasDraw.drawGrid(); 
                break;
            }
            default :
                break;
        }
    }
}