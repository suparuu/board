//게시판 내용들 그대로 쓸지 안쓸지는 모르겠음 . . 
import React, { useEffect, useState } from "react";
import Boardscss from "@/styles/Boardscss.module.css";
import axios from "axios";
import { useRouter } from "next/router";

const Boards = () => {
  const router = useRouter();
  const [post, setPost] = useState([]);

  function goWrite() {
    alert('로그인 후 이용하세요')
    router.push("/component/Signup");
  }
  useEffect(() => {
    axios.get("/api/Posts").then((res) => {
      console.log(res.data, "boardjs 입니다.");
      setPost(res.data);
    });
  }, []);

  return (
    <>
      <section className={Boardscss.section}>
        <div>
          <div>
            
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
                    <ul>{obj.id}</ul>
                    <ul>{obj.title}</ul>
                    <ul>{obj.author_name}</ul>
                    <ul>{obj.created_at}</ul>
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
