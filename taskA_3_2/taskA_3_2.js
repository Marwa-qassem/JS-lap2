var imgNumber = 0;
var path = ["1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg","5.jpg","6.jpg"
];
var numberOfImg = path.length;
var timer = null;

function slide() {
  imgNumber = (imgNumber + 1) % path.length;
  document.getElementById("imgSlideshow").src = path[imgNumber];
}

function setTimer() {
 
    timer = setInterval(slide, 2000);
  
  return false;
}

function pause(){
 if (timer) {
    clearInterval(timer);
    timer = null;
 }    
}




function previousImage() {
  --imgNumber;
  if (imgNumber < 0) {
    imgNumber = numberOfImg - 1;
  }
  document.getElementById("imgSlideshow").src = path[imgNumber];
  changeCounter(imgNumber + 1, numberOfImg);
  return false;
}

function nextImage() {
  ++imgNumber;
  if (imgNumber > (numberOfImg - 1)) {
    imgNumber = 0;
  }
  document.getElementById("imgSlideshow").src = path[imgNumber];
  return false;
}
