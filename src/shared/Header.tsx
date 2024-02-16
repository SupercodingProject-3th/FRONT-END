import styled from "styled-components";
import { Link } from "react-router-dom";

import LogoImage from "../assets/icon/logo.png";
import SearchBar from "../components/mainPageLayout/SearchBar";
import DarkmodeBtn from "../components/mainPageLayout/DarkModeToggleButton";
import UserMenu from "../components/mainPageLayout/UserMenu";
import { media } from "../styles/media";
import { DARK_GREY, WHITE } from "../styles/colors";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const Header = () => {
  const isDarkMode = useSelector(
    (state: RootState) => state.darkMode.isDarkMode
  );

  return (
    <HeaderLayout isDarkMode={isDarkMode}>
      <HeaderContainer>
        <TopNavBar>
          <LogoWrapper>
            <Link to="/">
              <Logo src={LogoImage} alt="Logo"></Logo>
            </Link>
          </LogoWrapper>
          <SearchBar />
          <ButtonsWrapper>
            <DarkmodeBtn isMobile={false} />
            <UserMenu />
          </ButtonsWrapper>
        </TopNavBar>
      </HeaderContainer>
      <UnderLine />
    </HeaderLayout>
  );
};

export default Header;

const HeaderLayout = styled.div<{ isDarkMode: boolean }>`
  width: 100%;
  background-color: ${(props) => (props.isDarkMode ? DARK_GREY : WHITE)};
  z-index: 9990;
  font-size: 16px;
  transition: transform 0.3s ease-in-out;
  z-index: 1000;
`;

const HeaderContainer = styled.div`
  //NOTE: 추가했음 그 검색창 왼쪽으로 땡기려고 카테고리들어오면 수정해야함
  position: relative;
  width: 100%;
  max-width: 120rem;
  margin: 0 auto;
  padding: 0 2rem;
`;

const TopNavBar = styled.div`
  position: relative;
  display: flex;
  height: 7rem;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 1.2rem;

  @media (min-width: 1024px) {
    height: 8rem;
  }

  @media (max-width: 1023.9px) {
    flex-direction: column; /* 모바일 환경에서 세로로 요소를 배치 */
    height: auto; /* 높이를 자동으로 설정하여 내용에 맞게 조절 */
    align-items: flex-start; /* 요소를 왼쪽 정렬 */
  }
`;

const UnderLine = styled.div`
  display: block;
  border-bottom: 0.1rem solid rgb(200, 200, 200);
`;

const LogoWrapper = styled.div`
  @media (max-width: 1023.9px) {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 3rem;
  align-items: center;

  /* NOTE: 오른쪽 여백 만든 것 CATEGORY 추가되면 수정해야함 */
  @media (min-width: 1024px) {
    margin-right: 10rem;
  }

  @media (max-width: 1023.9px) {
    flex-direction: column; /* 모바일 환경에서 세로로 요소를 배치 */
    align-items: flex-start;
  }
`;

const Logo = styled.img`
  width: 100px;
  height: auto; //NOTE: 가로 길이에 맞추어 세로 길이를 조절

  ${media.mobile} {
    width: 30px;
    height: auto; 
`;
