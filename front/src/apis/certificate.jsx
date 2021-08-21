import axios from "axios";

const getCertificate = async (id) => {

  const url = 'http://127.0.0.1:5000/portfolio/certificate';

  const res = await axios.get(url, {params: {id:id}})
  console.log(res)
  // const data = res.data.data.stored_certificate
  // const title = data.title
  // const organization = data.organization
  // const date = data. date
  // console.log(title, organization, date)
  // return title, organization, date
  return res
}

export default getCertificate;