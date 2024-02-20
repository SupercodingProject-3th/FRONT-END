
import React, { useEffect, useState } from "react";
import { CommentResponse, fetchCommetData } from "./uselogic/fetchCommentData";
import Comment from "./Comment";
import { PageNationBox } from "./PageNationBtn";
import CommentInput from "./CommentInput";


interface  CommentListProps {
 
  postId: number;
  child: boolean;
  contact_user: number;
  comment_id?: number;
  totalPage: number;

}

const ChildCommentList: React.FC<CommentListProps> = ({
  postId,
  child,
  contact_user,
  comment_id,
  totalPage
}
) => {
  const [CommentData,setCommentData]=useState<CommentResponse | null>(null)
  const [page, setPage] = useState<number>(0);





  const backchangePage=()=>{
      setPage(page-1)
      console.log(page)
    }
    const frontchangePage=()=>{
      setPage(page+1)
    }

 

  useEffect(()=>{
    const fetchCommetDataAndSetState =async () => {
      try {
        const data = await fetchCommetData(child,page,postId,comment_id);
        await setCommentData(data);
      } catch (error) {
        // 오류 처리
      }
    };

    fetchCommetDataAndSetState();
  }, [comment_id,page,totalPage]);

  const commentListData = CommentData?.data.content || [];
  const commentpageData = CommentData?.data.number;
  const commentpageDataLast = CommentData?.data.last;
  const commentpageDataFirst = CommentData?.data.first;

  return (
    <div style={{  width: "90%" , display: "flex",flexDirection:"column",alignItems:'center'}}>
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
       <CommentInput user_id={contact_user} postId={postId} comment_id={comment_id} ></CommentInput>

    </div>
  );
};


export default ChildCommentList


