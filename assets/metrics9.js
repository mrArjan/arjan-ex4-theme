const thumb = document.querySelector('.thumb1');
const thumbIndicator = document.querySelector('.thumb1 .thumb-indicator');
const sliderContainer = document.querySelector('.slider-container');
const trackProgress = document.querySelector('.track-progress');
const sliderContainerStart = sliderContainer.offsetLeft;
const sliderContainerWidth = sliderContainer.offsetWidth;
var translate;
var dragging = false;
var percentage = 0;

document.addEventListener('mousedown', function(e) {
  if (e.target.classList.contains('thumb-indicator')) {
    dragging = true;
    thumbIndicator.classList.add('focus');  
  }
});

document.addEventListener('mousemove', function(e) {

  if (dragging) {
      console.log('moving', e)
    if (e.clientX < sliderContainerStart) {
      translate = 0;
    } else if (e.clientX > sliderContainerWidth + sliderContainerStart) {
      translate = sliderContainerWidth;
    } else {
      translate =  e.clientX - sliderContainer.offsetLeft;  
    }
    
    thumb.style.transform = 'translate(-50%) translate(' + translate + 'px)';
    trackProgress.style.transform = 'scaleX(' + translate / sliderContainerWidth +  ')'
  }
});

function setPercentage() {
   thumb.style.transform = 'translate(-50%) translate(' + percentage/100 * sliderContainerWidth + 'px)';
  trackProgress.style.transform = 'scaleX(' + percentage/100 +  ')';
}

function init() {
 setPercentage(); 
}

init();

document.addEventListener('mouseup', function(e) {
  dragging = false;
  thumbIndicator.classList.remove('focus');

});