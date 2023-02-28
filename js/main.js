//MAIN
const wrapper = document.querySelector(".albums .swiper-wrapper");
const slide = document.querySelectorAll(".swiper-slide .album-box"); // 배열로 가지고 옴
const len = slide.length;

const names = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

for (let i = 0; i < len; i++) {
  // 사진 부분 일괄 적용
  const pic = slide[i];
  if (i < 10) {
    pic.style.backgroundImage = `url("../img/main_album/main_album${names[i]}.png")`;
  } else {
    pic.style.backgroundImage = `url("../img/main_album/main_album${names[i - 10]}.png")`;
  }
}


// modal
const modal = document.getElementById("modal");
const btnModal = document.querySelector(".album-box");

btnModal.addEventListener("click", e => {
  modal.style.display = "flex"
  // document.querySelector("body").style.background="rgba(8,8,8,0.75)";
  document.querySelector(".section-inner").style.opacity="0.5";
  console.log(document.querySelector(".section-inner"));
  audioConatiner.style.opacity = "1";
  audioConatiner.classList.remove("hidden");
})

const closeBtn = modal.querySelector(".close-area");
closeBtn.addEventListener("click", e => {
  modal.style.display = "none"
  // document.querySelector("body").style.backgroundColor="";
  document.querySelector(".section-inner").style.opacity="1";
  audioConatiner.classList.add("hidden");
})


// audio control bar
const progress = document.querySelector(".progress");
const progressContainer = document.querySelector(".progress-container");
const audioConatiner = document.getElementById("audio-container");

const playBtn = document.querySelector(".play");

const audio = document.createElement("audio");
playBtn.addEventListener("click",function(e){
    // console.log("play");
    
    console.log(playBtn.parentNode.parentNode);
    audio.setAttribute("src", "./js/cardio.mp3");
    audio.setAttribute("loop", "loop");
    playBtn.parentNode.parentNode.append(audio);
    audio.addEventListener("timeupdate", updateProgress);
    audio.play();

})

const pauseBtn = document.querySelector(".pause");
pauseBtn.addEventListener("click", function(){
    audio.pause();
})
function updateProgress(e){
    const {duration, currentTime} = e.srcElement;
    const progressPer = (currentTime / duration) * 100;
    
    progress.style.width = `${progressPer}%`;
}
function changeProgress(e){
    const width = e.target.clientWidth;
    const offsetx = e.target.offsetx;
    const duration = audio.duration;
    audio.currentTime = (offsetx / width) * duration;
}

progressContainer.addEventListener("click",changeProgress);