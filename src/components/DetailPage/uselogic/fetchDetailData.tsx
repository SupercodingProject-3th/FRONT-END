import axios, { AxiosResponse } from "axios";


export async function fetchDetailData(
  postId: number
): Promise<fetchDetailDataType> {
  try {
    const response: AxiosResponse<fetchDetailDataType> =
      await axios.get<fetchDetailDataType>(
        `https://www.onesol.shop/v1/api/post-detail/${postId}`
      );
    return response.data;
  } catch (error) {
    console.error("데이터를 가져오는 중에 오류 발생:", error);
    throw error;
  }
}


export interface fetchDetailDataType {
  code: number;
  message: string;
  data: DetailDataType
}


export interface DetailDataType 
{
  postId: number;
  userId: number;
  name: string;
  address: string;
  detailAddress: string;
  latitude: string;
  longitude: string;
  contactNum: string;
  category: string;
  menu: string;
  content: string;
  viewCount: number;
  mainPhoto: string;
  createAt: string;
  updateAt: string | null;
  favoriteCount: number;
  postPhotoDtos: any[]; // 현재 빈 배열으로 정의되어 있음
};