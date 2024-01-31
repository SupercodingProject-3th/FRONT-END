// 예시: MyComponent.tsx
import React from "react";
import styled from "styled-components";

import Header from "../../shared/Header";
import MainFirstSlider from "../../components/mainPageLayout/MainFirstSlider";
import Footer from "../../components/mainPageLayout/Footer";
import MainSecondSliderTest from "../../components/mainPageLayout/MainSecondSliderTest";

const MainPage: React.FC = () => {
  return (
    <StyledMainPage>
      <Header></Header>
      <MainFirstSlider />
      <MainSecondSliderTest></MainSecondSliderTest>
      <Footer/>
    </StyledMainPage>
  );
};

export default MainPage;

const StyledMainPage = styled.div`
  background-color: #fff;
  width: 100vw;
  height: 100vh;

  //추가중
  display: flex;
  flex-direction: column;
`;
