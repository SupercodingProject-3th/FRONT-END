import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaMapLocationDot } from "react-icons/fa6";
import MapGuide from "./MapGuide";

declare global {
  interface Window {
    kakao: any;
  }
}

interface Pagination {
  last: number;
  current: number;
  gotoPage: (pageNumber: number) => void;
}

interface Place {
  x: number;
  y: number;
  place_name: string;
  road_address_name?: string;
  // address_name?: string;
  phone?: number;
}

// MapContainer 컴포넌트 정의
const MapContainer: React.FC = () => {
  // useState 를 사용하여 맛집 정보 places 와 검색 키워드 searchKeyword 관리
  const [places, setPlaces] = useState<Place[]>([]);
  const [searchKeyword, setSearchKeyword] =
    useState<string>("맛집을 검색해보세요");

  useEffect(() => {
    const infowindow = new window.kakao.maps.InfoWindow({ zIndex: 1 });
    // const markers = [];
    const mapOption = {
      center: new window.kakao.maps.LatLng(37.566826, 126.9786567),
      level: 3,
    };

    const map = new window.kakao.maps.Map(
      document.getElementById("map"),
      mapOption
    );
    const ps = new window.kakao.maps.services.Places();

    ps.keywordSearch(searchKeyword, placesSearchCB);

    function placesSearchCB(data: any[], status: any, pagination: any) {
      if (status === window.kakao.maps.services.Status.OK) {
        const bounds = new window.kakao.maps.LatLngBounds();
        setPlaces(data);

        for (let i = 0; i < data.length; i++) {
          displayMarker(data[i]);
          bounds.extend(new window.kakao.maps.LatLng(data[i].y, data[i].x));
        }

        map.setBounds(bounds);
        displayPagination(pagination);
        setPlaces(data);
      }
    }

    function displayPagination(pagination: Pagination): void {
      const paginationEl = document.getElementById("pagination");
      const fragment = document.createDocumentFragment();

      while (paginationEl?.hasChildNodes()) {
        paginationEl.removeChild(paginationEl.lastChild!);
      }

      for (let i = 1; i <= pagination.last; i++) {
        const el = document.createElement("a");
        el.href = "#";
        el.innerHTML = i.toString();

        if (i === pagination.current) {
          el.className = "on";
        } else {
          el.onclick = (function (pageNumber: number) {
            return function () {
              pagination.gotoPage(pageNumber);
            };
          })(i);
        }

        fragment.appendChild(el);
      }

      paginationEl?.appendChild(fragment);
    }

    function displayMarker(place: Place) {
      const marker = new window.kakao.maps.Marker({
        map: map,
        position: new window.kakao.maps.LatLng(place.y, place.x),
      });

      window.kakao.maps.event.addListener(marker, "click", function () {
        infowindow.setContent(
          '<div style="text-decoration:none; padding:5px; text-align:center; font-size:12px; font-weight:bold;">' +
            '<a href="https://map.kakao.com/link/map/' +
            place.place_name +
            "," +
            place.y +
            "," +
            place.x +
            '">' +
            place.place_name +
            "</a>" +
            "</div>"
        );
        infowindow.open(map, marker);
      });
    }
  }, [searchKeyword]);
  // 검색어가 변경될때마다  handleInputChange 함수를 호출하여 적용하기
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  };

  return (
    <div>
      <StyledMapMainContainer>
        <StyledMapLocationDot>
          <FaMapLocationDot />
        </StyledMapLocationDot>
        <StyledMapTitle>
          <span>또간지도</span>
          <MapGuide />
        </StyledMapTitle>

        <StyledInput
          type="text"
          value={searchKeyword}
          onChange={handleInputChange}
          placeholder="맛집을 검색해보세요"
        />
        <StyledMap id="map">
          <div></div>
        </StyledMap>
        <StyledList>
          <div id="result-list">
            {places.map((place, index) => (
              <div key={index} style={{ marginTop: "20px" }}>
                {/* <span>{index + 1}</span> */}
                <Info>
                  <p className="place_name">🍴{place.place_name}</p>
                  {place.road_address_name ? (
                    <div>
                      <p className="place_address">{place.road_address_name}</p>
                    </div>
                  ) : (
                    <p>{place.road_address_name}</p>
                  )}
                  <p className="place_phone">{place.phone}</p>
                </Info>
              </div>
            ))}
          </div>
        </StyledList>
        <StyledPagination>
          <div id="pagination"></div>
        </StyledPagination>
      </StyledMapMainContainer>
    </div>
  );
};

export default MapContainer;

const StyledPagination = styled.div`
  font-size: 20px;
  margin-top: -80px;
  margin-bottom: 70px;

  a {
    color: #fff;
    text-decoration: none;
    background-color: #feaa00;
    margin-right: 30px;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 30px;
    padding-top: 5px;
    padding-bottom: 5px;
  }
`;

const StyledList = styled.div`
  text-align: start;

  margin-top: 20px;
  margin-bottom: 150px;
  list-style: none;
  width: 1200px;
  span {
    margin-left: 30px;
    font-weight: bold;
    background-color: #feaa00;
    color: #fff;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 30px;
  }

  li {
    padding-top: 10px;
    padding-bottom: 10px;
    height: 30px;
    list-style: none;
  }
`;
const Info = styled.div`
  margin-left: 30px;

  background-color: #f7f4ef;
  margin-bottom: 40px;
  border-radius: 30px;

  .place_name {
    font-weight: bold;
    font-size: 18px;
    padding-top: 20px;
  }
  .place_address {
    font-weight: 600;
  }
  .place_phone {
    padding-bottom: 20px;
    font-weight: 600;
  }

  p {
    margin-left: 30px;
    padding-top: 5px;
    padding-bottom: 10px;
  }
`;

const StyledMapMainContainer = styled.div`
  margin-top: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledMapTitle = styled.span`
  font-size: 25px;
  font-weight: bold;
  margin-right: 30px;
`;

const StyledInput = styled.input`
  width: 500px;
  height: 40px;
  border-radius: 30px;
  border-style: none;
  background-color: #feaa00;
  color: #fff;
  padding-left: 20px;
  font-weight: 700;
  font-size: 18px;
  margin-top: 30px;
`;
const StyledMapLocationDot = styled(FaMapLocationDot)`
  color: #feaa00;
  font-size: 40px;
  margin-right: 20px;
  padding-bottom: 10px;
`;

const StyledMap = styled.div`
  margin-top: 50px;
  width: 1200px;
  height: 480px;
  border-radius: 20px;
  border-style: solid;
  border-color: #feaa00;
`;
