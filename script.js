// get left/right buttons
var right = document.getElementById("right");
var left = document.getElementById("left");
// get number of images
var num_of_img = document.getElementsByClassName("slideshow-image").length;

// helper functions
var showingImageElement = function() {
	return document.getElementsByClassName("showing")[0];	
}

var getShowingImageNumber = function(showingImageElement){
	var str_num = showingImageElement.id.split("-")[1];
	return parseInt(str_num);
};

var getImageElementByNumber = function(num){
	var num_str = num.toString();
	var idName = "img-" + num_str;
	var image = document.getElementById(idName);
	return image;
}

var nextImage = function(num, direction){
	var current_img = showingImageElement();
	var next; 
	current_img.className = "hidden slideshow-image";

	if(direction === "right"){
		(num != num_of_img) ? next = getImageElementByNumber(num+1) : next = getImageElementByNumber(1);
	}
	else {
		(num != 1) ? next = getImageElementByNumber(num-1) : next = getImageElementByNumber(num_of_img);
	}
	next.className = "showing slideshow-image";
}

// working carousel
right.addEventListener("click", function(){
	var direction = "right";
	var image = showingImageElement();
	var num = getShowingImageNumber(image);
	nextImage(num, direction);
});

left.addEventListener("click", function(){
  var direction = "left";
  var image = showingImageElement();
  var num = getShowingImageNumber(image);
  nextImage(num, direction);
});
