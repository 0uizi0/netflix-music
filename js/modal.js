// modal

const modal = document.getElementById("modal");
const btnModal = document.querySelectorAll(".album-box");
const albumImg = document.querySelector(".content-image");

for(let i=0; i<btnModal.length; i++){
    btnModal[i].addEventListener("click", function(e) {
        modal.style.display = "flex"
        document.querySelector(".inner.non-padding").style.opacity="0.5";
        audioConatiner.style.opacity = "1";
        audioConatiner.classList.remove("hidden");
        const clickImage = e.target.style.backgroundImage;
        
        let nameText = e.target.getAttribute("name");
        const albumName = document.querySelector(".al-name");
        albumName.textContent = nameText;

        let singerText = e.target.getAttribute("artist");
        const singer = document.querySelector(".singer");
        singer.textContent = singerText;

        let dateText = e.target.getAttribute("date");
        const date = document.querySelector(".date");
        date.textContent = dateText;

        let infoText = e.target.getAttribute("info");
        const info = document.querySelector(".info");
        info.textContent = infoText;

        let infosubText = e.target.getAttribute("info-sub");
        const infosub = document.querySelector(".info-sub");
        infosub.textContent = infosubText;

        const img = document.createElement("img");
        img.src=clickImage;
        img.src = img.src.substring(32,);
        img.src = img.src.replace("%22)","");
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
  
})


// audio control bar
const progress = document.querySelector(".progress");
const progressContainer = document.querySelector(".progress-container");
const audioConatiner = document.getElementById("audio-container");

const playBtn = document.querySelector(".play");

const audio = document.createElement("audio");

const audioArr = ["cardio", "groove", "happy", "light", "lily", "limes", "pop", "swing"];

playBtn.addEventListener("click",function(e){
    
    console.log(playBtn.parentNode.parentNode);
    audio.setAttribute("src", `./music/${audioArr[Math.floor(Math.random()*8)]}.mp3`);
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
    console.log(audio.duration);
    audio.currentTime =(offsetx / width) * duration;
    console.log(audio.currentTime);
}

progressContainer.addEventListener("click", changeProgress);