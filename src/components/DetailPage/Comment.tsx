
import React, { useEffect, useState } from "react";
import { ImgBox } from "../../shared/Imgbox";
import { BlackText, GrayBtn, GrayText } from "../../shared/Text";
import { putComment } from "./uselogic/fetchCommentData";
import { fetchCommentLikeData } from "./uselogic/fetchLikeData";
import { deleteCommentData } from "./uselogic/deleteData";
import { CommentBox, CommentContainer, CommentLeftBox, CommentLikeBox, CommentModifyBox, CommentRightBox, CommentTextBox } from "./CommentLayout";
import { HeartIcon } from "../../shared/HeartIcon";
import ChildCommentList from "./ChildCommentList";
import styled from "styled-components";


interface CommentType{
page:number;
postId:number;
child:boolean;
profile_img: string;
comment_id: number;
user_id: number;
content: string;
create_date: string;
user_like:boolean;
like_count: number;
contact_user:number;
parentCommentId?:number;
}



const Comment = ({
  page,
  postId,
  child,
  profile_img,
  comment_id,
  user_id,
  content,
  create_date,
  user_like,
  like_count,
  contact_user,
  parentCommentId,
}
  :CommentType
) => {
  const [like, setLike] = useState<boolean>(false);
  const [modify, setModify] = useState<boolean>(false);
  const [replyContent, setReplyContent] = useState<string>(""); //수정창 인풋값
  const [showReply, setShowReply] = useState<boolean>(false);
  useEffect(()=>{    
    setShowReply(false);
    setLike(user_like)
  }
    ,[page, user_like])

  //좋아요 클릭
  const clickLike = () => {
    setLike(!like);
   fetchCommentLikeData(comment_id)
  };
 
  //수정 클릭
  const clickModify = () => {
    setModify(!modify);
  };
  // 수정창 전송클릭
  const clickSendComment=()=>{
    putComment(child,postId,replyContent,comment_id,parentCommentId)
    setReplyContent("")
    window.location.reload();

  }
  
  // 수정창 값 변경시  useState저장 이벤트 핸들러
  const handleReplyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReplyContent(e.target.value)
  }; 

  //댓글보기 클릭
  const toggleReplyInput=()=>{
    setShowReply(!showReply)

  }
  //삭제 클릭
  const clickDelete=()=>{
    deleteCommentData(comment_id)
    window.location.reload();
  }
  return ( 
  <CommentContainer>
    <CommentBox
      key={comment_id} >
      <ImgBox>
        <img src={profile_img} alt="이미지"></img>
      </ImgBox>
      <CommentTextBox> 
        <CommentLeftBox>
          <BlackText size={"18px"}>{user_id}</BlackText>
          {(modify && (
            <div style={{ display: "flex", width: "100%", gap: "5px" }}>
              <ModifyInputContent value={replyContent} onChange={handleReplyChange}
             
              ></ModifyInputContent>
              <GrayBtn  onClick={clickSendComment}>수정</GrayBtn>
            </div>
          )) || <BlackText size={"15px"}>{content}</BlackText>}
        </CommentLeftBox>
        <CommentRightBox>
        <CommentModifyBox>
        {
        //로그인 유저와 작성자가 동일시에만 수정 및 삭제 가능
        contact_user===user_id? <>
            <GrayText size={"13px"} onClick={clickModify}>
              {modify ? "취소" : "수정"}
            </GrayText>
            <GrayText onClick={clickDelete} size={"13px"}>삭제</GrayText>
          </>:""}
          <GrayText size={"13px"}>{create_date.slice(0, 10)}</GrayText>
       </CommentModifyBox>
          <CommentLikeBox>
            {//댓글의 자녀 댓글일시 대댓글 기능이 없음으로 댓글보기  미생성
              child? <></>:<BlackText size={"15px"} onClick={()=>toggleReplyInput()}>
              {showReply ? "닫기" : "댓글 보기"}
              
            </BlackText>
            }
            <div onClick={clickLike}>
              <HeartIcon like={like}></HeartIcon>
            </div>
            <BlackText size={"15px"}>{like_count}</BlackText>
          </CommentLikeBox>
        </CommentRightBox>
      </CommentTextBox>
    </CommentBox>
    {showReply&&<ChildCommentList totalPage={page} postId={postId} child={true} contact_user={contact_user} comment_id={comment_id}></ChildCommentList>||"" }
  </CommentContainer>
  );
};


export default Comment


 const ModifyInputContent =styled.input`
 display:flex;
 width:80%;
 height:80%;
  border-style: none;
  border: none;
  font-size: 20px;
:focus{
  outline: none;
}`
