import React from 'react';
import styled from 'styled-components';
import { DEEP_YELLOW, DARK_GREY, WHITE, SOFT_BEIGE } from "../../styles/colors";

const ButtonSection: React.FC = () => {
  const handleRegister = () => {
  };

  const handleModify = () => {
  };

  return (
    <ButtonContainer>
    <StyledButton type="button" onClick={handleRegister}>
      등록
    </StyledButton>
    <StyledButton type="button" onClick={handleModify}>
      수정
    </StyledButton>
    <StyledButton type="button" onClick={handleModify}>
      삭제
    </StyledButton>
  </ButtonContainer>
  );
};

export default ButtonSection;


const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${SOFT_BEIGE};  
  padding-bottom: 50px;
`;

const StyledButton = styled.button`
  padding: 15px 30px; 
  font-size: 16px;
  background-color: #feaa00; 
  color:  ${WHITE};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 0 10px; 
`;