import { useLayoutEffect, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import MainPage from "./pages/mainPage/MainPage";
import GoodRestaurantEnrollPage from "./pages/goodRestaurantEnrollPage/GoodRestaurantEnrollPage";
import AuthRouter from "./components/Login/AuthRouter";
import PlacesList from "./pages/PlacesList";
import GoodRestaurantEditPage from "./pages/goodRestaurantEditPage/GoodRestaurantEditPage";

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
            <Routes>
              {/* 물론 메인페이지는 담당자 분이 바꾸셔도 됩니다 */}
              <Route path="/" element={<MainPage />} />

              <Route
                path="/goodrestaurantenroll"
                element={<GoodRestaurantEnrollPage />}
              />

              <Route
                path="/edit/:postId"
                element={<GoodRestaurantEditPage />}
              />

              <Route
                path="/*"
                element={
                  <AuthRouter
                    isToken={isToken}
                    userNickName={userNickName}
                    updateIsToken={setIsToken}
                  />
                }
              />
              <Route path="/detail/:id" element={<div>상세페이지</div>} />
              <Route path="*" element={<div>404페이지</div>} />
            </Routes>
          </>
        ) : (
          // 로그인 안되었을때 페이지
          <>
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
              <Route
                path="/*"
                element={
                  <AuthRouter
                    isToken={isToken}
                    userNickName={userNickName}
                    updateIsToken={setIsToken}
                  />
                }
              />
              <Route path="/detail/:id" element={<div>상세페이지</div>} />
              <Route path="*" element={<div>404페이지</div>} />
            </Routes>
          </>
        )}
      </div>
    </Provider>
  );
}

export default App;
