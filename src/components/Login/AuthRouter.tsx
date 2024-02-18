import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./Login";
import LoginError from "./LoginError";
import Logout from "./Logout";
import MyPage from "../myPage/MyPage";
import Signup from "../Signup/Signup";
import FindPassword from "./FindPassword";
import FindEmail from "./FindEmail";
import ChangePassword from "../myPage/ChangePassword";
import GetMyPosts from "../myPage/GetMyPosts";
import Redirect from "./Redirect";
import Header from "../../shared/Header";
import Footer from "../../shared/Footer";

interface IsTokenProps {
  userNickName: string;
}

const AuthRouter: React.FC<IsTokenProps> = ({ userNickName }) => {
  const isToken = useSelector((state: any) => state.auth.isAuthenticated);

  return (
    <>
      <Header />
      <Routes>
        {isToken ? (
          <>
            <Route path="/myposts" element={<GetMyPosts />} />
            <Route
              path="/find-email"
              element={
                <LoginError
                  pageName={"FindEmail"}
                  error={"로그인 상태입니다!"}
                />
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
              element={<Logout nickName={userNickName} />}
            />
            <Route path="/mypage/:pagenumber" element={<MyPage />} />
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
                <LoginError
                  pageName={"MyPage"}
                  error={"먼저 로그인 하십시오!"}
                />
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
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/redirect" element={<Redirect />} />
          </>
        )}
      </Routes>
      <Footer />
    </>
  );
};

export default AuthRouter;
