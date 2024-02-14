import styled from "styled-components";
import { DEEP_YELLOW, DARK_GREY, WHITE } from "../../styles/colors";
import FoodImage from "../../assets/images/mainPage/omelette.jpg";

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

const Button = styled.button`
  padding: 1rem 2rem; /* 상하로 1rem, 좌우로 2rem의 padding 추가 */
  background-color: ${DEEP_YELLOW}; /* 배경색을 DEEP_YELLOW로 설정 */
  color: ${WHITE}; /* 글자색을 흰색으로 설정 */
  border: none; /* 테두리 없앰 */
  border-radius: 0.5rem; /* 버튼의 테두리를 둥글게 만듦 */
  cursor: pointer; /* 마우스 커서를 포인터로 변경 */
  font-size: 1rem; /* 폰트 사이즈 설정 */
  transition: background-color 0.3s ease; /* 배경색 변화에 대한 전환 효과 추가 */

  &:hover {
    background-color: ${DARK_GREY}; /* 호버 시 배경색을 DARK_GREY로 변경 */
  }
`;
