import styled from "styled-components";

export const CommentBox=styled.div`
display:flex;
padding: 10px;
padding-bottom:20px;
width: 100%;
`
export const CommentContainer=styled(CommentBox)`
display:flex;
align-items: end;
flex-direction:column;
padding: 10px;
padding-bottom:20px;
width: 100%;`

export const CommentTextBox=styled.div`
display:flex;
justify-content: space-between;
width: 90%;
`


export const CommentLeftBox=styled.div`
display:flex;
flex-direction:column;
justify-content: center;
align-items: start;
width: 70%;
gap: 5px;
padding:7px;
`
export const CommentRightBox=styled.div`
display:flex;
flex-direction:column;
gap: 20px;
`

export const CommentModifyBox=styled.div`
display:flex;
justify-content: end;
gap: 5px;

`


export const CommentLikeBox=styled.div`
display:flex;
justify-content: end;
align-items: start;
`

 