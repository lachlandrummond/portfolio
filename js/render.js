var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.getElementById("render").appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );

var g = new THREE.SphereGeometry( 0.5, 32, 32 );
var m = new THREE.MeshBasicMaterial( { color: 0x00ffff } );
var sphere = new THREE.Mesh( g, m );
sphere.position.x = -2;

var g2 = new THREE.CylinderGeometry( 0.5, 0.5, 1, 32 );
var m2 = new THREE.MeshBasicMaterial( { color: 0x00ffff } );
var triangle = new THREE.Mesh( g2, m2 );
triangle.position.x = 2;

scene.add( cube, sphere, triangle );

camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
	window.addEventListener('resize', onWindowResize, false);
	function onWindowResize(){
		camera.aspect = window.innerWidth / window.innerHeight;
    	camera.updateProjectionMatrix();
    	renderer.setSize( window.innerWidth, window.innerHeight );
	}
	document.addEventListener("mousemove", function(event){
		var x = event.clientX;
		var y = event.clientY;
		var cx = x - window.innerWidth / 2;
		var cy = y - window.innerHeight / 2;
		camera.position.x = cx / 500;
		camera.position.y = -cy / 500;
	})
}
animate();
