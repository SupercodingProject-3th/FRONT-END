import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.module.css";
import axios from "axios";
import { BaseSyntheticEvent } from "react";

const MyEditProfile = () => {
  const [email, setEmail] = useState<string>("");
  const [nickName, setNickName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [neighbor, setNeighbor] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [newPasswordConfirm, setNewPasswordConfirm] = useState<string>("");
  const [dateOfBirth, setDateOfBirth] = useState<string>("");
  const [dateOfBirthObj, setDateOfBirthObj] = useState<any>();
  const [gender, setGender] = useState<number>(0);
  const [joinDate, setJointDate] = useState<string>("");
  const [isShowPwd, setIsShowPwd] = useState<boolean>(false);
  const [errMessage, setErrMessage] = useState<string>("");

  useEffect(() => {
    const getUserInfo = async () => {
      const token = localStorage.getItem("token");

      if (token !== null) {
        await axios
          .get("https://www.onesol.shop/account/my-page", {
            headers: {
              Token: token,
            },
          })
          .then((res) => {
            console.log(res);

            setEmail(res.data.data.email);
            setNickName(res.data.data.nickName);
            setPhone(res.data.data.phoneNumber);
            setNeighbor(res.data.data.neighborhood);
            //setPassword(res.data.data.password);
            setDateOfBirth(res.data.data.dateOfBirth);
            setDateOfBirthObj(new Date(res.data.data.dateOfBirth));
            setJointDate(res.data.data.joinDate.toString());

            if (res.data.data.gender === "남성") {
              setGender(0);
            } else {
              setGender(1);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    };

    getUserInfo();
  }, []);

  const onTogglePwdShowHandler = () => {
    if (!isShowPwd) {
      setIsShowPwd(true);
    } else {
      setIsShowPwd(false);
    }
  };

  const onBirthDateChange = () => {
    setDateOfBirth(dateOfBirth);
    setDateOfBirthObj(dateOfBirthObj);
  };

  const onChangeInfoHander = async () => {
    //const token = localStorage.getItem("token");
    const gender2 = gender === 0 ? "남성" : "여성";

    await axios
      .patch("https://www.onesol.shop/account/my-page", {
        email,
        nickName,
        password,
        newPassword,
        newPasswordConfirm,
        phoneNumber: phone,
        neighborhood: neighbor,
        imageUrl: "",
        dateOfBirth,
        gender: gender2,
        joinDate,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        setErrMessage(err.message);
      });
  };

  return (
    <>
      <hr />
      <UserInfoPro>
        <UserInfoContainerPro>
          <h1>회원정보 수정 페이지</h1>
          <InputContainerPro>
            <LabelPro htmlFor="user_nickname">닉네임 :</LabelPro>
            <InputPro
              type="text"
              id="user_nickname"
              value={nickName || ""}
              onChange={(e: BaseSyntheticEvent) => setNickName(e.target.value)}
            />
          </InputContainerPro>
          <InputContainerPro>
            <LabelPro htmlFor="user_phone">전화번호 :</LabelPro>
            <InputPro
              type="text"
              id="user_phone"
              value={phone || ""}
              onChange={(e: BaseSyntheticEvent) => setPhone(e.target.value)}
            />
          </InputContainerPro>
          <InputContainerPro>
            <LabelPro htmlFor="user_email">이메일 :</LabelPro>
            <InputPro
              type="text"
              id="user_email"
              disabled={true}
              value={email || ""}
              onChange={(e: BaseSyntheticEvent) => setEmail(e.target.value)}
            />
          </InputContainerPro>
          <InputContainerPro>
            <LabelPro htmlFor="user_neighbor">이웃 :</LabelPro>
            <InputPro
              type="text"
              id="user_neighbor"
              value={neighbor || ""}
              onChange={(e: BaseSyntheticEvent) => setNeighbor(e.target.value)}
            />
          </InputContainerPro>
          <RadioContainerPro>
            <LabelPro>성별:</LabelPro>
            <RadioPro>
              <RadioInputPro
                type="radio"
                id="user_gender1"
                value={gender}
                checked={gender === 0}
                onChange={() => setGender(0)}
              />
              <RadioLabelPro htmlFor="user_gender1">남성</RadioLabelPro>
              <RadioInputPro
                type="radio"
                id="user_gender2"
                value={gender}
                checked={gender === 1}
                onChange={() => setGender(1)}
              />
              <RadioLabelPro htmlFor="user_gender2">여성</RadioLabelPro>
            </RadioPro>
          </RadioContainerPro>
          <BirthDateContainerPro>
            <LabelPro>생년월일:</LabelPro>
            <ReactDatePicker
              id="user_birth"
              dateFormat="yyyy-MM-dd"
              startDate={null}
              showYearDropdown
              selected={dateOfBirthObj}
              onChange={onBirthDateChange}
            />
          </BirthDateContainerPro>
          <InputContainerPro>
            <LabelPro htmlFor="user_image">프로필 사진:</LabelPro>
            <InputPro type="file" id="user_image" />
          </InputContainerPro>
          <br />
          <br />
          <br />
          <InputContainerPro>
            <LabelPro htmlFor="user_joint_date">가입일 :</LabelPro>
            <InputPro
              type="text"
              id="user_joint_date"
              value={joinDate || ""}
              disabled={true}
            />
          </InputContainerPro>
          <InputContainerPro>
            <LabelPro htmlFor="user_password">이전 비밀번호:</LabelPro>
            <InputPro
              type={isShowPwd ? "text" : "password"}
              id="user_password"
              placeholder="이전 비밀번호를 입력하세요."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputContainerPro>
          <InputContainerPro>
            <LabelPro htmlFor="user_newpassword">새로운 비밀번호:</LabelPro>
            <InputPro
              type={isShowPwd ? "text" : "password"}
              id="user_newpassword"
              placeholder="새로운 비밀번호를 입력하세요."
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </InputContainerPro>
          <InputContainerPro>
            <LabelPro htmlFor="user_newpassword_confirm">
              새 비밀번호 확인:
            </LabelPro>
            <InputPro
              type={isShowPwd ? "text" : "password"}
              id="user_newpassword_confirm"
              placeholder="새로운 비밀번호를 입력하세요."
              value={newPasswordConfirm}
              onChange={(e) => setNewPasswordConfirm(e.target.value)}
            />
          </InputContainerPro>
          <PwdCheckDivPro>
            <PwdCheckBoxPro
              type="checkbox"
              id="user_check_show_pwd"
              onChange={onTogglePwdShowHandler}
            />
            <PwdCheckLabelPro htmlFor="user_check_show_pwd">
              비밀번호 보이기
            </PwdCheckLabelPro>
          </PwdCheckDivPro>
          <UserSignupButton onClick={onChangeInfoHander}>
            회원정보 수정하기
          </UserSignupButton>
          {errMessage && <UserErrMessagePro>{errMessage}</UserErrMessagePro>}
        </UserInfoContainerPro>
      </UserInfoPro>
    </>
  );
};

const UserInfoPro = styled.div`
  margin: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserInfoContainerPro = styled.div`
  width: 500px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 1px solid gray;
`;

const InputContainerPro = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
`;

const LabelPro = styled.label`
  width: 150px;
  padding-right: 20px;
`;

const InputPro = styled.input`
  height: 25px;
  color: rgb(200, 200, 200);
  font-size: 13px;
  width: 300px;
  border-radius: 10px;

  border-width: 1px;
  border-color: rgb(250, 250, 250);
`;

const RadioContainerPro = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
`;

const RadioPro = styled.div`
  display: flex;
  justify-content: start;
`;

const RadioInputPro = styled.input`
  align: left;
`;

const RadioLabelPro = styled.label`
  width: 80px;
  font-size: 15px;
`;

const BirthDateContainerPro = styled.div`
  width: 400px;
  display: flex;
  justify-content: start;
  align-items: center;
  padding-bottom: 20px;
`;

const PwdCheckDivPro = styled.div`
  display: flex;
  justify-content: end;
  width: 400px;
`;

const PwdCheckBoxPro = styled.input`
  align: left;
`;

const PwdCheckLabelPro = styled.label`
  width: 120px;
  font-size: 15px;
`;

const UserSignupButton = styled.button`
  margin: 50px 0px 30px 0px;
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

const UserErrMessagePro = styled.div`
  width: 260px;
  padding-top: 5px;
  color: red;
  font-size: 12px;
  text-align: left;
`;

export default MyEditProfile;
