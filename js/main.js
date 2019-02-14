var content = document.getElementById("content-container");
var nav = document.getElementById("nav");
var hamTop = document.getElementById("ham-top");

function navToggle(){
	if(content.style.marginLeft == "0px"){
		TweenMax.to("#content-container", 0.6, {marginLeft: "300px", ease: Expo.easeInOut});
	} else {
		TweenMax.to("#content-container", 0.6, {marginLeft: "0px", ease: Expo.easeInOut});
	}
}