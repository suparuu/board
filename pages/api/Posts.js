//게시판 DB
import { executeQuery } from "../../data/db.js";

export default function handler(req, res) {
  const { method, body, query } = req;

  switch (method) {
    case "GET":
      dataGet();
      break;
    case "POST":
      dataCreate();
      break;
    case "DELETE":
      dataDelete();
      break;
  }

  async function dataGet() {
    try{
        let data = await executeQuery("select * from Posts order by id DESC", [])
        res.json(data);
    }   catch(err){
        res.send(err)
    }
  }

  async function dataCreate() {
    let { title, content , author_name , author_id } = body;
    let data = await executeQuery(
      "insert into Posts (title , content , author_name , author_id) values(?,?,?,?)",
      [ title, content , author_name , author_id ]
    );
    res.status(200).send("글이 등록 되었습니다!");
    res.json(data);
  }

  async function dataDelete(){
    let { id , loginID } = body;
    console.log(id, loginID ,  '받아온 id값과 loginID값')
    try{
      let data = await executeQuery(
        'delete from Posts where (id = ?) and (author_id = ?)' , [id , loginID]
      );
      res.status(200).send('글이 삭제 되었습니다.');
      res.json(data);
    } catch(err) {
      console.error(err ,'쿼리 삭제 에러 ')
    }
  }
}
