//로그인 이후 메인화면
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Headmeta from '@/pages/component/Headmeta'
import Boardscss from "@/styles/Boardscss.module.css";
import axios from "axios";
import Header_user from "../Header_user";
import Pagination from "../Pagination";

export default function Login(){

  const router = useRouter();

    const [post, setPost] = useState([]);//Posts(게시글) DB 데이터들
    const [userData , setUserData] = useState();//User DB 데이터들 
    const [filtered, setFiltered] = useState();//filter한 userID값
    const [test , setTest] = useState();
    const [postsPerPage] = useState(10);//게시글 10개
    const [currentPage , setCurrentPage] = useState(1);//게시글 1개


    const totalPages = Math.ceil(post.length / postsPerPage)
    
    function handlePageChange(pageNumber) {
      if( pageNumber >= 1 && pageNumber <= totalPages) {
        setCurrentPage(pageNumber);
      }
    }//페이지 변경 시 현재 페이지 업데이트

    function goWrite() {
      router.push({
       pathname : "../Write",
       query : userData,//write.js 갔을때 userDB전송 
      });
    }//write component로 이동

    useEffect(() => {
      axios.get("/api/Posts").then((res) => {
        console.log(res.data, "boardjs 입니다.");
        setPost(res.data);//Posts DB useState로 보내주기
        
      });//api/Posts 데이터 불러오기 추후에 삭제 예정
      setUserData(router.query)
      
     
    }, []);//UserBoard DB 연결
    console.log(userData , 'userData 확인')
    console.log(router.query.UserID)
    let loginID = parseInt(router.query.UserID) //router.query.UserID << 로그인 id값
    //parseInt = 문자열을 int 값으로 변환 


    // function deleteData(obj){
    //   let id = obj.id // 게시글 id값
    //   let author_id = obj.author_id // 게시글 author_id값
      
    //   if(obj.author_id === loginID){//누른 DB의 id 값과 로그인한 id 값이 같으면 삭제
        
    //     console.log(id ,'누른놈의 INT값')
    //     console.log(author_id , '게시글 author_id값')

    //     axios.delete(`/api/Posts`, {
    //       data :{
    //         id , loginID 
    //       },}
    //      )

    //     alert('삭제되었습니다!')
    //   } else{//아니면 권한 X
    //     console.log(author_id , ' 실패')
    //     alert('삭제 권한이 없습니다.')
    //   }
      
      
    // } // Post.js로 옮겼음

    function gotoPost(post){
      console.log(post, ' 클릭값 확인')
      console.log(post.target , 'target')
  
    router.push({
      pathname : "../Post",
      query :  {
        UserName : userData.UserName,//로그인한 이름
        loginID : loginID,//로그인한 ID 값 
        id : post.id,//클릭한 게시글의 id값
        title : post.title,//클릭한 게시글의 제목
        name : post.author_name,//클릭한 게시글의 작성자
        time : post.created_at,//클릭한 게시글의 작성일
        content : post.content,//클릭한 게시글의 내용
        postID : post.author_id // 클릭한 게시글 작성자의 id 
      }
    })
    }

    return(
        <>
        <Headmeta></Headmeta>
        <Header_user></Header_user>
        <section className={Boardscss.section}>
        <div>
        </div>
      </section>

      <section className={Boardscss.board}>
          <div className={Boardscss.user_name}>
              <h1>{router.query.UserName}님 반갑습니다</h1>
          </div>
        <article className={Boardscss.chart}>
          <div className={Boardscss.board_name}>
            <p>No</p>
            <p>제목</p>
            <p>이름</p>
            <p>날짜</p>
          </div>
          <div>
            {post &&
              post.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage).map((obj , i) => {
                console.log(obj)
                return (
                  <>
                  <hr className={Boardscss.gray_line}></hr>

                  <div key={i} className={Boardscss.board_datas} >
                    <ul>{obj.id}</ul>
                    <ul onClick={()=> gotoPost(obj)} className={Boardscss.title_underline}>{obj.title}</ul>
                    <ul>{obj.author_name}</ul>
                    <ul>{obj.created_at}</ul>
                  </div>
                  </>
                );
              })}
              {/* {post &&
              post.map((obj) => {
                return (
                  <Link href={{
                    pathname : `../Post?id=${obj.id}`,
                    state: { 
                      obj : obj
                    }
                  }}>
                  <div className={Boardscss.board_datas}>
                    <ul>{obj.id}</ul>
                    <ul>{obj.title}</ul>
                    <ul>{obj.author_name}</ul>
                    <ul>{obj.created_at}</ul>
                  </div>
                  </Link>

                );
              })} */}
          </div>
        </article>

        <Pagination
        currentPage={currentPage}
        totalPosts={post.length}
        postsPerPage={postsPerPage}
        onPageChange={handlePageChange}
      />

        <div className={Boardscss.btn_box}>
          <button onClick={() => goWrite()} className={Boardscss.write_btn}>글쓰러 가기</button>
        </div>
          {/* <Link href="../Write"  userID={userID}>
          <div>
            <button>글쓰러 가기</button>
          </div>
          </Link> */}
      </section>


       </>
    );

}