import React, { useState } from "react";
import styled from "styled-components";

import Header from "../../shared/Header";
import Footer from "../../shared/Footer";
import RestaurantInfoSection from "../../components/goodRestaurantEnrollPage/RestaurantInfoSection";
import RestaurantInfoInput from "../../components/goodRestaurantEnrollPage/RestaurantInfoInput";
import CategorySelect from "../../components/goodRestaurantEnrollPage/CategorySelect";
import AddressInput from "../../components/goodRestaurantEnrollPage/AddressInput";
import MapSection from "../../components/goodRestaurantEnrollPage/MapSection";
import MenuReviewSection from "../../components/goodRestaurantEnrollPage/MenuReviewSection";
import ButtonSection from "../../components/goodRestaurantEnrollPage/ButtonSection";
import ScrollToTopButton from "../../shared/ScrollTopButton";

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
          <RestaurantInfoSection>
            <RestaurantInfoInputWrapper>
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
            </RestaurantInfoInputWrapper>
            <AddressInput />
          </RestaurantInfoSection>
          <MapSection />
          <MenuReviewSection />
          <ButtonSection />
        </RestaurantInfoSectionWrapper>
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
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const RestaurantInfoSectionWrapper = styled.div`
  background-color: #feaa00;
  padding: 20px;
  border-radius: 5px;
  width: 100%;
  display: flex;
  flex-direction: column;

  /*NOTE: TEST  */
  height: 50vh; /* 수정된 부분 */
  width: 50vw;
`;

const Wrapper = styled.div`
  background-color: #fff;
  padding: 900px;
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

const RestaurantInfoInputWrapper = styled.div`
  display: flex;
  gap: 10px; /* 자식 요소들 간의 간격 설정 */
  flex-direction: column;
  align-items: baseline;
`