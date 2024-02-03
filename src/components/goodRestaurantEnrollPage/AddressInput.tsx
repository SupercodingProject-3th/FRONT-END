import React, { useState } from "react";
import styled from "styled-components";

const AddressInput: React.FC = () => {
  const [address, setAddress] = useState("");

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };

  const handleSearchAddress = () => {
    // Implement the logic for searching the address using the Google Maps API or another service
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
      <SearchButton type="button" onClick={handleSearchAddress}>
        주소 검색
      </SearchButton>
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
  flex: 0.5; /* 남은 공간을 모두 채우도록 함 */
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
  font-weight: bold;
  width: 200px;
`;

export default AddressInput;
