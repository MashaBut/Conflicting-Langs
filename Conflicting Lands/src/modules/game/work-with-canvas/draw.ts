import { threadId } from "worker_threads";
import { ManipulationWithDOM } from "../../controllers/manipulations-with-dom";

export class CanvasDraw {

	private colorGreyRGB: string = "rgb(171, 139, 187)";
	public  readonly aspectRatio: number;

	private canvasElement: HTMLCanvasElement;
	private canvasContext: CanvasRenderingContext2D;
	public dataImage: string;
	image = new Image();
	private readonly numberOfHorizontalLines: number = 25;
	private readonly numberOfVerticalLines: number = 50;

	public constructor (canvasObj: HTMLCanvasElement) {
		this.canvasContext = <CanvasRenderingContext2D>canvasObj.getContext('2d'); 
		this.canvasElement = canvasObj;
		this.canvasContext.strokeStyle = this.colorGreyRGB; 
		this.aspectRatio = this.setAspectRatio();
		this.drawGrid();
		this.saveCanvasToImage();
	}
			
	public drawGrid(): void {	
		for (let i = 0; i <= this.numberOfHorizontalLines; i++) {
			this.canvasContext.moveTo(0, this.aspectRatio*i);
			this.canvasContext.lineTo(this.canvasElement.width, this.aspectRatio*i);
		}
		for (let i = 0; i <= this.numberOfVerticalLines; i++) { 
			this.canvasContext.moveTo(this.aspectRatio*i, 0);
		    this.canvasContext.lineTo(this.aspectRatio*i, this.canvasElement.height);
		}
		this.canvasContext.stroke();
	}

	private setAspectRatio(): number {
		return this.canvasElement.width/this.numberOfVerticalLines;
	}

	public saveCanvasToImage(): void {
	    this.image.src = this.canvasElement.toDataURL("image/png");
	}

	public unloadingImageOnCanvas(): void {
		this.canvasContext.drawImage(this.image,0,0);
	}
	
	public clearCanvas(): void {
		this.canvasContext.clearRect(0,0,this.canvasElement.width,this.canvasElement.height);
	}

    public drawBlockOnMap(xCoordinate: number, yCoordinate: number, xSize: number, ySize: number, colorBlock:string): void {
		this.canvasContext.fillStyle = colorBlock;
		this.canvasContext.fillRect(xCoordinate, yCoordinate, xSize, ySize);
	}

	public redraw(element: number[], color: string): void {
		this.clearCanvas();
		this.unloadingImageOnCanvas();
		this.drawBlockOnMap(element[0],element[1],element[2],element[3],color);
	}
}