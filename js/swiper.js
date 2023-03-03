let albumBoxEL = document.querySelectorAll(".album-box");
let albumAllSelect = document.querySelectorAll(".albums");
const rankWrpperEl = document.querySelectorAll(".swiperChart__container");
const bannerMvSlideEl = document.querySelectorAll(".swiper-slide.mvslide");
const mvEl = document.querySelectorAll(".video_scope.mv");
const mvContainer = document.querySelectorAll(".video__container");
const mutedControlContainer = document.querySelectorAll(".muted-control-container");
//음소거 BTN DOM
const soundUpDecoEl = document.querySelector(".sound-up-deco");
const soundUpDecoElAll = document.querySelectorAll(".sound-up-deco");
const soundMutedDecoEl = document.querySelector(".sound-muted-deco");
const soundMutedDecoElAll = document.querySelectorAll(".sound-muted-deco");
const soundUpEl = document.querySelector(".sound-up");
const soundMutedEl = document.querySelector(".sound-muted");
const replayControlElAll = document.querySelectorAll(".replay-control-container");

//0~3번까지의 영상들 각각의 보여주고자하는 하이라이트 부분을 배열로 처리하여 불러서 편하게 사용
//0:뉴진스 - omg  /  1:TNX - Love or Die  /  2:Sam Smith - Unholy  /  3:Charlie Puth - Left And Right
const mvHirightCurrentTimeArr = [140, 130, 120, 85];
// 이전 위치를 알기 위해 임시로 저장해 놓는 것
let preNum = 0;
let preFirst = 0;

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
  // on: {
  //   afterInit: function() {
  //     //첫 슬라이드 스타트
  //     //이후 중복을 피하기 위해 아래와 같이 설정
  //   if (mvContainer[0].classList.contains("mvFirstPlay")) {
  //     //화면, 뮤트 온오프 띄우고
  //     mvContainer[0].setAttribute("style", "opacity: 1; visibility: visible;")
  //     mvEl[0].muted = true;
  //     mvEl[0].currentTime = mvHirightCurrentTimeArr[0];
  //     mvEl[0].play();
  //     mutedControlContainer[0].setAttribute("style", "opacity: 1;")
  //     //30초 프레프 플레이 진행 후 영상 페이드 아웃
  //     setTimeout(function(){
  //     mvContainer[0].setAttribute("style", "opacity: 0; visibility: hidden;")
  //     }, 30000);
  //     //3초 후 음소거 및 영상 정지
  //     //그리고 음소거 버튼 초기화 및 숨기기
  //     setTimeout(function(){
  //     mvEl[0].pause();
  //     mutedControlContainer[0].setAttribute("style", "opacity: 0; visibility: hidden; transition-delay: 0s;")
  //     if(soundUpDecoElAll[0].classList.contains("on")) {
  //       soundUpDecoElAll[0].classList.remove("on");
  //       soundMutedDecoElAll[0].classList.add("on");
  //     }
  //     //모든 재생이 정상적으로 끝나고
  //     //클라이언트가 더 보고 싶다는 전제하에,
  //     //리플레이 버튼
  //     replayControlElAll[0].classList.add("on");
  //     }, 33000)

  //     //동영상 음소거 BTN
  //   soundMutedDecoElAll[0].addEventListener("click", () => {
  //     if (soundMutedDecoElAll[0].classList.contains("on")) {
  //       soundMutedDecoElAll[0].classList.remove("on");
  //       soundUpDecoElAll[0].classList.add("on");
  //       mvEl[0].muted = false;
  //     }
  //   })
  
  //   soundUpDecoElAll[0].addEventListener("click", () => {
  //     if (soundUpDecoElAll[0].classList.contains("on")) {
  //       soundUpDecoElAll[0].classList.remove("on");
  //       soundMutedDecoElAll[0].classList.add("on");
  //       mvEl[0].muted = true;
  //     }
  //   })

  //   replayControlElAll[0].addEventListener("click", ()=>{
  //     mvContainer[0].setAttribute("style", "opacity: 1; visibility: visible;")
  //     mvEl[0].currentTime = mvHirightCurrentTimeArr[0];
  //     mvEl[0].play();
  //     mutedControlContainer[0].setAttribute("style", "opacity: 1;")
  //     //30초 프레프 플레이 진행 후 영상 페이드 아웃
  //     setTimeout(function(){
  //     mvContainer[0].setAttribute("style", "opacity: 0; visibility: hidden;")
  //     }, 30000);
  //     //3초 후 음소거 및 영상 정지
  //     //그리고 음소거 버튼 초기화 및 숨기기
  //     setTimeout(function(){
  //     mvEl[0].pause();
  //     mutedControlContainer[0].setAttribute("style", "opacity: 0; visibility: hidden; transition-delay: 0s;")
  //     if(soundUpDecoElAll[0].classList.contains("on")) {
  //       soundUpDecoElAll[0].classList.remove("on");
  //       soundMutedDecoElAll[0].classList.add("on");
  //     }
  //     //모든 재생이 정상적으로 끝나고
  //     //클라이언트가 더 보고 싶다는 전제하에,
  //     //리플레이 버튼
  //     replayControlElAll[0].classList.add("on");
  //     }, 33000)
  //     mutedControlContainer[0].setAttribute("style", "opacity: 1;")
  //     replayControlElAll[0].classList.remove("on");
  //   })
      
  //   }

    
  //   },

    
  //   // 슬라이드 이동시 이벤트
  //   slideChange: function() {
  //   //지금부터는 슬라이드 체인지 시 이벤트
  //   //슬라이드0(초기슬라이드) 이외의 슬라이드 적용하는 함수
  //   //MV요소 선택자
  //   let swiperCurrentIndex = swiper.activeIndex;
  //   let swiperPreIndex = swiper.previousIndex;
  //   let swiperNextIndex = swiperCurrentIndex + 1;

  //   if (mvContainer[0].classList.contains("mvmvFirstPlay")){
  //     mvContainer[0].classList.remove("mvFirstPlay")
  //   }
  //   // 슬라이드 넘어가면 앞 뒤 재생되던거 정지 및 첫 화면으로 초기화 정지
  //   // 현재 화면의 인덱스 보다 낮은 숫자라면 프레슬라이드
  //   // 현재 액티브 슬라이드가 아니면 모두 재생을 멈추고 숨겨야 할 걸 숨기는 함수
  //   // 프레와 넥스트를 구분해 놓음(사용자가 앞 뒤로 마음대로 움직이기 때문)
  //   if (preNum < swiperCurrentIndex) {
  //   // 이하 모두 프레슬라이드 인덱스로 처리
  //   mvEl[swiperPreIndex].currentTime = mvHirightCurrentTimeArr[swiperPreIndex];//첫 화면으로 돌리기 위해 currentTime(원하는 시간)조지고
  //   mvEl[swiperPreIndex].pause(); //정지 바로 먹여버림
  //   mvContainer[swiperPreIndex].setAttribute("style", "opacity: 0; visibility: hidden; transition-delay: 0s;") //화면숨김
  //   soundUpDecoElAll[swiperPreIndex].classList.remove("on"); //사운드 온 버튼 지우기
  //   soundMutedDecoElAll[swiperPreIndex].classList.add("on"); //뮤트 버튼 활성화
  //   mutedControlContainer[swiperPreIndex].setAttribute("style", "opacity: 0; visibility: hidden; transition-delay: 0s;")//뮤트 컨트롤 모두 숨기기
  //   replayControlElAll[swiperPreIndex].classList.remove("on");//리플레이버튼도 숨기기
  //   } else {
  //   // 위 조건 외는 모두 넥스트슬라이드이므로 바로 처리 방식은 위와 같음
  //   mvEl[swiperNextIndex].currentTime = mvHirightCurrentTimeArr[swiperNextIndex];
  //   mvEl[swiperNextIndex].pause();
  //   mvContainer[swiperNextIndex].setAttribute("style", "opacity: 0; visibility: hidden; transition-delay: 0s;")
  //   soundUpDecoElAll[swiperNextIndex].classList.remove("on");
  //   soundMutedDecoElAll[swiperNextIndex].classList.add("on");
  //   mutedControlContainer[swiperNextIndex].setAttribute("style", "opacity: 0; visibility: hidden; transition-delay: 0s;")
  //   }

  //   //현재 active 화면에서 영상 띄우고,
  //   mvContainer[swiperCurrentIndex].setAttribute("style", "opacity: 1; visibility: visible;")
  //   mvEl[swiperCurrentIndex].muted = true;
  //   // 각 영상 마다 하이라이트가 다르니 인덱스마다 시작지점 조정해서 재생
  //   //뉴진스
  //   if (swiperCurrentIndex === 0) {
  //     mvEl[0].currentTime = mvHirightCurrentTimeArr[0];
  //   //  TNX MV Love or Die
  //   }  else if (swiperCurrentIndex === 1){ 
  //    mvEl[1].currentTime = mvHirightCurrentTimeArr[1];
  //    } else if (swiperCurrentIndex === 2) {
  //   // 샘스미스 Unholy
  //    mvEl[2].currentTime = mvHirightCurrentTimeArr[2];
  //    } else if (swiperCurrentIndex === 3) {
  //   // 찰리푸스
  //    mvEl[3].currentTime = mvHirightCurrentTimeArr[3];
  //    } 
  //    //0슬라이드는 중복이 나서 init에서 진행해 줌
  //    mvEl[swiperCurrentIndex].play();
  //    mutedControlContainer[swiperCurrentIndex].setAttribute("style", "opacity: 1;")
  //    setTimeout(function(){
  //    mvContainer[swiperCurrentIndex].setAttribute("style", "opacity: 0; visibility: hidden;")
  //    }, 30000);
  //    setTimeout(function(){
  //    mvEl[swiperCurrentIndex].pause();
  //    mutedControlContainer[swiperCurrentIndex].setAttribute("style", "opacity: 0; visibility: hidden; transition-delay: 0s;")
  //    if(soundUpDecoElAll[swiperCurrentIndex].classList.contains("on")) {
  //     soundUpDecoElAll[swiperCurrentIndex].classList.remove("on");
  //     soundMutedDecoElAll[swiperCurrentIndex].classList.add("on");
  //    }
  //    }, 33000);
  //     preNum = swiperCurrentIndex;

  //     //동영상 음소거 BTN
  //   soundMutedDecoElAll[swiperCurrentIndex].addEventListener("click", () => {
  //   if (soundMutedDecoElAll[swiperCurrentIndex].classList.contains("on")) {
  //     soundMutedDecoElAll[swiperCurrentIndex].classList.remove("on");
  //     soundUpDecoElAll[swiperCurrentIndex].classList.add("on");
  //     mvEl[swiperCurrentIndex].muted = false;
  //   }
  // })

  // soundUpDecoElAll[swiperCurrentIndex].addEventListener("click", () => {
  //   if (soundUpDecoElAll[swiperCurrentIndex].classList.contains("on")) {
  //     soundUpDecoElAll[swiperCurrentIndex].classList.remove("on");
  //     soundMutedDecoElAll[swiperCurrentIndex].classList.add("on");
  //     mvEl[swiperCurrentIndex].muted = true;
  //   }
  // })

  //   } 
  //  },
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
