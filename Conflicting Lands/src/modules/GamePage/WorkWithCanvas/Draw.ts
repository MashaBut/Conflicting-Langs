import {CanvasCreate} from "./Create";
export namespace CanvasDraw {

	export let canvasObj:CanvasRenderingContext2D;
	let colorGreyRGB="rgb(171, 139, 187)";//"#ab8cbc";
	
	let listPixelsGrid= new Array(500);
	for (let i=0;i<1000;i++) {
		listPixelsGrid[i]=new Array(1000);
	}	

	CanvasCreate.setSizeBlockForFuild();
	
	export function drawGrid() {
		canvasObj.clearRect(0,0,500,1000);
		canvasObj.strokeStyle=colorGreyRGB; 
		for (var i = 0; i <= 25; i++) {
			canvasObj.moveTo(0, 20*i);
			canvasObj.lineTo(1000, 20*i);
		}
		for (var i = 0; i <= 50; i++) {
			canvasObj.moveTo(20*i, 0);
			canvasObj.lineTo(20*i, 500);
		}
		canvasObj.stroke();
		//getPixelsWithGrid();
		drawBlockOnFuild();
	}

	//need to add async
	function getPixelsWithGrid(){
		for(let i=0;i<500;i++) {
			for(let j=0;j<1000;j++) {
				listPixelsGrid[i][j];
				let a=canvasObj.getImageData(i,j,1,1).data;
			}
		}
	}

	function drawBlockOnFuild() {
		canvasObj.fillStyle="rgb(171, 3, 3)";
		canvasObj.fillRect(21,21,CanvasCreate.firstDice,CanvasCreate.secondDice);	
	}
}
