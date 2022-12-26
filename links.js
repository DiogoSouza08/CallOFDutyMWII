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
