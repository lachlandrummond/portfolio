var main = document.getElementById("main")

initialView = function(){
	main.classList.add("black");
};
initialView();

document.body.onscroll = function(){
	var scroll = window.pageYOffset;
	console.log(scroll);
	
	if(window.pageYOffset < 1000){
		main.classList.remove("blue");
		main.classList.add("black");
	} else {
		main.classList.remove("black");
		main.classList.add("blue");
	};
};
