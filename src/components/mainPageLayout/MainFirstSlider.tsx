import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.css";
import styled from "styled-components";
import testImage1 from "../../shared/images/MainPage/slider/양파쿵야.png";
import testImage2 from "../../shared/images/MainPage/slider/양파쿵야2.jpg";
import MainSliderTitle from "./MainSliderTitle";

// SwiperCore 사용 설정

// 메인 컴포넌트
const MainFirstSlider: React.FC = () => {
  return (
    <StyledSwiperWrapper>
        <MainSliderTitle text="실시간베스트맛집"/>
      <StyledSwiper
        spaceBetween={10}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <img src={testImage1} alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={testImage2} alt="Slide 2" />
        </SwiperSlide>
        {/* 추가적인 슬라이드들 */}
      </StyledSwiper>
    </StyledSwiperWrapper>
  );
};

const StyledSwiperWrapper = styled.div`
  width: 20%;
  height: 20vh; /* 원하는 높이로 조절 */

  margin-top: 25rem;
  margin-bottom: 40rem;
  
`;




const StyledSwiper = styled(Swiper)`
  width: 100vw; /* 100% 화면 너비 */
  height: 40vh; /* 50% 화면 높이 */
  margin-top: 8rem;

`;



export default MainFirstSlider;
