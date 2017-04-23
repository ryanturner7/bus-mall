'use strict';

console.log('it works!');

// make a constructor for photo
function Photo(name, filename){
  this.name = name;
  this.src = './img/' + filename;
  this.clickCount = 0;
  this.displayCount = 0;
}

Photo.prototype.shown = function(){
  this.displayCount = this.displayCount + 1;
};

Photo.prototype.onClick = function(){
  this.clickCount = this.clickCount + 1;
  renderThreePhotos(getThreeRandomPhotos());
};

var count = -1;
var photosOnSecondToLastScreen = [];
var photosOnPreviousScreen = [];
var photosOnScreen = [];
var photos = [
  new Photo('bag head', 'bag.jpg'),
  new Photo('banana chopper', 'banana.jpg'),
  new Photo('bathroom party', 'bathroom.jpg'),
  new Photo('rain boots', 'boots.jpg'),
  new Photo('breakfast', 'breakfast.jpg'),

  new Photo('bubblegum', 'bubblegum.jpg'),
  new Photo('chair', 'chair.jpg'),
  new Photo('cthulhu', 'cthulhu.jpg'),
  new Photo('dog-duck', 'dog-duck.jpg'),
  new Photo('dragon', 'dragon.jpg'),

  new Photo('pen', 'pen.jpg'),
  new Photo('pet-sweep', 'pet-sweep.jpg'),
  new Photo('scissors', 'scissors.jpg'),
  new Photo('shark in the dark', 'shark.jpg'),
  new Photo('tauntaun', 'tauntaun.jpg'),

  new Photo('sweep', 'sweep.png'),
  new Photo('unicorn', 'unicorn.jpg'),
  new Photo('usb', 'usb.gif'),
  new Photo('water-can', 'water-can.jpg'),
  new Photo('wine-glass', 'wine-glass.jpg'),
];

function getRandomIndex(list) {
  return Math.floor(Math.random() * list.length);
}

function getThreeRandomPhotos(){

  photosOnSecondToLastScreen = photosOnPreviousScreen;
  photosOnPreviousScreen = photosOnScreen;
  photosOnScreen = [];

  var nonoPhotos = photosOnPreviousScreen.concat(photosOnSecondToLastScreen);
  var indexes = [getRandomIndex(photos), getRandomIndex(photos), getRandomIndex(photos)];

  for (var i=0; i < indexes.length; i++){
    var isUnique = false;
    while(!isUnique) {
      if(nonoPhotos.indexOf(photos[indexes[i]]) > -1) {
        indexes[i] = getRandomIndex(photos);
      } else {
        isUnique = true;
      }
    }
  }

  var nextPhoto = photos.slice(indexes[0], indexes[0] + 1);
  nextPhoto[0].shown();
  photosOnScreen = photosOnScreen.concat(nextPhoto);
  nextPhoto = photos.slice(indexes[1], indexes[1] + 1);
  nextPhoto[0].shown();
  photosOnScreen = photosOnScreen.concat(nextPhoto);
  nextPhoto = photos.slice(indexes[2], indexes[2] + 1);
  nextPhoto[0].shown();
  photosOnScreen = photosOnScreen.concat(nextPhoto);

  return photosOnScreen;
}

function renderThreePhotos(threeImages) {
  if(count >= 25) {
    
  } else {
    var container = document.createElement('div');
    container.setAttribute('id', 'container');

    for (var i = 0; i < threeImages.length; i++){
      var img = document.createElement('img');
      img.setAttribute('src', threeImages[i].src);
      img.setAttribute('id', i);
      container.appendChild(img);
    }

    var curContainer = document.getElementById('container');
    if(curContainer) {
      document.body.removeChild(curContainer);
    }

    document.body.appendChild(container);

    for (i = 0; i < threeImages.length; i++){
      img = document.getElementById(i);
      img.addEventListener('click', threeImages[i].onClick.bind(threeImages[i]));
    }
    count++;
  }
}
renderThreePhotos(getThreeRandomPhotos());
