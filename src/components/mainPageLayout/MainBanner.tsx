import styled from "styled-components";

import FoodMap from "../../assets/images/mainPage/foodmap.jpg";
import FoodImage from "../../assets/images/mainPage/food.jpg";
import { media } from "../../styles/media";
import { DEEP_YELLOW, WHITE, BLACK, DARK_GREY} from "../../styles/colors";
import { useState } from "react";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";

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

    const isDarkMode = useSelector(
      (state: RootState) => state.darkMode.isDarkMode
    );

    return (
      <StyledSection id="home" showSecondBanner={showSecondBanner} isDarkMode={isDarkMode} >
        <ButtonWrapper>
          <Button onClick={toggleSecondBanner}>맛집 목록</Button>
          <Button onClick={toggleSecondBanner}>맛집 지도</Button>
        </ButtonWrapper>

        {isSecondButtonClicked ? (
          <BannerArea >
            {/* 맛집 지도가 클릭되었을 때 표시할 내용 */}
            <div className="mt-32 md:basis-3/5">
              <StyledContentContainer>
                <Image alt="home-pageGraphic" src={FoodMap} />
              </StyledContentContainer>
            </div>
          </BannerArea>
        ) : (
          <BannerArea>
            {/* 맛집 목록이 클릭되었을 때 표시할 내용 */}
            <StyledBannerWrapper>
              <StyledContentContainer>
                <Image alt="home-pageGraphic" src={FoodImage} />
              </StyledContentContainer>
            </StyledBannerWrapper>
          </BannerArea>
        )}
      </StyledSection>
    );
  }
};

const StyledSection = styled.section<{ showSecondBanner?: boolean; isDarkMode:boolean }>`
background-color: ${(props) => (props.isDarkMode ? DARK_GREY : WHITE)};
  padding: 10px;
`;

const BannerArea = styled.div``;

const StyledContentContainer = styled.div`
  height: 52vh; 
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid ${DEEP_YELLOW};
`;

const Image = styled.img`
  height: 50vh;
  width: 50vw;
  cursor:pointer;

  ${media.tablet} {
    height: 50vh;
    width: 50vw;
  }

  ${media.mobile} {
    height: 50vh;
    width: 50vw;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-left: 20vw;

  ${media.mobile} {
    margin-left: 2vw;
  }
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
