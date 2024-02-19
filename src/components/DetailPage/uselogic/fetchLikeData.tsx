
import axios, { AxiosResponse } from "axios";



//댓글 좋아요 수정 토글
export interface fetchLikeDataType {
  code: number;
  message: string;
  data: {commentId :number}
}

export async function fetchCommentLikeData(
  comment_id: number
){
  const token =localStorage.getItem("token");

  try {
    const response: AxiosResponse<fetchLikeDataType> =
      await axios.post<fetchLikeDataType>(
        `https://www.onesol.shop/v1/api/comment/like/${comment_id}`, null,
        {headers: {
          Token: token
      }}
      );
      console.log("데이터를 가져오기 성공", response);
  } catch (error) {
    console.error("데이터를 가져오는 중에 오류 발생:", error);
    throw error;
  }
}


// 게시물 좋아요 확인

export interface checkPostLikeDataType {
  code: number;
  message: string;
  data: boolean}

export async function checkPostLikeData(
  postId: number
){
  const token = await localStorage.getItem("token");
  try {
    const response: AxiosResponse<checkPostLikeDataType> =
      await axios.get<checkPostLikeDataType>(
        `https://www.onesol.shop/v1/api/post-heart-status/${postId}`
      ,
      {headers:{
        Token: token}
    });
      console.error("데이터를 가져오기 성공! ",response);
      return response.data
  } catch (error) {
    console.error("데이터를 가져오는 중에 오류 발생:", error);
    throw error;
  }
}


export interface fetchPostLikeDataType {
  code: number;
  message: string;
  data: {postId :number}
}
// 게시물 좋아요 등록 및 취소

export async function fetchPostLikeData(
  postId: number
){
  const token =localStorage.getItem("token");

  try {
    const response: AxiosResponse<fetchPostLikeDataType> =
      await axios.post<fetchPostLikeDataType>(
        `https://www.onesol.shop/v1/api/post-like-heart/${postId}`, null,
        {headers: {
          Token: token
      }}
      );
  } catch (error) {
    console.error("데이터를 가져오는 중에 오류 발생:", error);
    throw error;
  }
}
