import React from "react";
import styled from "styled-components";
import imageLogo from "../assets/icon/logo.png";

interface LogoProps {
  //Note: Logo 컴포넌트의 프로퍼티 타입 정의
}

const Logo: React.FC<LogoProps> = () => {

  return (
    <LogoWrapper >
      <LogoLink href="/"/>
       <Image src={imageLogo} width={100} height={100} alt="Logo" />
    </LogoWrapper>
  );
};

export default Logo;

const LogoWrapper = styled.div`
  display: block;
  position: relative;
  width: 100px;
  height: 100px;

  @media (min-width: 1024px) {
    width: 100px;
    height: 100px;
    margin-left: 6rem; 
  }
`;

const LogoLink = styled.a`
`

const Image = styled.img``;
