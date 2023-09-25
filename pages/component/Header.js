import React, { useEffect, useState } from "react";
import Headercss from "@/styles/Headercss.module.css";

const Header = () => {
  const [menuname, setMenuname] = useState();

  useEffect(() => {
    const aTagname = [
      { name: "회원가입" },
      { name: "로그인" },
      { name: "자유게시판" },
      { name: "전체게시판" },
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
                menuname.map((obj, i) => {
                  return <a className={Headercss.after_line}>{obj.name}</a>;
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
