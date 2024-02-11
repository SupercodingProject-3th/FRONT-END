import React, { useState, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import backgroundImage from "../../shared/images/LoginPage/logout-background.jpg";
import axios from "axios";
//import axios from "axios";
interface LogoutProps {
  nickName: string;
  updateIsToken: any;
}

const Logout: React.FC<LogoutProps> = ({ nickName, updateIsToken }) => {
  const navigator = useNavigate();
  const [userToken, setUserToken] = useState<string>("");

  useLayoutEffect(() => {
    if (nickName === "") {
      setUserToken("");
    } else {
      setUserToken(nickName);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const logoutHandler = async () => {
    const token = localStorage.getItem("token");

    if (token !== null) {
      await axios
        .post("https://www.onesol.shop/auth/logout", null, {
          headers: {
            Token: token,
          },
        })
        .then((res) => {
          //로그아웃 성공
          localStorage.removeItem("nickName");
          localStorage.removeItem("token");
          localStorage.removeItem("userId");
          updateIsToken(false);
          console.log(res);

          navigator("/");
        })
        .catch((err) => {
          //로그아웃에 실패하면 err 출력
          localStorage.removeItem("nickName");
          localStorage.removeItem("token");
          localStorage.removeItem("userId");
          updateIsToken(false);

          console.log(err);

          //alert(err.message);
          navigator("/");
        });
    }
  };

  const onClickHandler = () => {
    navigator("/");
  };

  if (userToken) {
    return (
      <>
        <UserLogout>
          <BackgroundImgLogout>
            <ImgLogout src={backgroundImage} alt="" />
            <MessageLogout>
              {userToken && (
                <>
                  <b>{userToken} 님</b> 로그아웃 하시겠습니까?
                </>
              )}
              <ButtonLogout onClick={logoutHandler}>로그 아웃</ButtonLogout>
            </MessageLogout>
          </BackgroundImgLogout>
        </UserLogout>
      </>
    );
  } else if (userToken === "") {
    return (
      <>
        <UserLogout>
          <BackgroundImgLogout>
            <ImgLogout src={backgroundImage} alt="" />
            <MessageLogout>
              로그인 상태가 아닙니다! 메인홈페이지로 이동합니다!
              <ButtonLogout onClick={onClickHandler}>
                메인 페이지로
              </ButtonLogout>
            </MessageLogout>
          </BackgroundImgLogout>
        </UserLogout>
      </>
    );
  } else {
    return null;
  }
};

const UserLogout = styled.div`
  margin: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BackgroundImgLogout = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImgLogout = styled.img`
  width: 560px;
  border-radius: 80px;
`;

const MessageLogout = styled.div`
  margin-top: 30px;
  width: 200px;
`;

const ButtonLogout = styled.button`
  margin: 20px;
  color: white;
  font-weight: 600;
  width: 200px;
  height: 80px;
  background-color: black;
  cursor: pointer;
  border: none;
  border-radius: 20px;
`;

export default Logout;
