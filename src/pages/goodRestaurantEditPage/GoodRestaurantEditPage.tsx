// 나머지 필드에 대한 컴포넌트 추가
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
import FileEdit from "../../components/goodRestaurantEditPage/FileEdit";
import { DARK_GREY, WHITE, SOFT_BEIGE } from "../../styles/colors";
import ContactNumInfoInput from "../../components/goodRestaurantEnrollPage/ContactNumInfoInput";

const GoodRestaurantEnrollPage: React.FC = () => {
  const isDarkMode = useSelector(
    (state: RootState) => state.darkMode.isDarkMode
  );
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const navigate = useNavigate(); 
  const { postId = "" } = useParams<{ postId?: string }>();
  const [loading, setLoading] = useState(true);
  const [restaurantInfo, setRestaurantInfo] = useState({
    name: "",
    address: "",
    category: "",
    contactNum: "",
    detailAddress: "",
    menu: "",
    content: "",
    latitude: "",
    longitude: "",
    postPhotoDtos: "",
  });

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const response = await axios.get(
          `https://www.onesol.shop/v1/api/post-detail/${postId}`
        );
        const postData = response.data;
        console.log(
          "postPhotoDtos: postData.postPhotoDtos",
          postData.data.postPhotoDtos
        );
        console.log(
          "postPhotoDtos: postData.postPhotoDtos[0].photo",
          postData.data.postPhotoDtos[0].photo
        );

        setRestaurantInfo((prevInfo) => ({
          ...prevInfo,
          name: postData.data.name,
          address: postData.data.address,
          category: postData.data.category,
          contactNum: postData.data.contactNum,
          detailAddress: postData.data.detailAddress,
          menu: postData.data.menu,
          content: postData.data.content,
          latitude: postData.data.latitude,
          longitude: postData.data.longitude,
          // postPhotoDtos: postData.data.postPhotoDtos[0].photo,
          postPhotoDtos: postData.data.postPhotoDtos.map((photo: any) => photo.photo),
        }));

        setLoading(false);
      } catch (error) {
        console.error("게시물 데이터를 가져오는 중 오류 발생:", error);
      }
    };

    if (postId) {
      fetchPostData();
    }
  }, []);

  const token = isAuthenticated ? localStorage.getItem("token") : null;
  const [selectedimageFiles, setSelectedImageFiles] = useState<File[]>([]);

  const handleCategoryChange = (selectedCategory: string) => {
    setRestaurantInfo({
      ...restaurantInfo,
      category: selectedCategory,
    });
  };

  const handleContentChange = (content: string) => {
    setRestaurantInfo({
      ...restaurantInfo,
      content: content,
    });
  };

  const handleFileChange = (files: FileList | null) => {
    if (files && files.length > 0) {
      const newFiles: File[] = Array.from(files);
      setSelectedImageFiles(newFiles);
    }
  };

  const handleRegister = async () => {
    const formData = new FormData();

    selectedimageFiles.forEach((file, index) => {
      formData.append("images", file);
    });

    const jsonBlob = new Blob([JSON.stringify(restaurantInfo)], {
      type: "application/json",
    });

    formData.append("modifyPost", jsonBlob);

    try {
      const response = await axios.post(
        `https://www.onesol.shop/v1/api/modify-post/${postId}`,
        formData,
        {
          headers: {
            Token: token,
          },
        }
      );
      console.log("백엔드로부터의 응답:", response.data);
      alert("맛집수정에 성공했습니다.");
      navigate("/placelist");
    } catch (error: any) {
      console.error("오류 발생:", error);

      if (error.response) {
        console.log("에러 응답:", error.response.data);
      } else {
        console.log("오류 응답이 없습니다.");
      }
    }
  };

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

  const [selectedCoordinates, setSelectedCoordinates] = useState<{
    latitude: string;
    longitude: string;
  }>({
    latitude: "",
    longitude: "",
  });

  const handleCoordinateChange = (coordinates: {
    latitude: string;
    longitude: string;
  }) => {
    setSelectedCoordinates({
      latitude: coordinates.latitude,
      longitude: coordinates.longitude,
    });
  };

  useEffect(() => {
    setRestaurantInfo((prevInfo) => ({
      ...prevInfo,
      latitude: selectedCoordinates.latitude,
      longitude: selectedCoordinates.longitude,
    }));
  }, [selectedCoordinates]);

  return (
    <StyledGoodRestrauntPage isDarkMode={isDarkMode}>
      <Header />
      <Wrapper>
        <RestaurantInfoSectionWrapper>
          <PageTitle title="맛집수정페이지" />
          <RestaurantInfoSection>
            <CategorySelect
              onCategoryChange={handleCategoryChange}
              value={restaurantInfo.category}
            />
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
              onCoordinateChange={handleCoordinateChange}
              onChange={handleInputChangeAddress}
              initialValue={{ address: restaurantInfo.address }}
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
            <QuillEditor
              onContentChange={handleContentChange}
              initialValue={restaurantInfo.content}
            />
          </QuillEditorWrapper>
          <FileUploadWrapper>
            {/* 미리보기가 있는 사진의 수 계산 */}

            {/* 항상 3개의 FileEdit 컴포넌트를 렌더링 */}
            {[...Array(3)].map((_, index) => (
              <FileEdit
                key={index}
                selectedFiles={selectedimageFiles}
                onFileSelect={handleFileChange}
                initialPhoto={
                 index >= 2? restaurantInfo.postPhotoDtos: "" // index가 2보다 크거나 같으면 미리보기 없음
                }
              />
            ))}
          </FileUploadWrapper>
        </QuillAndFileUploadWrapper>
        <MenuReviewSection
          onChange={handleInputChangeMenu}
          initialValue={restaurantInfo.menu}
        />
        <ButtonSection
          postId={postId}
          onRegister={handleRegister}
          isEditing={true}
        />
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
  margin: auto;
  justify-content: space-evenly;
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
  overflow-y: auto;
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
  flex-direction: column-reverse;
`;
