    document.getElementById("reveal-button").addEventListener("click", function() {
      document.getElementById("revealed-content").style.display = "block";
      document.querySelector(".warning").style.display = "none";
      const audio = document.querySelector("#audio");
     // audio.currentTime = 15; // Start playing from 2 minutes into the audio file
  audio.play();
  audio.volume = 0.5;
  audio.play();
  //setTimeout(function () {
    //audio.pause();
  //}, 19800);

        // Add a timer in the end of the typing animation
        function countdown() {
  var timeLeft = 5;
  var timer = setInterval(function () {
    document.querySelector("#timer").innerHTML = timeLeft;
    timeLeft--;
    if (timeLeft < 0) {
      clearInterval(timer);
    }
  }, 1000);

}
setTimeout(countdown, 3500);
setTimeout(function () {
    document.querySelector("#timer").style.display = "none"
     document.querySelector("#revealed-content").style.display = "none";
    document.querySelector(".warning").style.display = "none";
    document.querySelector("audio").style.display = "none";
    document.querySelector(".line-1").style.display = "none";
    
    // Show new content
    document.querySelector("#new-content").style.display = "block";
  }, 9500);
  
});

