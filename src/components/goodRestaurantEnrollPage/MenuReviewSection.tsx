import React from 'react';
import styled from 'styled-components';

const MenuReviewSection: React.FC = () => {
  return (
    <StyledMenuReviewSection>
      <h2>메뉴 및 리뷰</h2>
      <textarea placeholder="메뉴를 입력하세요" />
      <textarea placeholder="리뷰를 입력하세요" />
    </StyledMenuReviewSection>
  );
};

export default MenuReviewSection;

const StyledMenuReviewSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  `