import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

interface MyPageButtonProps {
  isToken: boolean;
}

const MyPageButton: React.FC<MyPageButtonProps> = ({ isToken }) => {
  return (
    <div>
      {isToken ? (
        <>
          <LinkPage to="/logout">로그아웃 페이지로 이동</LinkPage>
          <LinkPage to="/mypage/0">마이 페이지로 이동</LinkPage>
          <LinkPage to="change-password">비밀번호 바꾸기</LinkPage>
        </>
      ) : (
        <>
          <LinkPage to="/login">로그인 페이지로 이동</LinkPage>
          <LinkPage to="/signup">회원가입 페이지로 이동</LinkPage>
        </>
      )}
    </div>
  );
};

const LinkPage = styled(Link)`
  margin: 20px;
  width: 100px;
`;

export default MyPageButton;
