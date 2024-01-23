"use strict";

const id = document.querySelector("#id"), // #은 태그안 id
    psword = document.querySelector("#psword"),
    loginBtn = document.querySelector("button");


loginBtn.addEventListener("click", login);

function login() {
    const req = {
        id: id.value,
        psword: psword.value,
    };
}

// DOM // js 에서 html의 존재하는 데이터를 가져와서 제어할수있는것