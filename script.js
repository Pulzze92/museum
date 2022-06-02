let inputFieldBasic = document.querySelector('.input__basic');
let inputFieldSenior = document.querySelector('.input__senior');
let minusBasic = document.querySelector('.button__minus__basic');
let minusSenior = document.querySelector('.button__minus__senior');
let plusBasic = document.querySelector('.button__plus__basic');
let plusSenior = document.querySelector('.button__plus__senior');
let totalSum = document.querySelector('.calculated__sum');


minusBasic.onclick = () => {
    let e = parseInt(inputFieldBasic.value);
    if (e <= 0) { return inputFieldBasic}
    e -= 1;
    inputFieldBasic.value = e;
}

plusBasic.onclick = () => {
    let e = parseInt(inputFieldBasic.value);
    if (e >= 20) {return inputFieldBasic}
    e += 1;
    inputFieldBasic.value = e;
}

minusSenior.onclick = () => {
    let e = parseInt(inputFieldSenior.value);
    if (e <= 0) { return inputFieldSenior}
    e -= 1;
    inputFieldSenior.value = e;
}

plusSenior.onclick = () => {
    let e = parseInt(inputFieldSenior.value);
    if (e >= 20) {return inputFieldSenior}
    e += 1;
    inputFieldSenior.value = e;
}

let buttonPopup = document.querySelector('.buy__ticket');
let popup = document.querySelector('.popup');
let closeButton = document.querySelector('.close');

buttonPopup.onclick = () => {
    popup.classList.toggle('popup__active');
}

closeButton.onclick = () => {
    popup.classList.toggle('popup__active');
}

let bookBtn = document.querySelectorAll('.book');

bookBtn.onclick = (e) => {
    const x = e.clientX;
    const y = e.clientY;

    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;

    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;

    const circle = document.createElement('span');
        circle.classList.add('circle');
        circle.style.top = yInside + 'px';
        circle.style.left = xInside + 'px';

        this.appendChild(circle);
        setTimeout(() => circle.remove(), 500);
}
    
let first = document.querySelector('.first__column__gallery');
let second = document.querySelector('.second__column__art');
let third = document.querySelector('.third__column__art');
let gallery = document.querySelector('.galery');
let arr1 = [];
let arr2 = [];
let arr3 = [];
first.childNodes.forEach(el => {if(el.src != undefined) {arr1.push(el.src)} else {}});
second.childNodes.forEach(el => {if(el.src != undefined) {arr2.push(el.src)} else {}});
third.childNodes.forEach(el => {if(el.src != undefined) {arr3.push(el.src)} else {}});
let array = arr1.concat(arr2, arr3);
let randomArr = [];

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

shuffle(array);

window.onload = function () {
        let i = Math.floor(Math.random() * 12);
        
        first.childNodes[1].src = array[1];
        first.childNodes[2].src = array[2];
        first.childNodes[3].src = array[3];
        second.childNodes[1].src = array[4];
        second.childNodes[2].src = array[5];
        second.childNodes[3].src = array[6];
        third.childNodes[1].src = array[7];
        third.childNodes[2].src = array[8];
        third.childNodes[3].src = array[9];
    }



// slider welcome section

let slideView = document.getElementById('karusel').offsetWidth;
let arrLeft = document.getElementById('prev');
let arrRight = document.getElementById('next');
let slider = document.getElementById('carousel');
let indicator = document.querySelectorAll('.indicator');
let current = 0;
let count = document.querySelector('.quantity__current');
let sliders = [];
let slides = document.querySelectorAll('.slide');

indicator[current].style.filter =  'invert(50%) sepia(8) saturate(9) hue-rotate(10deg)';
arrRight.addEventListener('click', function () {
    indicator[current].style.filter = 'none';
    
    if(picWasMoved) {
        current = currentCube;
        indicator[currentCube].style.filter = 'none';
        picWasMoved = false;
    }
   if (current < 4) {
       current++;
   } else {
       current = 0;
   }
   slider.style.left = -current * slideView + 'px';
   count.innerHTML = '0' + parseInt(current + 1);
   indicator[current].style.filter =  'invert(50%) sepia(8) saturate(9) hue-rotate(10deg)';
});

indicator[current].style.filter = 'invert(50%) sepia(8) saturate(9) hue-rotate(10deg)';
arrLeft.addEventListener('click', function () {
    indicator[current].style.filter = 'none';
    if(picWasMoved) {
        current = currentCube;
        indicator[currentCube].style.filter = 'none';
        picWasMoved = false;
    }
    if (current > 0) {
        current--;
    } else {
        current = 4;
    }
    slider.style.left = -current * slideView + 'px';
    count.innerHTML = '0' + parseInt(current + 1);
    indicator[current].style.filter =  'invert(50%) sepia(8) saturate(9) hue-rotate(10deg)';
    
    return current;
});


let indicatorCube = document.querySelectorAll('#cube');

let currentCube = 0;
let next = 0;
let picWasMoved = false;

function cubesClick() {
    
indicatorCube.forEach((el, i) => {
    el.addEventListener('click', function() {
        picWasMoved = true;
        indicator[currentCube].style.filter = 'none';
        currentCube = i;
        indicator[current].style.filter = 'none'
        slider.style.left = -i * slideView + 'px';
        count.innerHTML = '0' + parseInt(i + 1);
        indicator[i].style.filter = 'invert(50%) sepia(8) saturate(9) hue-rotate(10deg)';
        return currentCube;
    })
})
}
cubesClick();


let swipeScanner = (slider) => {
    let surface = slider;
    let startX = 0;
    let startY = 0;
    let distX = 0;
    let dist = 0;

    let startTime = 0;
    let elapsedTime = 0;

    let distance = 80;
    let restr = 100;
    let allowedTime = 1000;

    surface.addEventListener('mousedown', function(el) {
        dist = 0;
        startX = el.pageX;
        startY = el.pageY;
        startTime = new Date().getTime();
        el.preventDefault();
    });

    surface.addEventListener('mouseup', function(el) {
        distX = el.pageX - startX;
        distY = el.pageY - startY;
        elapsedTime = new Date().getTime() - startTime;

        if (elapsedTime <= allowedTime) {
            if (Math.abs(distX) >= distance && Math.abs(distY) <= restr) {
                if (distX < 0) {
                    indicator[current].style.filter = 'none';
                    if (current < 4) {
                        current++;
                    } else {
                        current = 0;
                    }
                    slider.style.left = -current * slideView + 'px';
                    indicator[current].style.filter =  'invert(50%) sepia(8) saturate(9) hue-rotate(10deg)';
                    count.innerHTML = '0' + parseInt(current + 1);
                }
                if (distX > 0) {
                    indicator[current].style.filter = 'none';
                    if (current > 0) {
                        current--;
                    } else {
                        current = 4;
                    }
                    slider.style.left = -current * slideView + 'px';
                    indicator[current].style.filter =  'invert(50%) sepia(8) saturate(9) hue-rotate(10deg)';
                    count.innerHTML = '0' + parseInt(current + 1);   
                }
            }
            
        }
        el.preventDefault();
    })
}

swipeScanner(slider);

//swiper

let swiper = document.querySelector('.swiper input');
let artChange = document.querySelector('.explore__light');
let line = document.querySelector('.swiper .line');

swiper.oninput = function () {
    let value = swiper.value;
    line.style.left = value + '%';
    artChange.style.width = value + '%';
}

//video slider

let videoView = document.querySelector('.swiper-wrapper').offsetWidth;
let videoPrev = document.querySelector('.quote__left');
let videoNext = document.querySelector('.quote__right');
let videoSlider = document.querySelector('.swiper-wrapper');
let currentVideoSlide = document.querySelectorAll('.video-clider-circle');
let current1 = 0;
let currentForMain = 0;
let ownVideo = document.querySelector('.player__video');
let arrVideo = ['/pulzze92-JSFE2021Q3/museum/video/Exposition_-de_la_Renaissance.mp4', '/pulzze92-JSFE2021Q3/museum/video/Au_Louvre_!_La_Vénus_de_Milo.mp4', '/pulzze92-JSFE2021Q3/museum/video/Promenade_dans_les_collections.mp4', '/pulzze92-JSFE2021Q3/museum/video/The_Louvre__800_years_of_history.mp4','/pulzze92-JSFE2021Q3/museum/video/Le_Louvre4.mp4'];
let arrPosters = ['/pulzze92-JSFE2021Q3/museum/img/video/placeholders/1.png', '/pulzze92-JSFE2021Q3/museum/img/video/placeholders/2.png', '/pulzze92-JSFE2021Q3/museum/img/video/placeholders/3.png', '/pulzze92-JSFE2021Q3/museum/img/video/placeholders/4.png', '/pulzze92-JSFE2021Q3/museum/img/video/placeholders/5.png'];
var tag = document.createElement('script');
let flag = false;
let playOnVideo = document.querySelector('.play__on__video');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      var arr10 = [];
      function onYouTubeIframeAPIReady() {
        arr10[arr10.length] = new YT.Player('player1', {
          height: '254',
          width: '452',
          videoId: 'aWmJ5DgyWPI',
          events: {
            'onStateChange': onPlayerStateChange
          }
        });
        arr10[arr10.length] = new YT.Player('player2', {
            height: '254',
            width: '452',
            videoId: 'Vi5D6FKhRmo',
            events: {
              'onStateChange': onPlayerStateChange
            }
          });
          arr10[arr10.length] = new YT.Player('player3', {
            height: '254',
            width: '452',
            videoId: 'NOhDysLnTvY',
            events: {
              'onStateChange': onPlayerStateChange
            }
          });
          arr10[arr10.length] = new YT.Player('player4', {
            height: '254',
            width: '452',
            videoId: 'JkPcA8dngB4',
            events: {
              'onStateChange': onPlayerStateChange
            }
          });
          arr10[arr10.length] = new YT.Player('player5', {
            height: '254',
            width: '452',
            videoId: 'U-DOGB4iVBM',
            events: {
              'onStateChange': onPlayerStateChange
            }
          });
          arr10[arr10.length] = new YT.Player('player6', {
            height: '254',
            width: '452',
            videoId: 'hmXFz7coOMQ',
            events: {
              'onStateChange': onPlayerStateChange
            }
          });
          arr10[arr10.length] = new YT.Player('player7', {
            height: '254',
            width: '452',
            videoId: 'q6L9CnjsVyw',
            events: {
              'onStateChange': onPlayerStateChange
            }
          });
      }

      function onPlayerReady(event) {
        event.target.playVideo();
      }

      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == 1) {
            for (var i = 0; i < arr10.length; i++) {
                if (arr10[i]!=event.target) {
                    //} else {
                            arr10[i].pauseVideo();
                } else {
                    mainVideo.pause();
                }
                }
            }
        }

currentVideoSlide[0].style.filter =  'invert(50%) sepia(8) saturate(9) hue-rotate(10deg)';
videoNext.addEventListener('click', function () {

    toggle.style.background = "url('/pulzze92-JSFE2021Q3/museum/img/video/play.svg')";
    progressBar.style.flexBasis = '0%';
    togglePlay();

    currentForMain >= 4 ? currentForMain = 0 : currentForMain++;
    ownVideo.src = arrVideo[currentForMain];
    ownVideo.poster = arrPosters[currentForMain];
    currentVideoSlide[current1].style.filter = 'none';
    currentVideoSlide[currentVideo].style.filter = 'none';
    if (wasMoved) {
        current1 = currentVideo;
        wasMoved = false;
    }
   if (current1 < 4) {
       current1++;
   } else {
       current1 = 0;
   }
   currentForMain = current1;
   arr10.forEach(el => el.stopVideo());
   currentVideoSlide[0].style.filter = 'none';
   videoSlider.style.left = -current1 * videoView /3  + 'px';
   
   currentVideoSlide[current1].style.filter =  'invert(50%) sepia(8) saturate(9) hue-rotate(10deg)';
   
});

videoPrev.addEventListener('click', function () {

    toggle.style.background = "url('/pulzze92-JSFE2021Q3/museum/img/video/play.svg')";
    progressBar.style.flexBasis = '0%';
    togglePlay();
    
    currentForMain <= 0 ? currentForMain = 4 : currentForMain--;
    ownVideo.src = arrVideo[currentForMain];
    ownVideo.poster = arrPosters[currentForMain];
    currentVideoSlide[current1].style.filter = 'none';
    currentVideoSlide[currentVideo].style.filter = 'none';
    if (wasMoved) {
        current1 = currentVideo;
        wasMoved = false;
    }
   if (current1 > 0) {
       current1--;
   } else {
       current1 = 4;
   }
   currentForMain = current1;
   arr10.forEach(el => el.stopVideo());
   videoSlider.style.left = -current1 * videoView / 3 + 'px';
   currentVideoSlide[current1].style.filter =  'invert(50%) sepia(8) saturate(9) hue-rotate(10deg)';
});

currentVideoSlide.forEach((el, i) => {
    el.addEventListener('click', function() {
        arr10.forEach(el => el.stopVideo());
        videoSlider.style.left = -i * videoView / 3 + 'px';
        
    })
})
let currentVideo = 0;
let wasMoved = false;

function cubesVideoClick() {
    
    currentVideoSlide.forEach((el, i) => {
        el.addEventListener('click', function() {
            toggle.style.background = "url('/pulzze92-JSFE2021Q3/museum/img/video/play.svg')";
            togglePlay();
            progressBar.style.flexBasis = '0%';
            wasMoved = true;
            if(i <= 4) {currentForMain = i};
            ownVideo.src = arrVideo[currentForMain];
            ownVideo.poster = arrPosters[currentForMain];
            currentVideoSlide[currentVideo].style.filter = 'none';
            currentVideo = i;
            currentVideoSlide[current1].style.filter = 'none';
            
            videoSlider.style.left = -i * videoView / 3 + 'px';
            currentVideoSlide[i].style.filter = 'invert(50%) sepia(8) saturate(9) hue-rotate(10deg)';
            // indicator[currentVideo].style.filter = 'none';
            currentForMain = currentVideo;
            
            return currentVideo;
        })
    })
    }
    cubesVideoClick();

//own video

const mainPlayer = document.querySelector('.main__player');
const mainVideo = mainPlayer.querySelector('.viewer');
const progress = mainPlayer.querySelector('.progress');
const progressBar = mainPlayer.querySelector('.progress__filled');
const toggle = mainPlayer.querySelector('.toggle');
const volume = mainPlayer.querySelector('.player__slider');
const volumeIcon = mainPlayer.querySelector('.volume__icon');
let curVol = volume.value;
let arrKeysPushed = [];
const accelerationVideo = ['16', '188'];
const decelerationVideo = ['16', '190'];


document.addEventListener('keydown', function(e) {
    let hasChange = false;
    const key = e.keyCode;
    arrKeysPushed.push(key);

    if(accelerationVideo.length === arrKeysPushed.length) {
        if(accelerationVideo[0] == arrKeysPushed[0]) {
            if(accelerationVideo[1] == arrKeysPushed[1]) {
                mainVideo.playbackRate = '2.0'; 
                console.log('acc');
            }
        }
    }

    
    if(decelerationVideo.length === arrKeysPushed.length) {
        if(decelerationVideo[0] == arrKeysPushed[0]) {
            if(decelerationVideo[1] == arrKeysPushed[1]) {
                mainVideo.playbackRate = '0.5'; 
                console.log('dec');
            }
            
        }
    }

    if(key == '32') {
        togglePlay();
        e.preventDefault();
    }
    if(key == '77') {
        noVolume();
        noVolumeShow();
    }
    if(key == '70') {
        fullScreenOn();
    }
});

function noVolumeShow() {
    if(mainVideo.volume == 0 && volume.value == 0) {
        volumeIcon.style.content = "url('/pulzze92-JSFE2021Q3/museum/img/icons/no__volume.svg')";
    } else {
        volumeIcon.style.content = "url('/pulzze92-JSFE2021Q3/museum/img/icons/panel_volume.svg')";
    }
}

function noVolume() {
    if(volume.value != 0) {
        mainVideo.volume = 0;
        volume.value = 0;
        volumeIcon.style.content = "url('/pulzze92-JSFE2021Q3/museum/img/icons/no__volume.svg')";
    } else {
        mainVideo.volume = curVol;
        volume.value = curVol;
        volumeIcon.style.content = "url('/pulzze92-JSFE2021Q3/museum/img/icons/panel_volume.svg')";
    }
}
volume.addEventListener('change', noVolumeShow); 

volumeIcon.addEventListener('click', noVolume); 

let srcLinks = ['https://www.youtube.com/embed/aWmJ5DgyWPI', 'https://www.youtube.com/embed/Vi5D6FKhRmo', 'https://www.youtube.com/embed/NOhDysLnTvY', 'https://www.youtube.com/embed/JkPcA8dngB4', 'https://www.youtube.com/embed/U-DOGB4iVBM', 'https://www.youtube.com/embed/hmXFz7coOMQ', 'https://www.youtube.com/embed/q6L9CnjsVyw'];

toggle.style.background = "url('/pulzze92-JSFE2021Q3/museum/img/video/play.svg') no-repeat center";

function togglePlay() {
    if (mainVideo.paused) {
        mainVideo.play();
        flag = true;
        playOnVideo.style.zIndex = '-1';
    } else {
        mainVideo.pause();
        playOnVideo.style.zIndex = '10';
    }
}


toggle.textContent = '';

// mainPlayer.querySelector('.play__on__video').addEventListener('click', function () {
//     if (mainVideo.paused) {
//         mainVideo.play();
//         mainPlayer.querySelector('.play__on__video').style.display = 'none';
//     } else {
//         mainVideo.pause();
//         mainPlayer.querySelector('.play__on__video').style.content = "url('/pulzze92-JSFE2021Q3/museum/img/icons/play__btn.svg')";
//     }
// });
mainPlayer.querySelector('.play__on__video').addEventListener('click', togglePlay);

function rangeChange() {
    mainVideo[this.name] = this.value;
}

function currentProgress() {
    const percent = (mainVideo.currentTime / mainVideo.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
    if(percent == 100) {
        playOnVideo.style.zIndex = '10';
    }
}

function scrollProgress(event) {
    const scrollTime = (event.offsetX / progress.offsetWidth) * mainVideo.duration;
    mainVideo.currentTime = scrollTime;
}

function updateButton() {
    const icon = this.paused ? "url('/pulzze92-JSFE2021Q3/museum/img/video/play.svg') no-repeat center" : "url('/pulzze92-JSFE2021Q3/museum/img/video/pause.svg') no-repeat center";
    
    toggle.style.background = icon;
}
let mouse = false;

mainVideo.addEventListener('click', togglePlay);
mainVideo.addEventListener('play', updateButton);
mainVideo.addEventListener('pause', updateButton);
mainVideo.addEventListener('timeupdate', currentProgress);
toggle.addEventListener('click', togglePlay);
progressBar.addEventListener('change', rangeChange);
progressBar.addEventListener('mousemove', rangeChange);
volume.addEventListener('change', rangeChange);
volume.addEventListener('mousemove', rangeChange);
progress.addEventListener('click', scrollProgress);
progress.addEventListener('mousemove', (event) => mouse && scrollProgress(event));
progress.addEventListener('mousedown', () => mouse = true);
progress.addEventListener('mouseup', () => mouse = false);

const fullScreen = document.querySelector('.full__screen');
fullScreen.addEventListener('click', fullScreenOn);
function fullScreenOn() {
    document.querySelector('.player__video').requestFullscreen();
}