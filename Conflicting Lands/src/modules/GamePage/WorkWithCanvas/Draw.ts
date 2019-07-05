export namespace Canvas{

	let colorDarkBlue="#010428";
	let colorGrey="#ab8cbc";
	let list:any[][];	
	export function drawGrid(canvasObj:CanvasRenderingContext2D) {
		canvasObj.strokeStyle=colorGrey;
		for (var i = 0; i <= 25; i++) {
			canvasObj.moveTo(0, 20*i);
			canvasObj.lineTo(1000, 20*i);
		}
		for (var i = 0; i <= 50; i++) {
			canvasObj.moveTo(20*i, 0);
			canvasObj.lineTo(20*i, 500);
		}
		canvasObj.stroke();
	}

	for(let i=1;i<=500;i++) {
		for(let j=0;j<1000;j++) {
		//	list[i][j]=
		}
	}
}
