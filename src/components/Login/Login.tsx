import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import loginButton from "../../components/shared/images/LoginPage/kakao-login-button.jpg";
import { BaseSyntheticEvent } from "react";

interface IsTokenProps {
  updateIsToken: any;
}

const Login: React.FC<IsTokenProps> = ({ updateIsToken }) => {
  const [userId, setUserId] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");

  const [idMessage, setIdMessage] = useState<string>("");
  const [passMessage, setPassMessage] = useState<string>("");
  const [failMessage, setFailMessage] = useState<string>("");

  const navigator = useNavigate();

  const protocol = window.location.protocol;
  const hostname = window.location.hostname;
  const port = window.location.port;

  const currentUrl = `${protocol}//${hostname}:${port}`;

  const clientId = "d7453d5d4fe1c096ca03c1ed009a03ff";
  const redirectUri = `${currentUrl}/redirect`;

  const onUserIdChange = (e: BaseSyntheticEvent) => {
    setUserId(e.target.value);
    setFailMessage("");

    if (e.target.value === "") {
      setIdMessage("이메일 또는 닉네임란이 비어있습니다!");
    } else {
      setIdMessage("");
    }
  };

  const onUserPasswordChange = (e: BaseSyntheticEvent) => {
    setUserPassword(e.target.value);
    setFailMessage("");

    if (e.target.value === "") {
      setPassMessage("비밀번호란이 비어있습니다!");
    } else {
      setPassMessage("");
    }
  };

  const onLoginClickHandler = async () => {
    //입력된 이메일 유효성 검사 모듈
    if (userId === "") {
      setIdMessage("이메일 또는 닉네임란이 비어있습니다!");
    } else {
      setIdMessage("");
    }
    /*
    if (validator.isEmail(userId)) {
      setIdMessage("");
    } else {
      setIdMessage("이메일 또는 닉네임 형식이 올바르지 않습니다!");
    }
*/
    if (userPassword === "") {
      setPassMessage("비밀번호란이 비어있습니다!");
    } else {
      setPassMessage("");
    }

    if (idMessage === "" && userId !== "" && userPassword !== "") {
      await axios
        .post("https://www.onesol.shop/auth/login", {
          email: userId,
          password: userPassword,
        })
        .then(function (res) {
          console.log(res);

          const token = res.headers.token;
          const nickName = res.data.data.nickName;

          localStorage.setItem("token", token);
          localStorage.setItem("nickName", nickName);

          updateIsToken(true);

          navigator("/");
        })
        .catch(function (err) {
          console.log(err);
          setFailMessage(err.response.data.detailMessage);
        });
    }
  };

  const onKakaoHandler = async () => {
    window.location.href = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}`;
  };

  return (
    <>
      <UserLoginMain>
        <UserLogin>
          <UserTitleLogin>
            <h1>로그인</h1>
          </UserTitleLogin>
          <LabelLogin htmlFor="user_id">이메일 또는 닉네임</LabelLogin>
          <InputLogin
            type="email"
            id="user_id"
            name="user_id"
            placeholder="이메일 또는 닉네임을 입력하세요."
            value={userId}
            onChange={onUserIdChange}
          />
          {idMessage && <MessageLogin>{idMessage}</MessageLogin>}
          <LabelLogin htmlFor="user_pwd">비밀번호</LabelLogin>
          <InputLogin
            type="password"
            id="user_pwd"
            name="user_pwd"
            placeholder="비밀번호를 입력하세요."
            value={userPassword}
            onChange={onUserPasswordChange}
          />
          {passMessage && <MessageLogin>{passMessage}</MessageLogin>}
          <UserLoginButton onClick={onLoginClickHandler}>
            로그인
          </UserLoginButton>
          <ImgLogin src={loginButton} alt="" onClick={onKakaoHandler} />
          <LinkLogin to="/signup">회원가입 하기</LinkLogin>
          <LinkLogin to="/find-email">이메일 찾기</LinkLogin>
          {failMessage && <MessageLogin>{failMessage}</MessageLogin>}
        </UserLogin>
      </UserLoginMain>
    </>
  );
};

const UserLoginMain = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;

const UserLogin = styled.div`
  padding: 15px;
  width: 280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 1px solid pink;
`;

const UserTitleLogin = styled.div`
  width: 260px;
  margin: 10px 10px 10px 10px;
`;

const LabelLogin = styled.label`
  padding-top: 10px;
  color: rgb(100, 100, 100);
  width: 260px;
  padding-bottom: 5px;
`;

const InputLogin = styled.input`
  height: 30px;
  color: rgb(200, 200, 200);
  font-size: 13px;
  width: 260px;
  border-radius: 10px;

  border-width: 1px;
  border-color: rgb(253, 253, 253);

  &::placeholder {
    padding-left: 5px;
    color: rgb(200, 200, 200);
  }

  &:hover {
    background-color: rgb(250, 250, 250);
  }
`;

const UserLoginButton = styled.button`
  margin: 30px 0px 30px 0px;
  color: white;
  font-weight: bold;
  font-size: 15px;
  width: 270px;
  height: 50px;

  border: none;
  border-radius: 5px;
  background-color: rgb(48, 192, 224);

  &:hover {
    background-color: rgb(40, 182, 214);
    cursor: pointer;
  }
`;

const ImgLogin = styled.img`
  width: 270px;
  height: 50px;
  margin-bottom: 20px;
`;

const MessageLogin = styled.div`
  width: 260px;
  padding-top: 5px;
  color: red;
  font-size: 12px;
  text-align: left;
`;

const LinkLogin = styled(Link)`
  width: 270px;
  padding-bottom: 5px;
  text-align: right;
`;

export default Login;
