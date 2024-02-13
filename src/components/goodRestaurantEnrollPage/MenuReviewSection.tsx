import React, { useState } from "react";
import styled from "styled-components";
import StarRating from "./StarRating";

import filledStar from "../../assets/icon/filled-star.svg";
import halfStar from "../../assets/icon/half-star.svg";
import outlineStar from "../../assets/icon/outline-star.svg";
import { DEEP_YELLOW, DARK_GREY, WHITE, SOFT_BEIGE } from "../../styles/colors";

interface MenuReviewSectionProps {
  rating: number | null;
  onChange: (value: number | null) => void;
}

const MenuReviewSection: React.FC<MenuReviewSectionProps> = ({
  rating,
  onChange,
}) => {
  const [overallRating, setOverallRating] = useState<number | null>(0);

  const handleOverallRatingChange = (value: number | null) => {
    setOverallRating(value);
  };

  return (
    <StyledMenuReviewSection>
      <RecommendMenuWrapper>
        <Title>추천메뉴 조합</Title>
        <MenuTextarea placeholder="메뉴를 입력하세요" />
      </RecommendMenuWrapper>

      <StarReviewWrapper>
        <Title>리뷰 총평</Title>
        <StarRating
          rating={overallRating || 0}
          onChange={handleOverallRatingChange}
        />
        <StarRatingUI>
          {/* 별점에 따라 SVG 아이콘을 렌더링 */}
          {[...Array(5)].map((_, index) => (
            <StarImage
              key={index}
              src={
                overallRating !== null && index < Math.floor(overallRating)
                  ? filledStar
                  : overallRating !== null && index < overallRating
                  ? halfStar
                  : outlineStar
              }
              alt="star"
            />
          ))}
        </StarRatingUI>
      </StarReviewWrapper>
    </StyledMenuReviewSection>
  );
};

export default MenuReviewSection;

const StyledMenuReviewSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RecommendMenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center; 
  justify-content: center; 
  background-color: ${SOFT_BEIGE};
  width: 100%;
`;

const StarReviewWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center; 
  justify-content: center; 
  background-color: ${SOFT_BEIGE};
  width: 100%;
`;

const Title = styled.h4`
  margin-right: 2%;
`;

const MenuTextarea = styled.textarea`
  border: none;
  border-radius: 5px;
  font-size: 16px;
  resize: vertical;
  width: 28%;
  height: auto;
`;

const StarRatingUI = styled.div`
  font-size: 16px;
  width: 28%;
  height: auto;
`;

const StarImage = styled.img`
  width: 24px;
  height: 24px;
`;
