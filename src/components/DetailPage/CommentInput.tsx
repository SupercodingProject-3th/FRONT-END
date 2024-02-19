import React, { useState } from "react";
import { ImgBox } from "../../shared/Imgbox"
import { GrayBtn, GrayText } from "../../shared/Text";
import styled from 'styled-components';
import { postComment } from "./uselogic/fetchCommentData";
import { CommentInputBox, CommentInputBtnBox, CommentInputContent, CommentInputLeftBox, CommentInputTextBox } from "./CommentInputLayout";


interface CommentInputProps {
  comment_id?:number,
  postId:number,
  user_id:number,


}



const CommentInput: React.FC<CommentInputProps> = ({
  comment_id,
  postId,
  user_id
}) => {
  const [replyContent, setReplyContent] = useState<string>("");

  const handleReplyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReplyContent(e.target.value);  };

    const sendPutComment=()=>{
      postComment(postId,replyContent,comment_id)
      setReplyContent("")
      window.location.reload();

    }
  return (
    <CommentInputBox
    >
      <ImgBox size="45px">
        <img src="https://dimg.donga.com/wps/NEWS/IMAGE/2023/05/19/119386603.1.edit.jpg"></img>
      </ImgBox>
      <CommentInputLeftBox>
        <CommentInputTextBox>
          <GrayText size={"18px"}>{user_id}</GrayText>
          <CommentInputContent
            value={replyContent}
            onChange={handleReplyChange}
            placeholder="댓글을 등록해주세요!"
         ></CommentInputContent>
        </CommentInputTextBox>
        <CommentInputBtnBox>
          <GrayBtn onClick={sendPutComment}>작성</GrayBtn>
        </CommentInputBtnBox>
      </CommentInputLeftBox>
    </CommentInputBox>
  );
};

export default CommentInput;


