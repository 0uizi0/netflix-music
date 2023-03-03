// modal
const modal = document.getElementById("modal");
const modalWindow = document.querySelector(".modal-window");
const btnModal = document.querySelectorAll(".album-box");
const albumImg = document.querySelector(".content-image");
const detailTrack= document.querySelector(".detail-track");
const albumTitle = document.querySelector("p.album-title");
const albumSubTitle = document.querySelector("p.album-sub-title");
const audioAlbumImg = document.querySelector(".audio-album-img");
for(let i=0; i<btnModal.length; i++){
    btnModal[i].addEventListener("click", function(e) {
        modal.style.display = "flex"
        document.querySelector("main").style.opacity="0.5";
        audioConatiner.style.opacity = "1";
        audioConatiner.classList.remove("hidden");
        const clickImage = e.target.style.backgroundImage;
        
        const img = document.createElement("img");
        img.src=clickImage;
        img.src = img.src.substring(32,);
        img.src = img.src.replace("%22)","");
        albumImg.append(img);
        

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

        detailTrack.textContent="";
        


        for(let j=0; j<e.target.getAttribute("track-len"); j++){
            const trackInfo = document.createElement("div");
            trackInfo.setAttribute("class", "track-info");
            trackInfo.setAttribute("singer", singerText);

            const trackTitle = document.createElement("div");
            trackTitle.setAttribute("class", "track-title");
            trackTitle.addEventListener("click", function(e){
                audioAlbumImg.textContent = "";
                const audioImg = document.createElement("img");
                audioAlbumImg.append(audioImg);
                audioImg.src = albumImg.parentNode.parentNode.children[1].children[0].children[0].getAttribute("src");
                
                albumTitle.textContent = e.target.textContent;
                albumSubTitle.textContent = e.target.parentNode.getAttribute("singer");
                
                
                
            })

            const trackSinger = document.createElement("div");
            trackSinger.setAttribute("class", "track-singer");
            const trackTime = document.createElement("div");
            trackTime.setAttribute("class", "track-time");
            detailTrack.append(trackInfo);
            trackInfo.append(trackTitle);
            trackInfo.append(trackSinger);
            trackInfo.append(trackTime);
            detailTrack.children[j].querySelector(".track-title").textContent=e.target.getAttribute(`track-title${j}`);    
            detailTrack.children[j].querySelector(".track-time").textContent=e.target.getAttribute(`track-time${j}`);    
        }
    }) 
}




// for(let i=0; i<btnModal.length; i++){
//     btnModal[i].addEventListener("mouseover", function(e){
//         btnModal[i].textContent = "";
//         const test = document.createElement("div");
//         test.setAttribute("class", "test");
//         btnModal[i].append(test);
//         test.textContent = i
//     })
//     btnModal[i].addEventListener("mouseout", function(e){
//         btnModal[i].textContent = "";
        
//     })
// }


// btnModal.addEventListener("mouseout", function(e){
//     btnModal.textContent = "";
    
// })

// modal img



// let btnModal = document.querySelector(".album-box");



const closeBtn = modal.querySelector(".close-area");
closeBtn.addEventListener("click", e => {
  modal.style.display = "none"
  document.querySelector("main").style.opacity="1";
  audioConatiner.classList.add("hidden");
  albumImg.innerHTML="";
  albumTitle.textContent ="";
  albumSubTitle.textContent="";
  audioAlbumImg.textContent = "";
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