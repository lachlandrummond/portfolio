var canvas = document.getElementById("canvas");

function initCanvas(){
	var ctx = canvas.getContext("2d");
	
}

window.onload = function(){
	initCanvas();
	requestAnimationFrame(animate);
}

document.addEventListener("mousemove", function(){
	requestAnimationFrame(animate);
});

function update(){

};

function draw(){
	
};

function animate(){
	update();
	draw();
};