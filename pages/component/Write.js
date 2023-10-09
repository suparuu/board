//게시글 작성 component
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import Writecss from "@/styles/Writecss.module.css";
const Write = () => {


  const [userData, setUserData] = useState();

  const router = useRouter();
  useEffect(() => {
    setUserData(router.query);
    axios.get("../api/Posts").then((res) => {
      console.log(res.data);
    });
  }, []);

  console.log(router.query, "[id].js 에서 가져온 UserID");
  function createData(e) {
    e.preventDefault();
    let title, content, author_name, author_id;

    author_name = router.query.UserName;
    author_id = router.query.UserID;
    title = e.target.title.value;
    content = e.target.content.value;
    if(title === ''){
      alert('제목을 입력해주세요!!!');
      e.preventDefault();
    } else if (content === '') {
      alert('내용을 입력해주세요!!!')
      e.preventDefault()
    } else {
      axios
        .post("../api/Posts", { title, content, author_name, author_id })
        .then((res) => {
          console.log(res, "데이터 삽입 확인");
          router.push({
            pathname: `./user/${author_id}`,
            query: userData,
          });
        });
      
    }
  }
  return (
    <article>
      <h1 className={Writecss.write_h1}>글쓰는 곳이에여</h1>
      <form onSubmit={createData}>
        <div className={Writecss.form_box}>
          <div className={Writecss.title_box}>
            <input
              name="title"
              className={Writecss.input_title}
              placeholder="제목을 입력해주세요"
            ></input>
          </div>
          <div className={Writecss.content_box}>
            <textarea
              name="content"
              className={Writecss.input_content}
              placeholder="내용을 입력해주세요"
            ></textarea>
          </div>
          <div className={Writecss.submit_box}>
            <button type="submit" className={Writecss.input_submit}>글쓰기</button>
          </div>
        </div>
      </form>
    </article>
  );
};

export default Write;
