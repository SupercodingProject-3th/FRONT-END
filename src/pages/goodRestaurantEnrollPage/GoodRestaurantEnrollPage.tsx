import React, { useState } from "react";
import styled from "styled-components";

import Header from "../../shared/Header";
import Footer from "../../shared/Footer";
import PageTitle from "../../components/goodRestaurantEnrollPage/PageTitle";
import RestaurantInfoSection from "../../components/goodRestaurantEnrollPage/RestaurantInfoSection";
import RestaurantInfoInput from "../../components/goodRestaurantEnrollPage/RestaurantInfoInput";
import CategorySelect from "../../components/goodRestaurantEnrollPage/CategorySelect";
import AddressInput from "../../components/goodRestaurantEnrollPage/AddressInput";
import DetailAddressInfoInput from "../../components/goodRestaurantEnrollPage/DetailAddressInfoInput";
import MenuReviewSection from "../../components/goodRestaurantEnrollPage/MenuReviewSection";
import ButtonSection from "../../components/goodRestaurantEnrollPage/ButtonSection";
import ScrollToTopButton from "../../shared/ScrollTopButton";
import QuillEditor from "../../components/goodRestaurantEnrollPage/QuillEditor";
import FileUpload from "../../components/goodRestaurantEnrollPage/FileUpload";
import { DEEP_YELLOW, DARK_GREY, WHITE, SOFT_BEIGE } from "../../styles/colors";

const GoodRestaurantEnrollPage: React.FC = () => {
  const [restaurantInfo, setRestaurantInfo] = useState({
    title: "",
    contact: "",
    address: "",
    category: "",
    detailAddress: "",
  });

  const [overallRating, setOverallRating] = useState<number | null>(0);

  const handleOverallRatingChange = (value: number | null) => {
    setOverallRating(value);
  };

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
            <DetailAddressInfoInput
              label="상세주소"
              name="detailAddress"
              value={restaurantInfo.detailAddress}
              onChange={handleInputChange}
            />
          </RestaurantInfoSection>
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
        <MenuReviewSection
          rating={overallRating}
          onChange={handleOverallRatingChange}
        />
        <ButtonSection />
        <ScrollToTopButton />
      </Wrapper>
      <Footer />
    </StyledGoodRestrauntPage>
  );
};

export default GoodRestaurantEnrollPage;

const StyledGoodRestrauntPage = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const RestaurantInfoSectionWrapper = styled.div`
  background-color: ${SOFT_BEIGE};
  padding: 20px;
  border-radius: 5px;
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 80vh;
  width: 80vw;
  justify-content: center;
  align-items: center;
  margin: auto; /* 부모 컨테이너에 대해 가운데 정렬 */
  justify-content: space-evenly; /* 세로 방향 여백을 동일하게 설정 */
`;

const Wrapper = styled.div`
  padding: 50px 0px 50px 0px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const QuillEditorWrapper = styled.div`
  height: 33vh;
  width: 30vw;
  overflow-y: auto; /* NOTE: 내용이 넘칠 때 스크롤이 생성되도록 설정합니다. */
  margin-right: 2%;
`;

const QuillAndFileUploadWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${SOFT_BEIGE};
`;

const FileUploadWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
