let t=0;
let points = [];
let max=fourier.length;
let ratio = 1;

function setup(){
	createCanvas(800,600);
	background(0);
	stroke(255);
	noFill();
}

function draw(){
	translate(width/2,height/2);
	for(let k = 0 ; k < 2 ; k++) {
		background(0);
		let px=0, py=0;
		push();
		for(let i = 0 ; i < fourier.length && i <= max ; i++) {
			let fi = fourier[i];
			let angle = t*fi.v_r+fi.phase;
			stroke(128,128,128);
			strokeWeight(1);
			ellipse(0,0,ratio*fi.radius*2, ratio*fi.radius*2);
			let x = ratio*fi.radius*Math.cos(angle);
			let y = ratio*fi.radius*Math.sin(angle);
			line(0,0,x,y);
			translate(x,y);
			stroke(0,255,255,50);
			strokeWeight(5);
			point(0,0);
			px+=x;
			py+=y;
		}
		pop();
		points.push(createVector(px,py));
		
		
		t+=Math.PI/500;
		if(t>=2*Math.PI) {
			noLoop();
		}
	}
	stroke(255,0,0);
	
	let old_x = points[0].x;
	let old_y = points[0].y
	for(let i = 0 ; i < points.length ; i++) {
		let x = points[i].x, y = points[i].y;
		line(old_x,old_y,x,y);
		old_x=x;
		old_y=y;
	}
}

function keyPressed() {
	console.log(keyCode);
	if(keyCode == 35) { // Fin
		max = fourier.length;
		reset();
	}
	else if(keyCode == 38) { // UP
		max++;
		reset();
	} else if(keyCode == 40) { // DOWN
		max--;
		reset();
	} else if(keyCode == 107) { // +
		ratio *= 2;
		reset();
	} else if(keyCode == 109) { // -
		ratio /= 2;
		reset();
	}
	
	if(max > fourier.length) {
		max = fourier.length;
	}
	if(max < 0) {
		max = 0;
	}
}

function reset() {
	t=0;
	points=[];
	loop();
}