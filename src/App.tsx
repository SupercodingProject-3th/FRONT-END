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
        <Routes>
          <Route path="/" element={<MainPage />} />

          <Route
            path="/goodrestaurantenroll"
            element={<GoodRestaurantEnrollPage />}
          />

          <Route path="/edit/:postId" element={<GoodRestaurantEditPage />} />

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
      </div>
    </Provider>
  );
}

export default App;
