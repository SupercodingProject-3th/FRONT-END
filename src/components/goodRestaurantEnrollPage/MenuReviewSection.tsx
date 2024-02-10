import React, { useState } from "react";
import styled from "styled-components";
import StarRating from "./StarRating";

import filledStar from '../../assets/icon/filled-star.svg';
import halfStar from '../../assets/icon/half-star.svg';
import outlineStar from '../../assets/icon/outline-star.svg';

interface MenuReviewSectionProps {
  rating: number | null;
  onChange: (value: number | null) => void;
}


const MenuReviewSection: React.FC<MenuReviewSectionProps> = ({ rating, onChange }) => {
  const [overallRating, setOverallRating] = useState<number | null>(0);

  const handleOverallRatingChange = (value: number | null) => {
    setOverallRating(value);
  };

  return (
    <StyledMenuReviewSection>
      <h2>추천메뉴 조합</h2>
      <textarea placeholder="메뉴를 입력하세요" />
      <h2>리뷰 총평</h2>
      <StarRating rating={overallRating || 0} onChange={handleOverallRatingChange} />
      <StarRatingUI>
        {/* 별점에 따라 SVG 아이콘을 렌더링 */}
        {[...Array(5)].map((_, index) => (
          <StarImage
            key={index}
            src={
              overallRating !== null &&
              index < Math.floor(overallRating)
                ? filledStar
                : overallRating !== null &&
                  index < overallRating
                ? halfStar
                : outlineStar
            }
            alt="star"
          />
        ))}
      </StarRatingUI>
    </StyledMenuReviewSection>
  );
};

export default MenuReviewSection;

const StyledMenuReviewSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const StarRatingUI = styled.div`
  font-size: 24px;
`;

const StarImage = styled.img`
  width: 24px;
  height: 24px;
`;
