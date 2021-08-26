import axios from "axios"

const login = async (loginForm) => {

    const url = 'http://127.0.0.1:5000';
    let form = new FormData()
    form.append('user_id', loginForm.userId)
    form.append('user_pw', loginForm.userPw)
    
    const res = await axios.post(url, form);

    return res.data.data.user_id
}

export default login;