import { useState } from "react";
import "react-datepicker/dist/react-datepicker.module.css";
import validator from "validator";
import axios from "axios";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { BaseSyntheticEvent } from "react";

const useInputs = () => {
  const [userSocialId, setUserSocialId] = useState<any>("");
  const [userNickName, setUserNickName] = useState<any>("");
  const [userEmail, setUserEmail] = useState<any>("");
  const [userGender, setUserGender] = useState<any>(0);
  const [userBirthDate, setUserBirthDate] = useState<any>("");
  //스트링 겂이 아닌 생년월일 오브젝트 상태변수
  const [userBirthDateObj, setUserBirthDateObj] = useState<any>(null);

  //비밀번호 보이기/ 숨기기 상태변수
  const [isShowPwd, setIsShowPwd] = useState<any>(false);

  const [userPassword, setUserPassword] = useState<any>("");
  const [userPassword2, setUserPassword2] = useState<any>("");

  const [nickNameMessage, setNickNameMessage] = useState<any>("");
  const [emailMessage, setEmailMessage] = useState<any>("");
  const [birthDateMessage, setBirthDateMessage] = useState<any>("");
  const [passMessage, setPassMessage] = useState<any>("");
  const [pass2Message, setPass2Message] = useState<any>("");
  const [passMatchMessage, setPassMatchMessage] = useState<any>("");

  //닉네임과 이메일 중복 체크 상태 메세지 변수
  const [alreadyEmailMessage, setAlreadyEmailMessage] = useState<any>("");
  const [alreadyNickNameMessage, setAlreadyNickNameMessage] = useState<any>("");

  const [axiosErrorMessage, setAxiosErrorMessage] = useState<any>("");

  const navigator = useNavigate();

  const onUserNickNameChange = (e: BaseSyntheticEvent) => {
    setUserNickName(e.target.value.trim());

    setAlreadyNickNameMessage("");
    setAxiosErrorMessage("");

    if (
      e.target.value.trim() !== "" &&
      e.target.value.length >= 2 &&
      e.target.value.length <= 29
    ) {
      setNickNameMessage("");
    } else {
      setNickNameMessage(
        "올바른 닉네임이 아닙니다.(최소길이: 2, 최대길이: 30)"
      );
    }
  };

  const onUserNickNameBlur = async (e: BaseSyntheticEvent) => {
    if (
      !(
        e.target.value.trim() !== "" &&
        e.target.value.length >= 2 &&
        e.target.value.length <= 29
      )
    ) {
      setNickNameMessage(
        "올바른 닉네임이 아닙니다.(최소길이: 2, 최대길이: 30)"
      );
      return;
    }

    await axios
      .get(
        `https://www.onesol.shop/auth/sign-up/check-nickname?nickname=${e.target.value}`
      )
      .then(function (res) {
        console.log(res.data.data);

        if (res.data.data) {
          setAlreadyNickNameMessage("");
        } else {
          setAlreadyNickNameMessage("등록된 닉네임이 이미 있습니다!");
        }
      })
      .catch(function (err) {
        setAlreadyNickNameMessage(err.message);
      });
  };

  const onUserEmailChange = async (e: BaseSyntheticEvent) => {
    setUserEmail(e.target.value);

    setAlreadyEmailMessage("");
    setAxiosErrorMessage("");

    if (validator.isEmail(e.target.value)) {
      setEmailMessage("");
    } else {
      setEmailMessage("이메일 형식이 올바르지 않습니다!");
    }
  };

  const onUserEmailBlur = async (e: BaseSyntheticEvent) => {
    if (!validator.isEmail(e.target.value)) {
      setEmailMessage("이메일 형식이 올바르지 않습니다!");
      return;
    }

    await axios
      .get(
        `https://www.onesol.shop/auth/sign-up/check-email?email=${e.target.value}`
      )
      .then(function (res) {
        console.log(res.data.data);

        if (res.data.data) {
          setAlreadyEmailMessage("");
        } else {
          setAlreadyEmailMessage("등록된 이메일이 이미 있습니다!");
        }
      })
      .catch(function (err) {
        setAlreadyEmailMessage(err.message);
      });
  };

  const onBirthDateChange = (date: any) => {
    const changedDate = moment(date).format("YYYY-MM-DD");
    setUserBirthDate(changedDate);
    setUserBirthDateObj(date);

    setAxiosErrorMessage("");

    if (date === null || date === undefined) {
      setBirthDateMessage("생년월일을 확인해 주세요!");
    } else {
      setBirthDateMessage("");
    }
  };

  const onUserPasswordChange = (e: BaseSyntheticEvent) => {
    setUserPassword(e.target.value);

    setAxiosErrorMessage("");
    setPassMessage("");

    if (
      validator.isAlphanumeric(e.target.value) &&
      e.target.value.length > 7 &&
      e.target.value.length <= 20 &&
      e.target.value.match(/\d+/) &&
      e.target.value.match(/[a-zA-Z]/)
    ) {
      setPassMessage("");
    } else {
      setPassMessage(
        "비밀번호가 강력하지 않습니다. (최소길이: 8, 최대길이: 20, 영문자 숫자 조합, 최소한 영문자 1개 숫자 1개씩 포함되어야 함)"
      );
    }

    if (e.target.value === userPassword2) {
      setPassMatchMessage("");
    } else {
      setPassMatchMessage("비밀번호와 비밀번호 확인란이 일치하지 않습니다!");
    }
  };

  const onUserPassword2Change = (e: BaseSyntheticEvent) => {
    setUserPassword2(e.target.value);

    //setAlreadyEmailMessage("");
    setAxiosErrorMessage("");
    setPass2Message("");

    if (userPassword === e.target.value) {
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

  const onSignupClickHandler = async () => {
    //같은 함수 안에서는 상태변수가 바뀌지 않음 ????
    //대안으로 일반 변수를 사용함
    if (
      userNickName !== "" &&
      userNickName.length >= 2 &&
      userNickName.length <= 29
    ) {
      setNickNameMessage("");

      await axios
        .get(
          `https://www.onesol.shop/auth/sign-up/check-nickname?nickname=${userNickName}`
        )
        .then(function (res) {
          console.log(res.data.data);

          if (res.data.data) {
            setAlreadyNickNameMessage("");
          } else {
            setAlreadyNickNameMessage("등록된 닉네임이 이미 있습니다!");
          }
        })
        .catch(function (err) {
          setAlreadyNickNameMessage(err.message);
        });
    } else {
      setNickNameMessage(
        "올바른 닉네임이 아닙니다.(최소길이: 2, 최대길이: 30)"
      );
    }

    if (validator.isEmail(userEmail)) {
      setEmailMessage("");

      await axios
        .get(
          `https://www.onesol.shop/auth/sign-up/check-email?email=${userEmail}`
        )
        .then(function (res) {
          console.log(res.data.data);

          if (res.data.data) {
            setAlreadyEmailMessage("");
          } else {
            setAlreadyEmailMessage("등록된 이메일이 이미 있습니다!");
          }
        })
        .catch(function (err) {
          setAlreadyEmailMessage(err.message);
        });
    } else {
      setEmailMessage("이메일 형식이 올바르지 않습니다!");
    }

    if (userBirthDate === "" || userBirthDateObj === null) {
      setBirthDateMessage("생년월일을 선택해 주세요!");
    } else {
      setBirthDateMessage("");
    }

    if (userPassword2 === "") {
      setPass2Message("비밀번호 확인란이 비어있습니다!");
    } else {
      setPass2Message("");
    }

    if (
      validator.isAlphanumeric(userPassword) &&
      userPassword.length > 7 &&
      userPassword.length <= 20 &&
      userPassword.match(/\d+/) &&
      userPassword.match(/[a-zA-Z]/)
    ) {
      setPassMessage("");
    } else {
      setPassMessage(
        "비밀번호가 강력하지 않습니다. (최소길이: 8, 최대길이: 20, 영문자 숫자 조합, 최소한 영문자 1개 숫자 1개씩 포함되어야 함)"
      );
    }

    if (
      alreadyNickNameMessage === "" &&
      alreadyEmailMessage === "" &&
      userNickName !== "" &&
      userNickName.length >= 2 &&
      userNickName.length <= 29 &&
      validator.isEmail(userEmail) &&
      userBirthDate !== "" &&
      userBirthDateObj !== null &&
      userPassword !== "" &&
      userPassword2 !== "" &&
      userPassword === userPassword2 &&
      validator.isAlphanumeric(userPassword) &&
      userPassword.length > 7 &&
      userPassword.length <= 20 &&
      userPassword.match(/\d+/) &&
      userPassword.match(/[a-zA-Z]/)
    ) {
      if (userSocialId === "") {
        const gender2 = userGender === 0 ? "남성" : "여성";
        await axios
          .post("https://www.onesol.shop/auth/sign-up", {
            email: userEmail,
            nickName: userNickName,
            password: userPassword,
            passwordConfirm: userPassword2,
            dateOfBirth: userBirthDate,
            gender: gender2,
          })
          .then(function (res) {
            console.log(res);
            alert(
              userNickName +
                " 님 가입을 축하드립니다! 로그인 페이지로 이동합니다."
            );
            navigator("/login");
          })
          .catch(function (err) {
            console.log(err);
            setAxiosErrorMessage(err.response.data.detailMessage);
          });
      } else {
        const gender2 = userGender === 0 ? "남성" : "여성";
        await axios
          .post(
            `https://www.onesol.shop/auth/social/sign-up?is-sign-up=true&social-id=${userSocialId}`,
            {
              email: userEmail,
              nickName: userNickName,
              password: userPassword,
              passwordConfirm: userPassword2,
              dateOfBirth: userBirthDate,
              gender: gender2,
            }
          )
          .then(function (res) {
            console.log(res);

            alert(
              userNickName +
                " 님 가입을 축하드립니다! 로그인 페이지로 이동합니다."
            );
            navigator("/login");
          })
          .catch(function (err) {
            console.log(err);
            setAxiosErrorMessage(err.message);
          });
      }
    }
  };

  return [
    {
      userSocialId,
      setUserSocialId,
      userNickName,
      setUserNickName,
      userEmail,
      setUserEmail,
      userGender,
      setUserGender,
      userBirthDate,
      setUserBirthDate,
      userBirthDateObj,
      setUserBirthDateObj,
      isShowPwd,
      setIsShowPwd,
      userPassword,
      setUserPassword,
      userPassword2,
      setUserPassword2,
      nickNameMessage,
      setNickNameMessage,
      emailMessage,
      setEmailMessage,
      birthDateMessage,
      setBirthDateMessage,
      passMessage,
      setPassMessage,
      pass2Message,
      setPass2Message,
      passMatchMessage,
      setPassMatchMessage,
      alreadyEmailMessage,
      setAlreadyEmailMessage,
      alreadyNickNameMessage,
      setAlreadyNickNameMessage,
      axiosErrorMessage,
      setAxiosErrorMessage,
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
  ];
};

export default useInputs;
