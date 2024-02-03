  import React from "react";
  import styled from "styled-components";
  import searchIcon from "../../assets/icon/searchIcon.png";



  const SearchBar = () => {
      return (
          <SearchBarContainer>
            <SearchBarInputContainer>
              <SearchBarInputWrapper>
                <SearchBarInput/>
              </SearchBarInputWrapper>
              <Image
                src={searchIcon}
                width="18"
                height="24"
                alt="searchIcon"
              />
            </SearchBarInputContainer>
          </SearchBarContainer>
        );
      };



  export default SearchBar;

  const SearchBarContainer = styled.div`
      display: none;
      position: relative;
      align-items: center;
      padding: 0.8rem 1.6rem;
      height: 4rem;
      flex-grow: 1;
      gap: 1.6rem;
      max-width: 36rem;
      z-index: 999;
    
      border: 0.1rem solid
      
      background-color: "fff"
      color: "#000";
    
      @media (min-width: 1024px) {
        display: flex;
        flex-direction: column;
        position: absolute;
        box-sizing: border-box;
        width: 36rem;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 10rem;
        border: 0.2rem solid #feaa00;
        border-radius: 0.8rem 0.8rem 0.8rem 0.8rem;
        padding: 0.7rem 1.5rem";



      
        left: 40rem; /* NOTE: 원하는 만큼 이동할 거리 설정 + Header Container에 relative 요소 추가함 Category 요소 들어오면 수정해야함 */
        

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
  `;

  const Image = styled.img`

  `