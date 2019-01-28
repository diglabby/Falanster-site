
var last_btn = '.button-mob-1';
var last_block = '.info-block-1';

document.querySelector('.info-block-1').classList.add("info-block-visible");
document.querySelector('.button-mob-1').classList.add("btn-on");

document.querySelector('.button-mob-1').onclick = button_click;
document.querySelector('.button-mob-2').onclick = button_click;
document.querySelector('.button-mob-3').onclick = button_click;
document.querySelector('.button-mob-4').onclick = button_click;


function  button_click(e){

	e.target.classList.remove("basic");
	e.target.classList.add("btn-on");
	document.querySelector(last_block).classList.remove("info-block-visible");
	document.querySelector(last_btn).classList.remove("btn-on");
	document.querySelector(last_btn).classList.add("basic");

	if(e.target.classList.contains('button-mob-1')) {
		document.querySelector('.info-block-1').classList.add("info-block-visible");
		last_btn = '.button-mob-1';
		last_block = '.info-block-1';
	} else if (e.target.classList.contains('button-mob-2')) {
		document.querySelector('.info-block-2').classList.add("info-block-visible");
		last_btn = '.button-mob-2';
		last_block = '.info-block-2';
	} else if (e.target.classList.contains('button-mob-3')) {
		document.querySelector('.info-block-3').classList.add("info-block-visible");
		last_btn = '.button-mob-3';
		last_block = '.info-block-3';
	} else if (e.target.classList.contains('button-mob-4')) {
		document.querySelector('.info-block-4').classList.add("info-block-visible");
		last_btn = '.button-mob-4';
		last_block = '.info-block-4';
	}
}

var img_arr = document.getElementsByClassName("block-image");
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
	var navigationbar = document.querySelector(".navigation");
	var navbar_settop = navigationbar.offsetTop;
	if(window.pageYOffset > navbar_settop + 8){
		navigationbar.classList.add("sticky");
	}
	else{
		navigationbar.classList.remove("sticky");
	}
};

function autoclose_fun(){
	var mobnav = document.querySelector('.mob_nav');
	var settop = mobnav.offsetTop;
	if(window.pageYOffset > settop + 300){
		mobnav.style.left = "-100%";
	}
};

document.querySelector('.menu_mob').onclick = close_btn_fun;

function close_btn_fun(){
	var mobnav = document.querySelector('.mob_nav');
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

document.querySelector('.hamburger_button').onclick = open_fun;

function open_fun(){
	document.querySelector('.mob_nav').style.left = 0;
}

document.querySelector('.close_button').onclick = close_fun;

function close_fun(){
	document.querySelector('.mob_nav').style.left = "-100%";
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












