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
