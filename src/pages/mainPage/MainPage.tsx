import React from "react";
import styled from "styled-components";

import Header from "../../shared/Header";
import Footer from "../../shared/Footer";
import MainSecondSliderTest from "../../components/mainPageLayout/MainSecondSliderTest";
import ScrollToTopButton from "../../shared/ScrollTopButton";

const MainPage: React.FC = () => {
  return (
    <StyledMainPage>
      <Header></Header>
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
  height: 100vh;

  display: flex;
  flex-direction: column;
`;
