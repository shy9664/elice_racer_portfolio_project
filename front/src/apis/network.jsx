import axios from "axios";

export const getNetwork = async () => {

  const url = 'http://127.0.0.1:5000/network';

  const res = await axios.get(url);
  return res.data.data
  
}

export default getNetwork;