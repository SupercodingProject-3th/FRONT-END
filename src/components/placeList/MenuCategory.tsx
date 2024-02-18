import React, { useState } from 'react';
import { Category } from '../../types/Place';
import styled from 'styled-components';
import { media } from '../../styles/media';

const categoryList: Category[] = [
    { id: 0, name: 'All', text: '전체' },
    { id: 1, name: 'Korean', text: '한식' },
    { id: 2, name: 'Chinese', text: '중식' },
    { id: 3, name: 'Japanese', text: '일식' },
    { id: 4, name: 'Cafe', text: '카페/베이커리' },
  ];
  interface MenuCategoryProps {
    selectedCategory: string;
    setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  }
  const MenuCategory: React.FC<MenuCategoryProps> = ({ selectedCategory, setSelectedCategory }) => {
    const handleCategoryClick = (categoryName: string) => {
      setSelectedCategory(categoryName);
    };
  
    return (
      <CategoryListWrap>
        <StyledList>
          {categoryList.map((category) => (
            <StyledItem
              key={category.id}
              selected={selectedCategory === category.text}
              onClick={() => handleCategoryClick(category.text)}
            >
              <CategoryName>{category.text}</CategoryName>
            </StyledItem>
          ))}
        </StyledList>
      </CategoryListWrap>
    );
  };
  
  export default MenuCategory;
  
  const CategoryListWrap = styled.div`
    display: flex;
    justify-content: space-between;
    ${media.tablet} {
      padding: 0px 30px;
    }
    ${media.mobile} {
      padding: 0px 10px;
    }
  `;
  
  const StyledList = styled.ul`
    display: flex;
    flex-wrap: nowrap;
    justify-content: start;
    list-style-type: none;
    padding: 0;
    margin: 0;
    width: 100%;
  `;
  
  const StyledItem = styled.li<{ selected: boolean }>`
    position: relative;
    padding: 20px 10px;
    width: 100%;
    border-radius: 5px;
    cursor: pointer;
    margin: 0 auto;
    
    &:hover {
      background-color: #e0e0e0;
    }
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 5px;
      background-color: ${props => props.selected ? '#FEAA00' : 'transparent'};
      border-radius: 0px;
    }
    ${media.mobile} {
      width: auto;
    }
  `;
  
  const CategoryName = styled.h4`
    margin: 0;
    font-size: 1em;
    display: flex;
    justify-content: center;
  `;