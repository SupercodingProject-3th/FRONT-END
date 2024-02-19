import React, { useEffect,useState } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}
interface DetailPageMap{
  latitude:string;
  longitude:string;
  name:string;
}
const DetailPageMap:React.FC<DetailPageMap> = ({latitude,longitude,name}) => {
  useEffect(() => {

    var markerPosition  = new window.kakao.maps.LatLng(latitude, longitude); 
      // 이미지 지도에 표시할 마커입니다
      // 이미지 지도에 표시할 마커는 Object 형태입니다
      var marker = {
          position: markerPosition,
          text:name// text 옵션을 설정하면 마커 위에 텍스트를 함께 표시할 수 있습니다

      };
      var staticMapContainer  = document.getElementById('staticMap'); // 이미지 지도를 표시할 div  
      var staticMapOption = { 
              center: new window.kakao.maps.LatLng(latitude, longitude), // 이미지 지도의 중심좌표
              level: 1, // 이미지 지도의 확대 레벨
              marker: marker // 이미지 지도에 표시할 마커 
          };    

      var staticMap = new window.kakao.maps.StaticMap(staticMapContainer, staticMapOption);

      console.log(latitude,longitude)

  }, [latitude,longitude])

return (
    <div id="staticMap" style={{ width: "100%", height:'300px', margin:"40px" }}>
    </div>
);
}

export default DetailPageMap; 