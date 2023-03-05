//Dom
const idEl = document.querySelector(".login-id");
const pwEl = document.querySelector("#password__input");
const pw2El = document.querySelector("#password__check");
const joinConfirm = document.querySelector("#join__confirm");
const pwModalEl = document.querySelector("#pw_modal-wrongPw");
const emptyModal = document.querySelector("#pw_modal-empty");
const emailWrongModal = document.querySelector("#pw_modal-wrongEmail");
const loginConfirm = document.querySelector("#pw_modal-joinConfirm");
const formEl = document.querySelector("#join-form");
//이메일 체크용 정규식
let regex = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

function onPasswordCheck (event) {
  event.preventDefault();
  let passInput = pwEl.value;
  let passCheck = pw2El.value;
  let idInput = idEl.value;
  if (passInput !== "" && passCheck !== "" && idInput !=="") {
    if (regex.test(idInput)) {
      if(passInput === passCheck) {
        loginConfirm.setAttribute("style", "display: flex;");
      } else {
        pwModalEl.setAttribute("style", "display: flex;");
      }

    } else {
      emailWrongModal.setAttribute("style", "display: flex;");
    }
 
  } else {
      emptyModal.setAttribute("style", "display: flex;");
  }
}

  
formEl.addEventListener("submit", onPasswordCheck);