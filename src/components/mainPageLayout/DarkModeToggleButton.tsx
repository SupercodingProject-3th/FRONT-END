import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { toggleDarkMode } from "../../store/slices/darkModeSlices";
import { RootState } from "../../store/store";
import Image from "./DarkModeImage";

const DarkmodeBtn = ({ isMobile }: { isMobile: boolean }) => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector(
    (state: RootState) => state.darkMode.isDarkMode
  );

  const toggleDarkModeHandler = () => {
    dispatch(toggleDarkMode()); // Redux에서 액션 디스패치
    localStorage.setItem("darkMode", JSON.stringify(!isDarkMode));
  };

  return (
    <ToggleContainer
      onClick={toggleDarkModeHandler}
      isMobile={isMobile}
      isDarkMode={isDarkMode}
    >
      <Image isDarkMode={isDarkMode} width={15} height={15} />
      <ToggleBtn isDarkMode={isDarkMode} />
    </ToggleContainer>
  );
};

export default DarkmodeBtn;

//NOTE: 뺌  position: relative;

const ToggleContainer = styled.div<{ isMobile: boolean; isDarkMode: boolean }>`
  display: ${(props) => (props.isMobile ? "flex" : "none")};
  align-items: center;
  width: 5.5rem;
  height: 3rem;
  border-radius: 10rem;
  background-color: ${(props) => (props.isDarkMode ? "#000" : "#aaa")};
  padding: 0.25rem;
  cursor: pointer;

  @media (min-width: 1024px) {
    display: flex;
  }
`;

const ToggleBtn = styled.div<{ isDarkMode: boolean }>`
  z-index: 1;
  width: 2.5rem;
  height: 2.5rem;
  background-color: white;
  border-radius: 5rem;
  transition: transform 0.2s ease-in-out;
  transform: translateX(${(props) => (props.isDarkMode ? "2.5rem" : "0")});
`;

//이거 적용안되면 삭제

const Icon = styled(Image)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 1.5rem;
  height: 1.5rem;
  &:first-child {
    left: 0.75rem;
  }
  &:last-child {
    right: 0.75rem;
  }
`;
