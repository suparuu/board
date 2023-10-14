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
          <div className={Headercss.head_right}>
        <form>
            <div className={Headercss.a_box}>
                <Link href='./component/Signin' className={Headercss.after_line}>회원가입</Link>
                <Link href='./component/Signup' className={Headercss.before_line}>로그인</Link>
            </div>
        </form>
          </div>
      </section>
      <div className={Headercss.title_box}>
        <h2>CRUD 게시판</h2>
      </div>
    </>
  );
};

export default Header;
