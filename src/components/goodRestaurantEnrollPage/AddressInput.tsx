import React, { useState } from "react";
import styled from "styled-components";
import Postcode from "@actbase/react-daum-postcode";

const AddressInput: React.FC = () => {
  const [address, setAddress] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };

  const handleSelectedAddress = (data: any) => {
    setAddress(data.address); // 선택한 주소로 주소 상태 업데이트
    handleCloseModal(); // 팝업 닫기
  };

  const handleCloseModal = () => {
    // 팝업을 닫을 때 팝업이 열려 있는 상태를 변경
    setIsModalOpen(false);
  };



  return (
    <AddressInputWrapper>
      <Label htmlFor="address">주소</Label>
      <Input
        type="text"
        id="address"
        name="address"
        value={address}
        onChange={handleAddressChange}
      />
      <SearchButton type="button" onClick={() => setIsModalOpen(true)}>
        주소 검색
      </SearchButton>

      {/* 팝업을 열 때만 Postcode 컴포넌트 렌더링 */}
      {isModalOpen && (
        <ModalContainer >
          <PostcodeModal>
            <Postcode
              style={{ width: 400, height: 100 }}
              jsOptions={{ animation: true, hideMapBtn: true }}
              onSelected={(data) => {
                alert(JSON.stringify(data));
                handleSelectedAddress(data);
                handleCloseModal(); // 주소 선택 후 팝업을 닫음
              }}
              onError={(error) => {
                console.error("Error occurred while fetching address:", error);
                // 오류 처리 로직을 추가할 수 있음
              }}
            />
          </PostcodeModal>
        </ModalContainer>
      )}
    </AddressInputWrapper>
  );
};
const AddressInputWrapper = styled.div`
  font-size: 14px;
  font-weight: bold;
  display: flex;
  gap: 10px;
  flex-direction: row;
  margin-bottom: 80px;
  justify-content: space-between;
`;

const Input = styled.input`
  flex: 1; /* 남은 공간을 모두 채우도록 함 */
  width: 50%;
  padding: 0px 100px 0 0px;
  border-radius: 5px;
  margin-bottom: 10px;
  &:focus {
    outline: none;
    box-shadow: 0 0 2px 1px rgba(0, 122, 255, 0.5);
  }
`;

const SearchButton = styled.button`
  flex: 0.5; /* 남은 공간을 모두 채우도록 함 */
  padding: 8px 16px;
  font-size: 14px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Label = styled.label`
  flex: 0.7; /* 남은 공간을 모두 채우도록 함 */
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
  font-weight: bold;
  width: 200px;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(
    0,
    0,
    0,
    0.5
  ); /* 모달 배경에 투명한 검은색 배경 적용 */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PostcodeModal = styled.div`
  background-color: #fff; /* 모달 내부 배경색 */
  padding: 20px; /* 내부 여백 */
  border-radius: 8px; /* 모달 테두리 둥글게 */
`;

export default AddressInput;
