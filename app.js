'use strict';
var Image = function(src){
  this.src = 'src';
  this.count = 0;
};
var ImageList = function(imageArray){
  this.items = imageArray;
};
ImageList.prototype.getThreeRandomImages = function(){
  var firstImageIndex = Math.floor(Math.random() * this.items.length) + 0;
  var secondImageIndex, thirdImageIndex;

}
var imageArray = [
  'img/bag.jpg',
  'img/banana.jpg',
  'img/bathroom.jpg',
  'img/boots.jpg',
  'img/breakfast.jpg',
  'img/bubblegum.jpg',
  'img/chair.jpg',
  'img/cthulhu.jpg',
  'img/dog-duck.jpg',
  'img/dragon.jpg',
  'img/pen.jpg',
  'img/pet-sweep',
  'img/scissors.jpg',
  'img/shark.jpg',
  'img/sweep.png',
  'img/tauntaun.jpg',
  'img/unicorn.jpg',
  'img/usb.gif',
  'img/water-can.jpg',
  'img/wine-glass.jpg',
];

var finalImageArray = [];

for (var i = 0; i < imageArray.length; i++){
  var imageObj = new Image(imageArray[i]);
  finalImageArray.push(imageObj);
}



// function imageTest(src, filepath){
//   this.name = name;
//   this.id = id;
//   this.filepath = 'img'+ filename + filetype;
//   this.showCount = 0;
//   this.clickCount = 0;
// }
// var imageArray =
// var count = 0;
// var Image1 = document.getElementById('Image1');
// Image1.setAttribute('src','img/bag.jpg');
//
// var Image2 = document.getElementById('Image2');
// Image2.setAttribute('src','img/banana.jpg');
//
// var Image3 = document.getElementById('Image3');
// Image3.setAttribute('src','img/bathroom.jpg');
// count++;
//   for (var i = 0; i < image.length; i++);






// var imageArray = ['img/bag.jpg', ];
//
// // // function images(filepath, clickCount, showCount){
// // //   this.filepath = 'img'+ filename + filetype;
// // //   this.clickCount = 'clickCount';
// // //   this.showCount = 'showCount';
//
// // }
//
//
// function chooseImage(){
//   var randomNum = Math.floor(Math.random() * images.length);
//   document.getElementById('image-container').src = imageArray[i];
//
// }
