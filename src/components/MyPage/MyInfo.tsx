import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const MyInfo = () => {
  const navigator = useNavigate();

  return (
    <MainInfo>
      <ContainerInfo>
        <CenterInfo>
          <ImageInfo src="" alt=""></ImageInfo>
        </CenterInfo>
        <CenterInfo>
          <h3>Seho</h3>
        </CenterInfo>
        <CenterInfo>
          <ButtonInfo onClick={() => navigator("/mypage/2")}>
            회원정보수정
          </ButtonInfo>
        </CenterInfo>
        <CenterInfo>
          <RestrauntInfo>
            <LinkInfo to="/mypage/0">
              <FavoriteInfo>
                <CounterInfo>
                  <b>나의 맛집</b>
                </CounterInfo>
                <CounterInfo>15</CounterInfo>
              </FavoriteInfo>
            </LinkInfo>
            <LinkInfo to="/mypage/1">
              <FavoriteInfo>
                <CounterInfo>
                  <b>찜한 맛집</b>
                </CounterInfo>
                <CounterInfo>7</CounterInfo>
              </FavoriteInfo>
            </LinkInfo>
          </RestrauntInfo>
        </CenterInfo>
        <CenterInfo>
          <RestrauntInfo>
            <b>받은 좋아요 갯수 : </b> 270
          </RestrauntInfo>
        </CenterInfo>
        <CenterInfo>
          <ButtonInfo>맛집 등록</ButtonInfo>
        </CenterInfo>
      </ContainerInfo>
    </MainInfo>
  );
};

const MainInfo = styled.div`
  margin: 80px 40px 0 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContainerInfo = styled.div`
  width: 250px;
  height: 450px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 3px solid black;
  border-radius: 30px;
`;

const CenterInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageInfo = styled.img`
  margin: 20px 0px 0px 0px;
  width: 80px;
  height: 80px;

  border: 1px solid black;
  border-radius: 50%;
`;

const ButtonInfo = styled.button`
  width: 160px;
  height: 40px;
  border-radius: 7px;
  margin: 20px;
  cursor: pointer;
`;

const RestrauntInfo = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  align-item: center;
`;

const FavoriteInfo = styled.div`
  width: 80px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CounterInfo = styled.div`
  padding-bottom: 15px;
`;

const LinkInfo = styled(Link)`
  cursor: pointer;
`;

export default MyInfo;
