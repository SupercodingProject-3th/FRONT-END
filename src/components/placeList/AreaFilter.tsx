import React, { useState } from 'react';
import styled from 'styled-components';
import icon from '../../assets/icon/ic-category.svg'
import MenuFilter from './MenuFilter';

interface AreaFilterProps {
  selectedLocation: string;
  setSelectedLocation: React.Dispatch<React.SetStateAction<string>>;
}

const AreaFilter: React.FC<AreaFilterProps> = ({ selectedLocation, setSelectedLocation }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const locations: string[] = ['전체', '서울', '경기/인천', '부산/경남', '대구/경북', '광주/전라', '제주', '강원'];

  const handleSelect = (location: string) => {
    setSelectedLocation(location);
    setIsOpen(false);
  };

  return (
    <DropdownContainer>
      <DropdownWrapper>
        <DropdownButton onClick={() => setIsOpen(!isOpen)}>
          지역 선택 <ButtonImage src={icon} alt="카테고리" />
          <ButtonSpan>{selectedLocation}</ButtonSpan>
        </DropdownButton>
        {isOpen && (
          <DropdownContent>
            {locations.map((location, index) => (
              <DropdownItem key={index} onClick={() => handleSelect(location)}>
                {location}
              </DropdownItem>
            ))}
          </DropdownContent>
        )}
      </DropdownWrapper>
    </DropdownContainer>
  );
};

export default AreaFilter;

const DropdownContainer = styled.div`
display: flex;
justify-content: space-between;
margin: 0.3rem 0;
`;
const DropdownWrapper = styled.div`
display: inline-block;
`;

const DropdownButton = styled.button`
position: relative;
padding: 10px;
cursor: pointer;
font-size: 22px;
text-align: left;
font-weight: 400;
background: none;
border: none;
vertical-align: middle;
`;
const ButtonImage = styled.img``;
const ButtonSpan = styled.span`
  font-weight: 700;
`;

const DropdownContent = styled.div`
  display: block;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  margin: 0px 10px;
  border-radius: 20px; 
`;

const DropdownItem = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;

  &:hover {
    background-color: #f1f1f1;
  }
  &:first-child {
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }

  &:last-child {
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }
`;