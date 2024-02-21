import React, { useState } from "react";
import styled from "styled-components";

import { SOFT_BEIGE } from "../../styles/colors";

interface MenuReviewSectionProps {
  onChange: (updatedMenu: string) => void; 
  initialValue: string;
}

  const MenuReviewSection: React.FC<MenuReviewSectionProps> = ({ onChange, initialValue }) => {
    const [menu, setMenu] = useState<string>(initialValue);
  
    const handleMenuChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const updatedMenu = e.target.value; // 업데이트된 메뉴 값을 변수에 저장
      setMenu(updatedMenu); // 메뉴 상태를 업데이트
      onChange(updatedMenu); // 변경된 메뉴를 상위 컴포넌트로 전달
    };

  return (
    <StyledMenuReviewSection>
      <RecommendMenuWrapper>
        <Title>추천메뉴 조합</Title>
        <MenuTextarea
          value={initialValue}
          onChange={handleMenuChange}
        />
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
