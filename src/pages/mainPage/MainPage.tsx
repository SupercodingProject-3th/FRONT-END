import React from "react";
import styled from "styled-components";

import Header from "../../shared/Header";
import Footer from "../../shared/Footer";
import MainSecondSliderTest from "../../components/mainPageLayout/MainSecondSliderTest";
import ScrollToTopButton from "../../shared/ScrollTopButton";
import { media } from "../../styles/media";
import MainSwiper from "../../components/mainPageLayout/MainSwiper";
import MainBanner from "../../components/mainPageLayout/MainBanner";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { DARK_GREY, WHITE, SOFT_BEIGE } from "../../styles/colors";
import GoodPlaceBanner from "../../components/mainPageLayout/GoodPlaceBanner";
import PostBanner from "../../components/mainPageLayout/PostBanner";

const MainPage: React.FC = () => {
  const handlePageSelection = (selectedPage: any) => {};
  const isDarkMode = useSelector(
    (state: RootState) => state.darkMode.isDarkMode
  );

  return (
    <StyledMainPage isDarkMode={isDarkMode}>
      <Header />
      <MainBanner setSelectedPage={handlePageSelection} />
      <MainSwiper />
      <GoodPlaceBanner />
      <PostBanner/>
      <MainSecondSliderTest></MainSecondSliderTest>
      <ScrollToTopButton />
      <Footer />
    </StyledMainPage>
  );
};

export default MainPage;

const StyledMainPage = styled.div<{ isDarkMode: boolean }>`
  background-color: ${(props) => (props.isDarkMode ? DARK_GREY : WHITE)};
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
