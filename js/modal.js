// modal
const modal = document.getElementById("modal");
const btnModal = document.querySelectorAll(".album-box");
const albumImg = document.querySelector(".content-image");

for(let i=0; i<btnModal.length; i++){
    btnModal[i].addEventListener("click", function(e) {
        modal.style.display = "flex"
        document.querySelector(".section-inner").style.opacity="0.5";
        audioConatiner.style.opacity = "1";
        audioConatiner.classList.remove("hidden");
    
        
        const clickImage = e.target.style.backgroundImage;
        const img = document.createElement("img");
        img.src=clickImage;
        img.src = img.src.substring(32,62);
        // console.log(img.src);

        albumImg.append(img);

    }) 
}

// modal img



// let btnModal = document.querySelector(".album-box");



const closeBtn = modal.querySelector(".close-area");
closeBtn.addEventListener("click", e => {
  modal.style.display = "none"
  document.querySelector(".section-inner").style.opacity="1";
  audioConatiner.classList.add("hidden");
  albumImg.innerHTML="";
  console.log(albumImg.childElementCount);
})


// audio control bar
const progress = document.querySelector(".progress");
const progressContainer = document.querySelector(".progress-container");
const audioConatiner = document.getElementById("audio-container");

const playBtn = document.querySelector(".play");

const audio = document.createElement("audio");
playBtn.addEventListener("click",function(e){
    
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