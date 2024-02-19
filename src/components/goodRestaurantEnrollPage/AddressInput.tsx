import React, { useState } from "react";
import styled from "styled-components";
import Postcode from "@actbase/react-daum-postcode";

//onChange 핸들러는 주소 입력란의 값이 변경될 때 호출되고, onAddressChange 핸들러는 주소가 선택되었을 때 호출
interface AddressInputProps {
  onCoordinateChange: (coordinates: {
    latitude: string;
    longitude: string;
  }) => void;
  onChange: (address: string) => void; // 수정된 부분
}

const AddressInput: React.FC<AddressInputProps> = ({
  onCoordinateChange,
  onChange,
}) => {
  const [address, setAddress] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddressInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newAddress = e.target.value;
    setAddress(newAddress);
    onChange(newAddress);
  };
  // 사용자가 주소를 선택했을 때 호출되는 함수
  const handleSelectedAddress = (data: any) => {
    const { x, y, address: selectedAddress } = data;
    setAddress(selectedAddress); // 선택된 주소로 주소 상태를 업데이트합니다.
    onChange(selectedAddress); // 선택된 주소를 상위 컴포넌트로 전달합니다. 이게 원인
    onCoordinateChange({ latitude: y, longitude: x }); // 선택한 주소의 좌표 정보를 상위 컴포넌트로 전달합니다.
    handleCloseModal();
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSearchAddress = () => {
    if (!isModalOpen) {
      setIsModalOpen(true);
    }
  };

  return (
    <Wrapper>
      <AddressWrapper>
        <Label htmlFor="address">주소</Label>
        <Input
          type="text"
          id="address"
          name="address"
          value={address}
          onChange={handleAddressInputChange}
        />
        <Button type="button" onClick={handleSearchAddress}>
          주소 검색
        </Button>
      </AddressWrapper>

      {isModalOpen && (
        <ModalContainer>
          <PostcodeModal>
            <CloseButton onClick={handleCloseModal}>Close</CloseButton>{" "}
            {/* 이 부분이 추가되었습니다. */}
            <Postcode
              style={{ width: 400, height: 100 }}
              jsOptions={{ animation: true, hideMapBtn: true }}
              onSelected={(data) => {
                alert(JSON.stringify(data));
                handleSelectedAddress(data);
                handleCloseModal();
              }}
              onError={(error) => {
                console.error("Error occurred while fetching address:", error);
              }}
            />
          </PostcodeModal>
        </ModalContainer>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-size: 14px;
  font-weight: bold;
  display: flex;
  gap: 10px;
  flex-direction: row;
  margin-bottom: 80px;
  justify-content: space-between;
`;

const AddressWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
`;

const DetailAddressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Input = styled.input`
  flex: 1;
  width: 50%;
  padding: 0px 100px 0 0px;
  border-radius: 5px;
  margin-bottom: 10px;
  &:focus {
    outline: none;
    box-shadow: 0 0 2px 1px rgba(0, 122, 255, 0.5);
  }
`;

const Button = styled.button`
  flex: 0.5;
  padding: 8px 16px;
  font-size: 14px;
  background-color: #007bff;
  margin-left: 4px;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Label = styled.label`
  flex: 0.7;
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
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PostcodeModal = styled.div`
  padding: 20px;
  border-radius: 8px;
`;

const CloseButton = styled.button`
  width: 100%;
  height: 2%;
  font-size: 14px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export default AddressInput;
