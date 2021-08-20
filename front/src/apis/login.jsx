import axios from "axios"
import { useHistory } from "react-router";

const login = async (loginForm) => {

    const url = 'http://127.0.0.1:5000';
    let form = new FormData()
    form.append('user_id', loginForm.userId)
    form.append('user_pw', loginForm.userPw)
    
    const res = await axios.post(url, form);

    console.log(res.status, res.data.data.user_name)

    
}

export default login;