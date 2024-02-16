import React from "react";
import Slider from "react-slick";
import LeftArrow from "../../assets/icon/mainPage/left-arrow.svg";
import RightArrow from "../../assets/icon/mainPage/right-arrow.svg";
import styled from "styled-components";
import { PostContent } from "../../types/PostContent";

export default function Card({ title, posts }: { title: any; posts: PostContent[] }) {

  const contentData = posts; // data[0].content로 수정
  console.log(contentData, "찍히나 test")

  const SlickArrowLeft: React.FC<any> = ({
    currentSlide,
    slideCount,
    ...props
  }) => (
    <img
      src={LeftArrow}
      alt="prevArrow"
      {...props}
      style={{ width: "30px", height: "30px" }}
    />
  );

  const SlickArrowRight: React.FC<any> = ({
    currentSlide,
    slideCount,
    ...props
  }) => (
    <img
      src={RightArrow}
      alt="nextArrow"
      {...props}
      style={{ width: "30px", height: "30px" }}
    />
  );

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
      <SliderContainer>
        <Slider {...settings}>
          {contentData.map((item: any, index: number) => {
            return (
              <CardItem key={index}>
                <ImageWrapper>
                  <FoodImage src={item.mainPhoto} alt="food_img" />
                </ImageWrapper>
                <CardContainerInner>
                  <p>{item.category}</p>
                </CardContainerInner>
                <h2>{item.name}</h2>
                <p>
                  위치: <span>{item.neighborhood}</span>
                </p>
                <i
                  className="far fa-heart"
                  style={{ width: "50px", height: "50px" }}
                ></i>
              </CardItem>
            );
          })}
        </Slider>
      </SliderContainer>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  padding: "100px";

  h1 {
    margin-bottom: 40px; /* 여기에 원하는 margin 값 설정 */
  }
`;

const CardItem = styled.div`
  backgroundColor: "#FFB6C1"
  
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FoodImage = styled.img`
  width: 80%;
  height: auto;
  cursor: pointer;
`;

const CardContainerInner = styled.div``;

const SliderContainer = styled.div`
  width: 80%;
  margin: 0 auto;
`;
