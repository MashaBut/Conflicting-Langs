import { Block } from "./block";

export class Draw {

	public readonly aspectRatio: number;

	private numberOfHorizontalLines: number = 25;
	private numberOfVerticalLines: number = 50;

	private canvasElement: HTMLCanvasElement;
	private canvasContext: CanvasRenderingContext2D;
	private image = new Image();

	public constructor(canvasObj: HTMLCanvasElement, sizeX: number, sizeY: number, colorMap: string, colorGrid: string) {
		this.canvasContext = <CanvasRenderingContext2D>canvasObj.getContext('2d');
		this.canvasElement = canvasObj;
		this.canvasContext.fillStyle = colorMap;
		this.canvasContext.fillRect(0,0,this.canvasElement.width,this.canvasElement.height);
		this.canvasContext.strokeStyle = colorGrid;
		this.numberOfHorizontalLines = sizeX;
		this.numberOfVerticalLines = sizeY;
		this.aspectRatio = this.setAspectRatio();
		this.drawGrid();
		this.saveCanvasToImage();
	}

	private drawGrid(): void {
		for (let i = 0; i <= this.numberOfHorizontalLines; i++) {
			this.canvasContext.moveTo(0, this.aspectRatio * i);
			this.canvasContext.lineTo(this.canvasElement.width, this.aspectRatio * i);
		}
		for (let i = 0; i <= this.numberOfVerticalLines; i++) {
			this.canvasContext.moveTo(this.aspectRatio * i, 0);
			this.canvasContext.lineTo(this.aspectRatio * i, this.canvasElement.height);
		}
		this.canvasContext.stroke();
	}

	private setAspectRatio(): number {
		return this.canvasElement.width / this.numberOfVerticalLines;
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