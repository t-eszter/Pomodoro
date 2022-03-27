var newFocusValue = localStorage.getItem('newFocusValue');
var newRelaxValue = localStorage.getItem('newRelaxValue');

var saveButton = document.getElementById("saveButton");

saveButton.addEventListener("click", updateTime);

function updateTime(){
	var newFocusTime = document.getElementById("focus-length").value;
	newFocusTime.toString();
	newFocusTime = newFocusTime + ":00";
	var newRelaxTime = document.getElementById("relax-length").value;
	newRelaxTime.toString();
	newRelaxTime = newRelaxTime + ":00";
	document.getElementById('focustimer').textContent = newFocusTime;
	//document.getElementById('relaxtimer').textContent = newRelaxTime;
//	if (document.getElementById("focus-length")){
//		document.getElementById('focustimer').textContent = newFocusTime;};
//	if (document.getElementById("relax-length")){
//		document.getElementById('relaxtimer').textContent = newRelaxTime;};
	localStorage.setItem('newFocusValue', newFocusTime);
	localStorage.setItem('newRelaxValue', newRelaxTime);
	console.log(newFocusValue);
	console.log(newRelaxValue);
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



if (newFocusValue !== undefined && newFocusValue !== null){
	var focusNumber = newFocusValue.slice(0, 2);
	focusNumber = parseInt(focusNumber, 10);
	document.getElementById('focus-length_MP_cBdLN29i2').value = focusNumber;
}


if (newRelaxValue !== undefined && newRelaxValue !== null){
	var relaxNumber = newRelaxValue.slice(0, 2);
	relaxNumber = parseInt(relaxNumber, 10);
	document.getElementById('relax-length_MP_cBdLN29i2').value = relaxNumber;
}