"use strict"

const app = require("../app");
const PORT = 3000; // 바로 3000넣는건 안좋은 습관


app.listen(PORT, () => { //리슨이라는걸로 서버를 띄울수 있음
    console.log("서버 가동");
});