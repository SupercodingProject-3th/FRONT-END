import React from "react";
import styled from "styled-components";

interface PageTitleProps {
  title: string; // 변경되는 제목 문자열을 받을 props
}

const PageTitle: React.FC<PageTitleProps> = ( {title}) => {
  return (
    <PageTitleWrapper>
      <Label>{title}</Label>
      <Spacer />
      <MandatoryInfo>(*)표시는 필수입력사항입니다.</MandatoryInfo>
    </PageTitleWrapper>
  );
};

const PageTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const Label = styled.label`
  font-size: 25px;
  margin-left: 2vw;
`;

const MandatoryInfo = styled.div``;

const Spacer = styled.div`
  flex: 1; /* 남은 공간을 모두 채우도록 함 */
`;

export default PageTitle;
