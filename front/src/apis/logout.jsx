import axios from "axios"

const logout = async () => {
    
    const url = 'http://localhost:5000/api/logout';
    
    await axios.get(url);
}

export default logout;