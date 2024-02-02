import React, { useState } from 'react';

const CategorySelect: React.FC = () => {
  const [category, setCategory] = useState('');

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  return (
    <div>
      <label htmlFor="category">카테고리</label>
      <select id="category" name="category" value={category} onChange={handleCategoryChange}>
        <option value="">카테고리를 선택하세요</option>
        <option value="한식">한식</option>
        <option value="중식">중식</option>
        <option value="일식">일식</option>
        <option value="양식">양식</option>
      </select>
    </div>
  );
};

export default CategorySelect;