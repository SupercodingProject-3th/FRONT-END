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
    <CardContainer className="card__container" style={{ padding: "100px" }}>
      <h1>{title}</h1>
      <Slider {...settings} className="card__container--inner">
        {data.map((item: any, index: number) => {
          return (
            <div className="card__container--inner--card" key={index}>
              <img
                src={item.url}
                alt="hero_img"
                style={{ width: "80%", height: "auto" }}
              />
              <div className="card__container--inner--card--date_time">
                <p>한식</p>
              </div>
              <h2>우래옥 본점</h2>
              <p>
                위치: <span>서울</span>
              </p>
              <i
                className="far fa-heart"
                style={{ width: "50px", height: "50px" }}
              ></i>
            </div>
          );
        })}
      </Slider>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  &:hover {
    cursor: pointer;

    h1 {
      margin-bottom: 40px; /* 여기에 원하는 margin 값 설정 */
    }
  }
`;
