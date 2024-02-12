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
    setAddress(data.address); 
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
      <Label htmlFor="address">주소</Label>
      <Input
        type="text"
        id="address"
        name="address"
        value={address}
        onChange={handleAddressChange}
      />
      <Button type="button" onClick={handleSearchAddress}>
        주소 검색
      </Button>

      {isModalOpen && (
        <ModalContainer>
          <PostcodeModal>
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
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
`;

export default AddressInput;
