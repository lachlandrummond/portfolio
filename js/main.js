var content = document.getElementById("content-container");

function navToggle(){
	if(content.style.marginLeft == "0px"){
		TweenMax.to("#content-container", 0.6, {marginLeft: "500px", ease: Expo.easeInOut});
	} else {
		TweenMax.to("#content-container", 0.6, {marginLeft: "0px", ease: Expo.easeInOut});
	}
}