import React, { useEffect, useState } from "react";
import Boardscss from "@/styles/Boardscss.module.css";
import axios from "axios";
import { useRouter } from "next/router";

const Boards = () => {
  const router = useRouter();

  const [post, setPost] = useState([]);

  function goWrite() {
    router.push("component/Write");
  }
  useEffect(() => {
    axios.get("/api/testDB").then((res) => {
      console.log(res.data, "boardjs 입니다.");
      setPost(res.data);
    });
  }, []);

  // useEffect(()=>{
  //     async function fetchPost() {

  //     try{
  //         const connection= await mysql.createConnection(executeQuery)
  //         const [rows] = await connection.execute('SELECT * FROM posts');
  //         connection.end();
  //         setPost(rows);

  //     } catch(err) {
  //         console.error('에러났어영' , err);
  //     }
  //     fetchPost();
  // }

  // },[])

  return (
    <>
      <section className={Boardscss.section}>
        <div>
          <div>
            <h1>~~게시판</h1>
          </div>
        </div>
      </section>

      <section className={Boardscss.board}>
        <article className={Boardscss.chart}>
          <div className={Boardscss.board_name}>
            <p>No</p>
            <p>제목</p>
            <p>이름</p>
            <p>날짜</p>
          </div>
          <div>
            {post &&
              post.map((obj) => {
                return (
                  <div className={Boardscss.board_datas}>
                    <ul>{obj.num}</ul>
                    <ul>{obj.title}</ul>
                    <ul>{obj.name}</ul>
                    <ul>{obj.date}</ul>
                  </div>
                );
              })}
          </div>
        </article>
        <div>
          <button onClick={() => goWrite()}>글쓰러 가기</button>
        </div>
      </section>
    </>
  );
};

export default Boards;
