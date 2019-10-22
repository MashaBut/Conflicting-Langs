import { Block } from "./block";

export class Draw {

	public aspectRatio: number; //width
	public aspectRatio1: number; //height

	private numberOfHorizontalLines: number = 25;
	private numberOfVerticalLines: number = 50;

	private CanvasHolder: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("fuildGame");

	private canvasElement: HTMLCanvasElement;
	private canvasContext: CanvasRenderingContext2D;
	private image = new Image();

	public constructor(canvasObj: HTMLCanvasElement, sizeX: number, sizeY: number, colorMap: string, colorGrid: string) {
		this.canvasContext = <CanvasRenderingContext2D>canvasObj.getContext('2d');
		this.canvasElement = canvasObj;
		this.reDrawCanvas(sizeX, sizeY, colorMap, colorGrid);
	}

	public reDrawCanvas(sizeX: number, sizeY: number, colorMap: string, colorGrid: string) {
		//this.clearCanvas();
		this.canvasContext.fillStyle = colorMap;
		this.canvasElement.width = this.CanvasHolder.offsetWidth;
		this.canvasElement.height = this.CanvasHolder.offsetHeight;
		this.canvasContext.fillRect(0,0,this.canvasElement.width,this.canvasElement.height);
		this.canvasContext.strokeStyle = colorGrid;
		this.numberOfHorizontalLines = sizeX;
		this.numberOfVerticalLines = sizeY;
		this.aspectRatio = this.setAspectRatioForVertical();
		this.aspectRatio1 = this.setAspectRatioForHorizonal();
		this.drawGrid();
		this.saveCanvasToImage();
		this.unloadingImageOnCanvas();
	}

	private drawGrid(): void {
		for (let i = 0; i <= this.numberOfHorizontalLines; i++) {
			this.canvasContext.moveTo(0, this.aspectRatio1 * i);
			this.canvasContext.lineTo(this.canvasElement.width, this.aspectRatio1 * i);
		}
		for (let i = 0; i <= this.numberOfVerticalLines; i++) {
			this.canvasContext.moveTo(this.aspectRatio * i, 0);
			this.canvasContext.lineTo(this.aspectRatio * i, this.canvasElement.height);
		}
		this.canvasContext.stroke();
	}

	private setAspectRatioForVertical(): number {
		return this.canvasElement.width / this.numberOfVerticalLines;
	}

	private setAspectRatioForHorizonal(): number {
		return this.canvasElement.height / this.numberOfHorizontalLines;
	}

	public saveCanvasToImage(): void {
		this.image.src = this.canvasElement.toDataURL("image/png");
	}

	private unloadingImageOnCanvas(): void {
		this.canvasContext.drawImage(this.image, 0, 0);
	}

	private clearCanvas(): void {
		this.canvasContext.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
	}

	private drawBlockOnMap(block: Block, colorBlock: string): void {
		this.canvasContext.fillStyle = colorBlock;
		this.canvasContext.fillRect(block.x, block.y, block.width, block.height);
	}

	public redraw(block: Block, color: string): void {
		this.clearCanvas();
		this.unloadingImageOnCanvas();
		this.drawBlockOnMap(block, color);
	}
}