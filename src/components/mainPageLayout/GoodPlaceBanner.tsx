import styled from "styled-components";
import { DEEP_YELLOW, DARK_GREY, WHITE } from "../../styles/colors";
import FoodImage from "../../assets/images/mainPage/omelette.jpg";
import Button from "../../shared/Button";

const GoodPlaceBanner = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <BannerContainer>
      <ImageContainer>
        <Image src={FoodImage} alt="foodImage" />
      </ImageContainer>
      <TextContainer>
        <h1 className="hero__title">
          우리들만의 맛집 플레이스를 구경하고 저장하기
        </h1>
        <Button>맛집목록 탐험하기</Button>
      </TextContainer>
    </BannerContainer>
  );
};

export default GoodPlaceBanner;

const BannerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${DEEP_YELLOW};
  max-width: 80%; /* 최대 너비를 화면 너비의 80%로 제한 */
  margin: 5vh auto; /* 가운데 정렬을 위해 margin을 auto로 설정 */
`;

const ImageContainer = styled.div`
  padding: 0 0.2rem; /* 텍스트와 이미지 사이에 간격을 조절 */
`;

const Image = styled.img`
  flex: 1;
  max-width: 50%; /* 이미지가 화면의 반쪽을 차지하도록 설정 */
  height: auto;
  cursor: pointer;
`;

const TextContainer = styled.div`
  flex: 1;
  max-width: 80%; /* 최대 너비를 부모 요소의 60%로 제한 */
  padding: 0 4rem; /* 텍스트와 이미지 사이에 간격을 조절 */
`;

