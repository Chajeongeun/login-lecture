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

    fetch("/login", { //데이터가 서버로 전달
        method: "POST",
        headers: {
            "Content-Type": "application/json" //내가 보내는 데이터 타입 표시
        },
        body: JSON.stringify(req) //req를 json 형태로 감싸줘야함
    })

}

// DOM // js 에서 html의 존재하는 데이터를 가져와서 제어할수있는것