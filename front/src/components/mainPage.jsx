import Navbar from './mainPageNav';
import { useState } from 'react';

const MainPage = () => {
  
// 여러 컴포넌트 보여주면될듯? 음 .. 근데.. 메인페이지, 네트워크, 유저정보 페이지에서 
// 다 Navbar를 쓰니까.  음 .. 공통으로 쓰도록 해야겠음. 아.. 
// 그러면 또 컴포넌트 추출하고, common format을 쓰도록 해야할 것 같은데 .. 
// 나중에 하도록 하고, 일단 소개/학력/수상/프로젝트/자격증 컴포넌트부터 만들자. 
// 데이터 받아오고. 


  return (
    <div>
      <Navbar /> 
    </div>
  )
}

export default MainPage; 
