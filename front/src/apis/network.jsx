import axios from "axios";

export const getNetwork = async (searchValue) => {

  const url = 'http://localhost:5000/api/network';

  if (searchValue === '') {searchValue = 'all'}
  const res = await axios.get(url, {params: {search:searchValue}});
  return res.data.data
}

export default getNetwork;