import React, { useEffect, useState } from "react";
import Headercss from "@/styles/Headercss.module.css";
import { useRouter } from "next/router";
import Link from "next/link";

const Header = () => {
  const [menuname, setMenuname] = useState();
  const router = useRouter();

  useEffect(() => {
    const aTagname = [
      { name: "회원가입" , url: './component/Signin'},
      { name: "로그인" , url: './component/Signup' },
    ];
    setMenuname(aTagname);
  }, []);

  return (
    <>
      <section className={Headercss.head}>
        <form>
          <div className={Headercss.head_right}>
            <div className={Headercss.a_box}>
              {menuname &&
                menuname.map((obj) => {
                  return <Link href={obj.url} className={Headercss.after_line}>{obj.name}</Link>;
                })}
            </div>
          </div>
        </form>
        <div className={Headercss.h1_box}>
          <h1>CRUD 게시판</h1>
        </div>
      </section>
    </>
  );
};

export default Header;
