import styled from 'styled-components'
import { Link, useHistory } from 'react-router-dom'
import { useState } from 'react'
import login from '../apis/login'

const LoginCSS = styled.div`
  display: flex;
  align-items: center;
  height: 400px;
  width: 500px;
`

const LoginPage = () => {

  const history = useHistory();
  
  const [loginData, setLoginData] = useState({userId: '', userPw: ''});

  const handleChange = (e) => {
    const {name, value} = e.target;
    const newLoginData = {...loginData};
    newLoginData[name] = value;
    setLoginData(newLoginData)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const id = await login(loginData)
    history.push(`/main?id=${id}`)
  }

  return (
    <LoginCSS>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="id">아이디</label><br />
          <input value={loginData.userId} onChange={handleChange} id='id' name='userId'/>
        </div>
        <div>
          <label htmlFor='pw'>비밀번호</label><br />
          <input value={loginData.userPw} onChange={handleChange} type="password" id='pw' name='userPw'/>
        </div>
        <button type='submit'>로그인</button>
      </form>
      <div>
        <Link to='/register'>회원가입하기</Link>
      </div>
    </LoginCSS>
  )
}

export default LoginPage ;