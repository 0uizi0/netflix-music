//chart-albumimg
const albumWrap = document.querySelector(".inner");
const albumImg = document.querySelectorAll(".chart-list .--album-img");//앨범 이미지
const names2 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
const albumLen = albumImg.length;

for(let i = 0; i < albumLen; i++){
  const albumPic = albumImg[i];
  if (i < 10){
    albumPic.style.backgroundImage = `url("../img/main_album/main_album${names2[i]}.png")`;
  } else if( i >= 10 && i < 20) {
    albumPic.style.backgroundImage = `url("../img/main_album/main_album${names2[i - 10]}.png")`;
  } else{
    albumPic.style.backgroundImage = `url("../img/main_album/main_album${names2[i - 20]}.png")`;
  }
}

//chart-num
const albumNumAll = document.querySelectorAll(".chart-wrap .inner .--num");//숫자 모두 선택
const albumNumLen = albumNumAll.length; //15

for(let i = 0; i < albumNumLen; i++){
  albumNumAll[i].textContent = i+1;
}

//chart-hover선택
const albumListAll = document.querySelectorAll(".chart-list") //리스트 목록 랩
const albumHoverAll = document.querySelectorAll(".chart-list .--album-img .beforeHover");//hover
//chart-list 클릭 시 하단 플레이어 show 
const audioPlay = document.querySelector(".chart-list-audio"); //chart-list-audio


for (let i = 0; i < albumListAll.length; i++){
  albumListAll[i].addEventListener("mouseover", function(){
    albumHoverAll[i].setAttribute("style","display:block;");
  });
  albumListAll[i].addEventListener("mouseout", function(){
    albumHoverAll[i].setAttribute("style","display:none;");
  });
  albumHoverAll[i].addEventListener("click",function(){
    audioPlay.classList.remove("hidden");
    audioPlay.setAttribute("style","display:block;");
  });
}











