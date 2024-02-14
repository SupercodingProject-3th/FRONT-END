import React, { useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

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
import { DARK_GREY, WHITE, SOFT_BEIGE } from "../../styles/colors";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import axios from "axios";

const GoodRestaurantEnrollPage: React.FC = () => {
  const [selectedimageFiles, setSelectedImageFiles] = useState<File[]>([]);

  const handleFileChange = (files: FileList | null) => {
    if (files) {
      setSelectedImageFiles([...selectedimageFiles, ...Array.from(files)]); 
    }
  };

  const handleRegister = async () => {
    try {
      const formData = new FormData();
      formData.append("name", restaurantInfo.title);
      formData.append("address", restaurantInfo.address);
      formData.append("detailAddress", restaurantInfo.detailAddress);
      formData.append("latitude", "33.25144684054");
      formData.append("longitude", "126.50972692876");
      formData.append("category", restaurantInfo.category);
      formData.append("contactNum", restaurantInfo.contact);
      formData.append("menu", restaurantInfo.menu);
      formData.append("content", "맛있어요");

      selectedimageFiles.forEach((file, index) => {
        formData.append(`images[${index}]`, file);
      });

      const response = await axios.post("/v1/api/reg-post", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("백엔드로부터의 응답:", response.data);
    } catch (error) {
      console.error("오류 발생:", error);
    }
  };

  const isDarkMode = useSelector(
    (state: RootState) => state.darkMode.isDarkMode
  );

  const [restaurantInfo, setRestaurantInfo] = useState({
    title: "",
    name: "",
    contact: "",
    address: "",
    category: "",
    detailAddress: "",
    menu: "",
  });

  const { postId = "" } = useParams<{ postId?: string }>(); // postId의 초기값을 ''로 설정
  const [overallRating, setOverallRating] = useState<number | null>(0);

  const handleOverallRatingChange = (value: number | null) => {
    setOverallRating(value);  
  };

  const handleInputChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRestaurantInfo({
      ...restaurantInfo,
      [e.target.title]: e.target.value,
    });
  };

  const handleInputChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRestaurantInfo({
      ...restaurantInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleInputChangeDetailAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRestaurantInfo({
      ...restaurantInfo,
      detailAddress: e.target.value,
    });
  };

  return (
    <StyledGoodRestrauntPage isDarkMode={isDarkMode}>
      <Header />
      <Wrapper>
        <RestaurantInfoSectionWrapper>
          <PageTitle />
          <RestaurantInfoSection>
            <RestaurantInfoInput
              label="게시글 제목"
              name="title"
              value={restaurantInfo.title}
              onChange={handleInputChangeTitle}
            />
            <CategorySelect />
            <RestaurantInfoInput
              label="가게명"
              name="name"
              value={restaurantInfo.name}
              onChange={handleInputChangeName}
            />
            <AddressInput />
            <DetailAddressInfoInput
              label="상세주소"
              name="detailAddress"
              value={restaurantInfo.detailAddress}
              onChange={handleInputChangeDetailAddress}
            />
          </RestaurantInfoSection>
        </RestaurantInfoSectionWrapper>
        <QuillAndFileUploadWrapper>
          <QuillEditorWrapper>
            <QuillEditor />
          </QuillEditorWrapper>
          <FileUploadWrapper>
            <FileUpload
              selectedFiles={selectedimageFiles}
              onFileSelect={handleFileChange}
            />
             <FileUpload
              selectedFiles={selectedimageFiles}
              onFileSelect={handleFileChange}
            />
             <FileUpload
              selectedFiles={selectedimageFiles}
              onFileSelect={handleFileChange}
            />
          </FileUploadWrapper>
        </QuillAndFileUploadWrapper>
        <MenuReviewSection
          rating={overallRating}
          onChange={handleOverallRatingChange}
        />
        <ButtonSection postId={postId} onRegister={handleRegister} />
        <ScrollToTopButton />
      </Wrapper>
      <Footer />
    </StyledGoodRestrauntPage>
  );
};

export default GoodRestaurantEnrollPage;

const StyledGoodRestrauntPage = styled.div<{ isDarkMode: boolean }>`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.isDarkMode ? DARK_GREY : WHITE)};
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
