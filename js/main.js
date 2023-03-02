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
    img: "3",
    name: "NewJeans 1st EP 'New Jeans'",
    artist: "NewJeans",
    date: "2022.8.1",
    item: "dance",
    country: "국내",
    info: "NewJeans 1st EP 'New Jeans' Album",
    infoSub:
      "1st EP 'New Jeans'는 NewJeans가 추구하는 '좋은 음악'에 대한 질문을 던진다.",
    track: {
      1: { title: "Attention", time: "02:58" },
      2: { title: "Hype Boy", time: "02:56" },
      3: { title: "Cookie", time: "03:53" },
      4: { title: "Hurt", time: "02:55" },
    },
  },
  {
    img: "4",
    name: "A&W",
    artist: "Lana Del Rey",
    date: "2023.02.13",
    item: "pop",
    country: "해외",
    info: "Lana Del Rey's New Single Album",
    infoSub:
      "라나 델 레이가 높은 관심 속에서 새 싱글을 발표했다. 7분의 긴 구성 중 전반부는 포크 스타일, 후반부는 힙합 비트가 중심에 있다. 라나 델 레이는 활동 초반에 힙합 비트를 즐겨 썼으며 'Born To Die' 같은 초기 히트곡을 트립 합으로 분류하는 이들도 있다. 제목 'A&W'는 'American Whore'를 뜻한다고 한다.",
    track: {
      1: { title: "A&W", time: "07:14" },
    },
  },
  {
    img: "5",
    name: "NewJeans 'OMG'",
    artist: "NewJeans",
    date: "2023.01.02",
    item: "dance",
    country: "국내",
    info: "NewJeans 1st Single EP 'New Jeans' Album",
    infoSub:
      "첫 겨울을 맞이하는 NewJeans의 새 앨범 “OMG”는 조금은 묘한 거리감, 조금은 낯선 배경 속에서 다시 한번 관계를 이야기한다. 그리고 그 안에 특별하고 의미 있는 선물을 담아내고 있다. 1st. EP “New Jeans”에서 담아냈던, 사람의 관계와 끌림에 대해 이야기하며 함께 있을 때 더 빛나는 10대 소녀들이 들려주는 '우리'라는 서사는 모습을 바꿔가며 또 한 번 펼쳐진다. 낯섦을 지나 공감, 환대, 호혜에 기반을 둘 때, '우리'는 더 가까워지고, 함께 성장한다고 믿는다.",
    track: {
      1: { title: "OMG", time: "03:32" },
      2: { title: "Ditto", time: "03:05" },
    },
  },
  {
    img: "6",
    name: "Band Of Dynamic Brothers",
    artist: "다이나믹 듀오",
    date: "2009.10.07",
    item: "hiphop",
    country: "국내",
    info: "다이나믹듀오의 5집 앨범",
    infoSub:
      "영화 “Band of Brothers'에서 영감을 얻은 이번 타이틀은 영화 안에서 군인들(이지중대)이 아닌 그들의 ‘음악 밴드’를 의미하며 결국 ”역동적인 음악을 하는 밴드 형제“들로 풀이 할 수 있다.",
    track: {
      1: {
        title: "그림에 떡 (Dynamic Sinsa Rangers)",
        time: "03:49",
      },
      2: { title: "돈이다가 아니야 (Get Money) (Feat. 강산에)", time: "04:04" },
      3: { title: "두꺼비집 (One More Drink) (Feat. 0cd)", time: "03:52" },
      4: {
        title:
          "잔돈은 됐어요 (Keep The Change) (Feat. Garie Of Leessang, Bumky Of Komplex)",
        time: "04:11",
      },
      5: { title: "죽일 놈 (Guilty)", time: "03:43" },
      6: {
        title: "왜 벌써가 (Be My Brownie) (Feat. Bumky Of Komplex)",
        time: "03:57",
      },
      7: { title: "Biggestmagicalvision", time: "01:05" },
      8: { title: "불꽃놀이 (Fireworks)", time: "03:52" },
      9: { title: "사우나 (Sauna) (Feat.E SENS)", time: "03:19" },
      10: { title: "월광증 (Moonstruck) (Feat. Simon D)", time: "04:17" },
      11: {
        title: "퉁 되는 Brothers (The Toong Bros) (Feat. Topbob)",
        time: "03:39",
      },
      12: { title: "Ugly", time: "03:31" },
      13: { title: "끝 (Apoptosis)", time: "05:36" },
      14: { title: "청춘 (Spring Time) (Feat. 김C)", time: "04:07" },
    },
  },
  {
    img: "7",
    name: "5.3",
    artist: "10CM",
    date: "2022.7.3",
    item: "kpop",
    country: "국내",
    info: "당신이 그려낼 이 여름의 그라데이션 10CM '5.3' 디지털 싱글 앨범",
    infoSub:
      "단조로운 하얀 일상에 번져버린 잉크 자국처럼, 상대에게 돌이킬 수 없이 빠져버린 마음을 담아낸 곡이다. '그라데이션'이라는 키워드로 '너로 물들어 버렸다'는 마음을 표현하는 이 곡이 올여름 당신의 마음도 짙게 물들이길 바란다.",
    track: {
      1: { title: "그라데이션", time: "03:21" },
      2: { title: "그라데이션(Inst)", time: "03:21" },
    },
  },
  {
    img: "8",
    name: "I NEVER DIE",
    artist: "(여자) 아이들",
    date: "2022.3.14",
    item: "kpop",
    country: "국내",
    info: "(여자)아이들의 첫 정규 앨범 [I NEVER DIE]",
    infoSub:
      "[I NEVER DIE]는 (여자)아이들에게 주어진 것뿐만 아니라 세상의 모든 편견에 대한 그들의 감정과 생각들을 고스란히 담아낸 앨범이다. 물러서지 않고 세상과 마주한 (여자)아이들은 나는 나일 뿐이라고 말하며 자신들의 가치를 절대 잃지 않는다.",
    track: {
      1: { title: "TOMBOY", time: "02:54" },
      2: { title: "말리지 마", time: "02:24" },
      3: { title: "VILLAIN DIES", time: "03:04" },
      4: { title: "ALREADY", time: "03:21" },
      5: { title: "POLAROID", time: "03:38" },
      6: { title: "ESCAPE", time: "03:29" },
      7: { title: "LIAR", time: "02:51" },
      8: { title: "MY BAG", time: "02:40" },
    },
  },
  {
    // { img: "9", name: "Teddy Bear", item: "dance" },
    img: "9",
    name: "Teddy Bear",
    artist: "STAYC",
    date: "2023.02.03",
    item: "dance",
    country: "국내",
    info: "STAYC 싱글 앨범",
    infoSub: "STAYC(스테이씨)의 밝고 키치한 ‘틴프레시(TEENFRESH)색으로 희망과 위안을 주는 긍정의 메시지!",
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
    name: "After Like",
    artist: "IVE",
    date: "2022.08.22",
    item: "kpop",
    country: "국내",
    info: "IVE 3RD SINGLE ALBUM <After LIKE>",
    infoSub: "자신감과 자유로움, 두 가지 키워드로 설명이 부족한 아이브가 다시 한 번 K팝 지형을 바꿀 준비를 마쳤다. 최고의 조합을 강조한 출사표 'ELEVEN', 6명 멤버들의 비주얼과 당당한 애티튜드를 드러낸 'LOVE DIVE', 그 다음은 다채로운 매력으로 가득 채운 'After LIKE'로 또 한 번 존재감을 증명할 차례다. 시작부터 완벽했던 아이브가 자신감 있게 새로운 시대를 예고한다.",
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
    name: "END THEORY",
    artist: "윤하",
    date: "2021.11.16",
    item: "kpop",
    country: "국내",
    info: "윤하 정규 6집 [End Theory]",
    infoSub: "딛고 지내온 모든 것들을 사랑하기로 했다. 정확히는, 사랑하는 선택을 하기로 했다. 그것은 시간이나 사람이나 감정의 형태로 남아있다. 더 이상의 시공간은 중요하지 않다. 주어진 시간이 얼만큼 남았는지는 모른다. 너와 내가 지나온 모든 것들이 우리를 만들었고, 그것은 대화의 주제로 이따금씩 돌아 볼 수 있겠지만 이상도 이하도 아니다. 다만, 서로를 제대로 사랑할 수 있는 이해의 기반이 되길바란다. 우리는 선택한 대로 살아간다. 설령, 선택이 정해져 있더라도.",
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
    name: "자격지심 (Feat. ZICO)",
    artist: "BE'O",
    date: "2022.09.29",
    item: "hiphop",
    country: "국내",
    info: "BE’O The 1st EP [FIVE SENSES]",
    infoSub: "있는 그대로의 ‘저’를 담아 보고 싶었어요. 감각, 경험, 감정. 제가 겪은 것들에 대해 솔직하고 꾸밈없이 음악으로 표현해보고 싶었거든요. 물론 보여드리고 싶지 않은 모습도 있지만 그런 모습들까지 보여드려야 진짜 저다운 앨범이 완성될 것 같았어요. 누구에게나 한 번쯤은 있었을 법한 이야기부터 저만 알고 싶은 개인적인 이야기까지. 제 노래가 여러분들께 ‘공감’이자 ‘위로’가 되었으면 좋겠습니다. ",
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
    name: "85mm",
    artist: "Ludovico Einaudi(루도비코 에이나우디)",
    date: "2023.02.24",
    item: "classic",
    country: "USA",
    info: "싱글",
    infoSub: "Ludovico Einaudi(루도비코 에이나우디) 뉴에이지 클래식 음악",
    track: {
      1: { title: "85mm", time: "02:59" },
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
  if (i < 30) {
    pic.setAttribute("data-item", `${arryAlbum[i].item}`); //추가한 코드
    // pic.setAttribute("id", `${arryAlbum[i].name}`);
    pic.setAttribute("name", `${newArryAlbum[i].name}`);
    pic.setAttribute("artist", `${newArryAlbum[i].artist}`);
    pic.setAttribute("date", `${newArryAlbum[i].date}`);
    pic.setAttribute("info", `${newArryAlbum[i].info}`);
    pic.setAttribute("info-sub", `${newArryAlbum[i].infoSub}`);
    // pic.setAttribute("track-title", `${newArryAlbum[i].track[1].title}`);

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
