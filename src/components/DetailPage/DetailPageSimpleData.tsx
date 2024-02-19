import React from 'react';
import { ImgBox } from '../../shared/Imgbox';
import { BlackText } from '../../shared/Text';

interface DetailPageSimpleDataType{
  mainPhoto:string;
  name:string;
  address:string;
  detailAddress:string;
}

const DetailPageSimpleData: React.FC<DetailPageSimpleDataType> = ({mainPhoto,name,address,detailAddress}) => {
  return (
    <div style={{display:"flex",gap:"50px",paddingBottom:"30px",paddingTop:"30px" ,borderBottom:"solid 0.7px rgba(52, 38, 40, 1)",borderTop:"solid 0.7px rgba(52, 38, 40, 1)",marginTop:"30px",marginBottom:"30px"}}>
      <ImgBox size={"180px"}>
        <img src={mainPhoto}></img>
      </ImgBox>
      <div  style={{display:"flex",flexDirection:"column",justifyContent:"space-around"}}>
      <div  style={{display:"flex",flexDirection:"column",justifyContent:"space-around", alignItems:'start', height:"100%"}}>
      <BlackText size={"30px"} bold={true}>{name}</BlackText>
      <BlackText size={"20px"} bold={true}> {address} {detailAddress}</BlackText>
      </div></div>
    </div>
  );
};

export default DetailPageSimpleData;