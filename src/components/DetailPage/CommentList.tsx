
import React, { useEffect, useState } from "react";
import {useSearchParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { CommentResponse, fetchCommetData } from "./uselogic/fetchCommentData";
import Comment from "./Comment";
import { PageNationBox } from "./PageNationBtn";
import CommentInput from "./CommentInput";



interface  CommentListProps {
  postId: number;
  child: boolean;
  contact_user: number;
  comment_id?: number;
}

const CommentList: React.FC<CommentListProps> = ({
  postId,
  child,
  contact_user,
  comment_id,
  }
) => {

  const [CommentData,setCommentData]=useState<CommentResponse | null>(null)
  const [searchParams, setSearchParams] = useSearchParams();
  
  const page=Number(searchParams.get('page'))
    const navigate = useNavigate();

  //이전 페이지로 
    const backchangePage=()=>{
    const nextPage =`${page -1}`;
    const currebtPostId = `${postId}`;
    //changePage(currebtPostId,nextPage);
    navigate(`/detail?postId=${currebtPostId}&page=${nextPage}`); // URL 경로 변경
  ;}
  //다음 페이지로 
    const frontchangePage=()=>{
      const nextPage =`${page + 1}`;
      const currebtPostId = `${postId}`;
      //changePage(currebtPostId,nextPage);
      navigate(`/detail?postId=${currebtPostId}&page=${nextPage}`); // URL 경로 변경
    }

 

  useEffect(()=>{
    const fetchCommetDataAndSetState =async () => {
      try {
        let data = await fetchCommetData(child,page,postId,comment_id);
        await setCommentData({...data});
      } catch (error) {
        // 오류 처리
      }
    };

    fetchCommetDataAndSetState();
  }, [postId,page]);

  let commentListData = CommentData?.data.content || [];
  let commentpageData = CommentData?.data.number;
  let commentpageDataLast = CommentData?.data.last;
  let commentpageDataFirst = CommentData?.data.first;




  return (
    <div style={{  width: "80%" , display: "flex",flexDirection:"column",alignItems:'center'}}>
     {commentListData.map((comment,index) => {return (
          <Comment
          page={page}
          key={index}
          child={child}
          postId={postId}
          profile_img={comment.profile_img}
          comment_id={comment.comment_id}
          user_id={comment.user_id}
          content={comment.content}
          create_date={comment.create_date}
          user_like={comment.user_like}
          like_count={comment.like_count}
          contact_user={contact_user}
          parentCommentId={comment.parentCommentId}
          ></Comment>
      
        )})}
        <PageNationBox last={commentpageDataLast} first={commentpageDataFirst} commentpageData={commentpageData} backchangePage={backchangePage} frontchangePage={frontchangePage}></PageNationBox>
        <CommentInput postId={postId} user_id={contact_user} ></CommentInput>
    </div>
  );
};


export default CommentList


