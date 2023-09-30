import React, { useEffect, useState } from "react";
import Link from "next/link";
import Headercss from "@/styles/Headercss.module.css";

const Header_user = () => {

  return (
    <>
      <section className={Headercss.head}>
        <form>
          <div className={Headercss.head_right}>
            <div className={Headercss.a_box}>
                 <Link href='../../' className={Headercss.logout}>로그아웃</Link>
            </div>
          </div>
        </form>
        <div className={Headercss.h1_box}>
          <h1>CRUD 게시판</h1>
        </div>
      </section>
    </>
  )
}

export default Header_user