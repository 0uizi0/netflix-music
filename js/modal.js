// modal
const modal = document.getElementById("modal");
const modalWindow = document.querySelector(".modal-window");
const btnModal = document.querySelectorAll(".album-box");
const albumImg = document.querySelector(".content-image");
const detailTrack= document.querySelector(".detail-track");
const albumTitle = document.querySelector("p.album-title");
const albumSubTitle = document.querySelector("p.album-sub-title");

const audioAlbumImg = document.querySelector(".audio-album-img");
const progressContainer = document.querySelector(".progress-container");
const progress = document.querySelector(".progress");
const audioConatiner = document.getElementById("audio-container");

const modalTrackPlayBtn = document.querySelector(".modalTrack-PlayBtn");

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
        progress.style.width = "0%";


        for(let j=0; j<e.target.getAttribute("track-len"); j++){
            const trackInfo = document.createElement("div");
            trackInfo.setAttribute("class", "track-info");
            trackInfo.setAttribute("singer", singerText);

            const trackTitle = document.createElement("div");
            trackTitle.setAttribute("class", "track-title");
            trackTitle.addEventListener("click", function(e){
                
                
                
                trackTitle.parentNode.children[0].checked = true;
                
                
            })
            

            const trackSinger = document.createElement("div");
            trackSinger.setAttribute("class", "track-singer");
            const trackTime = document.createElement("div");
            trackTime.setAttribute("class", "track-time");
            const trackCheck = document.createElement("div");
            trackCheck.setAttribute("class","track-check");
            const trackCheckBox = document.createElement("input");
            trackCheckBox.setAttribute("class","track-checkBox");

            trackCheckBox.setAttribute("type","radio");
            trackCheckBox.setAttribute("name","radio-box");

            detailTrack.append(trackInfo);
    
            trackInfo.append(trackCheck);
            trackCheck.append(trackCheckBox);
            trackCheck.append(trackTitle);

            trackInfo.append(trackSinger);
            trackInfo.append(trackTime);
            
            const trackCheckBoxAll = document.querySelectorAll("input.track-checkBox");
            trackCheckBoxAll[0].checked = true;
            

            detailTrack.children[j].querySelector(".track-title").textContent=e.target.getAttribute(`track-title${j}`);  
            detailTrack.children[j].querySelector(".track-time").textContent=e.target.getAttribute(`track-time${j}`); 

        }
    }) 
}



const closeBtn = modal.querySelector(".close-area");
closeBtn.addEventListener("click", e => {
    modal.style.display = "none"
    document.querySelector("main").style.opacity="1";
    audioConatiner.classList.add("hidden");
    albumImg.innerHTML="";
    albumTitle.textContent ="";
    albumSubTitle.textContent="";
    audioAlbumImg.textContent = "";
    if(audioConatiner.contains(document.querySelector("audio"))){
        audioConatiner.querySelector("audio").remove();
    }
    
    audioControl.querySelector("li.play").classList.remove("hidden");
    audioControl.querySelector("li.pause").classList.add("hidden");
    

})


// audio control bar




const playBtn = document.querySelector(".play");
const pauseBtn = document.querySelector(".pause");

const audio = document.createElement("audio");

const audioControl = document.querySelector("ul.control")

const audioArr = ["cardio", "groove", "happy", "light", "lily", "limes", "pop", "swing"];

playBtn.addEventListener("click",function(e){
    
    
    if(playBtn.parentNode.parentNode.querySelector("audio")===null){
        audio.setAttribute("src", `./music/${audioArr[Math.floor(Math.random()*8)]}.mp3`);
        playBtn.parentNode.parentNode.append(audio);  
        audio.play();
    }else{
        audio.play();
    }
    // audio.setAttribute("src", `./music/${audioArr[Math.floor(Math.random()*8)]}.mp3`);
    // playBtn.parentNode.parentNode.append(audio);
    // audio.play();

    audio.addEventListener("timeupdate", updateProgress); 
    

    audioControl.querySelector("li.play").classList.add("hidden");
    audioControl.querySelector("li.pause").classList.remove("hidden");
    

})


pauseBtn.addEventListener("click", function(){
    audio.pause();
    audioControl.querySelector("li.pause").classList.add("hidden");
    audioControl.querySelector("li.play").classList.remove("hidden");
})
function updateProgress(e){
    const {duration, currentTime} = e.srcElement;
    const progressPer = (currentTime / duration) * 100;
    
    progress.style.width = `${progressPer}%`;
    if(progressPer===100){
        audioControl.querySelector("li.play").classList.remove("hidden");
        audioControl.querySelector("li.pause").classList.add("hidden");
        audio.currentTime = 0;
    }
}
function changeProgress(e){

    const width = document.querySelector("main").clientWidth;
    const offsetx = e.offsetX;
    const duration = audio.duration; //전체길이
    

    audio.currentTime =(offsetx / width) * duration; //현재길이
}

progressContainer.addEventListener("click", changeProgress);


modalTrackPlayBtn.addEventListener("click", function(e){
   const test =e.target.parentNode.parentNode.querySelector(".detail-track").querySelectorAll(".track-info"); 
   let temp = "temp";
   audioAlbumImg.innerHTML="";
   for(let i=0; i<test.length; i++){
    if(test[i].querySelector(".track-check").querySelector(".track-checkBox").checked){
        console.log(test[i].querySelector(".track-check").querySelector(".track-checkBox").parentNode.children[1]);
        albumTitle.textContent = test[i].querySelector(".track-check").querySelector(".track-checkBox").parentNode.children[1].textContent;
        temp = test[i].querySelector(".track-check").querySelector(".track-checkBox").parentNode.children[1].textContent;
        const audioImg = document.createElement("img");
        audioAlbumImg.append(audioImg);
        audioImg.src = albumImg.parentNode.parentNode.children[1].children[0].children[0].getAttribute("src");
    }
   }
   
   if(playBtn.parentNode.parentNode.querySelector("audio")===null){
    audio.setAttribute("src", `./music/${audioArr[Math.floor(Math.random()*8)]}.mp3`);
    playBtn.parentNode.parentNode.append(audio);  
    audio.play();
    }else if(temp!==albumTitle){
        console.log("다름");
    }
    else{
        audio.play();
    }
    audio.addEventListener("timeupdate", updateProgress); 
})
