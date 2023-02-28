// modal
const modal = document.getElementById("modal");
const arr = document.querySelectorAll(".swiper-slide");
for(let i=0; i<arr.length; i++){
    let btnModal = arr[i].querySelector(".album-box");   
    btnModal[i].addEventListener("click", e => {
        console.log(e.target);
        modal.style.display = "flex"
        // document.querySelector("body").style.background="rgba(8,8,8,0.75)";
        document.querySelector(".section-inner").style.opacity="0.5";
        // console.log(document.querySelector(".section-inner"));
        audioConatiner.style.opacity = "1";
        audioConatiner.classList.remove("hidden");
      }) 
}

// let btnModal = document.querySelector(".album-box");



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