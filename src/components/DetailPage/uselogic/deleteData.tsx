

import axios, { AxiosResponse} from "axios";

interface deleteComment{
  postId: number,
  content:string,
  data: {commentId  :number}}
  
//댓글삭제

  export async function deleteCommentData(
    commentId: number
  ){

  const token =localStorage.getItem("token");

  try {
    const response: AxiosResponse<deleteComment> =
      await axios.delete<deleteComment>(
        `https://www.onesol.shop/v1/api/comment/del/${commentId}`,
        {headers: {
          Token: token
      }}
      );
  } catch (error) {
    throw error;
  }
}