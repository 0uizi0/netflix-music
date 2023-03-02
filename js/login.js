const id = document.querySelector("input.login-id");
const password = document.querySelector("input.login-pw");

const loginBtn = document.querySelector(".login-btn");
const test = document.querySelector(".qqq");

loginBtn.addEventListener("click", function(e){
    if(id.value==="111" && password.value==="111"){
        test.textContent = "ok";
        location.href="./index.html";
    }else{
        test.textContent = "x";
    }
})
