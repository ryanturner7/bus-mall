'use strict';

function Photo(name, filename){
  this.name = name;
  this.src = './img/' + filename;
  this.clickCount = 0;
  this.displayCount = 0;
}

var count = 0;
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

function getRandomIndex() {
  return Math.floor(Math.random() * photos.length);
}

function displayPhotos() {
  var el ;
  photos = photos.concat(photosOnSecondToLastScreen);
  photosOnSecondToLastScreen = photosOnPreviousScreen;
  photosOnPreviousScreen = photosOnScreen;
  photosOnScreen = [];
  for (var i = 0; i < 3; i++) {
    var nextPhoto = photos.splice(getRandomIndex(photos), 1);
    photosOnScreen = photosOnScreen.concat(nextPhoto);
    el = document.getElementById('' + i );

    el.src = nextPhoto[0].src;
    nextPhoto[0].displayed++;
  }
}

function renderThreePhotos(event) {
  photosOnScreen[event.target.id].clickCount++;
  displayPhotos();

  count++;
  if(count >= 25) {
    displayChart();
    displayChartTwo();
  }
}

function getChart(){
  var localChart = localStorage.getItem('chart');

  if(localChart) {
    localChart = JSON.parse(localChart);
    return localChart;
  }

  var chartLabel = [];
  var clicks = [];
  var displays = [];
  for (var i = 0; i <photos.length; i++) {
    chartLabel.push(photos[i].name);
    clicks.push(photos[i].clickCount);
    displays.push(photos[i].displayCount);
  }

  var chart = {
    chartLabel: chartLabel,
    clicks: clicks,
    displays: displays
  };

  try {
    localStorage.setItem('chart', JSON.stringify(chart));
  } catch(e) {
    console.error(e);
  }

  return chart;
}

function displayChart() {
  var chart = getChart();
  var canvas = document.getElementById('chart-canvas1');
  var ctx = canvas.getContext('2d');
  var data = {
    labels: chart.chartLabel,
    datasets:[{
      label: 'Clicks',
      backgroundColor:'#15D0A6',
      borderColor: '#002F32',
      borderWidth: 1,
      data: chart.clicks},
    {
      label: 'Displayed',
      backgroundColor: '#A5C77F',
      borderColor: '#002F32',
      borderWidth: 1,
      data: chart.displays,}
    ]
  };
  canvas.height = '500';
  canvas.width = '500';
  var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: data,
  });
}
function displayChartTwo() {
  var chartLabel = [];
  var percent= [];
  for (var i = 0; i <photos.length; i++) {
    chartLabel.push(photos[i].name);
    percent.push(Math.floor((photos[i].clickCount/photos[i].displayCount)*100));
  }
  var canvas = document.getElementById('chart-canvas2');
  var ctx = canvas.getContext('2d');
  Chart.defaults.global.defaultFontColor = '#000000';
  var data = {
    labels: chartLabel,
    datasets:[{
      label: '% of Clicks when Viewed',
      backgroundColor:'#002F32',
      borderColor: '#42826C',
      borderWidth: 1,
      data: percent,}
    ]
  };
  canvas.height = '500';
  canvas.width = '500';
  var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: data,
  });
}

var localChart = localStorage.getItem('chart');

if(localChart) {
  displayChart();
} else {
  displayPhotos();
  var photoClick = document.getElementById('image-container');
  photoClick.addEventListener('click', renderThreePhotos);
}
