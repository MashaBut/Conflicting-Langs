export class CanvasDraw {

	private colorGreyRGB: string = "rgb(171, 139, 187)";
	public  readonly aspectRatio: number;
	private img = new Image();

	private canvasElement: HTMLCanvasElement;
	private canvasContext: CanvasRenderingContext2D;
	private dataImage: string;
	
	private readonly numberOfHorizontalLines: number = 30;
	private readonly numberOfVerticalLines: number = 50;

	public constructor (canvasObj: HTMLCanvasElement) {
		this.canvasContext = <CanvasRenderingContext2D>canvasObj.getContext('2d'); 
		this.canvasElement = canvasObj;
		this.canvasContext.strokeStyle = this.colorGreyRGB; 
		this.aspectRatio = this.setAspectRatio();
		this.drawGrid();
	}
			
	private drawGrid(): void {	
		
		for (let i = 0; i <= this.numberOfHorizontalLines; i++) {
			this.canvasContext.moveTo(0, this.aspectRatio*i);
			this.canvasContext.lineTo(this.canvasElement.width, this.aspectRatio*i);
		}
		for (let i = 0; i <= this.numberOfVerticalLines; i++) {
			this.canvasContext.moveTo(this.aspectRatio*i, 0);
		    this.canvasContext.lineTo(this.aspectRatio*i, this.canvasElement.height);
		}
		this.canvasContext.stroke();	  
		this.saveCanvasInImage(this.canvasElement);
	}

	private setAspectRatio(): number {
		return this.canvasElement.width/this.numberOfVerticalLines;
	}

	private saveCanvasInImage(canvasElement: HTMLCanvasElement): void {
		this.dataImage =canvasElement.toDataURL("image/png", 1);
	}
	public unloadingImageOnCanvas(canvasContext: CanvasRenderingContext2D): void {
		this.img.src = this.dataImage;
		canvasContext.drawImage(this.img, 0, 0);
	}
	
	public clearCanvas(): void {
		this.canvasContext.clearRect(0,0,this.canvasElement.width,this.canvasElement.height);
	}

    public drawBlockOnMap(xCoordinate: number, yCoordinate: number, xSize: number, ySize: number, colorBlock:string): void {
		this.canvasContext.fillStyle = colorBlock;
		this.canvasContext.fillRect(xCoordinate, yCoordinate-ySize-1, xSize, ySize);
	}
}