import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Card from "./SwiperCard";

const dataTop = [
  {url:"https://t1.daumcdn.net/cfile/tistory/247BF54F560F52372F"},
  {url:"https://cdn.pixabay.com/photo/2010/12/13/10/05/berries-2277_1280.jpg"},
  {url:"https://cdn.pixabay.com/photo/2010/12/13/10/05/berries-2277_1280.jpg"},
  {url:"https://cdn.pixabay.com/photo/2010/12/13/10/05/berries-2277_1280.jpg"},
  {url:"https://cdn.pixabay.com/photo/2010/12/13/10/05/berries-2277_1280.jpg"},
  {url:"https://cdn.pixabay.com/photo/2010/12/13/10/05/berries-2277_1280.jpg"},
  {url:"https://cdn.pixabay.com/photo/2010/12/13/10/05/berries-2277_1280.jpg"},
]  

export default class MainSwiper extends Component {
  render() {
    return (
      <>
      {/* <Banner data={dataBanner}/> */}
      <Card title="실시간 베스트 맛집" data={dataTop}/>
      <Card title="우리지역맛집[서울]" data={dataTop}/>
      </>
    )
  }
}