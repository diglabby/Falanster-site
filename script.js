
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

var img = document.getElementById("block-image");

img.addEventListener("mouseover", over_func);
img.addEventListener("mouseout", out_func);

function over_func(){
	img.style.opacity = "0.5";
}

function out_func(){
	img.style.opacity = "1";
}

























