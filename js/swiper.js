let albumBoxEL = document.querySelectorAll(".album-box");
let albumAllSelect = document.querySelectorAll(".albums");

let swiper = new Swiper(".bannerSwiper", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});

for (let i = 0; i < albumAllSelect.length; i += 1) {
  let swiper2 = new Swiper(albumAllSelect[i], {
    cssMode: true,
    slidesPerView: 7,
    spaceBetween: 20,

    navigation: {
      nextEl: ".swiper-button-next.chartBtn",
      prevEl: ".swiper-button-prev.chartBtn",
    },
    pagination: {
      el: ".swiper-pagination.chartBullet",
    },
    // mousewheel: true,
    // keyboard: true,
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
