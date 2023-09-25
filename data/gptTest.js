// config/db.js

const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost', // MySQL 호스트 주소
  user: 'root', // MySQL 사용자 이름
  password: 'kimw7991!', // MySQL 비밀번호
  database: 'crud_board', // 사용할 데이터베이스 이름
  waitForConnections: true,
  connectionLimit: 10, // 연결 풀에서 사용할 최대 연결 수
  queueLimit: 0, // 대기열 제한 (0은 제한 없음을 의미)
});
pool.getConnection(()=>{
  console.log('연걸 성공')
})

module.exports = {pool};
