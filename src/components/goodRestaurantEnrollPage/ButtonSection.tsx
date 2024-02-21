  import React from "react";
  import styled from "styled-components";
  import { WHITE, SOFT_BEIGE } from "../../styles/colors";
  import { Link } from "react-router-dom";
  import Button from "../../shared/Button";

  interface ButtonSectionProps {
    postId: string;
    onRegister: () => void;
    isEditing: boolean;
  }

  const ButtonSection: React.FC<ButtonSectionProps> = ({ postId, onRegister, isEditing  }) => {

    return (
      <ButtonContainer>
       {isEditing ? ( // 수정 중이면 홈 버튼과 수정 완료 버튼을 렌더링
        <>
          <Button type="button" as={Link} to="/">홈</Button>
          <Button type="button" onClick={onRegister}>수정</Button>
        </>
      ) : ( // 수정 중이 아니면 등록 버튼과 수정 버튼을 렌더링
        <>
          <Button type="button" onClick={onRegister}>등록</Button>
          <Button type="button" as={Link} to={`/edit/${postId}`}>수정</Button>
        </>
      )}
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
