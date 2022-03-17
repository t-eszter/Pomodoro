var startButton = document.getElementById("startButton");

startButton.addEventListener("click", startTimer);


function startTimer() {
  var presentTime = document.getElementById('timer').textContent;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
  if(m<0){
    return
  }
  
	document.getElementById('timer').innerHTML = "<h3>" + m + ":" + s + "</h3>";
  setTimeout(startTimer, 1000);
  
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec < 0) {sec = "59"};
  return sec;
}


var saveButton = document.getElementById("saveButton");

saveButton.addEventListener("click", updateTime);

function updateTime(){
	var newTime = document.getElementById("focus-length").value;
	newTime.toString();
	newTime = newTime + ":00";
	document.getElementById('timer').textContent = newTime;
}

