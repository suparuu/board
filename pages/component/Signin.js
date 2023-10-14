//회원가입 화면
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Signincss from "@/styles/Signincss.module.css";

const Signin = () => {
  const router = useRouter();

  useEffect(() => {
    axios.get("../api/User").then((res) => {
      console.log(res, "User 데이터 확인");
    });
  }, []);

  function signInData(e) {
    e.preventDefault();
    let UserName, ID, Password, Tel;
    UserName = e.target.UserName.value;
    ID = e.target.ID.value;
    Password = e.target.Password.value;
    Tel = e.target.Tel.value;

    axios.post("../api/User", { UserName, ID, Password, Tel });
    router.push("./Signup");
    alert("회원가입이 완료되었습니다!");
  }

  return (
    <article className={Signincss.article_box}>
      <div className={Signincss.center_box}>
        <h2 className={Signincss.h2}>회원가입</h2>
        <form onSubmit={signInData}>
          <div className={Signincss.submit_box}>
            <div className={Signincss.input_div}>
              <input placeholder="이름" name="UserName" ></input>
            </div>
            <div className={Signincss.input_div}>
              <input placeholder="아이디" name="ID"></input>
            </div>
            <div className={Signincss.input_div}>
              <input
                placeholder="비밀번호"
                name="Password"
                type={"password"}
              ></input>
            </div>
            <div className={Signincss.input_div}>
              <input placeholder="전화번호" name="Tel"></input>
            </div>
            <div className={Signincss.signin_box}>
            <input type="submit" value="회원가입"></input>
            </div>
          </div>
        </form>
      </div>
    </article>
  );
};

export default Signin;
