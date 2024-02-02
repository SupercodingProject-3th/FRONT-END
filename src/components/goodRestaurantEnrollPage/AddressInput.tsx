import React, { useState } from 'react';

const AddressInput: React.FC = () => {
  const [address, setAddress] = useState('');

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };

  const handleSearchAddress = () => {
    // Implement the logic for searching the address using the Google Maps API or another service
  };

  return (
    <div>
      <label htmlFor="address">주소</label>
      <input type="text" id="address" name="address" value={address} onChange={handleAddressChange} />
      <button type="button" onClick={handleSearchAddress}>
        주소 검색
      </button>
    </div>
  );
};

export default AddressInput;