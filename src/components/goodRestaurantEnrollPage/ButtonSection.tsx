import React from 'react';
import styled from 'styled-components';

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
  margin-top: 200px; 
  background-color: green;
`;

const StyledButton = styled.button`
  padding: 15px 30px; 
  font-size: 16px;
  background-color: #feaa00; 
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 0 10px; 
`;