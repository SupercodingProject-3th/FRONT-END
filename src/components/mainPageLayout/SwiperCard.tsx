import React from "react";
import Slider from "react-slick";
import LeftArrow from "../../assets/icon/mainPage/left-arrow.svg";
import RightArrow from "../../assets/icon/mainPage/right-arrow.svg";
import styled from "styled-components";

export default function Card({ title, data }: { title: any; data: any[] }) {
  const SlickArrowLeft: React.FC<any> = ({
    currentSlide,
    slideCount,
    ...props
  }) => <img src={LeftArrow} alt="prevArrow" {...props} />;

  const SlickArrowRight: React.FC<any> = ({
    currentSlide,
    slideCount,
    ...props
  }) => <img src={RightArrow} alt="nextArrow" {...props} />;

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
  };

  return (
    <CardContainer>
      <h1>{title}</h1>
      <Slider {...settings}>
        {data.map((item: any, index: number) => {
          return (
            <CardItem key={index}>
              <ImageWrapper>
                <FoodImage src={item.url} alt="food_img" />
              </ImageWrapper>
              <CardContainerInner>
                <p>한식</p>
              </CardContainerInner>
              <h2>우래옥 본점</h2>
              <p>
                위치: <span>서울</span>
              </p>
              <i
                className="far fa-heart"
                style={{ width: "50px", height: "50px" }}
              ></i>
            </CardItem>
          );
        })}
      </Slider>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  padding: "80px";

  h1 {
    margin-bottom: 40px; /* 여기에 원하는 margin 값 설정 */
  }
`;

const CardItem = styled.div`
backgroundColor: "#FFB6C1"
  &:hover {
    cursor: pointer;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FoodImage = styled.img`
  width: 80%;
  height: auto;
`;

const CardContainerInner = styled.div`
`