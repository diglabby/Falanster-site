
var last_btn = 'btn1';
var last_block = '.projects__item1';

document.querySelector('.projects__item1').classList.add("projects__item--visible");
document.getElementById('btn1').classList.add("projects__button--active");

document.getElementById('btn1').onclick = button_click;
document.getElementById('btn2').onclick = button_click;
document.getElementById('btn3').onclick = button_click;
document.getElementById('btn4').onclick = button_click;


function  button_click(e){

	e.target.classList.remove("projects__button--basic");
	e.target.classList.add("projects__button--active");
	document.querySelector(last_block).classList.remove("projects__item--visible");
	document.getElementById(last_btn).classList.remove("projects__button--active");
	document.getElementById(last_btn).classList.add("projects__button--basic");

	switch(e.target.id){
		case 'btn1':
			document.querySelector('.projects__item1').classList.add("projects__item--visible");
			last_btn = 'btn1';
			last_block = '.projects__item1';
			break;
		case 'btn2':
			document.querySelector('.projects__item2').classList.add("projects__item--visible");
			last_btn = 'btn2';
			last_block = '.projects__item2';
			break;
		case 'btn3':
			document.querySelector('.projects__item3').classList.add("projects__item--visible");
			last_btn = 'btn3';
			last_block = '.projects__item3';
			break;
		case 'btn4':
			document.querySelector('.projects__item4').classList.add("projects__item--visible");
			last_btn = 'btn4';
			last_block = '.projects__item4';
			break;
	}
}

var img_arr = document.getElementsByClassName("projects__image");
var btn_arr = document.getElementsByClassName("projects__overlay-text");
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
	var navigationbar = document.querySelector(".header__nav");
	var navbar_settop = navigationbar.offsetTop;
	if(window.pageYOffset > navbar_settop + 8){
		navigationbar.classList.add("sticky");
	}
	else{
		navigationbar.classList.remove("sticky");
	}
};

function autoclose_fun(){
	var mobnav = document.querySelector('.mobile-menu');
	var settop = mobnav.offsetTop;
	if(window.pageYOffset > settop + 300){
		mobnav.style.left = "-100%";
	}
};

document.querySelector('.mobile-menu__links').onclick = close_btn_fun;

function close_btn_fun(){
	var mobnav = document.querySelector('.mobile-menu');
	mobnav.style.left = "-100%";
};

document.querySelector('.prefooter__left').onclick = pref_fun;

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

document.querySelector('.prefooter').onclick = mob_pref_fun;

function mob_pref_fun(e){
	if( window.innerWidth < 1080){
		e.currentTarget.style.cssText = "box-shadow: 0px -1px 70px -5px rgba(0,0,0,0);";
		
		window.location='https://falanster.by/be/volunteers';
	}
};

document.querySelector('.button-hamburger').onclick = open_fun;

function open_fun(){
	document.querySelector('.mobile-menu').style.left = 0;
}

document.querySelector('.button-close').onclick = close_fun;

function close_fun(){
	document.querySelector('.mobile-menu').style.left = "-100%";
}

document.querySelector('.blog__more-link').onclick = blog_fun;

function blog_fun(e){
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
	const content = document.querySelector('.projects__items');

	const getButtons = () => {
		const blockButtons = document.querySelectorAll('.projects__button');
		const blockButtonsToArray = Array.from(blockButtons);
		const activeButton = document.querySelector('.projects__button--active');

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
};

setCorrectViewPort();
// <-- the trick to correct sizing -->


// <-- validate email -->
const validateEmail = () => {
  const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  const input = document.querySelector('.footer__email-input').value;
  let validate = () => { return reg.test(input) ? true : false; }
  return validate();
};
// <-- validate email -->


// <-- subscribe form -->
const subscribeForm = () => {
  const subscribeBlock = document.querySelector('.footer__subscribe');
  const modal = document.querySelector('.modal');

  const close = (e) => {
    const classesList = ['modal modal__popup_visible', 'modal__close-button'];
    const eventCodes = ['Enter', 'Escape'];
    e.preventDefault();
    if ((classesList.includes(e.target.className)) || (eventCodes.includes(e.code))) {
      hideModal('modal__popup_visible');
    }
  };

  const showModal = async (className) => {
    await modal.classList.add(className);
    document.addEventListener('click', close);
    document.addEventListener('keydown', close);
  };

  const hideModal = (className) => {
    document.removeEventListener('click', close);
    document.removeEventListener('keydown', close);
    modal.classList.remove(className);
  };


  subscribeBlock.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.className === 'footer__subscribe-button' && validateEmail()) {
      showModal('modal__popup_visible');
    }
  });
};

subscribeForm();
// <-- end subscribe form -->












