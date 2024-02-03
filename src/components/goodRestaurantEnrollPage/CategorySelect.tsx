import React, { useState } from "react";
import styled from "styled-components";

const CategorySelect: React.FC = () => {
  const [category, setCategory] = useState("");

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  return (
    <CategorySelectWrapper>
      <Label htmlFor="category">카테고리</Label>
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
  margin-bottom: 80px;
`;

const Label = styled.label`
  margin-bottom: 100px;
  padding-right: 100px;
  font-size: 14px;
  font-weight: bold;
`;


const StyledSelect = styled.select`
  width: 500px; 
  padding: 8px; 
`;

const StyledOption = styled.option`
 
`;

export default CategorySelect;
