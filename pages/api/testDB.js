//테스트용 테이블
import { executeQuery } from "../../data/db.js";

export default function handler(req , res){
    const { method , body , query } = req;

    const data = { }
    // console.log(method, '메소드 확인')//create read update delete 
    // console.log(body, 'body 확인')// 아직 잘 모르겠음
    console.log(query, 'query 확인')//테이블 안에 있는 데이터들
    
    switch(method){
        case "GET" :
            dataGet();//read 메소드
            break;
        case "POST" :
            dataCreate();//post 메소드
            break;
    }

    async function dataGet(){
        try {
            let data = await executeQuery ("select * from test2 order by num DESC", []);
            res.json(data)
            // res.status(200).send('데이터 확인하기 ')
            
        } catch (err) {
            res.send(err)

        }
    }//read 메소드


  
     async function dataCreate(){

        let {  title , name  } = body;
        console.log(body , ' body 확인 ')

        let data = await executeQuery(
            "insert into test2 (title,name) values(?,?)",
            [ title , name ]
        );
        res.json(data)
        console.log(res , '넣기 확인')
        res.status(200).send('넣었습니당 .!!')
    }//create 메소드

}

