const { createPool } = require('mysql');

const pool = createPool({
  host: '127.0.0.1',
  user: 'root',
  port: 3306,
  password: 'kimw7991!',
  database: 'crud_board'
}); // db 연결

pool.getConnection((err) => {
  if (err) {
    console.error('MySQL 연결 오류:', err);
    return;
  }
  console.log('MySQL 데이터베이스에 연결되었습니다.');
});// db 연결 확인 작업





const executeQuery = async (query, arraParms) => {
    return await new Promise((resolve) => {
      pool.query(query, arraParms, (err, data) => {
        
        resolve(data);
      });
    });
  };

module.exports = { executeQuery };
