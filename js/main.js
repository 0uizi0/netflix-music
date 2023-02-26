//MAIN

const wrapper = document.querySelector(".albums .swiper-wrapper");
const slide = wrapper.querySelectorAll(".swiper-slide"); // 배열로 가지고 옴
const len = slide.length;

const names = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

for (let i = 0; i < len; i++) {
  // 사진 부분 일괄 적용
  const pic = slide[i];
  pic.style.backgroundImage = `url("../img/main_album/main_album${names[i]}.png")`;
}

// 마우스 호버 시 콘텐츠 띄우기 연습

const album = slide[0]; // 선택한 영역 임시 지정

// 앨범 - 제목
const title = document.createElement("div");
title.textContent = "Love or Die";
title.setAttribute(
  "style",
  "z-index: 7; font-size: 21px; position:absolute; bottom:15px; left: 24px"
);

// 앨범 - 아티스트
const artist = document.createElement("div");
artist.textContent = "TNX";
artist.setAttribute(
  "style",
  "z-index: 7; font-size: 18px; font-weight:normal;"
);

// 앨범 - 재생 버튼
const play = document.createElement("span");
play.textContent = "play_arrow";
play.classList.add("material-symbols-outlined");
play.setAttribute(
  "style",
  "z-index: 7; font-size:45px; position: absolute; right: 20px; bottom: 20px;"
);

title.append(artist);
album.append(title);
album.append(play);
