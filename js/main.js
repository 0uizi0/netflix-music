//MAIN
const wrapper = document.querySelector(".albums .swiper-wrapper");
const slide = document.querySelectorAll(".swiper-slide .album-box"); // 배열로 가지고 옴
const len = slide.length;

// const names = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
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

let newArryAlbum = [
  // 요청사항 반영한 arryAlbum
  {
    img: "1",
    name: "Lowlife Princess: Noir",
    artist: "비비(BIBI)",
    date: "2022.11.18",
    item: "dance",
    country: "국내",
    info: "BIBI THE 1st ALBUM",
    infoSub:
      "때론 광기어리고, 때론 날카롭게 아픔을 찔러댄다. 과장없이 가장 현실적인 위로, 비비의 현재를 그대로 투영한 새 음반",
    track: {
      1: { title: "Intro", time: "01:07" },
      2: { title: "철학보다 무서운건 비비의 총알", time: "03:10" },
      3: { title: "나쁜X", time: "02:45" },
      4: { title: "가면무도회", time: "03:23" },
      5: { title: "모토스피드 24시", time: "02:13" },
      6: { title: "불륜", time: "01:06" },
      7: {
        title: "Loveholic's hangover (Starring 샘김 (Sam Kim))",
        time: "02:48",
      },
      8: { title: "Wet Nightmare", time: "02:58" },
      9: { title: "마녀사냥", time: "01:44" },
      10: { title: "Lowlife Princess", time: "02:31" },
      11: { title: "조또", time: "03:13" },
      12: { title: "City Love", time: "03:13" },
    },
  },
  {
    img: "2",
    name: "Love Never Dies",
    artist: "TNX",
    date: "2023.02.15",
    item: "kpop",
    country: "국내",
    info: "TNX The 2nd Mini Album [ Love Never Dies ]",
    infoSub:
      "10-20대의 아픈 청춘과 사랑 그리고 이별이라는 주제를 담은 [Love Never Dies]는 1번부터 6번 트랙까지 청춘의 사랑과 이별의 과정을 한 앨범 안에 음악적으로 녹여낸 앨범",
    track: {
      1: { title: "Love Never Dies", time: "01:38" },
      2: { title: "I Need U", time: "03:12" },
      3: { title: "Love or Die", time: "03:05" },
      4: { title: "Wasn't Ready", time: "03:04" },
      5: { title: "Slingshot", time: "03:02" },
      6: { title: "따따따 (Short Ver.)", time: "01:37" },
    },
  },
  {
    // { img: "3", name: "Hype boy", item: "kpop" },
    img: "3",
    name: "",
    artist: "",
    date: "",
    item: "",
    country: "",
    info: "",
    infoSub: "",
    track: {
      1: { title: "", time: "" },
      2: { title: "", time: "" },
      3: { title: "", time: "" },
      4: { title: "", time: "" },
      5: { title: "", time: "" },
      6: { title: "", time: "" },
    },
  },
  {
    // { img: "4", name: "A&W", item: "pop" },
    img: "4",
    name: "",
    artist: "",
    date: "",
    item: "",
    country: "",
    info: "",
    infoSub: "",
    track: {
      1: { title: "", time: "" },
      2: { title: "", time: "" },
      3: { title: "", time: "" },
      4: { title: "", time: "" },
      5: { title: "", time: "" },
      6: { title: "", time: "" },
    },
  },
  {
    // { img: "5", name: "ditto", item: "kpop" },
    img: "5",
    name: "",
    artist: "",
    date: "",
    item: "",
    country: "",
    info: "",
    infoSub: "",
    track: {
      1: { title: "", time: "" },
      2: { title: "", time: "" },
      3: { title: "", time: "" },
      4: { title: "", time: "" },
      5: { title: "", time: "" },
      6: { title: "", time: "" },
    },
  },
  {
    // { img: "6", name: "죽일 놈 (Guilty)", item: "hiphop" },
    img: "6",
    name: "",
    artist: "",
    date: "",
    item: "",
    country: "",
    info: "",
    infoSub: "",
    track: {
      1: { title: "", time: "" },
      2: { title: "", time: "" },
      3: { title: "", time: "" },
      4: { title: "", time: "" },
      5: { title: "", time: "" },
      6: { title: "", time: "" },
    },
  },
  {
    // { img: "7", name: "그라데이션", item: "kpop" },
    img: "7",
    name: "",
    artist: "",
    date: "",
    item: "",
    country: "",
    info: "",
    infoSub: "",
    track: {
      1: { title: "", time: "" },
      2: { title: "", time: "" },
      3: { title: "", time: "" },
      4: { title: "", time: "" },
      5: { title: "", time: "" },
      6: { title: "", time: "" },
    },
  },
  {
    // { img: "8", name: "VILLAIN DIES", item: "kpop" },
    img: "8",
    name: "",
    artist: "",
    date: "",
    item: "",
    country: "",
    info: "",
    infoSub: "",
    track: {
      1: { title: "", time: "" },
      2: { title: "", time: "" },
      3: { title: "", time: "" },
      4: { title: "", time: "" },
      5: { title: "", time: "" },
      6: { title: "", time: "" },
    },
  },
  {
    // { img: "9", name: "Teddy Bear", item: "dance" },
    img: "9",
    name: "",
    artist: "",
    date: "",
    item: "",
    country: "",
    info: "",
    infoSub: "",
    track: {
      1: { title: "", time: "" },
      2: { title: "", time: "" },
      3: { title: "", time: "" },
      4: { title: "", time: "" },
      5: { title: "", time: "" },
      6: { title: "", time: "" },
    },
  },
  {
    // { img: "10", name: "After Like", item: "kpop" },
    img: "10",
    name: "",
    artist: "",
    date: "",
    item: "",
    country: "",
    info: "",
    infoSub: "",
    track: {
      1: { title: "", time: "" },
      2: { title: "", time: "" },
      3: { title: "", time: "" },
      4: { title: "", time: "" },
      5: { title: "", time: "" },
      6: { title: "", time: "" },
    },
  },
  {
    // { img: "11", name: "오르트구름", item: "kpop" },
    img: "11",
    name: "",
    artist: "",
    date: "",
    item: "",
    country: "",
    info: "",
    infoSub: "",
    track: {
      1: { title: "", time: "" },
      2: { title: "", time: "" },
      3: { title: "", time: "" },
      4: { title: "", time: "" },
      5: { title: "", time: "" },
      6: { title: "", time: "" },
    },
  },
  {
    // { img: "12", name: "자격지심 (Feat. ZICO)", item: "hiphop" },
    img: "12",
    name: "",
    artist: "",
    date: "",
    item: "",
    country: "",
    info: "",
    infoSub: "",
    track: {
      1: { title: "", time: "" },
      2: { title: "", time: "" },
      3: { title: "", time: "" },
      4: { title: "", time: "" },
      5: { title: "", time: "" },
      6: { title: "", time: "" },
    },
  },
  {
    // { img: "13", name: "85mm", item: "classic" },
    img: "13",
    name: "",
    artist: "",
    date: "",
    item: "",
    country: "",
    info: "",
    infoSub: "",
    track: {
      1: { title: "", time: "" },
      2: { title: "", time: "" },
      3: { title: "", time: "" },
      4: { title: "", time: "" },
      5: { title: "", time: "" },
      6: { title: "", time: "" },
    },
  },
  {
    // { img: "14", name: "캔디", item: "kpop" },
    img: "14",
    name: "",
    artist: "",
    date: "",
    item: "",
    country: "",
    info: "",
    infoSub: "",
    track: {
      1: { title: "", time: "" },
      2: { title: "", time: "" },
      3: { title: "", time: "" },
      4: { title: "", time: "" },
      5: { title: "", time: "" },
      6: { title: "", time: "" },
    },
  },
  {
    // { img: "15", name: "Nxde", item: "kpop" },
    img: "15",
    name: "",
    artist: "",
    date: "",
    item: "",
    country: "",
    info: "",
    infoSub: "",
    track: {
      1: { title: "", time: "" },
      2: { title: "", time: "" },
      3: { title: "", time: "" },
      4: { title: "", time: "" },
      5: { title: "", time: "" },
      6: { title: "", time: "" },
    },
  },
  {
    // { img: "16", name: "Pink Venom", item: "kpop" },
    img: "16",
    name: "",
    artist: "",
    date: "",
    item: "",
    country: "",
    info: "",
    infoSub: "",
    track: {
      1: { title: "", time: "" },
      2: { title: "", time: "" },
      3: { title: "", time: "" },
      4: { title: "", time: "" },
      5: { title: "", time: "" },
      6: { title: "", time: "" },
    },
  },
  {
    // { img: "17", name: "It's Not Unusual", item: "classic" },
    img: "17",
    name: "",
    artist: "",
    date: "",
    item: "",
    country: "",
    info: "",
    infoSub: "",
    track: {
      1: { title: "", time: "" },
      2: { title: "", time: "" },
      3: { title: "", time: "" },
      4: { title: "", time: "" },
      5: { title: "", time: "" },
      6: { title: "", time: "" },
    },
  },
  {
    // { img: "18", name: "건물 사이에 피어난 장미 (Rose Blossom)", item: "dance" },
    img: "18",
    name: "",
    artist: "",
    date: "",
    item: "",
    country: "",
    info: "",
    infoSub: "",
    track: {
      1: { title: "", time: "" },
      2: { title: "", time: "" },
      3: { title: "", time: "" },
      4: { title: "", time: "" },
      5: { title: "", time: "" },
      6: { title: "", time: "" },
    },
  },
  {
    // { img: "19", name: "I Feel Like Dancing", item: "pop" },
    img: "19",
    name: "",
    artist: "",
    date: "",
    item: "",
    country: "",
    info: "",
    infoSub: "",
    track: {
      1: { title: "", time: "" },
      2: { title: "", time: "" },
      3: { title: "", time: "" },
      4: { title: "", time: "" },
      5: { title: "", time: "" },
      6: { title: "", time: "" },
    },
  },
  {
    // { img: "20", name: "Best Disaster", item: "pop" },
    img: "20",
    name: "",
    artist: "",
    date: "",
    item: "",
    country: "",
    info: "",
    infoSub: "",
    track: {
      1: { title: "", time: "" },
      2: { title: "", time: "" },
      3: { title: "", time: "" },
      4: { title: "", time: "" },
      5: { title: "", time: "" },
      6: { title: "", time: "" },
    },
  },
  {
    // { img: "21", name: "The River", item: "classic" },
    img: "21",
    name: "",
    artist: "",
    date: "",
    item: "",
    country: "",
    info: "",
    infoSub: "",
    track: {
      1: { title: "", time: "" },
      2: { title: "", time: "" },
      3: { title: "", time: "" },
      4: { title: "", time: "" },
      5: { title: "", time: "" },
      6: { title: "", time: "" },
    },
  },
  {
    // { img: "22", name: "TRUSTFALL", item: "pop" },
    img: "22",
    name: "",
    artist: "",
    date: "",
    item: "",
    country: "",
    info: "",
    infoSub: "",
    track: {
      1: { title: "", time: "" },
      2: { title: "", time: "" },
      3: { title: "", time: "" },
      4: { title: "", time: "" },
      5: { title: "", time: "" },
      6: { title: "", time: "" },
    },
  },
  {
    // { img: "23", name: "NOT SORRY (Feat. pH-1) (Prod. by Slom)", item: "hiphop" },
    img: "23",
    name: "",
    artist: "",
    date: "",
    item: "",
    country: "",
    info: "",
    infoSub: "",
    track: {
      1: { title: "", time: "" },
      2: { title: "", time: "" },
      3: { title: "", time: "" },
      4: { title: "", time: "" },
      5: { title: "", time: "" },
      6: { title: "", time: "" },
    },
  },
  {
    // { img: "24", name: "괴짜 (Freak)", item: "hiphop" },
    img: "24",
    name: "",
    artist: "",
    date: "",
    item: "",
    country: "",
    info: "",
    infoSub: "",
    track: {
      1: { title: "", time: "" },
      2: { title: "", time: "" },
      3: { title: "", time: "" },
      4: { title: "", time: "" },
      5: { title: "", time: "" },
      6: { title: "", time: "" },
    },
  },
  {
    // { img: "25", name: "연애소설 (Feat. 아이유)", item: "hiphop" },
    img: "25",
    name: "",
    artist: "",
    date: "",
    item: "",
    country: "",
    info: "",
    infoSub: "",
    track: {
      1: { title: "", time: "" },
      2: { title: "", time: "" },
      3: { title: "", time: "" },
      4: { title: "", time: "" },
      5: { title: "", time: "" },
      6: { title: "", time: "" },
    },
  },
  {
    // { img: "26", name: "Right Here (Feat. Benny Sings)", item: "pop" },
    img: "26",
    name: "",
    artist: "",
    date: "",
    item: "",
    country: "",
    info: "",
    infoSub: "",
    track: {
      1: { title: "", time: "" },
      2: { title: "", time: "" },
      3: { title: "", time: "" },
      4: { title: "", time: "" },
      5: { title: "", time: "" },
      6: { title: "", time: "" },
    },
  },
  {
    // { img: "27", name: "파이팅 해야지 (Feat. 이영지)", item: "dance" },
    img: "27",
    name: "",
    artist: "",
    date: "",
    item: "",
    country: "",
    info: "",
    infoSub: "",
    track: {
      1: { title: "", time: "" },
      2: { title: "", time: "" },
      3: { title: "", time: "" },
      4: { title: "", time: "" },
      5: { title: "", time: "" },
      6: { title: "", time: "" },
    },
  },
  {
    // { img: "28", name: "ANTIFRAGILE", item: "dance" },
    img: "28",
    name: "",
    artist: "",
    date: "",
    item: "",
    country: "",
    info: "",
    infoSub: "",
    track: {
      1: { title: "", time: "" },
      2: { title: "", time: "" },
      3: { title: "", time: "" },
      4: { title: "", time: "" },
      5: { title: "", time: "" },
      6: { title: "", time: "" },
    },
  },
  {
    // { img: "29", name: "WHEN I MOVE", item: "dance" },
    img: "29",
    name: "",
    artist: "",
    date: "",
    item: "",
    country: "",
    info: "",
    infoSub: "",
    track: {
      1: { title: "", time: "" },
      2: { title: "", time: "" },
      3: { title: "", time: "" },
      4: { title: "", time: "" },
      5: { title: "", time: "" },
      6: { title: "", time: "" },
    },
  },
  {
    // { img: "30", name: "SMILEY (Feat. BIBI)", item: "dance" },
    img: "30",
    name: "",
    artist: "",
    date: "",
    item: "",
    country: "",
    info: "",
    infoSub: "",
    track: {
      1: { title: "", time: "" },
      2: { title: "", time: "" },
      3: { title: "", time: "" },
      4: { title: "", time: "" },
      5: { title: "", time: "" },
      6: { title: "", time: "" },
    },
  },
];

for (let i = 0; i < len; i++) {
  // 해당 부분으로 인해서 따로 DOM 요소를 생성해 붙일 필요 X
  // DOM을 만들어서 붙여주게 되면 최초 All 탭에서 항목이 안 보이는 경우가 생기므로 아래와 같이 처리

  // 사진 부분 일괄 적용
  const pic = slide[i];
  if (i < 100) {
    pic.setAttribute("data-item", `${arryAlbum[i].item}`); //추가한 코드
    pic.setAttribute("id", `${arryAlbum[i].name}`);
    pic.setAttribute("name", `${arryAlbum[i].name}`);
    pic.style.backgroundImage = `url("../img/main_album/main_album${arryAlbum[i].img}.png")`;
    pic.style.boxShadow = `0px 0px 1px #e6e6e6`;
  }
}
// 버튼 테스트

//배열 담을 배열
let showingArry = [];

// 배열 섞기 함수 (임시 보류)
// const shuffleArray = (array) => {
//   for (var i = 0; i < array.length; i++) {
//     var j = Math.floor(Math.random() * (i + 1));
//     const temp = array[i]; //빈 곳에  배열i를 저장
//     array[i] = array[j]; //배열 j를 배열 i에 저장
//     array[j] = temp; //상수 x를 배열 j에 저장
//   }
//   return array;
// };

// Tetz, 사진 부분 일괄 적용에서 이미 처리 되었으므로 DOM 요소 만들어서 붙일 필요 X

// 문서 로딩이 끝나면 실행되는 구문
$(document).ready(function () {
  // $(".swiper2.albums .swiper-wrapper").append(showingArry); //섞은 배열을 출력하기 (임시 보류)

  let list = $(".list"); // All, KPOP, POP, Comedy 의 탭을 변수에 저장

  let swiperSlide = document.querySelectorAll(
    ".swiper2.albums .swiper-wrapper .swiper-slide"
  ); // 스와이퍼에 들어있는 슬라이드 '전부'를 배열로 받기

  // All, KPOP, POP, Comedy 의 탭이 클릭 되면 실행
  list.on("click", function () {
    list.removeClass("active");
    $(this).addClass("active");

    let dataFilter = $(this).attr("data-filter");

    let genreZone = document.querySelector(".genre-zone");
    genreZone.textContent = "";
    let genre = document.createElement("p");
    genre.textContent = $(this)[0].outerText;
    genre.setAttribute(
      "style",
      "text-align: left; font: normal normal bold 24px/29px Pretendard;"
    );
    genreZone.append(genre);

    for (let i = 0; i < swiperSlide.length; i++) {
      // 스와이퍼 슬라이드(모두) 초기 설정 (hide 클래스: O, active 클래스: X)
      swiperSlide[i].classList.add("hide");
      swiperSlide[i].classList.remove("active");

      // dataFilter가 'all'이거나, 슬라이드 내부 div 요소(.album-box)의 data-item 속성이 dataFilter의 값과 '같을때' active 클래스 적용 (hide 클래스 X)
      if (
        swiperSlide[i].querySelector(".album-box").getAttribute("data-item") ===
          dataFilter ||
        dataFilter === "all"
      ) {
        swiperSlide[i].classList.remove("hide");
        swiperSlide[i].classList.add("active");
      }
    }
  });
});
