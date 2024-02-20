
import axios, { AxiosResponse } from "axios";


export async function fetchCommetData(
  child:boolean,
  page: number,
  postId?: number,
  comment_id?: number,

): Promise<CommentResponse> {
  try {
    let api:string =""
    if(child){
      api= `https://www.onesol.shop/v1/api/comment/comment?commentId=${comment_id}&page=${page}&size=5`
    }else{api= `https://www.onesol.shop/v1/api/comment/post?postId=${postId}&page=${page}&size=5`}
    let headers = {};
    const token = localStorage.getItem('token');
    if (token) {
      headers = {
        token: token
      };
    }
    const response: AxiosResponse<CommentResponse> =
      await axios.get<CommentResponse>(
        api,
        { headers }
      );
    return response.data;
  } catch (error) {
    console.error("데이터를 가져오는 중에 오류 발생:", error);
    throw error;
  }
}




export interface putAndPostCommentType {
  code: number;
  message: string;
  data: {commentId :number}
}


//댓글수정하기
export async function putComment(
  child:boolean,
  postId: number,
  content:string,
  comment_id:number,
  parentCommentId?:number
){
  const token =localStorage.getItem("token");
  try {
    let body:{} 
    if(child){
      body={
      "commentId":comment_id,
      "postId":postId,
      "parentCommentId":parentCommentId,
      "content":content}
    }else{body={
      "commentId":comment_id,
      "postId":postId,
      "content":content}}
    const response: AxiosResponse<putAndPostCommentType> =
      await axios.put<putAndPostCommentType>(
        `https://www.onesol.shop/v1/api/comment/mod`, body,
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


//댓글작성하기

export async function postComment(
  postId: number,
  content:string,
  comment_id?:number
){
  const token =localStorage.getItem("token");
  if(typeof comment_id ==="number"){
    console.log(typeof comment_id,comment_id)

  try {
    const response: AxiosResponse<putAndPostCommentType> =
      await axios.post<putAndPostCommentType>(
        `https://www.onesol.shop/v1/api/comment/add`, {
          postId:postId,
          parentCommentId:comment_id,
          content:content
        },
        {headers: {
          Token: token
      }}
      );
      console.log("데이터를 가져오기 성공", response);
  } catch (error) {
    console.error("데이터를 가져오는 중에 오류 발생:", error);
    throw error;
  }
}else if(typeof comment_id === "undefined"){
  try {
    const response: AxiosResponse<putAndPostCommentType> =
      await axios.post<putAndPostCommentType>(
        `https://www.onesol.shop/v1/api/comment/add`, {
          postId:postId,
          content:content,
        },
        {headers: {
          Token: token
      }}
      );
      console.log("데이터를 가져오기 성공", response);
  } catch (error) {
    console.error("데이터를 가져오는 중에 오류 발생:", error);
    throw error;
  }

}}











export interface CommentResponse {
  code: number;
  message: string;
  data: CommentData;
}



export interface CommentData {
  content: CommentType[];
  pageable: Pageable;
  last: boolean;
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
  sort: Sort | null;
  first: boolean;
  numberOfElements: number;
  empty: boolean;
}

export interface CommentType {
  post_id: number;
  user_id: number;
  comment_id: number;
  parent_comment_id: number;
  content: string;
  like_count: number;
  profile_img: string;
  create_date: string;
  update_date: string | null;
  user_like:boolean;
  parentCommentId: number;

}

interface Pageable {
  pageNumber: number;
  pageSize: number;
  sort: Sort | null;
  offset: number;
  paged: boolean;
  unpaged: boolean;
}

interface Sort {
  sorted: boolean;
  empty: boolean;
  unsorted: boolean;
}