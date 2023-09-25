import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
const Signin = () => {

    const router = useRouter();

    useEffect(()=>{
        axios.get("../api/User")
        .then((res)=>{
            console.log(res, 'User 데이터 확인')
        })
    },[]);


    function signInData(e){
        e.preventDefault();
        let UserName , ID , Password , Tel; 
        UserName = e.target.UserName.value;
        ID = e.target.ID.value;
        Password = e.target.Password.value;
        Tel = e.target.Tel.value;

        axios.post("../api/User" , {UserName , ID , Password , Tel});
        router.push("./Signup")
        alert('회원가입이 완료되었습니다!')

    }


  return (
    <article>
        <div>
            <form onSubmit={signInData}>
                <input placeholder='이름' name="UserName"></input>
                <input placeholder='아이디' name="ID"></input>
                <input placeholder='비밀번호' name="Password" type={"password"}></input>
                <input placeholder='전화번호' name='Tel'></input>
                <input type="submit" value="회원가입"></input>
            </form>
        </div>
    </article>
  )
}

export default Signin