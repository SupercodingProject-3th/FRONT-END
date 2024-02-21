  import React, { useState } from 'react';
  import { useNavigate } from 'react-router-dom';
  import styled from "styled-components";
  import searchIcon from "../../assets/icon/searchIcon.png";
  import { media } from "../../styles/media";


  const SearchBar = () => {
    const [keyword, setKeyword] = useState('');
    const navigate = useNavigate(); 
    const handleImageClick = () => {
      console.log("확인")
      navigate(`/searchlist/${keyword}`);
    };
      return (
          <SearchBarContainer>
            <SearchBarInputContainer>
              <SearchBarInputWrapper>
                <SearchBarInput onChange={(e) => setKeyword(e.target.value)} />
              </SearchBarInputWrapper>
              <Image
                src={searchIcon}
                width="18"
                height="24"
                alt="searchIcon"
                onClick={handleImageClick}
              />
            </SearchBarInputContainer>
          </SearchBarContainer>
        );
      };


  export default SearchBar;

  const SearchBarContainer = styled.div`
      position: relative;
      align-items: center;
      padding: 0.8rem 1.6rem;
      height: 4rem;
      flex-grow: 1;
      gap: 1.6rem;
      max-width: 36rem;
      z-index: 999;
      border: 0.1rem solid
      color: "#000";
      border: 0.2rem solid #feaa00;
      border-radius: 0.8rem 0.8rem 0.8rem 0.8rem;
    
      @media (min-width: 1024px) {
        display: flex;
        flex-direction: column;
        position: absolute;
        box-sizing: border-box;
        width: 36rem;
        top: 50%;
        left: 55%;
        transform: translate(-30%, -50%);

        padding: 0.7rem 1.5rem;
        left: 40%; /* NOTE: 원하는 만큼 이동할 거리 설정 + Header Container에 relative 요소 추가함 Category 요소 들어오면 수정해야함 */
      }

      ${media.mobile} {
        font-size: 11px;
      }

      /* 모바일 화면 스타일 */
      @media (max-width: 1024px) {
        display: flex;
        justify-content: center; /* 가운데 정렬 */
        position: static; /* 기본 위치로 설정 */
        margin-top: 1rem; /* 다른 요소와의 간격 조절 */
        left: auto; /* 모바일에서는 left 속성을 초기화하여 가운데 정렬 */
        transform: none; /* 모바일에서는 transform 속성을 초기화하여 가운데 정렬 */
        width: 40%; /* 화면이 작아질수록 80%의 너비를 가지도록 설정 */
      }
    `;

  const SearchBarInputContainer = styled.div`
    display: flex;
    gap: 1.6rem;
    width: 100%;
  `;

  const SearchBarInputWrapper = styled.div`
    width: 100%;
    
  `;

  const SearchBarInput = styled.input`
    width: 100%;
    border: none;
    font-size: 16px;
    font-weight: 400;
    &:focus {
      outline: none;
      border: none;
    }

    ${media.mobile} {
      width: 80%; /* 화면이 작아질수록 80%의 너비를 가지도록 설정 */
    }
  `;

  const Image = styled.img`
    cursor: pointer;
  `