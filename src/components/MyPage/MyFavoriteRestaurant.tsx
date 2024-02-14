import React from "react";
import styled from "styled-components";
import { DEEP_YELLOW, SOFT_BEIGE } from "../../styles/colors";

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
  width: 450px;
  height: 700px;
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${SOFT_BEIGE};
  border: 1px solid ${DEEP_YELLOW};
  border-radius: 8px;
`;

export default MyFavoriteRestaurant;
