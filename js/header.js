  $(".search__icon").click(() => {
    if($(".search").hasClass("on") !== true) {
      $(".search").addClass("on");
      $(".search__icon").addClass("on");
      $(".search").attr("placeholder", "노래제목,  가수,  장르");
    }
  })

  $(window).mousedown(function(e) {
    let eTargetId = e.target.id
    if(eTargetId !== "no-hidden") {
      $(".search").removeClass("on");
      $(".search__icon").removeClass("on");
      $(".search").removeAttr("placeholder", "노래제목,  가수,  장르");
    }
  })

for (let i = 1; i <= 4; i += 1) {
  let profileIcons = document.querySelector(`.icon${i}`);
  profileIcons.setAttribute("style", `background-image: url("../img/netflix_logo/nav_logo/netflixMusic_default-login${i}.png")`);
}

// $(".login").mouseover(() => {
//   $(".login__submenus")
// })