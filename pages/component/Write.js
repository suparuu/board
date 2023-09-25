import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
const Write = () => {

    const router = useRouter();
    useEffect(()=>{
        axios.get('/api/testDB').then((res)=>{
            console.log(res.data)
        })
    },[])

 
  function createData(e) {
    e.preventDefault();
    let title, name

    title = e.target.title.value;
    name = e.target.name.value;
    axios.post("/api/testDB", { title, name  });
  }
  return (
    <article>
        <h1>글쓰는 곳이에여</h1>
      <form onSubmit={createData}>
        <input name="title" placeholder="제목"></input>
        <input name="name" placeholder="이름"></input>
        <input type="submit"></input>
      </form>
    </article>
  );
};

export default Write;
