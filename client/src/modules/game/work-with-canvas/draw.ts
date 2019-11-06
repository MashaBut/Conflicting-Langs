import { Block } from "../../../../../library/dist";
import { ManipulationWithDOM } from "../../work-with-html/manipulations-with-dom";

export class Draw {

	public aspectRatioWidth: number;
	public aspectRatioHeight: number;

	public numberOfHorizontalLines: number;
	public numberOfVerticalLines: number;

	private CanvasHolder: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("fuildGame");

	public canvasElement: HTMLCanvasElement;
	public canvasContext: CanvasRenderingContext2D;

	public constructor(canvasObj: HTMLCanvasElement, sizeX: number, sizeY: number, colorMap: string, colorGrid: string, blocks: any) {
		this.canvasContext = <CanvasRenderingContext2D>canvasObj.getContext('2d');
		this.canvasElement = canvasObj;
		this.reDrawCanvas(sizeX, sizeY, colorMap, colorGrid, blocks);
	}

	public reDrawCanvas(sizeX: number, sizeY: number, colorMap: string, colorGrid: string, blocks: any) {
		ManipulationWithDOM.canvas.style.backgroundColor = colorMap;
		this.canvasElement.width = this.CanvasHolder.offsetWidth;
		this.canvasElement.height = this.CanvasHolder.offsetHeight;
		this.canvasContext.strokeStyle = colorGrid;
		this.numberOfHorizontalLines = sizeX;
		this.numberOfVerticalLines = sizeY;
		this.aspectRatioWidth = this.setAspectRatioForVertical();
		this.aspectRatioHeight = this.setAspectRatioForHorizonal();
		this.clearCanvas();
		this.drawGrid();
		this.redrawBlocks(blocks);
	}

	private drawGrid(): void {
		for (let i = 0; i <= this.numberOfHorizontalLines; i++) {
			this.canvasContext.moveTo(0, this.aspectRatioHeight * i);
			this.canvasContext.lineTo(this.canvasElement.width, this.aspectRatioHeight * i);
		}
		for (let i = 0; i <= this.numberOfVerticalLines; i++) {
			this.canvasContext.moveTo(this.aspectRatioWidth * i, 0);
			this.canvasContext.lineTo(this.aspectRatioWidth * i, this.canvasElement.height);
		}
		this.canvasContext.stroke();
	}

	private setAspectRatioForVertical(): number {
		return this.canvasElement.width / this.numberOfVerticalLines;
	}

	private setAspectRatioForHorizonal(): number {
		return this.canvasElement.height / this.numberOfHorizontalLines;
	}

	private clearCanvas(): void {
		this.canvasContext.clearRect(0, 0, this.CanvasHolder.offsetWidth, this.CanvasHolder.offsetHeight);
	}

	private drawBlockOnMap(block: Block, colorBlock: string): void {
		this.canvasContext.fillStyle = colorBlock;
		this.canvasContext.fillRect(block.x, block.y, block.width, block.height);
	}

	public redrawBlocks(block: any): void {
		block.forEach((b: Block) => {
			this.canvasContext.fillStyle = b.color;
			this.canvasContext.fillRect(b.x * this.aspectRatioWidth, b.y * this.aspectRatioHeight, b.width * this.aspectRatioWidth, b.height * this.aspectRatioHeight);
		});
	}

	public redraw(block: Block, blocks: any, color: string): void {
		this.clearCanvas();
		this.drawGrid();
		this.redrawBlocks(blocks);
		this.drawBlockOnMap(block, color);
	}
}