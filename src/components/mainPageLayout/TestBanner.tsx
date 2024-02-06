import styled from "styled-components";

import FoodMap from "../../assets/images/mainPage/foodmap.jpg";
import FoodImage from "../../assets/images/mainPage/food.jpg";
import { media } from "../../styles/media";
import { DEEP_YELLOW } from "../../styles/colors";
import { useState } from "react";

type Props = {
  setSelectedPage: (value: string) => void;
  showSecondBanner?: boolean;
};

const TestBanner = ({ setSelectedPage, showSecondBanner }: Props) => {
  {
    const [isSecondBannerShown, setIsSecondBannerShown] = useState(
      showSecondBanner || false
    );
    const [isSecondButtonClicked, setIsSecondButtonClicked] = useState(false);

    const toggleSecondBanner = () => {
      setIsSecondButtonClicked(!isSecondButtonClicked);
      setIsSecondBannerShown(!isSecondBannerShown);
    };

    return (
      <StyledSection id="home" showSecondBanner={showSecondBanner}>
        <ButtonWrapper>
          <Button onClick={toggleSecondBanner}>맛집 목록</Button>
          <Button onClick={toggleSecondBanner}>맛집 지도</Button>
        </ButtonWrapper>

        {isSecondButtonClicked ? (
          <BannerArea>
            {/* 맛집 지도가 클릭되었을 때 표시할 내용 */}
            <div className="mt-32 md:basis-3/5">
              <StyledContentContainer>
                <Image alt="home-pageGraphic" src={FoodMap} />
                <span>맛집 지도 테스트</span>
              </StyledContentContainer>
            </div>
          </BannerArea>
        ) : (
          <BannerArea
            className="mx-auto w-5/6 md:flex md:h-5/6"
            style={{ backgroundColor: DEEP_YELLOW }}
          >
            {/* 맛집 목록이 클릭되었을 때 표시할 내용 */}
            <StyledBannerWrapper>
              <StyledContentContainer className="mt-8">
                <Image alt="home-pageGraphic" src={FoodImage} />
                <span>맛집 목록 테스트</span>
              </StyledContentContainer>
            </StyledBannerWrapper>
          </BannerArea>
        )}
      </StyledSection>
    );
  }
};

const StyledSection = styled.section<{ showSecondBanner?: boolean }>`
  background-color: ${({ showSecondBanner }) =>
    showSecondBanner ? DEEP_YELLOW : "#fff"};
  padding: 10px;
`;

const BannerArea = styled.div``;

const StyledContentContainer = styled.div`
  height: 52vh; /* 페이지의 40% 높이로 설정 */

  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid ${DEEP_YELLOW};
`;

const Image = styled.img`
  height: 50vh;
  weight: 50vw;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start; 
  margin-left: 20vw;
`;

const Button = styled.button`
  background-color: ${DEEP_YELLOW};
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`;

const StyledBannerWrapper = styled.div``;
export default TestBanner;
