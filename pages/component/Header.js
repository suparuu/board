//로그인 전 header component
import React, { useEffect, useState } from "react";
import Headercss from "@/styles/Headercss.module.css";
import { useRouter } from "next/router";
import Link from "next/link";

const Header = () => {


  return (
    <>
      <section className={Headercss.head}>
        <div className={Headercss.h1_box}>
          <h1>Suparuu</h1>
        </div>
        <form className={Headercss.form_class}>
          <div className={Headercss.head_right}>
            <div className={Headercss.a_box}>
                <Link href='./component/Signin' className={Headercss.after_line}>회원가입</Link>
                <div className={Headercss.column_line}></div>
                <Link href='./component/Signup' className={Headercss.after_line}>로그인</Link>
            </div>
          </div>
        </form>
      </section>
      <div className={Headercss.title_box}>
        <h2>CRUD 게시판</h2>
      </div>
    </>
  );
};

export default Header;
