import axios from "axios"

const logout = async () => {
    
    const url = 'http://127.0.0.1:5000/logout';
    
    const res = await axios.get(url);
    console.log(res.status, res.data)
}

export default logout;