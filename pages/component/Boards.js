//게시판 내용들 그대로 쓸지 안쓸지는 모르겠음 . . 
import React, { useEffect, useState } from "react";
import Boardscss from "@/styles/Boardscss.module.css";
import axios from "axios";
import { useRouter } from "next/router";
import Pagination from "../component/Pagination"

const Boards = () => {
  const router = useRouter();
  const [post, setPost] = useState([]);
  const [postsPerPage] = useState(10); //게시글 10개
  const [currentPage, setCurrentPage] = useState(1); //게시글 1개

  const totalPages = Math.ceil(post.length / postsPerPage);


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


  function handlePageChange(pageNumber) {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  } //페이지 변경 시 현재 페이지 업데이트


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
              post.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage)
              .map((obj) => {
                return (
                  <>
                  <hr className={Boardscss.gray_line}></hr>
                  <div className={Boardscss.board_datas}>
                    <ul>{obj.id}</ul>
                    <ul className={Boardscss.title_underline}>{obj.title}</ul>
                    <ul>{obj.author_name}</ul>
                    <ul>{obj.created_at}</ul>
                  </div>
                  </>
                );
              })}
          </div>
        </article>
        <Pagination
          currentPage={currentPage}
          totalPosts={post.length}
          postsPerPage={postsPerPage}
          onPageChange={handlePageChange}
        />
        <div className={Boardscss.btn_box}>
          <button className={Boardscss.write_btn} onClick={() => goWrite()}>글쓰러 가기</button>
        </div>
      </section>
    </>
  );
};

export default Boards;
