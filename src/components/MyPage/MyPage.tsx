import React, { useEffect, useState } from "react";
import MyPageMenu from "./MyPageMenu";
import MyRestaurant from "./MyRestaurant";
import MyFavoriteRestaurant from "./MyFavoriteRestaurant";
import MyEditProfile from "./MyEditProfile";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import MyInfo from "./MyInfo";
import ChangePassword from "./ChangePassword";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BaseSyntheticEvent } from "react";
import moment from "moment";

interface MyPageProps {
  updateIsToken: any;
}

const MyPage: React.FC<MyPageProps> = ({ updateIsToken }) => {
  const { pagenumber } = useParams();
  const [liked, setLiked] = useState([]);

  const navigator = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [joinDate, setJoinDate] = useState<string>("");
  const [image2, setImage2] = useState<any>([]);
  const [errMessage, setErrMessage] = useState<string>("");
  const [dateOfBirthObj, setDateOfBirthObj] = useState<any>(null);
  const [isShowPwd, setIsShowPwd] = useState<boolean>(false);

  const [formData, setFormData] = useState({
    nickName: "",
    phoneNum: "",
    neighborhood: "",
    gender: "",
    dateOfBirth: "",
    password: "",
  });

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
          setJoinDate(res.data.data.joinDate.toString());
          setImage2(res.data.data.imageUrl);
          setDateOfBirthObj(new Date(res.data.data.dateOfBirth));

          setFormData((prevState) => ({
            ...prevState,
            nickName: res.data.data.nickName,
          }));
          setFormData((prevState) => ({
            ...prevState,
            phoneNum: res.data.data.phoneNumber,
          }));
          setFormData((prevState) => ({
            ...prevState,
            neighborhood: res.data.data.neighborhood,
          }));
          setFormData((prevState) => ({
            ...prevState,
            dateOfBirth: res.data.data.dateOfBirth,
          }));
          setFormData((prevState) => ({
            ...prevState,
            gender: res.data.data.gender,
          }));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
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
    setFormData((prevState) => ({ ...prevState, nickName: e.target.value }));
  };

  const onPhoneHandler = (e: BaseSyntheticEvent) => {
    setErrMessage("");
    setFormData((prevState) => ({ ...prevState, phoneNum: e.target.value }));
  };

  const onNeighborHandler = (e: BaseSyntheticEvent) => {
    setErrMessage("");
    setFormData((prevState) => ({
      ...prevState,
      neighborhood: e.target.value,
    }));
  };

  const onBirthDateHander = (date: any) => {
    setErrMessage("");

    const changedDate = moment(date).format("YYYY-MM-DD");
    setFormData((prevState) => ({
      ...prevState,
      dateOfBirth: changedDate,
    }));
    setDateOfBirthObj(date);
  };

  const onPasswordHandler = (e: BaseSyntheticEvent) => {
    setErrMessage("");
    setFormData((prevState) => ({ ...prevState, password: e.target.value }));
  };

  const onGenderHandler = (e: BaseSyntheticEvent) => {
    setErrMessage("");
    setFormData((prevState) => ({ ...prevState, gender: e.target.value }));
  };

  const onPicHandler = (e: any) => {
    setErrMessage("");

    let file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      return new Promise<void>((resolve) => {
        reader.onload = () => {
          setImage2(reader.result || null);
          resolve();
        };
      });
    } else {
      return null;
    }
  };

  const onTogglePwdShowHandler = () => {
    if (!isShowPwd) {
      setIsShowPwd(true);
    } else {
      setIsShowPwd(false);
    }
  };

  const onInfoChangeHander = async () => {
    const token = localStorage.getItem("token");

    if (token !== null) {
      const formDataToSend = new FormData();
      formDataToSend.append("image", image2);
      formDataToSend.append(
        "updateMyInfoRequest",
        new Blob([JSON.stringify(formData)], { type: "application/json" })
      );
      await axios
        .post(
          "https://www.onesol.shop/account/update-my-info",
          formDataToSend,
          {
            headers: {
              Token: token,
            },
          }
        )
        .then((res) => {
          console.log(res);
          alert("회원정보수정에 성공했습니다.");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
          if (err.response) {
            setErrMessage(err.response.data.detailMessage);
          } else {
            setErrMessage(err.message);
          }
        });
    }
  };

  useEffect(() => {
    const getMyInfo = async () => {
      const token = localStorage.getItem("token");
      if (token !== null) {
        await axios
          .get("https://www.onesol.shop/v1/api/liked?page=0&size=10", {
            headers: {
              Token: token,
            },
          })
          .then((res) => {
            console.log(res);
            if (res.data.code === 200) {
              setLiked(res.data);
            } else {
              setLiked([]);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    };

    getMyInfo();
  }, [pagenumber]);

  if (pagenumber === "0") {
    return (
      <>
        <MyPageMenu />
        <MyMain>
          <MyPageContainer>
            <MyInfo likingNumber={liked.length} image2={image2} />
            <MyRestaurant />
          </MyPageContainer>
        </MyMain>
      </>
    );
  } else if (pagenumber === "1") {
    return (
      <>
        <MyPageMenu />
        <MyMain>
          <MyPageContainer>
            <MyInfo likingNumber={liked.length} image2={image2} />
            <MyFavoriteRestaurant liking={liked} />
          </MyPageContainer>
        </MyMain>
      </>
    );
  } else if (pagenumber === "2") {
    return (
      <>
        <MyPageMenu />
        <MyMain>
          <MyPageContainer>
            <MyInfo likingNumber={liked.length} image2={image2} />
            <MyEditProfile
              formData={formData}
              getUserInfo={getUserInfo}
              updateIsToken={updateIsToken}
              email={email}
              joinDate={joinDate}
              image2={image2}
              isShowPwd={isShowPwd}
              errMessage={errMessage}
              dateOfBirthObj={dateOfBirthObj}
              onDeleteMyAccount={onDeleteMyAccount}
              onNickNameHandler={onNickNameHandler}
              onPhoneHandler={onPhoneHandler}
              onNeighborHandler={onNeighborHandler}
              onBirthDateHander={onBirthDateHander}
              onPasswordHandler={onPasswordHandler}
              onGenderHandler={onGenderHandler}
              onPicHandler={onPicHandler}
              onTogglePwdShowHandler={onTogglePwdShowHandler}
              onInfoChangeHander={onInfoChangeHander}
            />
          </MyPageContainer>
        </MyMain>
      </>
    );
  } else if (pagenumber === "3") {
    return (
      <>
        <MyPageMenu />
        <MyMain>
          <MyPageContainer>
            <MyInfo likingNumber={liked.length} image2={image2} />
            <ChangePassword />
          </MyPageContainer>
        </MyMain>
      </>
    );
  } else {
    return null;
  }
};

const MyMain = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MyPageContainer = styled.div`
  width: 1000px;
  display: flex;
  justify-content: center;
  align-items: start;
`;

export default MyPage;
