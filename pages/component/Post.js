//게시글, 수정 및 삭제 component
import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Header_user from './Header_user'
axios
const Post = () => {

    const router = useRouter();

    const postData = router.query;

    console.log(postData,'postData');
    let loginID = parseInt(postData.loginID) //router.query.loginID << 로그인 id값
    console.log(loginID, '로그인 아이디')


    function deleteData(){

        let id = postData.id // 게시글 id값
        let PostID = postData.postID // 게시글 author_id값

        let intID = parseInt(PostID)
        console.log(id , PostID , '값 확인 ')
        if(intID === loginID){//누른 DB의 id 값과 로그인한 id 값이 같으면 삭제
          
          console.log(id ,'누른놈의 INT값')
          console.log(PostID , '게시글 author_id값')
          console.log(intID , 'int 값 변환 ')
  
          axios.delete(`/api/Posts`, {
            data :{
              id , loginID 
            },}
           )
          alert('삭제되었습니다!')
        //   router.push({
        //     pathname : `user/${postData.loginID}`,
        //     query : ''
        // })
        router.back();//router.back() 을 사용하면 안되지만 일단은 임시방편으로 사용
        } else{//아니면 권한 X
          console.log(PostID , ' 실패')
          alert('삭제 권한이 없습니다.')
        }
      }




  return (

    <>
    <Header_user></Header_user>
    <section>
        <div>
            <h2>글제목 : {router.query.title}</h2>
        </div>
        <div>
            <p>이름 : {router.query.name}</p>
            <p>시간 : {router.query.time}</p>
        </div>
        <div>
            <p>내용 : {router.query.content}</p>
        </div>
        <button>수정</button>
        <button onClick={()=> deleteData()}>삭제</button>
    </section>
    </>
  )
}

export default Post;