"use strict"; //문법 준수하겠다 뜻

// 모듈
const express = require("express"); 
const app = express(); //app변수안에 넣어주기

// 라우팅 
const home = require("./src/routes/home") // home을 정의, 리콰이얼해서 폴더 불러오기

// 앱 세팅
app.set("views", "./src/views"); //화면 view 관리해줄 폴더이름을 두번째 파라미터로 넘겨줌
app.set("view engine", "ejs"); //뷰 코드 엔진을 ejs(html과 유사)를 사용
app.use(express.static(`${__dirname}/src/public`)); // view와 자스 연결위한것  ' '아니라 ` `였네^^..

//라우팅한건 라우팅 폴더로 옮겨버리기

//app.js와 index.js를 연결 시키는 
app.use("/", home); // use -> 미들웨어를 등록해주는 메소드

module.exports = app;