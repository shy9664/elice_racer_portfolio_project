import { useState, useEffect } from "react";
import { addCertificates, deleteCertificates, getCertificates, updateCertificates } from "../../apis/certificate";
import styled from 'styled-components'
import DatePicker from 'react-datepicker'

const StyledCertificate = styled.div`
  border: solid 1px black;
  width: 600px;
`

const StyledCertificatePiece = styled.div`
  border: solid 1px black;
`

const NewCertificate = ({addState, setAddState, userId, setCertificateDatas, certificateDatas}) => {
  
  const [addedCertificateData, setAddedCertificateData] = useState({title:'', organization:'', date:''});

  const handleChange = e => {
    const {name, value} = e.target;
    const newCertificateData = {...addedCertificateData};
    newCertificateData[name] = value;
    setAddedCertificateData(newCertificateData)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addCertificates(userId, addedCertificateData)
    setAddedCertificateData(addedCertificateData)
    const addedCertificateDatas = [...certificateDatas, addedCertificateData]
    setCertificateDatas(addedCertificateDatas)
    setAddedCertificateData({title:'', organization:'', date:''})
    setAddState(!addState)
  }

  return (
    <div>
      {addState ?
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='title'>자격증 명: </label>
            <input value={addedCertificateData.title} onChange={handleChange} name='title'></input><br />
          </div>
          <div>
          <label htmlFor='organization'> 발급 기관: </label>
          <input value={addedCertificateData.organization} onChange={handleChange} name='organization'></input><br />
          </div>
          <div>
          <label htmlFor='date'>취득 날짜: </label>
          <input value={addedCertificateData.date} onChange={handleChange} name='date'></input><br />
          </div>
          <button type='submit'>추가 완료</button>
        </form>
      </div>
      : null }
    </div>
  )
}

const CertificatePiece = ({id, title, organization, date, userId}) => { 

  const [editState, setEditState] = useState(false)  // True면 편집하는걸로 
  const [editedCertificateData, setEditedCertificateData] = useState({title, organization, date});

  const handleEdit = () => {
    setEditState(!editState)
  }

  const handleChange = e => {
    const {name, value} = e.target;
    const newCertificateData = {...editedCertificateData};
    newCertificateData[name] = value;
    setEditedCertificateData(newCertificateData)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    updateCertificates(id, editedCertificateData)  // 수정된 값으로 patch 날림 
    setEditedCertificateData(editedCertificateData)  // set을해도, 부모가 넘겨주는 데이터가 동일하기때문에 안바뀌는듯. 
    setEditState(!editState);  // 편집상태를 다시 조회상태로 되돌림.
    window.location.reload()
  }

  const handleDeleteBtn = () => {
    deleteCertificates(id)
    window.location.reload()
  }

  return (
  <StyledCertificatePiece>
    {!editState ?
    <div>
      <p>자격증 명: {title}</p>
      <p>발급 기관 :{organization}</p>
      <p>취득 날짜: {date}</p>
      <button onClick={handleEdit}>편집하기</button>
    </div>
    :
    <form onSubmit={handleSubmit}>
      <label htmlFor='title'>자격증 명: </label>
      <input value={editedCertificateData.title} onChange={handleChange} name='title'></input><br />
      <label htmlFor='organization'> 발급 기관: </label>
      <input value={editedCertificateData.organization} onChange={handleChange} name='organization'></input><br />
      <label htmlFor='date'>취득 날짜: </label>
      <input value={editedCertificateData.date} onChange={handleChange} name='date'></input><br />
      <button type='submit'>수정완료</button>
      <button type='button' onClick={handleDeleteBtn}>삭제하기</button>
    </form>
    }
  </StyledCertificatePiece>
  )
}

const Certificate = ({userId}) => { // id는 로그인한 유저 id임 

  console.log('hi')

  const [addState, setAddState] = useState(false) // True면 추가하는 폼을 렌더링하는걸로

  const [certificateDatas, setCertificateDatas] = useState([]);  // patch, delete, create할 때 이걸 바꿔줘야하는데

  useEffect(() => {
    fetchCertificateDatas()
}, [])   

  const fetchCertificateDatas = async () => {
    const gotCertificateDatas = await getCertificates(userId)
    setCertificateDatas(gotCertificateDatas)         // 반복문도.. 안됨.. 왜 무한루프돌지?
  }

  const handleAddBtn = () => {
    setAddState(!addState)
  }
  
  const certificateDataslist = certificateDatas.map((certificateData,i) => 
    <div key={i}>
      <CertificatePiece id={certificateData.id} title={certificateData.title} organization={certificateData.organization} date={certificateData.date} userId={userId} />
    </div>
    );

  return (
    <StyledCertificate>
      <h3>자격증</h3>
      {certificateDatas && certificateDataslist}
      {!addState ? <button onClick={handleAddBtn}>자격증 추가하기</button> : null}
      <NewCertificate addState={addState} setAddState={setAddState} userId={userId} setCertificateDatas={setCertificateDatas} certificateDatas={certificateDatas} />
    </StyledCertificate>
  )
}



export default Certificate;