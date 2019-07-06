import { CanvasCreate } from "./Create";
import { CanvasDraw } from "./Draw";

export namespace CanvasKeyPress {

    export function setPositionBlockOnFuild(event) {
        let firstDice;
        switch(event) {
            case 38: { //up
                firstDice=CanvasCreate.firstDice;
                CanvasCreate.firstDice=CanvasCreate.secondDice;
                CanvasCreate.secondDice=firstDice;
                CanvasDraw.drawGrid();
                break;
            }
            case 39: {//right
                break;
            }
            case 37: {//left
                break;
            }
            case 40: {//down
                firstDice=CanvasCreate.firstDice;
                CanvasCreate.firstDice=CanvasCreate.secondDice;
                CanvasCreate.secondDice=firstDice;
                CanvasDraw.drawGrid();
                break;
            }
            default :
                break;
        }
    }
}