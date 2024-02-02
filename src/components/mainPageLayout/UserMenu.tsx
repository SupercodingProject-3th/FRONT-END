import styled from "styled-components";
import { ReactComponent as RegisterIcon } from "../../assets/icon/mainPage/register.svg";
import { ReactComponent as LogInIcon } from "../../assets/icon/mainPage/login.svg";


const UserMenu = () => {
    return (
      <UserMenuContainer>
        <>
          <LoginButton isDarkMode={false} onClick={() => {}}>
            <LogInIcon/>
          </LoginButton>
          <SignupButton isDarkMode={false}>
            <RegisterIcon/>
          </SignupButton>
        </>
      </UserMenuContainer>
    );
  };



const UserMenuContainer = styled.div`
  display: flex;
  position: relative;
  gap: 1.6rem;
  font-size: 16px;
  font-weight: 500;
  color: #4f3d21;
  align-items: center;
`;

const ProfileButton = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    padding: 0.6rem 0.2rem;
    cursor: pointer;
    width: 4rem;
    height: 4.8rem;

    &:hover {
      img {
        box-shadow: 0px 0px 1px 4px rgb(230, 230, 230);
      }
      transform: scale(1.1);

      transition: all 0.3s;
    }
  }
`;

const LoginButton = styled.button<{ isDarkMode: boolean }>`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    padding: 0.8rem 1.6rem;
    border-radius: 10rem;
    &:hover {
      background-color: ${(props) =>
        props.isDarkMode ? props.theme.lightNavy : props.theme.lightGrey};
    }
    color: ${(props) =>
      props.isDarkMode ? props.theme.lightYellow : props.theme.brown};
    transition: all 0.3s;


    cursor: pointer;
    border: 2px solid #feaa00;
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

const SignupButton = styled.button<{ isDarkMode: boolean }>`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    padding: 0.8rem 1.6rem;
    border-radius: 10rem;
    background-color: ${(props) =>
      props.isDarkMode ? props.theme.lightYellow : props.theme.yellow};
    color: ${(props) =>
      props.isDarkMode ? props.theme.deepNavy : props.theme.brown};
    &:hover {
      background-color: ${(props) =>
        props.isDarkMode ? props.theme.yellow : props.theme.deepYellow};
    }
    transition: background-color 0.3s;

    cursor: pointer;
    border: 2px solid #feaa00;
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

const IconButton = styled.div<{ isDarkMode: boolean }>`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    padding: 0.8rem 1.6rem;
    border-radius: 10rem;
    cursor: pointer;
    color: #fff
    font-size: 16px;
    margin-left: -1rem;

    &:hover {
      transform: scale(1.05);
      
  
    transition: all 0.3s;
  
  }
`;

export default UserMenu;
