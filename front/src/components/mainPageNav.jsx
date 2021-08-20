import { NavLink, useHistory } from "react-router-dom";
import logout from "../apis/logout";

const Navbar = () => {

  const history = useHistory();

  const handleLogout = () => {
    logout()
    history.push('/')
  }

  return(
    <nav>
      <NavLink to='/main'>메인</NavLink>
      <NavLink to='/network'>네트워크</NavLink>
      <button onClick={handleLogout}>로그아웃</button>
    </nav>
  )
}

export default Navbar;