import { useState, useEffect } from "react";
import getCertificate from "../../apis/certificate";

const Certificate = ({id}) => {

  const [certificateData, setCertificateData] = useState(null)

  

  // useEffect(() => (
  //   getCertificate()
  // , []))

  // console.log(certificateData)

  const handleCert = async () => {
    const gotData = await setCertificateData(getCertificate(id))
    setCertificateData(gotData)
    console.log(gotData)
  }

  return (
    <div>
      <button onClick={handleCert}>자격증 정보</button>
      {/* {certificateData} */}
    </div>
    
  )
}

export default Certificate;