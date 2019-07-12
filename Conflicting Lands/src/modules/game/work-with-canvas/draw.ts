import {CanvasCreate} from "./create";
export class CanvasDraw {

	private listPixelsGrid:any;
	private colorGreyRGB="rgb(171, 139, 187)";//"#ab8cbc"
	private xSize:number;
	private ySize:number;
	private arrayBuiltBlock= new Array(300);
	private counterForArrayBuiltBlock:number=0;
	
	private canvasCreate= new CanvasCreate(); 
	public canvasObj:CanvasRenderingContext2D;

	//temporary variables
	private boolForStartLocation:boolean=false;
	private x:number=1;
	private y:number=500;

	public constructor (canvasObj:CanvasRenderingContext2D) {
		this.listPixelsGrid= new Array(500);
		for (let i=0;i<500;i++) {
			this.listPixelsGrid[i]=new Array(1000);
		}	
		for(let i=0;i<300;i++) {
			this.arrayBuiltBlock[i]= new Array(4);
		}
		this.canvasObj=canvasObj;
		this.canvasObj.strokeStyle=this.colorGreyRGB; 
		this.canvasObj.fillStyle="rgb(171, 3, 3)";
		let size=this.canvasCreate.setSizeBlockForFuild();
		this.xSize=size[0];
		this.ySize=size[1];
		this.drawGrid();
	}
			
	public drawGrid():void {
		this.canvasObj.clearRect(0,0,500,1000);
		for (var i = 0; i <= 25; i++) {
			this.canvasObj.moveTo(0, 20*i);
			this.canvasObj.lineTo(1000, 20*i);
		}
		for (var i = 0; i <= 50; i++) {
			this.canvasObj.moveTo(20*i, 0);
		    this.canvasObj.lineTo(20*i, 500);
		}
		this.canvasObj.stroke();
		this.drawBlocksWithSavedArray();
		this.drawBlockOnFuild();		
	}

	//need to add async
	getPixelsWithGrid():void {
		for(let i=0;i<500;i++) {
			for(let j=0;j<1000;j++) {
				this.listPixelsGrid[i][j]=this.canvasObj.getImageData(i,j,1,1).data;
			}
		}
	}

	public setSizeBlock():void {
		let sizeBlock=this.canvasCreate.turnSize();
		this.xSize=sizeBlock[0];
		this.ySize=sizeBlock[1];
	}

	drawBlockOnFuild():void {
		this.canvasObj.fillStyle="rgb(171, 3, 3)";
		if(this.boolForStartLocation===false) {
			this.canvasObj.fillRect(this.x,this.y-this.ySize-1,this.xSize,this.ySize);
		}
	}

	public saveBlockToArray():void {
		this.arrayBuiltBlock[this.counterForArrayBuiltBlock++]=[this.x,this.y-this.ySize-1,this.xSize,this.ySize];
	}

	private drawBlocksWithSavedArray():void {
		for(let i=0;i<this.counterForArrayBuiltBlock;i++) {
			this.canvasObj.fillRect(this.arrayBuiltBlock[i][0],this.arrayBuiltBlock[i][1],this.arrayBuiltBlock[i][2],this.arrayBuiltBlock[i][3]);
		}
	}
}

