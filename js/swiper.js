let albumBoxEL = document.querySelectorAll(".album-box");
let albumAllSelect = document.querySelectorAll(".albums");
const rankWrpperEl = document.querySelectorAll(".swiperChart__container")
const bannerMvSlideEl = document.querySelectorAll(".swiper-slide.mvslide")
const mvEl = document.querySelectorAll(".video_scope.mv")
const mvContainer = document.querySelectorAll(".video__container")
const mutedControlContainer = document.querySelectorAll(".muted-control-container")
//음소거 BTN DOM
const soundUpDecoEl = document.querySelector(".sound-up-deco")
const soundUpDecoElAll = document.querySelectorAll(".sound-up-deco")
const soundMutedDecoEl = document.querySelector(".sound-muted-deco")
const soundMutedDecoElAll = document.querySelectorAll(".sound-muted-deco")
const soundUpEl = document.querySelector(".sound-up")
const soundMutedEl = document.querySelector(".sound-muted")

//0~3번까지의 영상들 각각의 보여주고자하는 하이라이트 부분을 배열로 처리하여 불러서 편하게 사용
//0:뉴진스 - omg  /  1:TNX - Love or Die  /  2:Sam Smith - Unholy  /  3:Charlie Puth - Left And Right
const mvHirightCurrentTimeArr = [203, 130, 120, 85];
// 이전 위치를 알기 위해 임시로 저장해 놓는 것
let preNum = 0;

let swiper = new Swiper(".bannerSwiper", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  //동영상재생
  on: {
    // 슬라이드 이동시 이벤트
    slideChange: function() {
    let swiperCurrentIndex = swiper.activeIndex;
    let swiperPreIndex = swiper.previousIndex;
    let swiperNextIndex = swiperCurrentIndex + 1;

    // 슬라이드 넘어가면 앞 뒤 재생되던거 정지 및 첫 화면으로 옮기기
    if (preNum < swiperCurrentIndex) {
    mvEl[swiperPreIndex].currentTime = mvHirightCurrentTimeArr[swiperPreIndex];
    mvEl[swiperPreIndex].pause();
    mvContainer[swiperPreIndex].setAttribute("style", "opacity: 0; visibility: hidden;")
    soundUpDecoElAll[swiperPreIndex].classList.remove("on");
    soundMutedDecoElAll[swiperPreIndex].classList.add("on");
    } else {
    mvEl[swiperNextIndex].currentTime = mvHirightCurrentTimeArr[swiperNextIndex];
    mvEl[swiperNextIndex].pause();
    mvContainer[swiperNextIndex].setAttribute("style", "opacity: 0; visibility: hidden;")
    soundUpDecoElAll[swiperNextIndex].classList.remove("on");
    soundMutedDecoElAll[swiperNextIndex].classList.add("on");
    }

    //현재 active 화면에서 영상 띄우고,
    mvContainer[swiperCurrentIndex].setAttribute("style", "opacity: 1; visibility: visible;")
    mvEl[swiperCurrentIndex].muted = true;
    // 각 영상 마다 하이라이트가 다르니 인덱스마다 시작지점 조정해서 재생
    //  TNX MV Love or Die
     if (swiperCurrentIndex === 1){ 
     mvEl[1].currentTime = mvHirightCurrentTimeArr[1];
     } else if (swiperCurrentIndex === 2) {
    // 샘스미스 Unholy
     mvEl[2].currentTime = mvHirightCurrentTimeArr[2];
     } else if (swiperCurrentIndex === 3) {
    // 찰리푸스
     mvEl[3].currentTime = mvHirightCurrentTimeArr[3];
     } else if (swiperCurrentIndex === 0) {
    // 뉴진스
     mvEl[0].currentTime = mvHirightCurrentTimeArr[0];
     }
     mvEl[swiperCurrentIndex].play();
     mutedControlContainer[swiperCurrentIndex].setAttribute("style", "opacity: 1;")
     setTimeout(function(){
     mvContainer[swiperCurrentIndex].setAttribute("style", "opacity: 0; visibility: hidden;")
     }, 30000);
     setTimeout(function(){
     mvEl[swiperCurrentIndex].pause();
     }, 33000);
      preNum = swiperCurrentIndex;

      //동영상 음소거 BTN
    soundMutedDecoElAll[swiperCurrentIndex].addEventListener("click", () => {
    if (soundMutedDecoElAll[swiperCurrentIndex].classList.contains("on")) {
      soundMutedDecoElAll[swiperCurrentIndex].classList.remove("on");
      soundUpDecoElAll[swiperCurrentIndex].classList.add("on");
      mvEl[swiperCurrentIndex].muted = false;
    }
  })

  soundUpDecoElAll[swiperCurrentIndex].addEventListener("click", () => {
    if (soundUpDecoElAll[swiperCurrentIndex].classList.contains("on")) {
      soundUpDecoElAll[swiperCurrentIndex].classList.remove("on");
      soundMutedDecoElAll[swiperCurrentIndex].classList.add("on");
      mvEl[swiperCurrentIndex].muted = true;
    }
  })

    } 
   },
  });

  // // hover시 사운드 온
  // bannerMvSlideEl[0].addEventListener("mouseover", (e) => {
  //   let videoSelfEl = e.target;
  //   videoSelfEl.muted = false;
  // })

  //   soundUpEl[j].addEventListener("click", () => {
  //     if (soundUpEl[j].classList.contains("on")) {
  //       soundUpEl[j].classList.remove("on");
  //       soundUpDecoEl[j].classList.remove("on");
  //       mvEl[j].muted = false;
  //     } else {
  //       soundUpEl[j].classList.add("on");
  //       soundUpDecoEl[j].classList.add("on");
  //       mvEl[j].muted = true;
  //     }
  //   })

for (let i = 0; i < albumAllSelect.length; i += 1) {
  let swiper2 = new Swiper(albumAllSelect[i], {
    cssMode: true,
    direction: "horizontal",
    slidesPerView: 6,
    spaceBetween: 5,
    navigation: {
      nextEl: `.swiper-button-next.mainSwiper${i}`,
      prevEl: `.swiper-button-prev.mainSwiper${i}`,
    },
    // pagination: {
    //   el: ".swiper-pagination.chartBullet",
    // },
    mousewheel: true,
    keyboard: true,

    slideToClickedSlide: false,
  });
}


for (let i = 0; i < rankWrpperEl.length; i += 1) {
  let swiperChar0 = new Swiper(rankWrpperEl[i], {
    direction: 'horizontal',
    cssMode: true,
    slidesPerView: 5,
    spaceBetween: 50,
    navigation: {
      nextEl: `.swiper-button-next.chartBtn${i}`,
      prevEl: `.swiper-button-prev.chartBtn${i}`,
    },
    mousewheel: true,
    keyboard: true,
    slideToClickedSlide: false,
  });
}


for (let i = 0; i < albumBoxEL.length; i += 1) {
  let albumBoxTaget = albumBoxEL[i];
  albumBoxTaget.addEventListener("mouseover", (e) => {
    let eTarget = e.target;
    eTarget.classList.add("on");
  });
  albumBoxTaget.addEventListener("mouseout", (e) => {
    let eTarget = e.target;
    eTarget.classList.remove("on");
  });
}
