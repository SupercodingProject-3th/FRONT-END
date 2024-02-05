import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Card from "./SwiperCard";
// import Banner from "./SwiperBanner";
//import Explore from "./components/Explore";




const data = [
    {title:"BACKPACKING TRIPS",url:"https://www.wanderon.in/svg/backpacking-trips.svg"},
    {title:"WEEKEND TRIPS",url:"https://www.wanderon.in/svg/weekend-trips.svg"},
    {title:"WORKCATIONS STAYS",url:"https://www.wanderon.in/svg/workcations.svg"},
    {title:"ADVENTURE COURSES",url:"https://www.wanderon.in/svg/scuba.svg"},
    {title:"CUSTOMISED TRIPS",url:"https://www.wanderon.in/svg/customised-trips.svg"},
    {title:"CORPORATE TRIPS",url:"https://www.wanderon.in/svg/corporate-trips.svg"},
]


const dataBanner = [
    {title:"맛집 목록",url:"https://www.wanderon.in/svg/cover-travellers.svg"},
    {title:"맛집 지도",url:"https://www.wanderon.in/svg/cover-star.svg"},
    {title:"맛집 인기게시글",url:"https://www.wanderon.in/svg/cover-destination.svg"},
]


const dataForBackPacking = [
  {url:"https://www.wanderon.in/triplist/bir-billing/wanderon-bir-1.jpg"},
  {url:"https://www.wanderon.in/triplist/manali-lahaul/wanderon-manali-1.jpg"},
  {url:"https://www.wanderon.in/triplist/kasol-kheerganga/wanderon-kasol-1.jpg"},
  {url:"https://www.wanderon.in/triplist/tirthan-valley/wanderon-tirthan-1.jpg"},
  {url:"https://www.wanderon.in/triplist/chopta-tungnath/wanderon-chopta-1.jpg"},
  {url:"https://www.wanderon.in/triplist/mcleodganj-bir-billing/wanderon-bir-1.jpg"},
]


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
      <Card title="실시간 베스트 맛집" data={dataTop}/>
      <Card title="우리지역맛집[서울]" data={dataTop}/>
      </>
    )
  }
}