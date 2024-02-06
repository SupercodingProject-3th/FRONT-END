import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.module.css";
import axios from "axios";
import { BaseSyntheticEvent } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";

interface MyEditProps {
  updateIsToken: any;
}

const MyEditProfile: React.FC<MyEditProps> = ({ updateIsToken }) => {
  const [email, setEmail] = useState<string>("");
  const [nickName, setNickName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [neighbor, setNeighbor] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [dateOfBirth, setDateOfBirth] = useState<string>("");
  const [dateOfBirthObj, setDateOfBirthObj] = useState<any>();
  const [gender, setGender] = useState<number>(0);
  const [joinDate, setJointDate] = useState<string>("");
  const [isShowPwd, setIsShowPwd] = useState<boolean>(false);
  const [errMessage, setErrMessage] = useState<string>("");

  const navigator = useNavigate();

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

  const onDeleteMyAccount = async () => {
    const token = localStorage.getItem("token");
    // eslint-disable-next-line no-restricted-globals
    const check = confirm("정말로 계정을 삭제 하시겠습니까?");

    if (check && token !== null) {
      await axios
        .delete("https://www.onesol.shop/account/withdrawal", {
          headers: {
            Token: token,
          },
        })
        .then((res) => {
          console.log(res);
          localStorage.removeItem("nickName");
          localStorage.removeItem("token");
          updateIsToken(false);

          navigator("/");
        })
        .catch((err) => {
          console.log(err);
          setErrMessage(err.message);
        });
    }
  };

  const onNickNameHandler = (e: BaseSyntheticEvent) => {
    setErrMessage("");
    setNickName(e.target.value);
  };

  const onPhoneHandler = (e: BaseSyntheticEvent) => {
    setErrMessage("");
    setPhone(e.target.value);
  };

  const onNeighborHandler = (e: BaseSyntheticEvent) => {
    setErrMessage("");
    setNeighbor(e.target.value);
  };

  const onBirthDateHander = (date: any) => {
    setErrMessage("");

    const changedDate = moment(date).format("YYYY-MM-DD");
    setDateOfBirth(changedDate);
    setDateOfBirthObj(date);
  };

  const onPasswordHandler = (e: BaseSyntheticEvent) => {
    setErrMessage("");
    setPassword(e.target.value);
  };

  const onGenderHandler = () => {
    setErrMessage("");
    setGender(1 - gender);
  };

  const onPicHandler = () => {
    setErrMessage("");
  };

  const onTogglePwdShowHandler = () => {
    if (!isShowPwd) {
      setIsShowPwd(true);
    } else {
      setIsShowPwd(false);
    }
  };

  const onChangeInfoHander = async () => {
    //const token = localStorage.getItem("token");
    const gender2 = gender === 0 ? "남성" : "여성";
    const token = localStorage.getItem("token");

    /*  formData.append("nickName", nickName);
    formData.append("phoneNum", phone);
    formData.append("neighborhood", neighbor);
    formData.append("dateOfBirth", dateOfBirth);
    formData.append("gender", gender2);
    formData.append("password", password);
    */

    const data = {
      nickName,
      phoneNum: phone,
      neighborhood: neighbor,
      dateOfBirth,
      gender: gender2,
      password,
    };

    const jsonData = JSON.stringify(data);

    if (token !== null) {
      await axios
        .put("https://www.onesol.shop/account/update-my-info", jsonData, {
          headers: {
            Token: token,
          },
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
          setErrMessage(err.message);
        });
    }
  };

  return (
    <>
      <hr />
      <UserInfoPro>
        <UserInfoContainerPro>
          <h1>회원정보 수정 페이지</h1>
          <DeleteMyAccountDiv>
            <PwdChangeButton onClick={() => navigator("/mypage/3")}>
              비밀 번호 변경
            </PwdChangeButton>
            <DeleteMyAccountButton onClick={onDeleteMyAccount}>
              회원 탈퇴
            </DeleteMyAccountButton>
          </DeleteMyAccountDiv>
          <InputContainerPro>
            <LabelPro htmlFor="user_nickname">닉네임 :</LabelPro>
            <InputPro
              type="text"
              id="user_nickname"
              value={nickName || ""}
              onChange={onNickNameHandler}
            />
          </InputContainerPro>
          <InputContainerPro>
            <LabelPro htmlFor="user_phone">전화번호 :</LabelPro>
            <InputPro
              type="text"
              id="user_phone"
              value={phone || ""}
              onChange={onPhoneHandler}
            />
          </InputContainerPro>
          <InputContainerPro>
            <LabelPro htmlFor="user_email">이메일 :</LabelPro>
            <InputPro
              type="text"
              id="user_email"
              disabled={true}
              value={email || ""}
            />
          </InputContainerPro>
          <InputContainerPro>
            <LabelPro htmlFor="user_neighbor">동네 :</LabelPro>
            <InputPro
              type="text"
              id="user_neighbor"
              value={neighbor || ""}
              onChange={onNeighborHandler}
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
                onChange={onGenderHandler}
              />
              <RadioLabelPro htmlFor="user_gender1">남성</RadioLabelPro>
              <RadioInputPro
                type="radio"
                id="user_gender2"
                value={gender}
                checked={gender === 1}
                onChange={onGenderHandler}
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
              onChange={onBirthDateHander}
            />
          </BirthDateContainerPro>
          <InputContainerPro>
            <LabelPro htmlFor="user_image">프로필 사진:</LabelPro>
            <InputPro type="file" id="user_image" onChange={onPicHandler} />
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
            <LabelPro htmlFor="user_password">비밀번호 확인:</LabelPro>
            <InputPro
              type={isShowPwd ? "text" : "password"}
              id="user_password"
              placeholder="확인 비밀번호를 입력하세요."
              value={password}
              onChange={onPasswordHandler}
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

const DeleteMyAccountDiv = styled.div`
  width: 400px;
  display: flex;
  justify-content: end;
  align-items: center;
  padding-bottom: 20px;
`;

const DeleteMyAccountButton = styled.button`
  width: 90px;
  height: 30px;
  padding-bottom: 5px;
`;

const InputContainerPro = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
`;

const LabelPro = styled.label`
  text-align: left;
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

const PwdChangeButton = styled.button`
  width: 110px;
  height: 30px;
  padding-bottom: 5px;
  margin-right: 20px;
`;

const UserSignupButton = styled.button`
  margin: 10px 0px 30px 0px;
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
