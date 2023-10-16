import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
const Update = () => {
    const [postChange , setPostChange] = useState()
    const router = useRouter()
    
    const postData = router.query;

    const postID = parseInt(router.query.postID)//query로 가져온 게시글 id의 int값

    useEffect(()=>{
        axios.get("../api/Posts").then((res)=>{
            console.log(res)
            let filtervalue = res.data.filter((obj)=> obj.id === postID);//누른 게시글의 id값을 filter
            console.log(filtervalue[0] , '필터 확인')
            setPostChange(filtervalue[0])
        } )
    },[])

    function updateData() {
        axios.put("../api/Posts", postChange)
        .then((res)=> {
            console.log("업데이트 완료")
            alert('수정 되었습니다!')
        })
        .catch((err) => console.error(err));

        router.push({
            pathname : `./user/${postChange.author_id}`,
            query : {
                 UserID : postChange.author_id,
                 UserName : postChange.author_name,
            }
        })


    }




    console.log(postChange , 'state값')
    console.log(postData , '쿼리 데이터 확인')
  return (
    <div>
        <form>
        <input type="text" placeholder='제목' onChange={(e)=> setPostChange({...postChange , title : e.target.value})}></input>
        <textarea placeholder='내용' onChange={(e)=> setPostChange({...postChange , content: e.target.value})}></textarea>
        </form>
        <div>
            <button onClick={()=> updateData()}>수정버튼</button>
        </div>
    </div>
  )
}

export default Update