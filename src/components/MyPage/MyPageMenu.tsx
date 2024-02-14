import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { DEEP_YELLOW, SOFT_BEIGE } from "../../styles/colors";

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
  cursor: pointer;
`;

const FavoriteRestaurantsMypage = styled.div`
  padding: 20px;
  cursor: pointer;
`;

const EditProfileMypage = styled.div`
  padding: 20px;
  cursor: pointer;
`;

const LinkMypage = styled(Link)`
  margin: 5px;
  width: 150px;
  color: black;
  font-weight: 600;
  padding: 10px;
  text-decoration: none;
  cursor: pointer;

  border: 1px solid ${DEEP_YELLOW};
  background-color: ${SOFT_BEIGE};
`;

export default MyPageMenu;
