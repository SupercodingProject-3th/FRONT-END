import React, { useState } from "react";
import styled from "styled-components";
//import axios from "axios";
import { BaseSyntheticEvent } from "react";

const FindPassword: React.FC = () => {
  const [oldPassword, setOldPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const OnOldPasswordChange = (e: BaseSyntheticEvent) => {
    setOldPassword(e.target.value);
  };

  const OnNewPasswordChange = (e: BaseSyntheticEvent) => {
    setNewPassword(e.target.value);
  };

  const OnConfirmPasswordChange = (e: BaseSyntheticEvent) => {
    setConfirmPassword(e.target.value);
  };

  const OnChangeClickHandler = async () => {
    /*  await axios
      .post("https://www.onesol.shop/auth/find-email", {
        nick_name: nickName,
        date_of_birth: dateOfBirth,
      })
      .then(function (res) {
        console.log(res);
      })
      .catch(function (err) {
        console.log(err);
      });
*/
  };

  return (
    <MainPass>
      <UserPass>
        <h3>비밀번호 변경</h3>
        <LablePass htmlFor="oldpass">현재 비밀번호</LablePass>
        <InputPass
          type="password"
          id="oldpass"
          name="oldpass"
          value={oldPassword}
          onChange={OnOldPasswordChange}
        />
        <LablePass htmlFor="newpass">새로운 비밀번호</LablePass>
        <InputPass
          type="password"
          id="newpass"
          name="newpass"
          value={newPassword}
          onChange={OnNewPasswordChange}
        />
        <LablePass htmlFor="confirmpass">새로운 비밀번호 확인</LablePass>
        <InputPass
          type="password"
          id="confirmpass"
          name="confirmpass"
          value={confirmPassword}
          onChange={OnConfirmPasswordChange}
        />
        <ButtonPass onClick={OnChangeClickHandler}>찾기</ButtonPass>
      </UserPass>
    </MainPass>
  );
};

const MainPass = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const UserPass = styled.div`
  margin: 30px;
  padding: 20px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid pink;
`;

const LablePass = styled.label`
  padding-top: 10px;
  color: rgb(100, 100, 100);
  width: 180px;
  padding-bottom: 1px;
`;

const InputPass = styled.input`
  width: 170px;
`;

const ButtonPass = styled.button`
  width: 100px;
  height: 30px;

  border: none;
  cursor: pointer;
`;

export default FindPassword;
