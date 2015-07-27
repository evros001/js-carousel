var images = ["http://photography.naturestocklibrary.com/orca-stock-photo.jpg", "http://www.publicdomainpictures.net/download-picture.php?adresar=30000&soubor=beauty-of-nature-3.jpg", "http://orig15.deviantart.net/740c/f/2007/129/7/4/stock_032__by_enchanted_stock.jpg", "http://indianapublicmedia.org/support/files/2011/09/04_03_1-Stock-Market-Prices_web.jpg", "http://netdna.webdesignerdepot.com/uploads/2008/12/stock-microstock.jpg" ];
// if images embedded as JSON:
// var images = JSON.parse(document.getElementById("carousel-json").innerHTML);
var currentIndex = 0;
var carouselContainer = document.getElementById("carousel-container");
var img_window = document.getElementById("img-window");

function setCurrentIndex(index) {
	currentIndex = index;
	controlCurrentIndex();
	updateData();
}

function controlCurrentIndex() {
	if (currentIndex >= images.length) {
		currentIndex = 0;
	}
	else if (currentIndex < 0) {
		currentIndex = images.length - 1;
	}
}

function updateData() {
	var imageWidth = 600;
	var points = [-currentIndex * imageWidth + "px", 0, 0].join(", ");
	carouselContainer.style.transform = "translate3d("+points+")"
}

function render() {
	images.forEach(function (image) {
		var img = new Image();
		img.src = image;
		carouselContainer.appendChild(img);
	});
}

function moveLeft(event) {
	event.preventDefault();
	setCurrentIndex(currentIndex - 1)
}

function moveRight(event) {
	event.preventDefault();
	setCurrentIndex(currentIndex + 1);
}

var left = document.getElementById("left-btn");
var right = document.getElementById("right-btn");

left.addEventListener("click", moveLeft, false);
right.addEventListener("click", moveRight, false);

render();
setCurrentIndex(0);