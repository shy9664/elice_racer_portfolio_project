import styled from "styled-components"

const StyledNetworkDataPiece = styled.div`
  border: solid 1px black;
  width: 200px;
`

const NetworkDataPiece = ({userData}) => { 
  
  return (
    <StyledNetworkDataPiece>
      <p>{userData.user_name}</p>
      <button>유저정보보기</button>
    </StyledNetworkDataPiece>
  )
}

const Network = ({networkData}) => {

  const networkDataList = networkData.map((userData, i) => 
    <div key={i}>
      <NetworkDataPiece userData={userData}/>
    </div>
    );
  
  return (
    <div>
      {networkData && networkDataList}
    </div>
  )
}

export default Network;