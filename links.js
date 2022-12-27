function trailer(){
    window.open("https://www.youtube.com/watch?v=r72GP1PIZa0", '_blank');
  }

function comprar(){
    window.open("https://www.callofduty.com/br/pt/modernwarfare2/buy", '_blank');
  }
 
  var video = document.getElementById("mp4");
var spinner = document.getElementById("spinner");
var delayMillis = 4000;
var spinnerIsHere = 1;
video.volume = 0;

var playVid = setTimeout(function() {
  if(spinnerIsHere == 1) {
    // Delete element DOM
    // spinner.parentNode.removeChild(spinner);
    spinner.style.visibility = "hidden";
    spinnerIsHere = 0;
  }
  video.play();
}, delayMillis);

video.addEventListener("click", function( event ) {
  if(video.paused) {
    if(spinnerIsHere == 1) {
      // Delete element DOM
      // spinner.parentNode.removeChild(spinner);
      spinner.style.visibility = "hidden";
      spinnerIsHere = 0;
    }
    clearTimeout(playVid);
    video.play();
  } else {
    video.pause();
    if(spinnerIsHere == 0) {
      spinner.style.visibility = "visible";
      spinnerIsHere = 1;
    }
  }
}, false);

function trailerpass(){
  window.open("https://www.youtube.com/watch?v=N3QHb-202gg", '_blank');
}

function comprarpass(){
  window.open("https://www.callofduty.com/blog/2022/11/call-of-duty-modern-warfare-II-warzone-2-0-battle-pass-bundles-rewards", '_blank');
}

let slidePosition = 0;
const slides = document.getElementsByClassName("carousel__item");
const totalSlides = slides.length;


document.getElementById("carousel__btn--next")
.addEventListener("click", function(){
    moveToNextSlide();
});
document.getElementById("carousel__btn--prev")
.addEventListener("click", function(){
    moveToPrevSlide();
});

function updateSlidesPosition(){
    for(let slide of slides){
        slide.classList.remove("carousel__item--visible");
        slide.classList.add("carousel__item--hidden");
    }
    slides[slidePosition].classList.add("carousel__item--visible");
}

function moveToNextSlide(){
    
    if (slidePosition === totalSlides -1){
        slidePosition = 0;
    } else {
        slidePosition++;
    }
    updateSlidesPosition();
}

function moveToPrevSlide(){
   
    if (slidePosition === 0){
    // totalSlides -1, if you wan't infinite carousel effect to both ways
        slidePosition = 0;  
    } else {
        slidePosition--;
    }
    updateSlidesPosition();
}

/* user defined variables */
var timeOnSlide = 3, 		
    // the time each image will remain static on the screen, measured in seconds
timeBetweenSlides = 1, 	
    // the time taken to transition between images, measured in seconds

// test if the browser supports animation, and if it needs a vendor prefix to do so
    animationstring = 'animation',
    animation = false,
    keyframeprefix = '',
    domPrefixes = 'Webkit Moz O Khtml'.split(' '), 
    // array of possible vendor prefixes
    pfx  = '',
    slidy = document.getElementById("slidy"); 
if (slidy.style.animationName !== undefined) { animation = true; } 
// browser supports keyframe animation w/o prefixes

if( animation === false ) {
  for( var i = 0; i < domPrefixes.length; i++ ) {
    if( slidy.style[ domPrefixes[i] + 'AnimationName' ] !== undefined ) {
      pfx = domPrefixes[ i ];
      animationstring = pfx + 'Animation';
      keyframeprefix = '-' + pfx.toLowerCase() + '-';
      animation = true;
      break;
    }
  }
}

if( animation === false ) {
  // animate in JavaScript fallback
} else {
  var images = slidy.getElementsByTagName("img"),
      firstImg = images[0], 
      // get the first image inside the "slidy" element.
      imgWrap = firstImg.cloneNode(false);  // copy it.
  slidy.appendChild(imgWrap); // add the clone to the end of the images
  var imgCount = images.length, // count the number of images in the slide, including the new cloned element
      totalTime = (timeOnSlide + timeBetweenSlides) * (imgCount - 1), // calculate the total length of the animation by multiplying the number of _actual_ images by the amount of time for both static display of each image and motion between them
      slideRatio = (timeOnSlide / totalTime)*100, // determine the percentage of time an induvidual image is held static during the animation
      moveRatio = (timeBetweenSlides / totalTime)*100, // determine the percentage of time for an individual movement
      basePercentage = 100/imgCount, // work out how wide each image should be in the slidy, as a percentage.
      position = 0, // set the initial position of the slidy element
      css = document.createElement("style"); // start marking a new style sheet
  css.type = "text/css";
  css.innerHTML += "#slidy { text-align: left; margin: 0; font-size: 0; position: relative; width: " + (imgCount * 100) + "%;  }\n"; // set the width for the slidy container
  css.innerHTML += "#slidy img { float: left; width: " + basePercentage + "%; }\n";
  css.innerHTML += "@"+keyframeprefix+"keyframes slidy {\n"; 
  for (i=0;i<(imgCount-1); i++) { // 
    position+= slideRatio; // make the keyframe the position of the image
    css.innerHTML += position+"% { left: -"+(i * 100)+"%; }\n";
    position += moveRatio; // make the postion for the _next_ slide
    css.innerHTML += position+"% { left: -"+((i+1) * 100)+"%; }\n";
}
  css.innerHTML += "}\n";
  css.innerHTML += "#slidy { left: 0%; "+keyframeprefix+"transform: translate3d(0,0,0); "+keyframeprefix+"animation: "+totalTime+"s slidy infinite; }\n"; // call on the completed keyframe animation sequence
document.body.appendChild(css); // add the new stylesheet to the end of the document
}
