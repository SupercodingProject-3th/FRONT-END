import React, { useState } from "react";
import styled from "styled-components";
import ReactDatePicker from "react-datepicker";
import moment from "moment";
import axios from "axios";
import { BaseSyntheticEvent } from "react";
import { DEEP_YELLOW, SOFT_BEIGE, DEEP_BROWN } from "../../styles/colors";

const FindEmail: React.FC = () => {
  const [nickName, setNickName] = useState<string>("");
  const [dateOfBirth, setDateOfBirth] = useState<string>("");
  const [dateofBirthObj, setDateOfBirthObj] = useState<any>(null);

  const [findSuccessMessage, setFindSuccessMessage] = useState<string>("");
  const [findFailMessage, setFindFailMessage] = useState<string>("");

  const OnNickNameChange = (e: BaseSyntheticEvent) => {
    setNickName(e.target.value);
    setFindSuccessMessage("");
    setFindFailMessage("");
  };

  const OnBirthDateChange = (date: any) => {
    const changedDate = moment(date).format("YYYY-MM-DD");
    setDateOfBirth(changedDate);
    setDateOfBirthObj(date);

    setFindSuccessMessage("");
    setFindFailMessage("");
  };

  const OnLoginClickHandler = async () => {
    await axios
      .post("https://www.onesol.shop/auth/find-email", {
        nickName: nickName,
        dateOfBirth: dateOfBirth,
      })
      .then(function (res) {
        console.log(res);
        setFindSuccessMessage(res.data.data);
      })
      .catch(function (err) {
        console.log(err);
        if (err.response) {
          setFindFailMessage(err.response.data.detailMessage);
        } else {
          setFindFailMessage(err.message);
        }
      });
  };

  return (
    <MainFind>
      <UserFind>
        <h3>이메일 찾기</h3>
        <LabelFind htmlFor="nickname">닉네임</LabelFind>
        <InputFind
          type="text"
          id="nickname"
          name="nickname"
          onChange={OnNickNameChange}
        />
        <LabelFind htmlFor="birth">생년월일</LabelFind>
        <ReactDatePicker
          id="user_birth"
          dateFormat="yyyy-MM-dd"
          startDate={null}
          showYearDropdown
          selected={dateofBirthObj}
          onChange={(date) => OnBirthDateChange(date)}
        />
        <ButtonFind onClick={OnLoginClickHandler}>찾기</ButtonFind>
        {findSuccessMessage && (
          <MessageSuccessFind>
            {nickName}님 이메일은 <br />
            <b>{findSuccessMessage}</b>
            <br /> 입니다.
          </MessageSuccessFind>
        )}
        {findFailMessage && (
          <MessageFailFind>{findFailMessage}</MessageFailFind>
        )}
      </UserFind>
    </MainFind>
  );
};

const MainFind = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const UserFind = styled.div`
  margin: 30px;
  padding: 20px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${SOFT_BEIGE};

  border: 1px solid ${DEEP_YELLOW};
  border-radius: 8px;
`;

const LabelFind = styled.label`
  text-align: left;
  padding-top: 10px;
  color: rgb(100, 100, 100);
  width: 170px;
  padding-bottom: 1px;
`;

const InputFind = styled.input`
  width: 170px;
  height: 20px;
  color: rgb(200, 200, 200);
  font-size: 13px;

  //border: 1px solid ${DEEP_YELLOW};

  &::placeholder {
    padding-left: 5px;
    color: rgb(200, 200, 200);
  }

  &:hover {
    background-color: rgb(250, 250, 250);
  }
`;

const ButtonFind = styled.button`
  marign: 20px;
  width: 100px;
  height: 30px;
  color: white;

  margin-top: 20px;

  background-color: ${DEEP_BROWN};
  cursor: pointer;
`;

const MessageSuccessFind = styled.div`
  width: 250px;
  padding-top: 5px;
  color: green;
  font-size: 17px;
  text-align: center;
`;

const MessageFailFind = styled.div`
  width: 250px;
  padding-top: 5px;
  color: red;
  font-size: 12px;
  text-align: center;
`;

export default FindEmail;
