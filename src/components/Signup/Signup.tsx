import React from "react";
import { useLayoutEffect } from "react";
import styled from "styled-components";
import { Link, useSearchParams } from "react-router-dom";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.module.css";
import useInputs from "./SignupUseInputs";
import { DEEP_YELLOW, SOFT_BEIGE, DEEP_BROWN } from "../../styles/colors";

const Signup = () => {
  //카카오 회원가입 미완성시
  const [
    {
      setUserSocialId,
      userNickName,
      setUserNickName,
      userEmail,
      setUserEmail,
      userGender,
      setUserGender,
      userBirthDateObj,
      isShowPwd,
      userPassword,
      userPassword2,
      nickNameMessage,
      emailMessage,
      birthDateMessage,
      passMessage,
      pass2Message,
      passMatchMessage,
      alreadyEmailMessage,
      alreadyNickNameMessage,
      axiosErrorMessage,
      onUserNickNameChange,
      onUserNickNameBlur,
      onUserEmailChange,
      onUserEmailBlur,
      onBirthDateChange,
      onUserPasswordChange,
      onUserPassword2Change,
      onTogglePwdShowHandler,
      onSignupClickHandler,
    },
  ] = useInputs();

  const [searchParams] = useSearchParams();

  useLayoutEffect(() => {
    const searchSocialId = searchParams.get("socialId");
    const searchEmail = searchParams.get("email");
    const searchNickname = searchParams.get("nickName");

    if (searchEmail && searchNickname && searchSocialId) {
      setUserSocialId(searchSocialId);
      setUserEmail(searchEmail);
      setUserNickName(searchNickname);
    }
  }, [searchParams, setUserEmail, setUserNickName, setUserSocialId]);

  return (
    <UserSignupMain>
      <UserSignup>
        <UserTitleSignup>
          <h1>회원가입</h1>
        </UserTitleSignup>
        <LabelSignup htmlFor="user_nickname">닉네임</LabelSignup>
        <InputSignup
          type="text"
          name="user_nickname"
          id="user_nickname"
          placeholder="닉네임을 입력하세요."
          value={userNickName}
          onChange={onUserNickNameChange}
          onBlur={onUserNickNameBlur}
        />
        {nickNameMessage && <MessageSignup>{nickNameMessage}</MessageSignup>}
        {alreadyNickNameMessage && (
          <MessageSignup>{alreadyNickNameMessage}</MessageSignup>
        )}
        <LabelSignup htmlFor="user_email">이메일</LabelSignup>
        <InputSignup
          type="email"
          name="user_email"
          id="user_email"
          placeholder="이메일을 입력하세요."
          disabled={searchParams.get("email") ? true : false}
          value={userEmail}
          onChange={onUserEmailChange}
          onBlur={onUserEmailBlur}
        />
        {emailMessage && <MessageSignup>{emailMessage}</MessageSignup>}
        {alreadyEmailMessage && (
          <MessageSignup>{alreadyEmailMessage}</MessageSignup>
        )}
        <RadioSignup>
          <RadioInputSignup
            type="radio"
            name="man"
            id="user_gender1"
            value={userGender}
            checked={userGender === 0}
            onChange={() => setUserGender(0)}
          />
          <RadioLabelSignup htmlFor="user_gender1">남성</RadioLabelSignup>
          <RadioInputSignup
            type="radio"
            name="women"
            id="user_gender2"
            value={userGender}
            checked={userGender === 1}
            onChange={() => setUserGender(1)}
          />
          <RadioLabelSignup htmlFor="user_gender2">여성</RadioLabelSignup>
        </RadioSignup>
        <LabelSignup htmlFor="user_birth">생년월일</LabelSignup>
        <ReactDatePicker
          id="user_birth"
          dateFormat="yyyy-MM-dd"
          startDate={null}
          showYearDropdown
          selected={userBirthDateObj}
          onChange={(date) => onBirthDateChange(date)}
        />
        {birthDateMessage && <MessageSignup>{birthDateMessage}</MessageSignup>}
        <LabelSignup htmlFor="user_pwd">비밀번호</LabelSignup>
        <InputSignup
          type={isShowPwd ? "text" : "password"}
          name="user_pwd"
          id="user_pwd"
          placeholder="비밀번호를 입력하세요."
          value={userPassword}
          onChange={onUserPasswordChange}
        />
        {passMessage && <MessageSignup>{passMessage}</MessageSignup>}
        <LabelSignup htmlFor="user_pwd2">비밀번호 확인</LabelSignup>
        <InputSignup
          type={isShowPwd ? "text" : "password"}
          name="user_pwd2"
          id="user_pwd2"
          placeholder="비밀번호를 한번더 입력하세요."
          value={userPassword2}
          onChange={onUserPassword2Change}
        />
        <PwdCheckDivSignup>
          <PwdCheckBoxSignup
            type="checkbox"
            id="user_check_show_pwd"
            onClick={onTogglePwdShowHandler}
          />
          <PwdCheckLabelSignup htmlFor="user_check_show_pwd">
            비밀번호 보이기
          </PwdCheckLabelSignup>
        </PwdCheckDivSignup>
        {pass2Message && <MessageSignup>{pass2Message}</MessageSignup>}
        <br />
        {passMatchMessage && <MessageSignup>{passMatchMessage}</MessageSignup>}
        <UserSignupButton onClick={onSignupClickHandler}>
          회원 가입
        </UserSignupButton>
        {axiosErrorMessage && (
          <MessageSignup>{axiosErrorMessage}</MessageSignup>
        )}
        <LinkSignup to="/login">로그인 하기</LinkSignup>
      </UserSignup>
    </UserSignupMain>
  );
};

const UserSignupMain = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;

const UserSignup = styled.div`
  padding: 15px;
  width: 280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${SOFT_BEIGE};

  border: 1px solid ${DEEP_YELLOW};
  border-radius: 8px;
`;

const UserTitleSignup = styled.div`
  text-align: left;
  width: 260px;
  margin: 10px 10px 10px 10px;
`;

const LabelSignup = styled.label`
  text-align: left;
  padding-top: 10px;
  color: rgb(100, 100, 100);
  width: 260px;
  padding-bottom: 5px;
`;

const InputSignup = styled.input`
  height: 30px;
  color: rgb(200, 200, 200);
  font-size: 13px;
  width: 260px;  
  
  //border: 1px solid ${DEEP_YELLOW};

  &::placeholder {
    padding-left: 5px;
    color: rgb(200, 200, 200);
`;

const RadioSignup = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 15px;
`;

const RadioInputSignup = styled.input`
  align: left;
`;

const RadioLabelSignup = styled.label`
  width: 100px;
`;

const PwdCheckDivSignup = styled.div`
  display: flex;
  justify-content: end;
  width: 260px;
`;
const PwdCheckBoxSignup = styled.input`
  align: left;
`;

const PwdCheckLabelSignup = styled.label`
  width: 80px;
  font-size: 11px;
`;

const UserSignupButton = styled.button`
  margin: 10px 0px 10px 0px;
  color: white;
  font-weight: bold;
  font-size: 15px;
  width: 270px;
  height: 50px;

  border: none;
  border-radius: 5px;
  background-color: ${DEEP_BROWN};

  &:hover {
    background-color: ${DEEP_BROWN};
    cursor: pointer;
  }
`;

const MessageSignup = styled.div`
  width: 260px;
  padding-top: 5px;
  color: red;
  font-size: 12px;
  text-align: left;
`;

const LinkSignup = styled(Link)`
  margin-top: 20px;
  width: 270px;
  text-align: right;
`;

export default Signup;
