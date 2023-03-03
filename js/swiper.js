let albumBoxEL = document.querySelectorAll(".album-box");
let albumAllSelect = document.querySelectorAll(".albums");
const rankWrpperEl = document.querySelectorAll(".swiperChart__container")
const bannerMvSlideEl = document.querySelectorAll(".swiper-slide.mvslide")
const mvEl = document.querySelectorAll(".video_scope.mv")
const mvContainer = document.querySelectorAll(".video__container")
const mutedControlContainer = document.querySelectorAll(".muted-control-container")

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
    init: function() {
      mvContainer[0].setAttribute("style", "opacity: 1; visibility: visible;")
      mvEl[0].muted = true;
      mvEl[0].currentTime = 203;
      mvEl[0].play();
      mutedControlContainer[0].setAttribute("style", "opacity: 1;")

      setTimeout(function(){
      mvContainer[0].setAttribute("style", "opacity: 0; visibility: hidden;")
      }, 60000);
      setTimeout(function(){
      mvEl[0].pause();
        }, 65000);
    },
  },
  // on: {
  //   slideChange: function() {
  //     for (let i = 1; mvContainer.length; i += 1){
  //       if(mvContainer[i].classList.contains === "swiper-slide-active") {
  //         console.log(i);
  //       }
  //     }
  //   }
  // },
});

console.log(swiper.activeIndex);

//동영상 음소거
const soundUpDecoEl = document.querySelector(".sound-up-deco")
const soundMutedDecoEl = document.querySelector(".sound-muted-deco")
const soundUpEl = document.querySelector(".sound-up")
const soundMutedEl = document.querySelector(".sound-muted")

  soundMutedEl.addEventListener("click", (e) => {
    let soundParentEl = e.target.parentNode
    if (soundParentEl.classList.contains("on")) {
      e.target.parentNode.classList.remove("on");
      soundUpDecoEl.classList.add("on");
      mvEl[0].muted = false;
    }
  })

  soundUpEl.addEventListener("click", (e) => {
    let soundParentEl = e.target.parentNode
    if (soundParentEl.classList.contains("on")) {
      e.target.parentNode.classList.remove("on");
      soundMutedDecoEl.classList.add("on");
      mvEl[0].muted = true;
    }
  })

  //hover시 사운드 온
  // const videoEl = document.querySelector(".mv");
  // videoEl.addEventListener("mouseover", (e) => {
  //   let videoSelfEl = e.target;
  //   videoSelfEl.muted = false;
  // })

    // soundUpEl[j].addEventListener("click", () => {
    //   if (soundUpEl[j].classList.contains("on")) {
    //     soundUpEl[j].classList.remove("on");
    //     soundUpDecoEl[j].classList.remove("on");
    //     mvEl[j].muted = false;
    //   } else {
    //     soundUpEl[j].classList.add("on");
    //     soundUpDecoEl[j].classList.add("on");
    //     mvEl[j].muted = true;
    //   }
    // })

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
