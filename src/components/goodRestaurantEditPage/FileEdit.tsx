import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

interface FileEditProps {
  selectedFiles: File[];
  onFileSelect: (files: FileList | null) => void;
  initialPhoto: string;
}

const FileEdit: React.FC<FileEditProps> = ({
  selectedFiles,
  onFileSelect,
  initialPhoto,
}) => {
  const [previewImage, setPreviewImage] = useState(initialPhoto); // 미리보기 이미지 URL을 관리하는 상태
  const inputRef = useRef<HTMLInputElement | null>(null); // useRef를 함수 외부에서 선언
  const [isFileInputDisabled, setIsFileInputDisabled] = useState(false);

  useEffect(() => {
    setPreviewImage(initialPhoto);
  }, [initialPhoto]);


  useEffect(() => {
    if (selectedFiles.length >= 3) {
      setIsFileInputDisabled(true);
    } else {
      setIsFileInputDisabled(false);
    }
  }, [selectedFiles]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        if (e.target && e.target.result) {
          setPreviewImage(e.target.result as string);
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
    <StyledProductUpload>
      <ImgProductUpload src={previewImage} alt=""/>
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

export default FileEdit;

const StyledProductUpload = styled.div`
  position: relative; // //NOTE: 사진 미리보기 되면 + 밀리는 현상 방지
  background-color: transparent;
  height: 10vh;
  width: 10vw;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1vh;

  label {
    position: absolute; /* 버튼을 절대적인 위치로 설정 */
    top: 50%; /* 부모 요소의 중앙에 위치시키기 위해 */
    left: 50%; /* 부모 요소의 중앙에 위치시키기 위해 */
    transform: translate(-50%, -50%); /* 수평 및 수직 가운데 정렬 */
  }

  button {
    width: 100%; /* 버튼의 너비를 100%로 설정하여 부모 컨테이너에 맞게 확장 */
    height: 100%; /* 버튼의 높이를 100%로 설정하여 부모 컨테이너에 맞게 확장 */
    opacity: 1;
    font-size: 1.5rem; /* 버튼의 글꼴 크기를 조절하세요 */
    border: none;
    background-color: transparent;
    cursor: pointer;
    z-index: 3; //NOTE: 사진 미리보기 되면 + 밀리는 현상 방지
  }
`;

//NOTE:  부모 요소의 최대 너비와 최대 높이를 각각 80%로 설정
const ImgProductUpload = styled.img`
  max-width: 80%;
  max-height: 80%;
`;
