import React, { useState } from "react";
import styled from "styled-components";

import { SOFT_BEIGE } from "../../styles/colors";

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
  padding-bottom: 5%;
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
