import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import LoginError from "./LoginError";
import Logout from "../Login/Logout";
import MyPage from "../MyPage/MyPage";
import Signup from "../Signup/Signup";
import FindPassword from "./FindPassword";
import FindEmail from "./FindEmail";
import ChangePassword from "../MyPage/ChangePassword";
import GetMyPosts from "../MyPage/GetMyPosts";
import Redirect from "./Redirect";

interface IsTokenProps {
  isToken: boolean;
  userNickName: string;
  updateIsToken: any;
}

const AuthRouter: React.FC<IsTokenProps> = ({
  isToken,
  userNickName,
  updateIsToken,
}) => {
  return (
    <Routes>
      {isToken ? (
        <>
          <Route path="/myposts" element={<GetMyPosts />} />
          <Route
            path="/find-email"
            element={
              <LoginError pageName={"FindEmail"} error={"로그인 상태입니다!"} />
            }
          />
          <Route
            path="/login"
            element={
              <LoginError pageName={"Login"} error={"로그인 상태입니다!"} />
            }
          />
          <Route
            path="/signup"
            element={
              <LoginError
                pageName={"Signup"}
                error={"로그인 상태에서는 회원가입이 되지 않습니다!"}
              />
            }
          />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/findpassword" element={<FindPassword />} />

          <Route
            path="/logout"
            element={
              <Logout nickName={userNickName} updateIsToken={updateIsToken} />
            }
          />
          <Route
            path="/mypage/:pagenumber"
            element={<MyPage updateIsToken={updateIsToken} />}
          />
        </>
      ) : (
        <>
          <Route
            path="/myposts"
            element={
              <LoginError
                pageName={"MyPosts"}
                error={"로그인이 되지 않았습니다!"}
              />
            }
          />
          <Route
            path="/logout"
            element={
              <LoginError
                pageName={"Logout"}
                error={"로그인인 되지 않았습니다!"}
              />
            }
          />
          <Route
            path={"/mypage/*"}
            element={
              <LoginError pageName={"MyPage"} error={"먼저 로그인 하십시오!"} />
            }
          />
          <Route
            path="/change-password"
            element={
              <LoginError
                pageName={"ChangePassword"}
                error={"먼저 로그인하십시오!"}
              />
            }
          />
          <Route path="/find-email" element={<FindEmail />} />
          <Route
            path="/login"
            element={<Login updateIsToken={updateIsToken} />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/redirect"
            element={<Redirect updateIsToken={updateIsToken} />}
          />
        </>
      )}
    </Routes>
  );
};

export default AuthRouter;
