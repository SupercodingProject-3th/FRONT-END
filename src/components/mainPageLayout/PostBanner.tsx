import React from "react";
import styled from "styled-components";
import NowOpenImage from "../../assets/images/mainPage/nowopen.jpg";
import PostBannerSecond from "../../components/mainPageLayout/PostBannerSecond";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import { DARK_GREY, WHITE } from "../../styles/colors";
import { useNavigate } from "react-router";


const PostBanner: React.FC = () => {
  const navigate = useNavigate();
  const isDarkMode = useSelector(
    (state: RootState) => state.darkMode.isDarkMode
  );

  const handleBannerClick = () => {
    navigate("/goodrestaurantenroll"); // 맛집 등록 페이지로 이동
  };


  return (
    <StyledBanner isDarkMode={isDarkMode}>  
      <BannerContent>
        <BannerImageContainer>
          <BannerImage src={NowOpenImage} onClick={handleBannerClick} />
        </BannerImageContainer>
        <BannerTextContainer>
          <h2>맛집 등록하러 가기</h2>
          <p>당신의 맛집을 등록해주세요.</p>
        </BannerTextContainer>
      </BannerContent>
      <PostBannerSecond />
    </StyledBanner>
  );
};

const StyledBanner = styled.div<{ isDarkMode: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background-color: ${(props) => (props.isDarkMode ? DARK_GREY : WHITE)};
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
  cursor: pointer;
`;

const BannerTextContainer = styled.div`
  cursor: pointer;
`;

export default PostBanner;
