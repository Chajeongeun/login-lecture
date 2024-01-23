"use strict";

const express = require("express"); 
const router = express.Router(); //보통 app 대신 router로 많이 씀

const ctrl = require("./home.ctrl")

router.get("/", ctrl.output.home); //원래 app.get> router.get으로
router.get("/login", ctrl.output.login);
router.post("/login", ctrl.process.login); //프엔 데이터를 받아 처리하는 애

module.exports = router; // 라우터를 외부로부터 사용할 수 있도록 내보내기 명령