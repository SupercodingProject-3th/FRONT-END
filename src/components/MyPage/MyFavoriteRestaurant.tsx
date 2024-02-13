import React from "react";
import styled from "styled-components";

interface likingProps {
  liked: Array<any>;
}

const MyFavoriteRestaurant: React.FC<likingProps> = ({ liked }) => {
  return (
    <>
      <hr />
      <MyMain>
        <MyFavoriteContainer>
          {liked.length === 0 && <div>찜한 맛집이 없습니다!</div>}
        </MyFavoriteContainer>
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
