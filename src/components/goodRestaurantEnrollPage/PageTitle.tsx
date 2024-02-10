import React from "react";
import styled from "styled-components";

const PageTitle: React.FC = () => {
  return (
    <PageTitleWrapper>
      <Label>맛집상세등록페이지</Label>
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
