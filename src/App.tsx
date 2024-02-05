import { useLayoutEffect, useState } from "react";
import "./App.css";
import Login from "./components/Login/Login";
import LoginError from "./components/Login/LoginError";
import Logout from "./components/Login/Logout";
import MyPage from "./components/MyPage/MyPage";
import Signup from "./components/Signup/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyPageButton from "./components/MyPage/MyPageButton";
import FindPassword from "./components/Login/FindPassword";
import FindEmail from "./components/Login/FindEmail";
import ChangePassword from "./components/Login/ChangePassword";
import Redirect from "./components/Login/Redirect";
import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import MainPage from "./pages/mainPage/MainPage";
import GoodRestaurantEnrollPage from "./pages/goodRestaurantEnrollPage/GoodRestaurantEnrollPage";
import PlacesList from "./pages/PlacesList";

function App() {
  const [isToken, setIsToken] = useState(false);
  const [userNickName, setUserNickName] = useState("");

  useLayoutEffect(() => {
    if (localStorage.getItem("nickName") !== null) {
      const nickName = localStorage.getItem("nickName");

      if (nickName !== null) {
        setUserNickName(nickName);
        setIsToken(true);
      }
    } else {
      setUserNickName("");
      setIsToken(false);
    }
  }, [isToken, setIsToken]);

  // 로그인 되었을 때 페이지들
  return (
    <Provider store={store}>
      <div className="App">
        {isToken ? (
          <>
            {/* 임시로 설정 : MyPageButton*/}
            <MyPageButton isToken={isToken} />
            <Routes>
              {/* 물론 메인페이지는 담당자 분이 바꾸셔도 됩니다 */}
              <Route
                path="/"
                element={
                  <div>
                    <MainPage />
                  </div>
                }
              />
              <Route
                path="/goodrestaurantenroll"
                element={
                  <div>
                    <GoodRestaurantEnrollPage />
                  </div>
                }
              />
              <Route path="/detail/:id" element={<div>상세페이지</div>} />
              <Route path="*" element={<div>404페이지</div>} />
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
                element={
                  <Logout nickName={userNickName} updateIsToken={setIsToken} />
                }
              />
              <Route path="/mypage/:pagenumber" element={<MyPage />} />
            </Routes>
          </>
        ) : (
          // 로그인 안되었을때 페이지
          <>
            <MyPageButton isToken={isToken} />
            <Routes>
              <Route
                path="/"
                element={
                  <div>
                    <MainPage />
                  </div>
                }
              />
              <Route
                path="/goodrestaurantenroll"
                element={
                  <div>
                    <GoodRestaurantEnrollPage />
                  </div>
                }
              />
              <Route path="/detail/:id" element={<div>상세페이지</div>} />
              <Route path="*" element={<div>404페이지</div>} />
              <Route
                path="/redirect"
                element={<Redirect updateIsToken={setIsToken} />}
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
              <Route
                path="/login"
                element={<Login updateIsToken={setIsToken} />}
              />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </>
        )}
      </div>
    </Provider>
  );
}

export default App;
