//MV video DOM
const bannerMvSlideEl = document.querySelectorAll(".swiper-slide.mvslide");
const mvEl = document.querySelectorAll(".video_scope.mv");
const mvContainer = document.querySelectorAll(".video__container");
//Mute Control Dom
const mutedControlContainer = document.querySelectorAll(".muted-control-container");
const soundUpDecoElAll = document.querySelectorAll(".sound-up-deco");
const soundMutedDecoElAll = document.querySelectorAll(".sound-muted-deco");
//Replay Dom
const replayControlElAll = document.querySelectorAll(".replay-control-container");
const replayDecoEl =document.querySelectorAll(".replay-deco");
//video Dom
const videoElAll = document.querySelectorAll("video");

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

  // 시작시 동영상재생
  on: {
    afterInit: function () {
    mvContainer[0].setAttribute("style", "opacity: 1; visibility: visible; transition-delay: 1.5s;")//화면 on
    mvEl[0].muted = true; //뮤트 조지고(정책 ㅠ)
    mvEl[0].play(); //플레이고고
    mutedControlContainer[0].setAttribute("style", "opacity: 1;")//뮤트컨트롤 소환
    //음악이 끝나고 발생하는 이벤트 설정
    //슬라이드 액티브 활성화일시, 리플레이 버튼 나오게 만듦, false일때는 slideChange함수에서 처리하도록
    if(bannerMvSlideEl[0].classList.contains("swiper-slide-active")){
        videoElAll[0].addEventListener("ended", ()=>{
        mvContainer[0].setAttribute("style", "opacity: 0; visibility: hidden;")//페이드아웃
        mvEl[0].pause();// 정지
        mutedControlContainer[0].setAttribute("style", "opacity: 0; visibility: hidden; transition-delay: 0s;")//뮤트컨트롤 아웃
        replayControlElAll[0].classList.add("on");//리플레이 재생버튼 등장(이놈이 주인공)
        //만약 뮤트가 안켜져 있으면 on으로 바꿔주는 조건문
        if(soundUpDecoElAll[0].classList.contains("on")) {
          soundUpDecoElAll[0].classList.remove("on");
          soundMutedDecoElAll[0].classList.add("on");
         }
        })
      }

      //replay BTN 클릭 이벤트 (*위 함수는 리플레이 컨트롤러가 나올 뿐 클릭 기능은 없다. 아래 함수가 리플레이 클릭이벤트)
      replayControlElAll[0].addEventListener("click", () => {
        replayDecoEl[0].setAttribute("style", "transform: rotate(0deg);");//버튼 예쁘게 애니적용
        setTimeout(function(){
        replayDecoEl[0].setAttribute("style", "transition: 2s; transform: rotate(-90deg); opacity: 0; visibility: hidden;");
        }, 500);//버튼 예쁘게 애니 적용하고 사라져버고~~~
        setTimeout(function(){
          replayControlElAll[0].classList.remove("on");
          replayDecoEl[0].removeAttribute("style")
        }, 3000);//리플레이 버튼 초기화(나중에 또 누를 수 있으니)
        mvContainer[0].setAttribute("style", "opacity: 1; visibility: visible; transition-delay: 1.5s;")//영상화면 소환
        mutedControlContainer[0].setAttribute("style", "opacity: 1;")//뮤트버튼 소환
        mvEl[0].muted = true;//ㅠㅠ 정책으로 뮤트해야...재생됨
        mvEl[0].load()//첫화면부터 시작할 수 있게 로드 한번 걸어줌
        mvEl[0].play();//영상 고고
        //영상 끝나고 나서 이벤트 설정, if는 필요없음 영상이 끝나야 아래 이벤트가 발생하니
        //슬라이드변경시에는 아래 슬라이드변경 함수를 따르게 되어 있음.
        videoElAll[0].addEventListener("ended", ()=>{
        mvContainer[0].setAttribute("style", "opacity: 0; visibility: hidden;")
        mvEl[0].pause();
        mutedControlContainer[0].setAttribute("style", "opacity: 0; visibility: hidden; transition-delay: 0s;")
        replayControlElAll[0].classList.add("on");
        if(soundUpDecoElAll[0].classList.contains("on")) {
          soundUpDecoElAll[0].classList.remove("on");
          soundMutedDecoElAll[0].classList.add("on");
          }
        })
      }) 

      //동영상 음소거 BTN, 음소거 실제 뮤트기능 온오프
      soundMutedDecoElAll[0].addEventListener("click", () => {
      if (soundMutedDecoElAll[0].classList.contains("on")) {
        soundMutedDecoElAll[0].classList.remove("on");
        soundUpDecoElAll[0].classList.add("on");
        mvEl[0].muted = false;
      }
      })
      soundUpDecoElAll[0].addEventListener("click", () => {
      if (soundUpDecoElAll[0].classList.contains("on")) {
        soundUpDecoElAll[0].classList.remove("on");
        soundMutedDecoElAll[0].classList.add("on");
        mvEl[0].muted = true;
      }
      })
    },

    //슬라이드 체인지의 움직임이 감지되면 실행하는 함수
    slideChange: function () {
    //함수선언식으로 외부에서 소환
    mvPlayer();
    
   },
  }
});

//동영상재생 및 화면전환 함수
//이걸 소환해서 사용하면 편함
function mvPlayer () {
  let swiperCurrentIndex = swiper.activeIndex;
  let swiperPreIndex = swiper.previousIndex;
  let swiperNextIndex = swiperCurrentIndex + 1;
  
  //현재 active 화면에서 영상 띄우고, 이하 위와 같음
  mvContainer[swiperCurrentIndex].setAttribute("style", "opacity: 1; visibility: visible; transition-delay: 1.5s;")
  mvEl[swiperCurrentIndex].muted = true;
  mvEl[swiperCurrentIndex].play();
  mutedControlContainer[swiperCurrentIndex].setAttribute("style", "opacity: 1;")
  
    videoElAll[swiperCurrentIndex].addEventListener("ended", ()=>{
    mvContainer[swiperCurrentIndex].setAttribute("style", "opacity: 0; visibility: hidden;")
    mvEl[swiperCurrentIndex].pause();
    mutedControlContainer[swiperCurrentIndex].setAttribute("style", "opacity: 0; visibility: hidden; transition-delay: 0s;")
    replayControlElAll[swiperCurrentIndex].classList.add("on");
    if(soundUpDecoElAll[swiperCurrentIndex].classList.contains("on")) {
      soundUpDecoElAll[swiperCurrentIndex].classList.remove("on");
      soundMutedDecoElAll[swiperCurrentIndex].classList.add("on");
   }
  })

  //replay BTN 
  replayControlElAll[swiperCurrentIndex].addEventListener("click", () => {
    replayDecoEl[swiperCurrentIndex].setAttribute("style", "transform: rotate(0deg);");
    setTimeout(function(){
    replayDecoEl[swiperCurrentIndex].setAttribute("style", "transition: 2s; transform: rotate(-90deg); opacity: 0; visibility: hidden;");
    }, 500);
    setTimeout(function(){
      replayControlElAll[swiperCurrentIndex].classList.remove("on");
      replayDecoEl[swiperCurrentIndex].removeAttribute("style")
    }, 3000);
    mvContainer[swiperCurrentIndex].setAttribute("style", "opacity: 1; visibility: visible; transition-delay: 1.5s;")
    mutedControlContainer[swiperCurrentIndex].setAttribute("style", "opacity: 1;")
    mvEl[swiperCurrentIndex].muted = true;
    mvEl[swiperCurrentIndex].load()
    mvEl[swiperCurrentIndex].play();
    videoElAll[swiperCurrentIndex].addEventListener("ended", ()=>{
    mvContainer[swiperCurrentIndex].setAttribute("style", "opacity: 0; visibility: hidden;")
    mvEl[swiperCurrentIndex].pause();
    mutedControlContainer[swiperCurrentIndex].setAttribute("style", "opacity: 0; visibility: hidden; transition-delay: 0s;")
    replayControlElAll[swiperCurrentIndex].classList.add("on");
    if(soundUpDecoElAll[swiperCurrentIndex].classList.contains("on")) {
      soundUpDecoElAll[swiperCurrentIndex].classList.remove("on");
      soundMutedDecoElAll[swiperCurrentIndex].classList.add("on");
      }
    })
  })

  //화면 이동시 앞 뒤 화면들 컨트롤
  //이 놈이 여기선 메인
  //슬라이드 움직임을 감지하여 프레와 넥스트슬라이드의 재생을 멈추고, 영상을 첫 화면으로 돌려놓으며, 뮤트버튼 활성화 및 컨트롤을 숨기고, 자켓 앨범 이미지로 변환시킴
  //즉, 초기화면상태로 만드는 함수
  if (preNum < swiperCurrentIndex) {
  mvEl[swiperPreIndex].load();
  mvEl[swiperPreIndex].pause(); //정지 바로 먹여버림
  mvContainer[swiperPreIndex].setAttribute("style", "opacity: 0; visibility: hidden; transition-delay: 0s;") //화면숨김
  soundUpDecoElAll[swiperPreIndex].classList.remove("on"); //사운드 온 버튼 지우기
  soundMutedDecoElAll[swiperPreIndex].classList.add("on"); //뮤트 버튼 활성화
  mutedControlContainer[swiperPreIndex].setAttribute("style", "opacity: 0; visibility: hidden; transition-delay: 0s;")//뮤트 컨트롤 모두 숨기기
  replayControlElAll[swiperPreIndex].classList.remove("on");//리플레이버튼도 숨기기
  } else {
    //위와 같은데 단지 next인덱스 번호를 반환해준다는 것만 차이가 있음
  mvEl[swiperNextIndex].load();
  mvEl[swiperNextIndex].pause();
  mvContainer[swiperNextIndex].setAttribute("style", "opacity: 0; visibility: hidden; transition-delay: 0s;")
  soundUpDecoElAll[swiperNextIndex].classList.remove("on");
  soundMutedDecoElAll[swiperNextIndex].classList.add("on");
  mutedControlContainer[swiperNextIndex].setAttribute("style", "opacity: 0; visibility: hidden; transition-delay: 0s;")
  replayControlElAll[swiperNextIndex].classList.remove("on");//리플레이버튼도 숨기기
  }

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