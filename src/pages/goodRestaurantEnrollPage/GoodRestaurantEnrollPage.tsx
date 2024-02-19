import React, { useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import axios from "axios";

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
import ContactNumInfoInput from "../../components/goodRestaurantEnrollPage/ContactNumInfoInput";

const GoodRestaurantEnrollPage: React.FC = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  const token = localStorage.getItem("token");
  const [selectedimageFiles, setSelectedImageFiles] = useState<File[]>([]);

  const handleCategoryChange = (selectedCategory: string) => {
    setRestaurantInfo({
      ...restaurantInfo,
      category: selectedCategory,
    });
  };

  const [selectedAddress, setSelectedAddress] = useState("");

  const [selectedCoordinates, setSelectedCoordinates] = useState<{
    latitude: string;
    longitude: string;
  }>({
    latitude: "",
    longitude: "",
  });

  const handleContentChange = (content: string) => {
    setRestaurantInfo({
      ...restaurantInfo,
      content: content, // 사용자가 작성한 내용을 content로 업데이트합니다.
    });
  };

  const handleFileChange = (files: FileList | null) => {
    if (files) {
      setSelectedImageFiles([...selectedimageFiles, ...Array.from(files)]);
    }
  };

  const formData = new FormData();

  selectedimageFiles.forEach((file, index) => {
    formData.append(`images[${index}]`, file);
    formData.append(
      "images",
      new Blob([JSON.stringify(formData)], { type: "application/json" })
    );
  });

  // JSON 데이터를 formData에 추가합니다.
  const jsonData = {
    name: "간장떡볶이",
    address: "대전광역시 강남구 강남대로152길 64",
    detailAddress: "B103호",
    latitude: "33.25144684054",
    longitude: "126.50972692876",
    category: "한식",
    contactNum: "02-738-3383",
    menu: "떡볶이",
    content: "맛있어요",
  };

  formData.append(
    "data",
    new Blob([JSON.stringify(jsonData)], { type: "application/json" })
  );

  const handleRegister = async () => {
    try {
      const response = await axios.post(
        "https://www.onesol.shop/v1/api/reg-post",
        formData,
        {
          headers: {
            Token: token,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("백엔드로부터의 응답:", response.data);
      alert("맛집목록등록에 성공했습니다.");
      window.location.reload();
    } catch (error: any) {
      console.error("오류 발생:", error);

      if (error.response) {
        console.log("에러 응답:", error.response.data);
        console.log("사용자 입력 내용:", restaurantInfo);
      } else {
        console.log("오류 응답이 없습니다.");
      }
    }
  };

  const isDarkMode = useSelector(
    (state: RootState) => state.darkMode.isDarkMode
  );

  const [restaurantInfo, setRestaurantInfo] = useState({
    name: "",
    address: "",
    category: "",
    contactNum: "",
    detailAddress: "",
    menu: "",
    content: "",
  });

  const { postId = "" } = useParams<{ postId?: string }>(); // postId의 초기값을 ''로 설정

  const handleInputChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRestaurantInfo({
      ...restaurantInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleInputChangeAddress = (newAddress: string) => {
    setRestaurantInfo({
      ...restaurantInfo,
      address: newAddress,
    });
  };

  const handleInputChangeDetailAddress = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRestaurantInfo({
      ...restaurantInfo,
      detailAddress: e.target.value,
    });
  };

  const handleInputChangeContactNum = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRestaurantInfo({
      ...restaurantInfo,
      contactNum: e.target.value,
    });
  };

  const handleInputChangeMenu = (updatedMenu: string) => {
    setRestaurantInfo({
      ...restaurantInfo,
      menu: updatedMenu,
    });
  };

  return (
    <StyledGoodRestrauntPage isDarkMode={isDarkMode}>
      <Header />
      <Wrapper>
        <RestaurantInfoSectionWrapper>
          <PageTitle />
          <RestaurantInfoSection>
            <CategorySelect onCategoryChange={handleCategoryChange} />
            <RestaurantInfoInput
              label="가게명"
              name="name"
              value={restaurantInfo.name}
              onChange={handleInputChangeName}
            />
            <ContactNumInfoInput
              label="연락처"
              name="contactNum"
              value={restaurantInfo.contactNum}
              onChange={handleInputChangeContactNum}
            />
            <AddressInput
              onCoordinateChange={setSelectedCoordinates}
              onChange={handleInputChangeAddress}
            />
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
            <QuillEditor onContentChange={handleContentChange} />
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
        <MenuReviewSection onChange={handleInputChangeMenu} />
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
