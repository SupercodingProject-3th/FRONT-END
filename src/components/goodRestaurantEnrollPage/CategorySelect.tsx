import React, { useEffect, useState } from "react";
import styled from "styled-components";

interface CategorySelectProps {
  onCategoryChange: (selectedCategory: string) => void;
  value?: string; // 추가된 value props
}

const CategorySelect: React.FC<CategorySelectProps> = ({ onCategoryChange, value }) => {
  const [category, setCategory] = useState(value || ""); // 초기값 설정

  useEffect(() => {
    setCategory(value || ""); // 상위 컴포넌트에서 value props가 변경될 때마다 카테고리 상태 업데이트
  }, [value]);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory); // 카테고리 상태 업데이트
    onCategoryChange(selectedCategory); // 부모 컴포넌트로 선택된 카테고리 전달
  };

  return (
    <CategorySelectWrapper>
      <LabelWrapper>
        <Label htmlFor="category">카테고리</Label>
      </LabelWrapper>
      <StyledSelect
        id="category"
        name="category"
        value={category}
        onChange={handleCategoryChange} 
      >
        <StyledOption value="">카테고리를 선택하세요</StyledOption>
        <StyledOption value="한식">한식</StyledOption>
        <StyledOption value="중식">중식</StyledOption>
        <StyledOption value="일식">일식</StyledOption>
        <StyledOption value="양식">양식</StyledOption>
      </StyledSelect>
    </CategorySelectWrapper>
  );
};

const CategorySelectWrapper = styled.div`
  display: flex; /* 수직 가운데 정렬을 위해 flex 사용 */
  align-items: center; /* 수직 가운데 정렬 */
  justify-content: center; /* 수평 가운데 정렬 */
  font-size: 14px;
  font-weight: bold;
  gap: 10px;
  flex-direction: row;
  margin-bottom: 80px;
`;

const LabelWrapper = styled.div`
  display: flex; /* 수직 가운데 정렬을 위해 flex 사용 */
  align-items: center; /* 수직 가운데 정렬 */
  justify-content: center; /* 수평 가운데 정렬 */
`;

const Label = styled.label`
  margin-left: 40px;
  padding-right: 40px;
  font-size: 14px;
  font-weight: bold;
`;

const StyledSelect = styled.select`
  flex:1;
  width: 100%; /* 부모 요소의 너비를 모두 채우도록 함 */
  padding: 8px;
`;

const StyledOption = styled.option``;

export default CategorySelect;
