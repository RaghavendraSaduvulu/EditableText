import styled from 'styled-components'

export const EditableTextContainer = styled.div`
  background-color: #f5d0fe;
  height: 100vh;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const EditableTextContent = styled.div`
  background-color: #ffffff;
  padding: 30px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const EditableTextHeading = styled.h1`
  font-family: roboto;
  font-weight: 500;
  font-size: 25px;
  color: #000000;
  text-align: center;
`

export const EditableTextBtnWithInput = styled.div`
  display: flex;
  flex-direction: row;
`

export const EditableTextInput = styled.input`
  height: 35px;
  padding: 5px 10px;
  margin: 10px;
  color: #323f4b;
  border: 1px solid #cbd2d9;
  border-radius: 4px;
  align-self: center;
  font-family: roboto;
  font-weight: 400;
  font-size: 16px;
`

export const EditableTextPara = styled.p`
  font-family: roboto;
  font-weight: 500;
  font-size: 16px;
  color: #323f4b;
  align-self: center;
`

export const EditableTextEditBtn = styled.button`
  font-family: roboto;
  align-self: center;
  font-size: 16px;
  font-weight: 400;
  background-color: #d946ef;
  color: #ffffff;
  height: 35px;
  width: 60px;
  border: none;
  outline: none;
  padding: 5px;
  margin: 5px;
  border-radius: 4px;
`

export const EditableTextSaveBtn = styled(EditableTextEditBtn)``
