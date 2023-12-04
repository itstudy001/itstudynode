//모듈 가져오기
const express = require('express');

//express 모듈 객체 생성
const app = express();
//웹 서버가 실행할 포트 설정
app.set('port', process.env.PORT || 3000);

//요청 처리 함수
app.get('/', (req, res) => {
  res.send('Hello, Express');
  
});

//서버 실행
app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기 중');
});
