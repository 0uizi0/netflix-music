const id = document.querySelector("input.login-id");
const password = document.querySelector("input.login-pw");
const allText = document.querySelector(".allText");

const loginBtn = document.querySelector(".login-btn");

loginBtn.addEventListener("click", function(e){
    allText.innerText = "";
    if(id.value === "111" && password.value === "111"){
        //아이디가 111이고 비밀번호가 111이면 통과
        location.href="./index.html";
    }else if(id.value !="111" && password.value === "111"){
        //아이디가 111이 아니고, 비밀번호가 111이면
        allText.innerText = "아이디 형식이 맞지 않습니다.";
    }else if(id.value === "111" && password.value != "111"){
        //아이디가 111이고, 비밀번호가 111 아니면
        allText.innerText = "비밀번호를 잘못 입력하셨습니다.";
    }else if(id.value === "" && password.value === ""){
        //아이디, 비밀번호를 입력하지 않으면
        allText.innerText = "아이디와 비밀번호를 입력해주세요.";
    }else if(id.value != "111" && password.value != "111"){
        allText.innerText = "아이디와 비밀번호가 잘못되었습니다.";
    }
})
