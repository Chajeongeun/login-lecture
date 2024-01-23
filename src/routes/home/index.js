"use strict";

const express = require("express"); 
const router = express.Router(); //보통 app 대신 router로 많이 씀

const ctrl = require("./home.ctrl")

router.get("/", ctrl.home); //원래 app.get> router.get으로
router.get("/login", ctrl.login);

module.exports = router; // 라우터를 외부로부터 사용할 수 있도록 내보내기 명령