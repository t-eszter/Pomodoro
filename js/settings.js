var saveButton = document.getElementById("saveButton");

saveButton.addEventListener("click", updateTime);

function updateTime(){
	var newTime = document.getElementById("focus-length").value;
	newTime.toString();
	newTime = newTime + ":00";
	document.getElementById('focustimer').textContent = newTime;
	localStorage.setItem('newTime', newTime);
	console.log(newTime);
}

var noAlert = document.getElementById("switch");
noAlert.addEventListener("click", mute);

function mute(){
	var alert = document.getElementById('focus-alert');
	if (alert.muted){
		alert.muted = false;}
	else{alert.muted=true}
};

var newsSwitch = document.getElementById("switch2");
newsSwitch.addEventListener("click", positiveNews);

function positiveNews(){
	var news = document.getElementById('news');
	if (newsSwitch.checked){
		news.style.visibility = "hidden";
  } else {
    news.style.visibility = "visible";
  }
}

var bookSwitch = document.getElementById("switch3");
bookSwitch.addEventListener("click", recommendedBook);

function recommendedBook(){
	var books = document.getElementById('books');
	if (bookSwitch.checked){
		books.style.visibility = "hidden";
  } else {
    books.style.visibility = "visible";
  }
}

var tipsSwitch = document.getElementById("switch4");
tipsSwitch.addEventListener("click", wellbeingTips);

function wellbeingTips(){
	var tips = document.getElementById('tips');
	if (tipsSwitch.checked){
		tips.style.visibility = "hidden";
  } else {
    tips.style.visibility = "visible";
  }
}