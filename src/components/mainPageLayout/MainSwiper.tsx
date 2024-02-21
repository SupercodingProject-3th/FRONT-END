import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { PostContent } from "../../types/PostContent";
import Card from "./SwiperCard";

interface Post {
  content: PostContent[];
}

const MainSwiper: React.FC<Post> = ({ content }) => {
  return (
    <>
      <Card title="실시간 베스트 맛집" posts={content} />
      <Card title="우리지역맛집[서울]" posts={content} />
    </>
  );
};

export default MainSwiper;
