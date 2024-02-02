import React from 'react';
import styled from 'styled-components';

interface RestaurantInfoInputProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RestaurantInfoInput: React.FC<RestaurantInfoInputProps> = ({
  label,
  name,
  value,
  onChange,
}) => {
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <Input type="text" id={name} name={name} value={value} onChange={onChange} />
    </div>
  );
};


const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
  font-weight: bold;
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

export default RestaurantInfoInput;