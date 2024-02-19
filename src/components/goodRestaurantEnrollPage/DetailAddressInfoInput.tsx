import React from 'react';
import styled from 'styled-components';

interface DetailAddressInfoInputProps  {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const  DetailAddressInfoInput: React.FC<DetailAddressInfoInputProps > = ({
  label,
  name,
  value,
  onChange,
}) => {
  return (
    <DetailAddressInfoInputWrapper>
      <>
      <Label htmlFor={name}>{label}</Label>
      <Input type="text" id={name} name={name} value={value} onChange={onChange} />
      </>
    </DetailAddressInfoInputWrapper>
  );
};

export default  DetailAddressInfoInput;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
  font-weight: bold;
  width: 200px;
`;


const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  &:focus {
    outline: none;
    box-shadow: 0 0 2px 1px rgba(0, 122, 255, 0.5);
  }
`;


const DetailAddressInfoInputWrapper = styled.div`
  display: flex;
  gap: 10px; 
  flex-direction: row;
  align-items: baseline;
  margin-bottom: 80px; /* 아래쪽에 일정한 여백 추가 */
`

