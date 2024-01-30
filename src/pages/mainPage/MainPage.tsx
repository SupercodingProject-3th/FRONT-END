  // 예시: MyComponent.tsx
  import React from 'react';
  import styled from 'styled-components';

  import Header from '../../shared/Header';


  const MainPage: React.FC = () => {
    return (
      <StyledMainPage>
      <Header></Header>
      </StyledMainPage>
    );
  }

  export default MainPage;


  const StyledMainPage = styled.div`
    background-color: #fff;
    width: 100vw;
    height: 100vh;
  `;