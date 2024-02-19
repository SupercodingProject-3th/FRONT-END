import React from "react";
import styled from "styled-components";
import { BlackText } from "../../shared/Text";
import { HeartIcon } from "../../shared/HeartIcon";

interface  PostingCardType {
  name:string,
  category:string,
  mainPhoto:string,
  postid:number,
  viewCount: number;

}
const RelativePostingCard: React.FC<PostingCardType>= ({name,category,mainPhoto,viewCount}:PostingCardType) => {
  return (
    <Box>
      <ImgBox>
        <img src={mainPhoto}/>
      </ImgBox>
      <ContentsBox>
        <ContentsTitle>
          <BlackText size={"22px"} bold={true}>{name}</BlackText>
          <div style={{display:"flex",gap:"3px"}}>
          <BlackText size={"20px"}>{category}</BlackText>
          <HeartIcon like={true}></HeartIcon>
          <BlackText size={"20px"}>{viewCount}</BlackText>
          </div>
          
        </ContentsTitle>
      </ContentsBox>
    </Box>
  );
};

export default RelativePostingCard;

const Box = styled.div`
  margin: 10px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  height: 250px;
  width: 230px;
  border-radius: 10px;
  border: 2px solid #FEAA00;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4); 
`;

const ImgBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    display: flex;
    height:90%;
    width:90%;
  }
`;

const ContentsBox = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: space-between;
  font-size: 12px;
`;
const ContentsTitle = styled.div`
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
`;
const Icon = styled.div`
  padding-right: 10px;
`;
