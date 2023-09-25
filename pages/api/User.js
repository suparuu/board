import { executeQuery } from "../../data/db.js";

//회원 관리 DB
export default function handler(req, res) {
  const { method, body, query } = req;

  const data = {  }

  switch (method) {
    case "GET":
      dataGet();
      break;
    case "POST":
      dataCreate();
      break;
  }

  async function dataGet(){
    try {
        let data = await executeQuery("select * from User order by UserID DESC", []);
        res.status(200).send('유저 데이터 가져오기 성공');
        res.json(data);
    } catch(err) {
        res.send(err);
    }
  }

  async function dataCreate(){

    let { UserName , ID , Password , Tel } = body;

    let data = await executeQuery("insert into User (UserName , ID , Password , Tel ) values(?,?,?,?)", [UserName , ID , Password , Tel]);
    res.status(200).send("가입완료!");
    res.json(data);


  }
}
