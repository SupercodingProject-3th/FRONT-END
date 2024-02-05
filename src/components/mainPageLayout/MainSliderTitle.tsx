import React from "react";
import styled from "styled-components";

interface TitleProps {
  text?: string;
}

const MainSliderTitle: React.FC<TitleProps> = ({ text }) => {
  return (
    <TitleWrapper>
      <TitleText>{text}</TitleText>
    </TitleWrapper>
  );
};

const TitleWrapper = styled.div`
  position: absolute;
  width: 100%;
  text-align: center;
  padding: 1.5rem;
  background-color: red;
  margin-bottom: 3rem;
`;

const TitleText = styled.h2`
  font-size: 24px;
  font-weight: bold;
  text-align: left;
`;

export default MainSliderTitle;
