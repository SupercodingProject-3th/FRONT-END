import axios, { AxiosResponse} from "axios"

export type relativePostType = {
  code: number;
  message: string;
  data: Post[];
};
type Post = {
  postId: number;
  name: string;
  neighborhood: string;
  category: string;
  menu: string;
  viewCount: number;
  mainPhoto: string;
  createAt: string;
  favoriteCount: number;
};


export async function getRelativePost(
  postId: number,
  order:string
){
  try {
    const response: AxiosResponse<relativePostType> =
      await axios.get<relativePostType>(
        `https://www.onesol.shop/v1/api/post-relation/${postId}?order=${order}`
      );
      return response.data;  } catch (error) {
    console.error("데이터를 가져오는 중에 오류 발생:", error);
    throw error;
  }}