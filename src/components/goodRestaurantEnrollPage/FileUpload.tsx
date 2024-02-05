import React, { useState, useRef } from "react";
import styled from "styled-components";

const FileUpload = () => {
  const [previewImage, setPreviewImage] = useState(""); // 미리보기 이미지 URL을 관리하는 상태
  const inputRef = useRef<HTMLInputElement | null>(null); // useRef를 함수 외부에서 선언

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    // 파일이 선택되면 미리보기 이미지 URL 업데이트
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string); // string으로 타입 캐스팅
      };
      reader.readAsDataURL(file);
    }
  };

  const handleButtonClick = () => {
    if (inputRef.current) {
      inputRef.current.click(); // 파일 업로드 입력을 클릭
    }
  };

  return (
    <StyledProductUpload className="productUpload">
      <img src={previewImage} alt="" className="productUploadImg" />
      <label htmlFor="file">
        <button
          style={{ width: "2vw", height: "3vh", opacity: 1 }}
          onClick={handleButtonClick}
        >
          +
        </button>
      </label>
      <input
        ref={inputRef} 
        type="file"
        id="file"
        style={{ opacity: 0, position: "absolute", zIndex: -1 }}
        onChange={handleFileChange}
      />
    </StyledProductUpload>
  );
};

export default FileUpload;


const StyledProductUpload = styled.div`
  background-color: pink; 
  height: 10vh;
  width: 10vw;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1vh;

  button {
    width: 100%; /* 버튼의 너비를 100%로 설정하여 부모 컨테이너에 맞게 확장 */
    height: 100%; /* 버튼의 높이를 100%로 설정하여 부모 컨테이너에 맞게 확장 */
    opacity: 1;
    font-size: 1.5rem; /* 버튼의 글꼴 크기를 조절하세요 */
    border: none;
    background-color: transparent;
    cursor: pointer;
 
  }
`;