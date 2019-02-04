
var last_btn = 'btn1';
var last_block = 'block1';

document.getElementById('block1').classList.add("info-block-visible");
document.getElementById('btn1').classList.add("btn-on");

document.getElementById('btn1').onclick = button_click;
document.getElementById('btn2').onclick = button_click;
document.getElementById('btn3').onclick = button_click;
document.getElementById('btn4').onclick = button_click;


function  button_click(e){

	e.target.classList.remove("basic");
	e.target.classList.add("btn-on");
	document.getElementById(last_block).classList.remove("info-block-visible");
	document.getElementById(last_btn).classList.remove("btn-on");
	document.getElementById(last_btn).classList.add("basic");

	switch(e.target.id){
		case 'btn1':
			document.getElementById('block1').classList.add("info-block-visible");
			last_btn = 'btn1';
			last_block = 'block1';
			break;
		case 'btn2':
			document.getElementById('block2').classList.add("info-block-visible");
			last_btn = 'btn2';
			last_block = 'block2';
			break;
		case 'btn3':
			document.getElementById('block3').classList.add("info-block-visible");
			last_btn = 'btn3';
			last_block = 'block3';
			break;
		case 'btn4':
			document.getElementById('block4').classList.add("info-block-visible");
			last_btn = 'btn4';
			last_block = 'block4';
			break;
	}
}

var img_arr = document.getElementsByClassName("blockimg");
var btn_arr = document.getElementsByClassName("block-button");
var last_targ = null;

for (var i = 0; i < img_arr.length; i++) {
    img_arr[i].addEventListener("mouseover", over_func);
	img_arr[i].addEventListener("mouseout", out_func);
}

for (var i = 0; i < btn_arr.length; i++) {
    btn_arr[i].addEventListener("mouseover", over_func1);
}

function over_func(e){
	e.currentTarget.style.opacity = "0.5";
	e.currentTarget.style.transition = "0.35s";
}

function over_func1(){
	last_targ.style.opacity = "0.5";
	last_targ.style.transition = "0.35s";
}

function out_func(e){
	e.currentTarget.style.opacity = "1";
	e.currentTarget.style.transition = "0.35s";
	last_targ = e.currentTarget;
}



window.onscroll = function(){stickyNav(); autoclose_fun()};

function stickyNav(){
	var navigationbar = document.getElementById("navigation_bar");
	var navbar_settop = navigationbar.offsetTop;
	if(window.pageYOffset > navbar_settop + 8){
		navigationbar.classList.add("sticky");
	}
	else{
		navigationbar.classList.remove("sticky");
	}
};

function autoclose_fun(){
	var mobnav = document.getElementById('mob_nav');
	var settop = mobnav.offsetTop;
	if(window.pageYOffset > settop + 300){
		mobnav.style.left = "-100%";
	}
};

document.getElementById('menu_mob').onclick = close_btn_fun;

function close_btn_fun(){
	var mobnav = document.getElementById('mob_nav');
	mobnav.style.left = "-100%";
};

document.getElementById('left-prefooter').onclick = pref_fun;

function pref_fun(e){
	if( window.innerWidth >= 1080){
		if(e.currentTarget.style.background === "white"){
			e.currentTarget.style.background = "#ff6600";
			e.currentTarget.style.color = "white";
			e.currentTarget.style.transition = "0.05s";
			e.currentTarget.style.cssText = "box-shadow: 0px -1px 70px -5px rgba(0,0,0,0.42);";
		}
		else{
			e.currentTarget.style.cssText = "box-shadow: 0px -1px 70px -5px rgba(0,0,0,0);";
			e.currentTarget.style.background = "white";
			e.currentTarget.style.color = "#ff6600";
			e.currentTarget.style.transition = "0.05s";
		}
		window.location='https://falanster.by/be/volunteers';
	}
};

document.getElementById('prefooter').onclick = mob_pref_fun;

function mob_pref_fun(e){
	if( window.innerWidth < 1080){
		e.currentTarget.style.cssText = "box-shadow: 0px -1px 70px -5px rgba(0,0,0,0);";
		
		window.location='https://falanster.by/be/volunteers';
	}
};

document.getElementById('hamburger').onclick = open_fun;

function open_fun(){
	document.getElementById('mob_nav').style.left = 0;
}

document.getElementById('close_button').onclick = close_fun;

function close_fun(){
	document.getElementById('mob_nav').style.left = "-100%";
}

document.getElementById('ivents_a').onclick = ivents_fun;

function ivents_fun(e){
	if(e.currentTarget.style.color == "#090909"){
		e.currentTarget.style.color = "#ff6600";
	}
	else{
		e.currentTarget.style.color = "#ff6600";
		e.currentTarget.style.border = "2px #ffffff";
	}
};

document.getElementById('recent_article1').onclick = article_click1;

function article_click1(){

	var art1 = document.getElementById('recent_article1')
	if(art1.style.color === ""){
		art1.style.color = "#ff6600";
	}
	else{
		art1.style.color = "#ff6600";
	}
};

document.getElementById('recent_article2').onclick = article_click2;

function article_click2(){

	var art1 = document.getElementById('recent_article2')
	if(art1.style.color === ""){
		art1.style.color = "#ff6600";
	}
	else{
		art1.style.color = "#ff6600";
	}
};

document.getElementById('recent_article3').onclick = article_click3;

function article_click3(){

	var art1 = document.getElementById('recent_article3')
	if(art1.style.color === ""){
		art1.style.color = "#ff6600";
	}
	else{
		art1.style.color = "#ff6600";
	}
};


// <-- start touchSlider -->

function touchSlider() {
	let initTouch;
	const content = document.querySelector('.content');

	const getButtons = () => {
		const blockButtons = document.querySelectorAll('.buttons > * > button');
		const blockButtonsToArray = Array.from(blockButtons);
		const activeButton = document.querySelector('.btn-on');

		blockButtonsToArray.forEach((item, index) => {
			if (item === activeButton) {
				activeButton.prev = blockButtonsToArray[index - 1];
				activeButton.next = blockButtonsToArray[index + 1];
				}
			});

		return activeButton;
	};

	content.addEventListener('touchstart', () => {
    const touchStartEvent = event.changedTouches[0];
		initTouch = touchStartEvent;
	});

	content.addEventListener('touchend', () => {
		const { prev, next } = getButtons();
		const touchEndEvent = event.changedTouches[0];
		const distance = Math.abs(initTouch.pageX - touchEndEvent.pageX);

    if (!!(next) && distance > 200 && initTouch.pageX > touchEndEvent.pageX) {
			next.click();
		} else if (!!(prev) && distance > 200 && initTouch.pageX < touchEndEvent.pageX) {
      	prev.click();
    	}
	});
}

touchSlider();

// <-- end touchSlider -->


// <-- the trick to correct sizing -->
const setCorrectViewPort = () => {
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);

	window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});
}

setCorrectViewPort();
// <-- the trick to correct sizing -->












