import React from "react";
import styled from "styled-components";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.module.css";
import { useNavigate } from "react-router-dom";
import { DEEP_YELLOW, SOFT_BEIGE, DEEP_BROWN } from "../../styles/colors";

interface MyEditProps {
  errMessage: string;
  onInfoChangeHander: any;
  onTogglePwdShowHandler: any;
  onPasswordHandler: any;
  isShowPwd: any;
  prevImage: any;
  image2: any;
  joinDate: string;
  onPicHandler: any;
  onBirthDateHander: any;
  dateOfBirthObj: any;
  onGenderHandler: any;
  onNeighborHandler: any;
  email: string;
  onPhoneHandler: any;
  onNickNameHandler: any;
  formData: any;
  onDeleteMyAccount: any;
  getUserInfo: any;
  updateIsToken: any;
}

const MyEditProfile: React.FC<MyEditProps> = ({
  errMessage,
  onInfoChangeHander,
  onTogglePwdShowHandler,
  onPasswordHandler,
  isShowPwd,
  prevImage,
  image2,
  joinDate,
  onPicHandler,
  onBirthDateHander,
  dateOfBirthObj,
  onGenderHandler,
  onNeighborHandler,
  email,
  onPhoneHandler,
  onNickNameHandler,
  formData,
  onDeleteMyAccount,
  getUserInfo,
}) => {
  const navigator = useNavigate();

  return (
    <>
      <hr />
      <UserInfoPro>
        <UserInfoContainerPro>
          <h1>회원정보 수정 페이지</h1>
          <DeleteMyAccountDiv>
            <GetInfoButton onClick={getUserInfo}>
              회원 정보 새로 가져오기
            </GetInfoButton>
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
              id="nickName"
              name="nickName"
              value={formData.nickName || ""}
              onChange={onNickNameHandler}
            />
          </InputContainerPro>
          <InputContainerPro>
            <LabelPro htmlFor="phoneNum">전화번호 :</LabelPro>
            <InputPro
              type="text"
              id="phoneNum"
              name="phoneNum"
              value={formData.phoneNum || ""}
              onChange={onPhoneHandler}
            />
          </InputContainerPro>
          <InputContainerPro>
            <LabelPro htmlFor="email">이메일 :</LabelPro>
            <InputPro
              type="text"
              id="email"
              name="email"
              disabled={true}
              value={email || ""}
            />
          </InputContainerPro>
          <InputContainerPro>
            <LabelPro htmlFor="neighborhood">동네 :</LabelPro>
            <InputPro
              type="text"
              id="neighborhood"
              name="neighborhood"
              value={formData.neighborhood || ""}
              onChange={onNeighborHandler}
            />
          </InputContainerPro>
          <InputContainerPro>
            <LabelPro htmlFor="gender">성별:</LabelPro>
            <InputPro
              type="text"
              id="gender"
              name="gender"
              value={formData.gender || ""}
              onChange={onGenderHandler}
            />
          </InputContainerPro>
          <BirthDateContainerPro>
            <LabelPro>생년월일:</LabelPro>
            <ReactDatePicker
              id="dateOfBirth"
              name="dateOfBirth"
              dateFormat="yyyy-MM-dd"
              startDate={null}
              showYearDropdown
              selected={dateOfBirthObj}
              onChange={(date) => onBirthDateHander(date)}
            />
          </BirthDateContainerPro>
          <InputContainerPro>
            <LabelPro htmlFor="user_image">프로필 사진:</LabelPro>
            {prevImage.length > 0 ? (
              <ImagePro src={prevImage} alt="" />
            ) : (
              <ImagePro src={image2} alt="" />
            )}
            <InputPro
              type="file"
              accept="image/*"
              id="user_image"
              onChange={onPicHandler}
            />
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
              value={formData.password}
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
          {errMessage && <UserErrMessagePro>{errMessage}</UserErrMessagePro>}
          <UserSignupButton onClick={onInfoChangeHander}>
            회원정보 수정하기
          </UserSignupButton>
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
  width: 450px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${SOFT_BEIGE};

  border: 1px solid ${DEEP_YELLOW};
  border-radius: 8px;
`;

const DeleteMyAccountDiv = styled.div`
  width: 400px;
  display: flex;
  justify-content: end;
  align-items: center;
  padding-bottom: 20px;
`;
const GetInfoButton = styled.button`
  color: white;
  width: 170px;
  height: 30px;
  margin-right: 20px;
  padding-bottom: 5px;
  border: 1px solid ${SOFT_BEIGE};
  background-color: ${DEEP_BROWN};

  cursor: pointer;
`;

const DeleteMyAccountButton = styled.button`
  width: 90px;
  height: 30px;
  padding-bottom: 5px;

  border: 1px solid ${DEEP_YELLOW};

  cursor: pointer;
`;

const PwdChangeButton = styled.button`
  width: 110px;
  height: 30px;
  padding-bottom: 5px;
  margin-right: 20px;

  border: 1px solid ${DEEP_YELLOW};

  cursor: pointer;
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
  width: 100px;
  padding-right: 20px;
`;

const ImagePro = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 20px;
`;

const InputPro = styled.input`
  height: 25px; 
  width: 300px;
    
  font-size: 13px;
  
  //border: 1px solid ${DEEP_YELLOW};

  &::placeholder {
    padding-left: 5px;
    color: rgb(200, 200, 200);
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
  margin: 10px 0px 30px 0px;
  color: white;
  font-weight: bold;
  font-size: 15px;
  width: 270px;
  height: 50px;

  border: none;
  border-radius: 8px;
  background-color: ${DEEP_BROWN};

  cursor: pointer;

  &:hover {
    background-color: ${DEEP_BROWN};
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
