var images = ["http://photography.naturestocklibrary.com/orca-stock-photo.jpg", "http://www.publicdomainpictures.net/download-picture.php?adresar=30000&soubor=beauty-of-nature-3.jpg", "http://orig15.deviantart.net/740c/f/2007/129/7/4/stock_032__by_enchanted_stock.jpg", "http://indianapublicmedia.org/support/files/2011/09/04_03_1-Stock-Market-Prices_web.jpg", "http://netdna.webdesignerdepot.com/uploads/2008/12/stock-microstock.jpg" ];
var currentPosition = 0;
var imageCarousel = document.getElementById("carousel-container");

function setCurrentIndex(index) {
	currentPosition = index;
	controlCurrentIndex();
	updateData();
}

function controlCurrentIndex() {
	if (currentPosition >= images.length) {
		currentPosition = 0;
	}
	else if (currentPosition < 0) {
		currentPosition = images.length - 1;
	}
}

var renderImage = function(){
	images.forEach(function (image){
		var img = new Image();
		img.src = image;
		imageCarousel.appendChild(img);
	});
};

function updateData() {
	console.log(currentPosition);
	var imageWidth = 600;
	var points = [(-currentPosition * imageWidth) + "px", 0, 0].join(", ");
	imageCarousel.style.marginLeft = (-currentPosition * imageWidth) + "px"
	console.log(points);
}


function moveLeft(event) {
	event.preventDefault();
	setCurrentIndex(currentPosition - 1)
}

function moveRight(event) {
	event.preventDefault();
	setCurrentIndex(currentPosition + 1);
}

var left = document.getElementById("left-btn");
var right = document.getElementById("right-btn");

left.addEventListener("click", moveLeft, false);
right.addEventListener("click", moveRight, false);

renderImage();
setCurrentIndex(0);



