import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import validator from "validator";
import { BaseSyntheticEvent } from "react";
import { useNavigate } from "react-router-dom";
import { DEEP_YELLOW, SOFT_BEIGE } from "../../styles/colors";

const ChangePassword: React.FC = () => {
  const [oldPassword, setOldPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const [nickName, setNickName] = useState<string>("");

  //비밀번호 보이기/ 숨기기 상태변수
  const [isShowPwd, setIsShowPwd] = useState<boolean>(false);

  const [newPasswordMessage, setNewPasswordMessage] = useState<string>("");
  const [passMatchMessage, setPassMatchMessage] = useState<string>("");
  const [axiosErrorMessage, setAxiosErrorMessage] = useState<string>("");

  const navigator = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("nickName") !== null) {
      const nickName = localStorage.getItem("nickName");

      if (nickName !== null) {
        setNickName(nickName);
      } else {
        setNickName("");
      }
    }
  }, [nickName]);

  const OnOldPasswordChange = (e: BaseSyntheticEvent) => {
    setOldPassword(e.target.value);

    setAxiosErrorMessage("");
  };

  const OnNewPasswordChange = (e: BaseSyntheticEvent) => {
    setNewPassword(e.target.value);

    setAxiosErrorMessage("");

    if (
      validator.isAlphanumeric(e.target.value) &&
      e.target.value.length > 7 &&
      e.target.value.length <= 20 &&
      e.target.value.match(/\d+/) &&
      e.target.value.match(/[a-zA-Z]/)
    ) {
      setNewPasswordMessage("");
    } else {
      setNewPasswordMessage(
        "비밀번호가 강력하지 않습니다. (최소길이: 8, 최대길이: 20, 영문자 숫자 조합, 최소한 영문자 1개 숫자 1개씩 포함되어야 함)"
      );
    }

    if (e.target.value === confirmPassword) {
      setPassMatchMessage("");
    } else {
      setPassMatchMessage("비밀번호와 비밀번호 확인란이 일치하지 않습니다!");
    }
  };

  const OnConfirmPasswordChange = (e: BaseSyntheticEvent) => {
    setConfirmPassword(e.target.value);

    setAxiosErrorMessage("");

    if (e.target.value === newPassword) {
      setPassMatchMessage("");
    } else {
      setPassMatchMessage("비밀번호와 비밀번호 확인란이 일치하지 않습니다!");
    }
  };

  const onTogglePwdShowHandler = () => {
    if (!isShowPwd) {
      setIsShowPwd(true);
    } else {
      setIsShowPwd(false);
    }
  };

  const OnChangeClickHandler = async () => {
    if (oldPassword === "" || newPassword === "" || confirmPassword === "") {
      setAxiosErrorMessage("비어있는 칸이 있습니다!");
    }

    if (
      oldPassword !== "" &&
      newPassword !== "" &&
      confirmPassword !== "" &&
      newPassword === confirmPassword &&
      validator.isAlphanumeric(newPassword) &&
      newPassword.length > 7 &&
      newPassword.length <= 20 &&
      newPassword.match(/\d+/) &&
      newPassword.match(/[a-zA-Z]/)
    ) {
      //const tokenStr = localStorage.getItem("token");
      //const token = JSON.parse(tokenStr);
      const token = localStorage.getItem("token");

      if (token !== null) {
        await axios
          .put(
            `https://www.onesol.shop/account/update-password`,
            {
              password: oldPassword,
              updatePassword: newPassword,
              updatePasswordConfirm: confirmPassword,
            },
            {
              headers: {
                Token: token,
              },
            }
          )
          .then(function (res) {
            console.log(res);
            alert("비밀번호가 변경되었습니다!");
          })
          .catch(function (err) {
            console.log(err);
            if (err.response) {
              setAxiosErrorMessage(err.response.data.detailMessage);
            } else {
              setAxiosErrorMessage(err.message);
            }
          });
      }
    }
  };

  return (
    <MainChange>
      <UserChange>
        <h3>비밀번호 변경</h3>
        <p>
          회원님의 닉네임은
          <br /> <b>{nickName}</b> <br /> 입니다.
        </p>
        <LabelChange htmlFor="oldpass">현재 비밀번호</LabelChange>
        <InputChange
          type="password"
          id="oldpass"
          name="oldpass"
          value={oldPassword}
          onChange={OnOldPasswordChange}
        />
        <br />
        <LabelChange htmlFor="newpass">새로운 비밀번호</LabelChange>
        <InputChange
          type={isShowPwd ? "text" : "password"}
          id="newpass"
          name="newpass"
          value={newPassword}
          onChange={OnNewPasswordChange}
        />
        {newPasswordMessage && (
          <MessageChange>{newPasswordMessage}</MessageChange>
        )}
        <LabelChange htmlFor="confirmpass">새로운 비밀번호 확인</LabelChange>
        <InputChange
          type={isShowPwd ? "text" : "password"}
          id="confirmpass"
          name="confirmpass"
          value={confirmPassword}
          onChange={OnConfirmPasswordChange}
        />
        {passMatchMessage && <MessageChange>{passMatchMessage}</MessageChange>}
        <PwdCheckDivChange>
          <PwdCheckBoxChange
            type="checkbox"
            id="user_check_show_pwd"
            onClick={onTogglePwdShowHandler}
          />
          <PwdCheckLabelChange htmlFor="user_check_show_pwd">
            비밀번호 보이기
          </PwdCheckLabelChange>
        </PwdCheckDivChange>
        <ButtonChange onClick={OnChangeClickHandler}>
          비밀번호 변경
        </ButtonChange>
        {axiosErrorMessage && (
          <MessageChange>{axiosErrorMessage}</MessageChange>
        )}
        <BackButtonChange onClick={() => navigator(-1)}>
          이전 페이지
        </BackButtonChange>
      </UserChange>
    </MainChange>
  );
};

const MainChange = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const UserChange = styled.div`
  margin: 30px;
  padding-bottom: 300px;
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${SOFT_BEIGE};
  border: 2px solid ${DEEP_YELLOW}};
  border-radius: 8px;
`;

const LabelChange = styled.label`
  text-align: left;
  padding-top: 10px;
  color: rgb(100, 100, 100);
  width: 180px;
  padding-bottom: 1px;
`;

const InputChange = styled.input`
  width: 170px;
  height: 25px;

  color: rgb(200, 200, 200);
  font-size: 13px;
  width: 260px;
  
  //border: 1px solid ${DEEP_YELLOW};

  &::placeholder {
    padding-left: 5px;
    color: rgb(200, 200, 200);
`;

const PwdCheckDivChange = styled.div`
  display: flex;
  justify-content: end;
  width: 180px;
`;
const PwdCheckBoxChange = styled.input`
  align: left;
`;

const PwdCheckLabelChange = styled.label`
  width: 80px;
  font-size: 11px;
`;

const ButtonChange = styled.button`
  margin: 20px;
  width: 130px;
  height: 40px;

  background-color: white;
  border: 1px solid ${DEEP_YELLOW};
  cursor: pointer;
`;

const MessageChange = styled.div`
  width: 260px;
  padding-top: 5px;
  color: red;
  font-size: 12px;
  text-align: center;
`;

const BackButtonChange = styled.button`
  margin: 50px 0px 10px 0px;
  font-weight: bold;
  font-size: 15px;
  width: 120px;
  height: 40px;

  background-color: white;
  border: 2px solid ${DEEP_YELLOW};
  cursor: pointer;
`;

export default ChangePassword;
