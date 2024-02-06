import React from "react";
import MyPageMenu from "./MyPageMenu";
import MyRestaurant from "./MyRestaurant";
import MyFavoriteRestaurant from "./MyFavoriteRestaurant";
import MyEditProfile from "./MyEditProfile";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import MyInfo from "./MyInfo";
import ChangePassword from "./ChangePassword";

interface MyPageProps {
  updateIsToken: any;
}

const MyPage: React.FC<MyPageProps> = ({ updateIsToken }) => {
  const { pagenumber } = useParams();

  if (pagenumber === "0") {
    return (
      <>
        <MyPageMenu />
        <MyMain>
          <MyPageContainer>
            <MyInfo />
            <MyRestaurant />
          </MyPageContainer>
        </MyMain>
      </>
    );
  } else if (pagenumber === "1") {
    return (
      <>
        <MyPageMenu />
        <MyMain>
          <MyPageContainer>
            <MyInfo />
            <MyFavoriteRestaurant />
          </MyPageContainer>
        </MyMain>
      </>
    );
  } else if (pagenumber === "2") {
    return (
      <>
        <MyPageMenu />
        <MyMain>
          <MyPageContainer>
            <MyInfo />
            <MyEditProfile updateIsToken={updateIsToken} />
          </MyPageContainer>
        </MyMain>
      </>
    );
  } else if (pagenumber === "3") {
    return (
      <>
        <MyPageMenu />
        <MyMain>
          <MyPageContainer>
            <MyInfo />
            <ChangePassword />
          </MyPageContainer>
        </MyMain>
      </>
    );
  } else {
    return null;
  }
};

const MyMain = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MyPageContainer = styled.div`
  width: 1000px;
  display: flex;
  justify-content: center;
  align-items: start;
`;

export default MyPage;
