//로그인 전 메인화면
import Boards from '@/pages/component/Boards'
import Header from '@/pages/component/Header'
import Headmeta from '@/pages/component/Headmeta'
export default function Home() {
  return (
    <>
     <Headmeta></Headmeta>
     <Header></Header>
     <Boards></Boards>
    </>
  )
}
