import React from 'react';

const ButtonSection: React.FC = () => {
  const handleRegister = () => {

  };

  const handleModify = () => {
  };

  return (
    <div>
      <button type="button" onClick={handleRegister}>
        등록
      </button>
      <button type="button" onClick={handleModify}>
        수정
      </button>
    </div>
  );
};

export default ButtonSection;