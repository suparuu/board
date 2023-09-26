//로그인 이후 메인화면
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Boards from '@/pages/component/Boards'
import Header from '@/pages/component/Header'
import Headmeta from '@/pages/component/Headmeta'

export default function Login(){

    const router = useRouter();
    const UserID = router.query.id
    console.log(UserID)
    return(
        <>
        <Headmeta></Headmeta>
        <Header></Header>
        <Boards></Boards>
       </>
    );

}