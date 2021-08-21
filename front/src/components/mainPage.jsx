import Navbar from './mainPageNav';
import Certificate from './portfolio/certificate';
import { useState } from 'react';
import { useLocation, Redirect } from 'react-router-dom';

const MainPage = () => {
  
// 여러 컴포넌트 보여주면될듯? 음 .. 근데.. 메인페이지, 네트워크, 유저정보 페이지에서 
// 다 Navbar를 쓰니까.  음 .. 공통으로 쓰도록 해야겠음. 아.. 
// 그러면 또 컴포넌트 추출하고, common format을 쓰도록 해야할 것 같은데 .. 
// 나중에 하도록 하고, 일단 소개/학력/수상/프로젝트/자격증 컴포넌트부터 만들자. 
// 데이터 받아오고. 
// 여기서 로그인 세션 정보 가져오는데 없으면 로그인페이지로 redirect해야지않나 

  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)

  const id = searchParams.get('id')

  if (!id) {
    return <Redirect to='/login' />
  }

  return (
    <div>
      <Navbar />
      <Certificate id={id}/>
    </div>
  )
}

export default MainPage; 
