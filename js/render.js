var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 10000 );
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.getElementById("render").appendChild( renderer.domElement );

var cubeg = new THREE.BoxGeometry( 50, 200, 1 );
var cubem = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( cubeg, cubem );
cube.position.z = -500;

var roofg = new THREE.PlaneGeometry(1000, 1000, 1);
var roofm = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var roof = new THREE.Mesh( roofg, roofm );
roof.rotation.x = -90;

scene.add( cube, roof );

camera.rotation.x = -0.2;

document.addEventListener("mousemove", function(event){
	var x = event.clientX;
	var y = event.clientY;
	var cx = x - window.innerWidth / 2;
	var cy = y - window.innerHeight / 2;
	camera.position.x = -cx / 10;
	camera.position.y = cy / 10;
	camera.position.y = camera.position.y + 100;
})

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
