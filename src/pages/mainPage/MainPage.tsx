import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

import Header from "../../shared/Header";
import Footer from "../../shared/Footer";
import ScrollToTopButton from "../../shared/ScrollTopButton";
import { media } from "../../styles/media";
import MainSwiper from "../../components/mainPageLayout/MainSwiper";
import MainBanner from "../../components/mainPageLayout/MainBanner";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { DARK_GREY, WHITE, BLACK } from "../../styles/colors";
import GoodPlaceBanner from "../../components/mainPageLayout/GoodPlaceBanner";
import PostBanner from "../../components/mainPageLayout/PostBanner";
import { PostContent } from "../../types/PostContent";

const MainPage: React.FC = () => {
  const [posts, setPosts] = useState<PostContent[]>([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const size = 7; // 한 페이지에 표시할 아이템 수
    const page = 0; // 페이지 번호 (0부터 시작)
    const apiUrl =
      "https://www.onesol.shop/v1/api/post/post-list?page=0&size=10";

    axios
      .post(apiUrl, {
        params: {
          size,
          page,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setPosts(response.data.data.content);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handlePageSelection = (selectedPage: any) => {};
  const isDarkMode = useSelector(
    (state: RootState) => state.darkMode.isDarkMode
  );

  return (
    <StyledMainPage isDarkMode={isDarkMode}>
      <Header />
      <MainBanner setSelectedPage={handlePageSelection} />
      {posts.length > 0 && <MainSwiper content={posts} />}
      <GoodPlaceBanner />
      <PostBanner />
      <ScrollToTopButton />
      <Footer />
    </StyledMainPage>
  );
};

export default MainPage;

const StyledMainPage = styled.div<{ isDarkMode: boolean }>`
  background-color: ${(props) => (props.isDarkMode ? DARK_GREY : WHITE)};
  color: ${(props) => (props.isDarkMode ? WHITE : BLACK)};
  width: 100vw;
  display: flex;
  flex-direction: column;

  ${media.mobile} {
    font-size: 11px;
  }

  ${media.tablet} {
    font-size: 12px;
  }

  ${media.desktop} {
    font-size: 14px;
  }
`;
