import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MyPageMenu = () => {
  return (
    <>
      <MyMenuMainPage>
        <MenuMyPage>
          <MyRestaurantMypage>
            <LinkMypage to={"/mypage/0"}>나의 맛집</LinkMypage>
          </MyRestaurantMypage>
          <FavoriteRestaurantsMypage>
            <LinkMypage to={"/mypage/1"}>찜한 맛집</LinkMypage>
          </FavoriteRestaurantsMypage>
          <EditProfileMypage>
            <LinkMypage to={"/mypage/2"}>회원 정보 수정</LinkMypage>
          </EditProfileMypage>
        </MenuMyPage>
      </MyMenuMainPage>
    </>
  );
};

const MyMenuMainPage = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
`;

const MenuMyPage = styled.div`
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MyRestaurantMypage = styled.div`
  padding: 20px;
  &:hover {
    cursor: pointer;
  }
`;

const FavoriteRestaurantsMypage = styled.div`
  padding: 20px;
  &:hover {
    cursor: pointer;
`;

const EditProfileMypage = styled.div`
  padding: 20px;
  &:hover {
    cursor: pointer;
`;

const LinkMypage = styled(Link)`
  margin: 5px;
  width: 150px;
  font-weight: 600;
  padding: 10px;
  cursor: pointer;
  border-radius: 12px;
`;

export default MyPageMenu;
