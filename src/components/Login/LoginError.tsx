import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface LoginErrorProps {
  pageName: string;
  error: string;
}

const LoginError: React.FC<LoginErrorProps> = ({ pageName, error }) => {
  const navigator = useNavigate();

  const onClickHander = () => {
    navigator(-1);
  };
  return (
    <>
      <MessageLoginError>
        <h1>
          {pageName} 페이지 :
          <br />
          {error}
        </h1>
        <ButtonLoginError onClick={onClickHander}>
          이전 페이지로 이동
        </ButtonLoginError>
      </MessageLoginError>
    </>
  );
};

const MessageLoginError = styled.div`
  width: 100%;
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ButtonLoginError = styled.button`
  margin-top: 20px;
  padding: 10px;
  font-size: 20px;
  color: white;
  background-color: black;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

export default LoginError;
