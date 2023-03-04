//Dom
const idEl = document.querySelector(".login-id");
const pwEl = document.querySelector("#password__input");
const pw2El = document.querySelector("#password__check");
const joinConfirm = document.querySelector("#join__confirm");
const pwModatEl = document.querySelector("#pw_modal");;
const formEl = document.querySelector("#join-form")


function onPasswordCheck (event) {
  event.preventDefault();
  let pass1 = pwEl.value;
  let pass2 = pw2El.value;
  console.log(pass1);
  console.log(pass2);
  joinConfirm.addEventListener("click", () => {
    if(pass1 !== pass2) {
      pwModatEl.setAttribute("style", "display: flex");
    }
  })
}

formEl.addEventListener("submit", onPasswordCheck);

