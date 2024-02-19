import styled from 'styled-components';

export const CommentInputBox =styled.div`
display:flex;
width: 85%;
height: 50%;
padding:10px;
background-color: #F7F4EF;
`

export const CommentContainer =styled(CommentInputBox)`
display:flex;
flex-direction:column;
width: 85%;
height: 50%;
padding:10px;
background-color: #F7F4EF;
` 
export const CommentInputLeftBox =styled.div`
  display:flex;
  justify-content: space-between; 
  width: 95%;
`


export const CommentInputTextBox =styled.div`
display:flex;
flex-direction:column;
justify-content: center;
align-items: start;
width: 85%;
padding:10px;
gap: 5px;
`

export const CommentInputBtnBox =styled.div`
display:flex;
  flex-direction:column;
  justify-content: center;  
  padding:7px;
`


export const CommentInputContent =styled.input`
width:100%;
height:50%;
background-color: transparent;
border-style: none;
font-size: 20px;
:focus{
  outline: none;
}
`