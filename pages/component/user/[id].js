//로그인 이후 메인화면
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Headmeta from '@/pages/component/Headmeta'
import Boardscss from "@/styles/Boardscss.module.css";
import axios from "axios";
import Header_user from "../Header_user";


export default function Login(){

  const router = useRouter();
    const [post, setPost] = useState([]);//Posts DB 데이터들
    const [userData , setUserData] = useState();//User DB 데이터들 
    const [filtered, setFiltered] = useState();//filter한 userID값

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
        
      });
      setUserData(router.query)
     
    }, []);//UserBoard DB 연결
    let loginID = parseInt(router.query.UserID) //router.query.UserID 문자열을 int 값으로 변환
    function deleteData(obj){
      console.log(obj.author_id ,'누른놈의 INT값')

      if(obj.author_id === loginID){//누른 DB의 id 값과 로그인한 id 값이 같으면 삭제
        alert('삭제되었습니다!')
      } else{//아니면 권한 X
        alert('삭제 권한이 없습니다.')
      }
      
      // axios.get("/api/User").then((res)=>{
      //   console.log(res.data , 'user데이터 확인')
      //   let filterValue = res.data.filter((user)=> user.UserID === obj.author_id);//필터해서 int값만 나옴
      //   console.log(filterValue[0].UserID , '필터')
      //   setFiltered(filterValue[0].UserID)//useState를 통해서 값을 전달해주니 한박자 늦게 들어감
      //   console.log(obj)//왜 너는 int값인데
      //   console.log(obj.author_id, '클릭한 id')
      //   if(obj.author_id === filterValue[0].UserID){
      //     alert('삭제 권한이 없습니다.')
      //   } else{
      //     axios.delete("/api/Posts").then((res)=>{
      //       console.log(res)
      //     })
      //     alert('삭제 되었습니다!')
      //   }
      // })
     
      
    }

    return(
        <>
        <Headmeta></Headmeta>
        <Header_user></Header_user>
        <section className={Boardscss.section}>
        <div>
          <div>
              <h1>{router.query.UserName}님 반갑습니다</h1>
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
                    <button>수정</button>
                    <button onClick={()=> deleteData(obj)}>삭제</button>
                  </div>
                );
              })}
          </div>
        </article>
          <button onClick={() => goWrite()}>글쓰러 가기</button>
          {/* <Link href="../Write"  userID={userID}>
          <div>
            <button>글쓰러 가기</button>
          </div>
          </Link> */}
      </section>


       </>
    );

}