function startTimer() {
    var presentTime = document.getElementById('relaxtimer').textContent;
    var timeArray = presentTime.split(/[:]+/);
    var m = timeArray[0];
    var s = checkSecond((timeArray[1] - 1));
    if (s == 59) { m = m - 1 }
      if (m < 0) {
        return
    }
    document.getElementById('relaxtimer').textContent = m + ":" + s;
    setTimeout(startTimer, 1000);

}

function checkSecond(sec) {
    if (sec < 10 && sec >= 0) { sec = "0" + sec };
    if (sec < 0) { sec = "59" };
    return sec;
}


startTimer();

var saveButton = document.getElementById("saveButton");

saveButton.addEventListener("click", updateTime);

function updateTime() {
    var newTime = document.getElementById("relax-length").value;
    newTime.toString();
    newTime = newTime + ":00";
    document.getElementById('relaxtimer').textContent = newTime;
}