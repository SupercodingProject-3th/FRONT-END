import React from "react";
import styled from "styled-components";

const MyFavoriteRestaurant = () => {
  return (
    <>
      <hr />
      <MyMain>
        <MyFavoriteContainer>찜한 맛집</MyFavoriteContainer>
      </MyMain>
    </>
  );
};

const MyMain = styled.div`
  margin: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MyFavoriteContainer = styled.div`
  width: 500px;
  height: 700px;
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid gray;
`;

export default MyFavoriteRestaurant;
