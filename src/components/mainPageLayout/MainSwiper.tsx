  import React, { Component } from "react";
  import "slick-carousel/slick/slick.css";
  import "slick-carousel/slick/slick-theme.css";
  
  import { PostContent } from "../../types/PostContent";
  import Card from "./SwiperCard";

  interface Post {
    content: PostContent[];
  }

  // NOTE: 정적데이터 예시
  // const dataTop = [
  //   {url:"https://t1.daumcdn.net/cfile/tistory/247BF54F560F52372F"},
  // ]  

  const MainSwiper: React.FC<Post> = ({ content }) => {
    console.log(content, "content 확인용로그"); // 확인용 로그
    
    return (
      <>
        <Card title="실시간 베스트 맛집" posts={content} />
        <Card title="우리지역맛집[서울]" posts={content} />
      </>
    );
  };

  export default MainSwiper;