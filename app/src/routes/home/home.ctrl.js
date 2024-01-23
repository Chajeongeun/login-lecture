"use strict";

const output = { //get과 post 차이 명확하게 보여주려고 안에 넣음
    home: (req, res)=> { 
        res.render("home/index");   //views를 이미 설정해서 뒤에만
    },
    
    login: (req, res)=> {
        res.render("home/login");
     },
};

const users = { // 인증위해서 해당 데이터를 서버가 가지고 있어야 하니 일단 만듦
    id: ["woorimIT", "나개발", "김팀장"],
    psword: ["1234", "1234", "123456"],
};

const process = { //로그인 인증하는 과정
    login: (req, res) => {
    const id= req.body.id,
     psword= req.body.psword;

    if (users.id.includes(id)) {//전달한 데이터가 users에 id가 있다면
        const idx = users.id.indexOf(id); //id의 인덱스를 idx로 가져오기 indexOf은 문자열에서 특정 문자열 찾고 위치 리턴
        if (users.psword[idx]== psword) { // user의 ps[해당 아이디 인덱스 위치 값]가 프엔에서 가져온 데이터와 같다면
        
            return res.json({ // 똑같이 json으로 응답
                success: true, //suc를 true로 만들어서 json으로 응답해주는것
            });
        }
    }

    return res.json ({ // else임
        success: false,
        msg: "로그인에 실패하셨습니다. ",
    });

        // console.log(id, psword); 확인용
    },
};


 module.exports = { // 다른파일에서 사용하기 위해서 모듈로 빼기
    output, 
    process,
 };