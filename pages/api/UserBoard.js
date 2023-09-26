//UserBoard 테이블
import { executeQuery } from "../../data/db.js";
export default function handler(req, res) {
  const { method, body, query } = req;

  switch (method) {
    case "GET":
      dataGet(); //read 메소드
      break;
    case "POST":
      dataCreate(); //create 메소드
      break;

    async function dataGet(){
        try {
            let data = await executeQuery("select * from UserBoard order by UserBoardID DESC" , []);
            res.json(data)

        } catch(error) {
            res.send(error)
        }
    }
  }
}
