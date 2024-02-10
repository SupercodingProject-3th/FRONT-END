import React, { useState } from "react";
import styled from "styled-components";

import Header from "../../shared/Header";
import Footer from "../../shared/Footer";
import PageTitle from "../../components/goodRestaurantEnrollPage/PageTitle";
import RestaurantInfoSection from "../../components/goodRestaurantEnrollPage/RestaurantInfoSection";
import RestaurantInfoInput from "../../components/goodRestaurantEnrollPage/RestaurantInfoInput";
import CategorySelect from "../../components/goodRestaurantEnrollPage/CategorySelect";
import AddressInput from "../../components/goodRestaurantEnrollPage/AddressInput";
import MapSection from "../../components/goodRestaurantEnrollPage/MapSection";
import MenuReviewSection from "../../components/goodRestaurantEnrollPage/MenuReviewSection";
import ButtonSection from "../../components/goodRestaurantEnrollPage/ButtonSection";
import ScrollToTopButton from "../../shared/ScrollTopButton";
import QuillEditor from "../../components/goodRestaurantEnrollPage/QuillEditor";
import FileUpload from "../../components/goodRestaurantEnrollPage/FileUpload";

const GoodRestaurantEnrollPage: React.FC = () => {
  const [restaurantInfo, setRestaurantInfo] = useState({
    title: "",
    contact: "",
    address: "",
    category: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRestaurantInfo({
      ...restaurantInfo,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <StyledGoodRestrauntPage>
      <Header />
      <Wrapper>
        <RestaurantInfoSectionWrapper>
          <PageTitle />
          <RestaurantInfoSection>
            <RestaurantInfoInput
              label="게시글 제목"
              name="title"
              value={restaurantInfo.title}
              onChange={handleInputChange}
            />
            <CategorySelect />
            <RestaurantInfoInput
              label="가게명"
              name="contact"
              value={restaurantInfo.contact}
              onChange={handleInputChange}
            />
            <AddressInput />
          </RestaurantInfoSection>
          <MapSection />
        </RestaurantInfoSectionWrapper>
        <QuillAndFileUploadWrapper>
          <QuillEditorWrapper>
            <QuillEditor />
          </QuillEditorWrapper>
          <FileUploadWrapper>
            <FileUpload />
            <FileUpload />
            <FileUpload />
          </FileUploadWrapper>
        </QuillAndFileUploadWrapper>
        <MenuReviewSection />
        <ButtonSection />
        <ScrollToTopButton />
      </Wrapper>
      <Footer />
    </StyledGoodRestrauntPage>
  );
};

export default GoodRestaurantEnrollPage;

const StyledGoodRestrauntPage = styled.div`
  background-color: #fff;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const RestaurantInfoSectionWrapper = styled.div`
  background-color: #feaa00;
  padding: 20px;
  border-radius: 5px;
  width: 100%;
  display: flex;
  flex-direction: column;

  /*NOTE: TEST  */
  height: 80vh;
  width: 80vw;
  justify-content: center; /* 세로 중앙 정렬 */
  align-items: center; /* 가로 중앙 정렬 */
  margin: auto; /* 부모 컨테이너에 대해 가운데 정렬 */
  justify-content: space-evenly; /* 세로 방향 여백을 동일하게 설정 */
  margin-bottom: 1.5rem;
`;

const Wrapper = styled.div`
  background-color: #fff;
  padding: 50px 0px 50px 0px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  //NOTE: 테스트용
  justify-content: center;
  align-items: center;
  //NOTE: TEST
  margin: 0 auto; // 가운데 정렬을 위해 추가된 스타일
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const QuillEditorWrapper = styled.div`
  background-color: red;
  height: 30vh;
  width: 30vw;
`;

const QuillAndFileUploadWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center; /* 가로 중앙 정렬 */
  align-items: center; /* 세로 중앙 정렬 */
  gap: 20px;
`;

const FileUploadWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
