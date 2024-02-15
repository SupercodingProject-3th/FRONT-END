import React from "react";
import styled from "styled-components";
import { WHITE, SOFT_BEIGE } from "../../styles/colors";
import { Link } from "react-router-dom";


interface ButtonSectionProps {
  postId: string;
  onRegister: () => void;
}

const ButtonSection: React.FC<ButtonSectionProps> = ({ postId, onRegister }) => {

  return (
    <ButtonContainer>
    <StyledButton type="button" onClick={onRegister}>
      등록
    </StyledButton>
    <StyledButton type="button" as={Link} to={`/edit/${postId}`}> {/* 수정 버튼을 Link 컴포넌트로 변경 */}
      수정
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
  color: ${WHITE};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 0 10px;
`;
