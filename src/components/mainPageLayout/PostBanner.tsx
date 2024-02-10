import React from "react";
import styled from "styled-components";
import NowOpenImage from "../../assets/images/mainPage/nowopen.jpg";
import PostBannerSecond from "../../components/mainPageLayout/PostBannerSecond"

const PostBanner: React.FC = () => {
  return (
    <StyledBanner>
      <BannerContent>
        <BannerImageContainer>
          <BannerImage src={NowOpenImage} />
        </BannerImageContainer>
        <BannerTextContainer>
          <h2>찐맛집 고수의 맛집</h2>
          <p>
            찐 맛집
          </p>
        </BannerTextContainer>
      </BannerContent>
      <PostBannerSecond/>
    </StyledBanner>
  );
};

const StyledBanner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const BannerContent = styled.div`
  display: flex; 
  justify-content: center;
  align-items: center;  
  flex: 1;
  width: 70%; /* NOTE: 부모요소의 너비 70%로 */
  margin-right: 10rem;
`;

const BannerImageContainer = styled.div`
  position: relative;
  width: 280px;
  height: 280px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 2vw;
`;

const BannerImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: auto;
`;

const BannerTextContainer = styled.div``;

export default PostBanner;