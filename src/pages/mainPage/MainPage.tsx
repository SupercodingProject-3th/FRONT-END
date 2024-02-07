import React from "react";
import styled from "styled-components";

import Header from "../../shared/Header";
import Footer from "../../shared/Footer";
import MainSecondSliderTest from "../../components/mainPageLayout/MainSecondSliderTest";
import ScrollToTopButton from "../../shared/ScrollTopButton";
import { media } from "../../styles/media";
import MainSwiper from "../../components/mainPageLayout/MainSwiper";
import TestBanner from "../../components/mainPageLayout/TestBanner";

const MainPage: React.FC = () => {
  const handlePageSelection = (selectedPage:any) => {
  };

  return (
    <StyledMainPage>
      <Header></Header>
      <TestBanner setSelectedPage={handlePageSelection} />
      <MainSwiper />
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
    font-size: 11px;
  }

  ${media.tablet} {
    font-size: 12px;
  }

  ${media.desktop} {
    font-size: 14px;
  }
`;
