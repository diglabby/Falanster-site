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


document.querySelector('.button-hamburger').onclick = open_fun;

function open_fun(){
	document.querySelector('.mobile-menu').style.left = 0;
}

document.querySelector('.button-close').onclick = close_fun;

function close_fun(){
	document.querySelector('.mobile-menu').style.left = "-100%";
}


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



// <--  scroll into view -->
const scrollDownBtn = document.querySelector('.btn-scroll');
if (!!scrollDownBtn) {
  scrollDownBtn.addEventListener('click', (e) => {
    e.preventDefault();
    scrollDownBtn.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
  });
}
// <--  scroll into view -->


// <--  slice content -->
const slicer = () => {
  const containerInnerModule = document.querySelectorAll('.container-inner__module');

  const listOfSettings = {
    // desktop ======================
    desktop: {
      titleBlockScrollHeight: 94,
      textBlockScrollHeight: 163,
    },
    // mobile innerHeight ===========
    2100: {
      titleBlockScrollHeight: 320,
      textBlockScrollHeight: 700,
    },
    1900: {
      titleBlockScrollHeight: 250,
      textBlockScrollHeight: 550,
    },
    1700: {
      titleBlockScrollHeight: 250,
      textBlockScrollHeight: 450,
    },
    1400: {
      titleBlockScrollHeight: 250,
      textBlockScrollHeight: 370,
    },
    default: {
      titleBlockScrollHeight: 220,
      textBlockScrollHeight: 270,
    },
  };

  const deviceSettings = {};

  if (window.innerWidth > 1079) {
      deviceSettings.titleBlockScrollHeight = listOfSettings.desktop.titleBlockScrollHeight;
      deviceSettings.textBlockScrollHeight = listOfSettings.desktop.textBlockScrollHeight;
  } else if (window.innerHeight > 2100) {
      deviceSettings.titleBlockScrollHeight = listOfSettings[2100].titleBlockScrollHeight;
      deviceSettings.textBlockScrollHeight = listOfSettings[2100].textBlockScrollHeight;
  } else if (window.innerHeight > 1900) {
      deviceSettings.titleBlockScrollHeight = listOfSettings[1900].titleBlockScrollHeight;
      deviceSettings.textBlockScrollHeight = listOfSettings[1900].textBlockScrollHeight;
  } else if (window.innerHeight > 1700) {
      deviceSettings.titleBlockScrollHeight = listOfSettings[1700].titleBlockScrollHeight;
      deviceSettings.textBlockScrollHeight = listOfSettings[1700].textBlockScrollHeight;
  } else if (window.innerHeight > 1400) {
      deviceSettings.titleBlockScrollHeight = listOfSettings[1400].titleBlockScrollHeight;
      deviceSettings.textBlockScrollHeight = listOfSettings[1400].textBlockScrollHeight;
  } else {
      deviceSettings.titleBlockScrollHeight = listOfSettings.default.titleBlockScrollHeight;
      deviceSettings.textBlockScrollHeight = listOfSettings.default.textBlockScrollHeight;
  }

  if (!!containerInnerModule) {
    const {titleBlockScrollHeight, textBlockScrollHeight} = deviceSettings;

    [].map.call(containerInnerModule, (container) => {
      const titleBlock = container.children[0];

      function checkHeight() {
        const textBlock = container.children[2];
        if (textBlock && titleBlock && titleBlock.scrollHeight < titleBlockScrollHeight) {
          titleBlock.scrollHeight + textBlock.scrollHeight > textBlockScrollHeight ? sliceContent(textBlock) : false;
        } else if (textBlock && titleBlock && titleBlock.scrollHeight >= titleBlockScrollHeight) {
          sliceContent(titleBlock);
        }
      };

      function sliceContent(textBlock) {
        const content = textBlock.innerText.split(' ');
        const newContent = content.slice(content[content.length - 1], -1);
        textBlock.innerText = (newContent.join(' ') + '...').replace('....', '...');
        checkHeight();
      }

      checkHeight();
    });
  }
};

slicer();
window.addEventListener('resize', slicer);
// <--  slice content -->

// <--  fix banner__date-block  -->
const bannerDateBlock = document.querySelector('.banner__date-block');
const setPositionOfBannerDateBlock = () => {
  if (!!bannerDateBlock) {
    const bannerDateBlockOffsetTop = bannerDateBlock.offsetTop;
    bannerDateBlock.style.top = `${bannerDateBlockOffsetTop}px`;
  }
};
setPositionOfBannerDateBlock();

if (!!bannerDateBlock) {
  window.addEventListener('resize', () => {
    bannerDateBlock.removeAttribute('style');
    setPositionOfBannerDateBlock();
  });
}
// <--  fix banner__date-block -->