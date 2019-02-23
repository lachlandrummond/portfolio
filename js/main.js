var content = document.getElementById("content-container");

function navToggle(){
	if(content.style.marginLeft == "0px"){

		TweenMax.to("#content-container", 0.6, {marginLeft: "300px", ease: Expo.easeInOut});
		TweenMax.to(".nav-toggle-ham", 0.6, {transform: "rotate(90deg)"});
		TweenMax.to(".ham-top", 0.6, {transform: "translateY(6px) rotate(45deg)"});
		TweenMax.to(".ham-mid", 0.6, {opacity: "0"});
		TweenMax.to(".ham-bot", 0.6, {transform: "translateY(-6px) rotate(-45deg)"});

	} else {

		TweenMax.to("#content-container", 0.6, {marginLeft: "0px", ease: Expo.easeInOut});
		TweenMax.to(".nav-toggle-ham", 0.6, {transform: "rotate(0deg)"});
		TweenMax.to(".ham-top", 0.6, {transform: "translateY(0px) rotate(0deg)"});
		TweenMax.to(".ham-mid", 0.6, {opacity: "1"});
		TweenMax.to(".ham-bot", 0.6, {transform: "translateY(0px) rotate(0deg)"});
	};
};
