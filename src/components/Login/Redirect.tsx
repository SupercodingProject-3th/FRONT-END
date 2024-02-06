import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import React from "react";

interface RedirectProps {
  updateIsToken: any;
}

const Redirect: React.FC<RedirectProps> = ({ updateIsToken }) => {
  const protocol = window.location.protocol;
  const hostname = window.location.hostname;
  const port = window.location.port;

  const currentUrl = `${protocol}//${hostname}:${port}/signup`;

  const navigator = useNavigate();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const getCode = async () => {
      await axios
        .post("https://www.onesol.shop/auth/social/kakao", {
          authorizationCode: searchParams.get("code"),
        })
        .then(function (res) {
          console.log(res);

          const token = res.headers.token;
          const nickName = res.data.data.nickName;
          const userId = res.data.data.userId;

          localStorage.setItem("token", token);
          localStorage.setItem("nickName", nickName);
          localStorage.setItem("userId", userId);

          updateIsToken(true);

          navigator("/");
        })
        .catch(async function (err) {
          if (err.response.status === 422) {
            // 서버 응답 데이터에서 필요한 필드들 추출
            const email = err.response.data.request.email || "";
            const provider = err.response.data.request.provider || "";
            const nickName = err.response.data.request.nickName || "";
            const imageUrl = err.response.data.request.imageUrl || "";
            const dateOfBirth = err.response.data.request.dateOfBirth || "";
            const gender = err.response.data.request.gender || "";
            const socialId = err.response.data.request.socialId || "";

            // 확인창
            const confirmation = window.confirm(
              err.response.data.detailMessage
            );
            //사용자가 확인 눌렀을경우⬇️
            if (confirmation) {
              const redirectUrl = currentUrl;
              const queryString =
                `?email=${encodeURIComponent(
                  email
                )}&provider=${encodeURIComponent(provider)}&` +
                `nickName=${encodeURIComponent(
                  nickName
                )}&imageUrl=${encodeURIComponent(imageUrl)}&` +
                (dateOfBirth !== null
                  ? `dateOfBirth=${encodeURIComponent(dateOfBirth)}&`
                  : "") +
                (gender !== null
                  ? `gender=${encodeURIComponent(gender)}&`
                  : "") +
                `socialId=${encodeURIComponent(socialId)}`;
              window.location.href = redirectUrl + queryString;
              console.log(queryString);
              //취소 눌렀을경우⬇️
            } else {
              console.log("가입취소");
              const url = "https://www.onesol.shop/auth/social/sign-up";
              const jsonData = null;

              // POST 요청의 body 데이터 생성
              const requestBody = new URLSearchParams();
              requestBody.append("is-sign-up", confirmation.toString());
              requestBody.append("social-id", socialId);
              await axios
                .post(`${url}?${requestBody.toString()}`, {
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(jsonData),
                })
                .then((res) => {
                  // 서버의 응답을 처리하는 로직 추가
                  console.log("Server response:", res);
                  navigator("/login");
                })
                .catch((error) => {
                  // 오류 처리 로직 추가
                  console.error("Error sending request:", error);
                  navigator("/login");
                });
            }
          } else if (err.response.status === 409) {
            console.log(err);
            // eslint-disable-next-line no-restricted-globals
            const confirmation = window.confirm(
              err.response.data.detailMessage
            );
            const request = new URLSearchParams();
            request.append("is-connect", confirmation.toString());
            request.append("social-id", err.response.data.request);
            console.log(request.toString());
            const url = "https://www.onesol.shop/auth/social/connect";
            await axios
              .post(url, request, {
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded",
                }, // URLSearchParams를 문자열로 변환하여 body에 넣기
              })
              .then((res) => {
                console.log("성공 응답:", res);
                navigator("/");
              })
              .catch((error) => {
                console.error("실패 응답:", error);
                navigator("/login");
              });
          } else if (err.response.status === 400) {
            console.log(err);
            alert(err.response.data.detailMessage);
            navigator("/");
          } else {
            console.log(err);
            alert(err.response.data.error);
            navigator("/login");
          }
        });
    };

    getCode();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  return <h1>KaKao Redirecting Page</h1>;
};

export default Redirect;
