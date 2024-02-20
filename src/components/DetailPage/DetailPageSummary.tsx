import React, { useEffect,useState } from 'react';
import DetailPageMenu from './DetailPageMenu';
import DetailPageSimpleData from './DetailPageSimpleData';
import { DetailPageDetailData, DetailPageDetailDataType } from './DetailPageDetailData';
import DetailPageMap from './DetailPageMap';
import { DetailDataType, fetchDetailData } from './uselogic/fetchDetailData';
import DetailPageImgBox from './DetailPageImgBox';
import styled from "styled-components";
import { BlackText } from '../../shared/Text';

const DetailPageSummary: React.FC<{postId:number,userId:number}>  = ({postId,userId}) => {
  const [data, setData] =
  useState<DetailDataType | null>(null)
  //postId 기준의 상세페이지 정보 가져오기.
 const[sameUser,setSameUser]=useState(Boolean)
 // 접속 유저와 게시글 작성자 유저 일치정보 저장
 
  useEffect(()=>{
    const fetchDetailDataAndSetState = async () => {
      try {
        const data = await fetchDetailData(postId);
        setData(data.data);
      } catch (error) {
        // 오류 처리
      }
    };
    fetchDetailDataAndSetState();
    setSameUser(userId===data?.userId)
  }
  ,[postId])
  return (
    <div style={{ width:'80%',display:"flex" ,flexDirection:"column"}}>
       {data && (
        <div style={{padding:'20px 20px 0px 20px', width:'100%', height:'100%'}}>
      <DetailPageMenu postId={data.postId} viewCount={data.viewCount} favoriteCount={data.favoriteCount} createAt={data.createAt} updateAt={data.updateAt} sameuser={sameUser}></DetailPageMenu>
      <DetailPageSimpleData mainPhoto={data.mainPhoto} name={data.name} address={data.address} detailAddress={data.detailAddress} ></DetailPageSimpleData>
      <DetailPageDetailData data={data}></DetailPageDetailData>
      <DetailPageMap latitude={data.latitude} longitude={data.longitude} name={data.name}></DetailPageMap>
      <DetailPageImgBox postPhotoDtos={data.postPhotoDtos} ></DetailPageImgBox>
      <div style={{width:'100%', display:"flex",alignItems:'end',gap:'10px'}}>
      <YellowText > {data.name}</YellowText>
      <BlackText bold={true} size={'20px'}>관련글...</BlackText>
      </div>
      </div>)}
    </div>
  );
}

export default DetailPageSummary;



const YellowText = styled.span`
font-size:30px;
font-weight:bolder;
color: #FEAA00;
`;