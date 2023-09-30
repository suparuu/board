import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
const Write = () => {
    const [userData, setUserData] = useState();

    const router = useRouter();
    useEffect(()=>{
      setUserData(router.query)
        axios.get('../api/Posts').then((res)=>{
            console.log(res.data)

        })
    },[])

    console.log(router.query,'[id].js 에서 가져온 UserID')
  function createData(e) {
    e.preventDefault();
    let title , content , author_name , author_id;

    author_name = router.query.UserName;
    author_id = router.query.UserID;
    title = e.target.title.value;
    content = e.target.content.value;
    axios.post("../api/Posts", { title , content , author_name , author_id })
    .then((res)=>{
      console.log(res, '데이터 삽입 확인')
      router.push({
        pathname : `./user/${author_id}`,
        query :  userData 
      })
    })
 
  }
  return (
    <article>
        <h1>글쓰는 곳이에여</h1>
      <form onSubmit={createData}>
        <input name="title" placeholder="제목"></input>
        <input name="content" placeholder="내용"></input>
        <input type="submit"></input>
      </form>
    </article>
  );
};

export default Write;
