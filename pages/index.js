import Boards from '@/pages/component/Boards'
import Header from '@/pages/component/Header'
import Headmeta from '@/pages/component/Headmeta'
import GptCRUD from './component/GptCRUD'
export default function Home() {
  return (
    <>
     <Headmeta></Headmeta>
     <Header></Header>
     <Boards></Boards>
     {/* <GptCRUD></GptCRUD> */}
    </>
  )
}
