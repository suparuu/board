//로그인
import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'


const Signup = () => {
    
    // useEffect(()=>{
    //     axios.get("../api/User").then((res)=>{
    //         console.log(res.data.filter((obj)=> obj.ID) ,'User 데이터 확인 ')
    
    //     })
    // },[])
    const router = useRouter()
    function sendData(e){
        e.preventDefault();
        let ID , Password;
        ID = e.target.ID.value;
        Password = e.target.Password.value;

        axios.get("../api/User").then((res)=>{
            console.log(res, 'res 확인')
            let filterValue = res.data.filter((obj)=> obj.ID === ID);
            console.log(filterValue[0] , '필터작업 확인')
            if(filterValue[0] === undefined) {
                alert('아이디를 확인해주세요.')
            } else if(filterValue[0].Password != Password){
                alert('비밀번호를 확인해주세요.')
            }
            else{
                router.push({
                    pathname : `./user/${filterValue[0].UserID}`,
                    query : {
                        UserID : filterValue[0].UserID,
                        UserName : filterValue[0].UserName
                    }
                })
            }
        })
        

    }

    function routeSignin(){
        router.push('./Signin')
    }

  return (
    
<>
    <article>
    <h2>로그인</h2>
    <form onSubmit={sendData}>
        <input placeholder='아이디' type={'id'} name='ID'></input>
        <input placeholder='비밀번호' type={'password'} name='Password'></input>
        <input type='submit' value='로그인'></input>
    </form>
    </article>
    <article>
        <div>

        <h3>회원이 아니세요?</h3>
        </div>
        <div>
            <button onClick={()=> routeSignin()}>회원가입</button>
        </div>

    </article>
</>
  )
}

export default Signup