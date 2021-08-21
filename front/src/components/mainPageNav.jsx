import { Link, useHistory } from "react-router-dom";
import logout from "../apis/logout";

const Navbar = () => {

  const history = useHistory();

  const handleLogout = () => {
    logout()
    history.push('/')
  }

  return(
    <nav>
      <Link to='/main'>메인</Link>
      <Link to='/network'>네트워크</Link>
      <button onClick={handleLogout}>로그아웃</button>
    </nav>
  )
}

export default Navbar;