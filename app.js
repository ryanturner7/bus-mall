'use strict';
var imageArray = ['bag.jpg', 'banana.jpg', 'bathroom.jpg'];
function images('filepath', 'clickCount', 'showCount'){
  this.filepath = 'filepath';
  this.clickCount = 'clickCount';
  this.showCount = 'showCount';
  this.imageArray = [];

}


function chooseImage(){
  var randomNum = Math.floor(Math.random() * images.length);
  document.getElementById('image-container').src = images[randomNum];

  for (var i = 0; i < image.length; i++);
}
