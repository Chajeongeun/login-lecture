"use strict"; //문법 준수하겠다 뜻

// 모듈
const express = require("express"); 
const bodyParser = require("body-parser"); //routes- req.body를 잘 파싱해오기 위해서
const app = express(); //app변수안에 넣어주기

// 라우팅 
const home = require("./src/routes/home") // home을 정의, 리콰이얼해서 폴더 불러오기

// 앱 세팅
app.set("views", "./src/views"); //화면 view 관리해줄 폴더이름을 두번째 파라미터로 넘겨줌
app.set("view engine", "ejs"); //뷰 코드 엔진을 ejs(html과 유사)를 사용
app.use(express.static(`${__dirname}/src/public`)); // view와 자스 연결위한것  ' '아니라 ` `였네^^..
app.use(bodyParser.json()); // bodyPaser가 json 데이터를 파싱해 올수 있도록 명시
// v URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함 될 경우 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({ extended: true })); 


//라우팅한건 라우팅 폴더로 옮겨버리기

//app.js와 index.js를 연결 시키는 
app.use("/", home); // use -> 미들웨어를 등록해주는 메소드

module.exports = app;