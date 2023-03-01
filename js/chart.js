//데이터베이스
let arryAlbum = [
  { img: "1", name: "나쁜X", item: "dance" },
  { img: "2", name: "Love or Die", item: "kpop" },
  { img: "3", name: "Hype boy", item: "kpop" },
  { img: "4", name: "A&W", item: "pop" },
  { img: "5", name: "ditto", item: "kpop" },
  { img: "6", name: "죽일 놈 (Guilty)", item: "hiphop" },
  { img: "7", name: "그라데이션", item: "kpop" },
  { img: "8", name: "VILLAIN DIES", item: "kpop" },
  { img: "9", name: "Teddy Bear", item: "dance" },
  { img: "10", name: "After Like", item: "kpop" },
  { img: "11", name: "오르트구름", item: "kpop" },
  { img: "12", name: "자격지심 (Feat. ZICO)", item: "hiphop" },
  { img: "13", name: "85mm", item: "classic" },
  { img: "14", name: "캔디", item: "kpop" },
  { img: "15", name: "Nxde", item: "kpop" },
  { img: "16", name: "Pink Venom", item: "kpop" },
  { img: "17", name: "It's Not Unusual", item: "classic" },
  { img: "18", name: "건물 사이에 피어난 장미 (Rose Blossom)", item: "dance" },
  { img: "19", name: "I Feel Like Dancing", item: "pop" },
  { img: "20", name: "Best Disaster", item: "pop" },
  { img: "21", name: "The River", item: "classic" },
  { img: "22", name: "TRUSTFALL", item: "pop" },
  { img: "23", name: "NOT SORRY (Feat. pH-1) (Prod. by Slom)", item: "hiphop" },
  { img: "24", name: "괴짜 (Freak)", item: "hiphop" },
  { img: "25", name: "연애소설 (Feat. 아이유)", item: "hiphop" },
  { img: "26", name: "Right Here (Feat. Benny Sings)", item: "pop" },
  { img: "27", name: "파이팅 해야지 (Feat. 이영지)", item: "dance" },
  { img: "28", name: "ANTIFRAGILE", item: "dance" },
  { img: "29", name: "WHEN I MOVE", item: "dance" },
  { img: "30", name: "SMILEY (Feat. BIBI)", item: "dance" },
];

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


//Top10 랭크 스와이퍼
const slide = document.querySelectorAll(".rank-wrapper .album-box"); // 배열로 가지고 옴
const len = slide.length;
for (let i = 0; i < len; i++) {
  // 해당 부분으로 인해서 따로 DOM 요소를 생성해 붙일 필요 X
  // DOM을 만들어서 붙여주게 되면 최초 All 탭에서 항목이 안 보이는 경우가 생기므로 아래와 같이 처리

  // 사진 부분 일괄 적용
  const pic = slide[i];
  if (i < 30) {
    pic.style.backgroundImage = `url("../img/main_album/main_album${arryAlbum[i].img}.png")`;
    pic.style.boxShadow = `0px 0px 1px #e6e6e6`;
  } else if (i >= 30) {
    pic.style.backgroundImage = `url("../img/main_album/main_album${arryAlbum[i - 30].img}.png")`;
  }
}