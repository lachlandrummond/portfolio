var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 10000 );
var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize( window.innerWidth, window.innerHeight );
document.getElementById("render").appendChild( renderer.domElement );

var figg = new THREE.BoxGeometry( 50, 200, 50 );
var figm = new THREE.MeshBasicMaterial( { color: 0x00ffff } );
var fig = new THREE.Mesh( figg, figm );
fig.position.y = 100;
fig.position.z = -500;

var wallfg = new THREE.BoxGeometry( 2000, 100, 50 );
var wallfm = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
var wallf = new THREE.Mesh( wallfg, wallfm );
wallf.position.x = 500;
wallf.position.y = 50;
wallf.position.z = -525;

var walllg = new THREE.BoxGeometry( 50, 100, 1000 );
var walllm = new THREE.MeshBasicMaterial( { color: 0xff00ff } );
var walll = new THREE.Mesh( walllg, walllm );
walll.position.x = -525;
walll.position.y = 50;
walll.position.z = -50;

var roofg = new THREE.PlaneGeometry(2000, 1000, 1);
var roofm = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var roof = new THREE.Mesh( roofg, roofm );
roof.position.x = 500;
roof.rotation.x = -1.57;

scene.add( fig, roof, wallf, walll );

camera.rotation.x = -0.1;
camera.position.y = 120;

var timeout;

document.addEventListener("mousemove", function(event){
	if(timeout) clearTimeout(timeout);
	setTimeout(mouse.bind(null, event), 100);
})

function mouse(event){
	var x = event.clientX;
	var y = event.clientY;
	x = x - window.innerWidth / 2;
	y = y - window.innerHeight / 2;
	x = -x / 10;
	y = y / 10;
	camera.position.x = x;
	camera.position.y = y;
	camera.position.y = camera.position.y + 120;
}

function animate() {
	requestAnimationFrame( animate );

	window.addEventListener('resize', onWindowResize, false);
	function onWindowResize(){
		camera.aspect = window.innerWidth / window.innerHeight;
    	camera.updateProjectionMatrix();
    	renderer.setSize( window.innerWidth, window.innerHeight );
	}
	renderer.render( scene, camera );
}
animate();
