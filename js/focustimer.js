var startButton = document.getElementById("startButton");

startButton.addEventListener("click", startTimer);


function startTimer() {
  var presentTime = document.getElementById('focustimer').textContent;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
  if(m<0){
	document.getElementById('focus-alert').play();
    return
  }
	document.getElementById('focustimer').textContent = m + ":" + s;
  setTimeout(startTimer, 1000);
  
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec};
  if (sec < 0) {sec = "59"};
  return sec;
}


var saveButton = document.getElementById("saveButton");

saveButton.addEventListener("click", updateTime);

function updateTime(){
	var newTime = document.getElementById("focus-length").value;
	newTime.toString();
	newTime = newTime + ":00";
	document.getElementById('focustimer').textContent = newTime;
}

var noAlert = document.getElementById("switch");
noAlert.addEventListener("click", mute);

function mute(){
	var alert = document.getElementById('focus-alert');
	if (alert.muted){
		alert.muted = false;}
	else{alert.muted=true}
};


