import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const MyPageButton: React.FC = () => {
  const isToken = useSelector((state: any) => state.auth.isAuthenticated);
  return (
    <DivMainPost>
      {isToken ? (
        <>
          <LinkPage to="/logout">로그아웃 페이지로 이동</LinkPage>
          <LinkPage to="/mypage/0">마이 페이지로 이동</LinkPage>
        </>
      ) : (
        <>
          <LinkPage to="/login">로그인 페이지로 이동</LinkPage>
          <LinkPage to="/signup">회원가입 페이지로 이동</LinkPage>
          <LinkPage to="/find-email">이메일 찾기</LinkPage>
        </>
      )}
    </DivMainPost>
  );
};

const DivMainPost = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LinkPage = styled(Link)`
  margin: 10px;
  color: black;

  cursor: pointer;
`;

export default MyPageButton;
