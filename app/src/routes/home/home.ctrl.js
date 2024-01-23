"use strict";

const home = (req, res)=> { 
    res.render("home/index");   //views를 이미 설정해서 뒤에만
};

const login = (req, res)=> {
    res.render("home/login");
 };

 module.exports = { // 다른파일에서 사용하기 위해서 모듈로 빼기
    home, 
    login,
 };