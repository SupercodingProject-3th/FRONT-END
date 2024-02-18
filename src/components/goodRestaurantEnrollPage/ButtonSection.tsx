  import React from "react";
  import styled from "styled-components";
  import { WHITE, SOFT_BEIGE } from "../../styles/colors";
  import { Link } from "react-router-dom";
  import Button from "../../shared/Button";

  interface ButtonSectionProps {
    postId: string;
    onRegister: () => void;
  }

  const ButtonSection: React.FC<ButtonSectionProps> = ({ postId, onRegister }) => {

    return (
      <ButtonContainer>
      <Button type="button" onClick={onRegister}>
        등록
      </Button>
      <Button type="button" as={Link} to={`/edit/${postId}`}> {/* 수정 버튼을 Link 컴포넌트로 변경 */}
        수정
      </Button>
    </ButtonContainer>

    );
  };

  export default ButtonSection;

  const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    background-color: ${SOFT_BEIGE};
    padding-top: 50px;
    padding-bottom: 50px;
    gap:0.2rem;
  `;
