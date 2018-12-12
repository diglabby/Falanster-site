
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

/*var img1 = document.getElementById("block1");
var img2 = document.getElementById("block2");
var img3 = document.getElementById("block3");
var img4 = document.getElementById("block4");

img1.addEventListener("mouseover", over_func1);
img1.addEventListener("mouseout", out_func1);
img2.addEventListener("mouseover", over_func2);
img2.addEventListener("mouseout", out_func2);
img3.addEventListener("mouseover", over_func3);
img3.addEventListener("mouseout", out_func3);
img4.addEventListener("mouseover", over_func4);
img4.addEventListener("mouseout", out_func4);

function over_func1(){
	img1.style.opacity = "0.5";
}

function out_func1(){
	img1.style.opacity = "1";
}

function over_func2(){
	img2.style.opacity = "0.5";
}

function out_func2(){
	img2.style.opacity = "1";
}


function over_func3(){
	img3.style.opacity = "0.5";
}

function out_func3(){
	img3.style.opacity = "1";
}

function over_func4(){
	img4.style.opacity = "0.5";
}

function out_func4(){
	img4.style.opacity = "1";
}*/

var img_arr = document.getElementsByClassName("blockimg");

for (var i = 0; i < img_arr.length; i++) {
    img_arr[i].addEventListener("mouseover", over_func);
	img_arr[i].addEventListener("mouseout", out_func);
}

function over_func(e){
	e.target.style.opacity = "0.5";
}

function out_func(e){
	e.target.style.opacity = "1";
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


document.getElementById('left-prefooter').onclick = pref_Fun;

function pref_Fun(e){
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












