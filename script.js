
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

for (var i = 0; i < img_arr.length; i++) {
    img_arr[i].addEventListener("mouseover", over_func);
	img_arr[i].addEventListener("mouseout", out_func);
}

function over_func(e){
	e.target.style.opacity = "0.5";
	e.target.style.transition = "0.35s";
}

function out_func(e){
	e.target.style.opacity = "1";
	e.target.style.transition = "0.35s";
}


window.onscroll = stickyNav;

function stickyNav(){
	var navigationbar = document.getElementById("navigation_bar");
	var settop = navigationbar.offsetTop;
	if(window.pageYOffset > settop + 8){
		navigationbar.classList.add("sticky");
	}
	else{
		navigationbar.classList.remove("sticky");
	}
};


document.getElementById('left-prefooter').onclick = pref_fun;

function pref_fun(e){
	if( window.innerWidth >= 1080){
		if(e.currentTarget.style.background === "white"){
			e.currentTarget.style.background = "#ff6600";
			e.currentTarget.style.color = "white";
		}
		else{
			e.currentTarget.style.background = "white";
			e.currentTarget.style.color = "#ff6600";
		}
	}
	
	window.location='https://falanster.by/be/volunteers';
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






















