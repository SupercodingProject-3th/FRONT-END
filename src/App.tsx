import { useLayoutEffect, useState } from "react";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login, logout } from "./store/slices/authSlices";
import MainPage from "./pages/mainPage/MainPage";
import GoodRestaurantEnrollPage from "./pages/goodRestaurantEnrollPage/GoodRestaurantEnrollPage";
import AuthRouter from "./components/Login/AuthRouter";
import PlacesList from "./pages/PlacesList";
import GoodRestaurantEditPage from "./pages/goodRestaurantEditPage/GoodRestaurantEditPage";
import MapMainPage from "./components/KakaoMapMainPage/MapMainPage";
import DetailPage from "./pages/detailPage";

function App() {
  const [userNickName, setUserNickName] = useState("");

  const navigator = useNavigate();
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    if (localStorage.getItem("nickName") !== null) {
      const nickName = localStorage.getItem("nickName");

      if (nickName !== null) {
        setUserNickName(nickName);
        dispatch(login());
      }
    } else {
      setUserNickName("");
      dispatch(logout());
    }
  }, [navigator, dispatch]);

  // 로그인 되었을 때 페이지들
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />

        <Route
          path="/goodrestaurantenroll"
          element={<GoodRestaurantEnrollPage />}
        />

        <Route path="/map" element={<MapMainPage />} />

        <Route path="/map" element={<MapMainPage />} />

        <Route path="/edit/:postId" element={<GoodRestaurantEditPage />} />

        <Route path="/*" element={<AuthRouter userNickName={userNickName} />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="*" element={<div>404페이지</div>} />
        <Route path="/placeslist" element={<PlacesList />} />
      </Routes>
    </div>
  );
}

export default App;
