import React from "react";
import styled from "styled-components";

import Header from "../../shared/Header";
import Footer from "../../shared/Footer";
import MainSecondSliderTest from "../../components/mainPageLayout/MainSecondSliderTest";
import ScrollToTopButton from "../../shared/ScrollTopButton";
import {media} from "../../styles/media";
import MainSliderTitle from "../../components/mainPageLayout/MainSliderTitle";
import MainSwiper from "../../components/mainPageLayout/MainSwiper";


const MainPage: React.FC = () => {
  return (
    <StyledMainPage>
      <Header></Header>
      <MainSliderTitle/>
      <MainSwiper/>
      <MainSecondSliderTest />
      <ScrollToTopButton />
      <Footer />
    </StyledMainPage>
  );
};

export default MainPage;

const StyledMainPage = styled.div`
  background-color: #fff;
  width: 100vw;
  display: flex;
  flex-direction: column;

  ${media.mobile} {
    /*NOTE: 모바일 화면에 대한 스타일 */
    font-size: 11px;
  }

  ${media.tablet} {
    /*NOTE: 태블릿 화면에 대한 스타일 */
    font-size: 12px;
  }

  ${media.desktop} {
    /*NOTE: 데스크톱 화면에 대한 스타일 */
    font-size: 14px;
  }
`;
