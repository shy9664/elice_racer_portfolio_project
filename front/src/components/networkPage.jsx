import getNetwork from '../apis/network'
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Network from './network';

const NetworkPageWrapper = styled.div`
  display: grid;
  border: solid 1px black;
`


const NetworkPage = () => {

  const [networkData, setNetworkData] = useState([]);

  useEffect(() => {
    fetchNetworkDatas()
  }, [])

  const fetchNetworkDatas = async () => {
    const gotNetworkDatas = await getNetwork()
    setNetworkData(gotNetworkDatas)
  }

  return (
    <div>
      <h2>네트워크 페이지 입니다</h2>
      {(networkData.length == 0) ? <h3>유저가 없습니다</h3> :
      <Network networkData={networkData}/>
      }
    </div>
  )
}

export default NetworkPage; 
