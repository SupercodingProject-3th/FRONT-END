import React, {useState} from 'react';
import styled from "styled-components"

interface MenuFilterProps {
    selectedOrder: string;
    setSelectedOrder: React.Dispatch<React.SetStateAction<string>>;
  }
  
  const MenuFilter: React.FC<MenuFilterProps> = ({ selectedOrder, setSelectedOrder }) => {
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedOrder(e.target.value);
    };

    return (
        <FilterControl>
          <FilterSelect value={selectedOrder} onChange={handleChange}>
            <option value="최신순">최신순</option>
            <option value="인기순">인기순</option>
            <option value="조회순">조회순</option>
          </FilterSelect>
        </FilterControl>
      );
    };


export default MenuFilter;

const FilterControl = styled.div`
    display: inline-block;
    margin: 0.3rem 0;
`;

const FilterSelect =styled.select`
    font: inherit;
    font-Size: 1rem;
    margin: 0rem 0.5rem;
    padding: 0.5rem 0.6rem 0.5rem 0.5rem;
    border:none;
    text-align: right;
    background-color: white;
    font-weight: 500;
`;