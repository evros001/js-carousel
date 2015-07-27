var images = ["http://photography.naturestocklibrary.com/orca-stock-photo.jpg", "http://www.publicdomainpictures.net/download-picture.php?adresar=30000&soubor=beauty-of-nature-3.jpg", "http://orig15.deviantart.net/740c/f/2007/129/7/4/stock_032__by_enchanted_stock.jpg", "http://indianapublicmedia.org/support/files/2011/09/04_03_1-Stock-Market-Prices_web.jpg", "http://netdna.webdesignerdepot.com/uploads/2008/12/stock-microstock.jpg" ];
var img_arr = new Array();
var showIndex = 1;
var nextIndex = 2;

var right = document.getElementById("right-btn");
var left = document.getElementById("left-btn");

var carouselContainer = document.getElementById("carousel-container");

var renderArray = function (){
	images.forEach(function (src){
		var img = new Image();
		img.src = src;
		img.className = "slide";
		img_arr.push(img);
	});
};

var updateShowIndex = function(direction) {
	if (direction === "right") {
		if(showIndex >= img_arr.length) {
			showIndex = 1;
			nextIndex++;
		} else if (showIndex === img_arr.length-1){
			showIndex++;
			nextIndex = 1
		} else {
			showIndex++;
			nextIndex++;
		}
	} else {
		if(showIndex <= 1) {
			showIndex = img_arr.length;
			nextIndex--;
		} else if (showIndex === 2 ){
			showIndex--;
			nextIndex = img_arr.length;
		} else {
			showIndex--;
			nextIndex--;
		}
	}
	console.log(showIndex);
	console.log(nextIndex);
};

var renderOrder = function(index, arr) {

};

renderArray();

