let timer;
let interval = 0;
let workTime = document.getElementById("work-time").value;
let restTime = document.getElementById("rest-time").value;
let numIntervals = document.getElementById("num-intervals").value;
let isResting = false;
let currentInterval = 1;

function displayTimer() {
  let minutes = Math.floor(interval / 60);
  let seconds = interval % 60;
  
  // Add leading zeros to minutes and seconds
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
          
  // Display the timer in the timer div
  document.getElementById("timer").innerHTML = "Interval " + currentInterval + ": " + minutes + ":" + seconds;
  
  // Switch between workout and rest time
  if (!isResting && interval >= workTime) {
    isResting = true;
    interval = 0;
    document.getElementById("timer").style.color = "red";
  } else if (isResting && interval >= restTime) {
    isResting = false;
    interval = 0;
    document.getElementById("timer").style.color = "black";
    currentInterval++;
  }
  
  // Stop the timer after the last interval
  if (currentInterval > numIntervals) {
    clearInterval(timer);
    document.getElementById("timer").innerHTML = "Workout Complete!";
  }
  
  interval++;
}

document.getElementById("start").addEventListener("click", function() {
  workTime = document.getElementById("work-time").value;
  restTime = document.getElementById("rest-time").value;
  numIntervals = document.getElementById("num-intervals").value;
  interval = 0;
  isResting = false;
  currentInterval = 1;
  document.getElementById("timer").style.color = "black";
  timer = setInterval(displayTimer, 1000);
});

document.getElementById("stop").addEventListener("click", function() {
  clearInterval(timer);
})