import React from 'react';
import { ImgBox } from '../../shared/Imgbox';


type DetailPageImgBoxType = {postPhotoDtos:{
  postPhotoId: number;
  postId: number;
  photo: string;
}[]}

const DetailPageImgBox: React.FC<DetailPageImgBoxType> = ({postPhotoDtos}) => {
  return (
    <div  style={{display:'flex',gap:"10px",width:"100%",height:"100%",paddingBottom:"30px"}}>
      {postPhotoDtos.map((item, index) => (
        <div key={index}  style={{width:"15%",height:"20%"}}>
        <img src={item.photo}  style={{width:"100%",height:"100%"}}></img>
        </div>
      ))}
    </div>
  );
};

export default DetailPageImgBox;