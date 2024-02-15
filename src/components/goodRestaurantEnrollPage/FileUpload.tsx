import React, { useState, useRef } from "react";
import styled from "styled-components";

interface FileUploadProps {
  selectedFiles: File[];
  onFileSelect: (files: FileList | null) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ selectedFiles, onFileSelect }) => {
  const [previewImage, setPreviewImage] = useState(""); // 미리보기 이미지 URL을 관리하는 상태
  const inputRef = useRef<HTMLInputElement | null>(null); // useRef를 함수 외부에서 선언
  const [isFileInputDisabled, setIsFileInputDisabled] = useState(false);

  if (selectedFiles.length >= 3) {
    setIsFileInputDisabled(true);
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        if (e.target && e.target.result) {
          setPreviewImage(e.target.result as string); // 파일의 URL을 previewImage 상태에 저장
        }
      };
      fileReader.readAsDataURL(files[0]); // 선택된 파일의 URL을 읽어옴
    } else {
      setPreviewImage(""); // 파일이 선택되지 않았을 때 미리보기 이미지 초기화
    }
    onFileSelect(files); // 부모 컴포넌트로 선택된 파일 전달
  };

  const handleButtonClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
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
        disabled={isFileInputDisabled}
      />
    </StyledProductUpload>
  );
};

export default FileUpload;

const StyledProductUpload = styled.div`
  background-color: transparent;
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
