import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store"

import MainPage from "./pages/mainPage/MainPage";
import GoodRestaurantEnrollPage from "./pages/goodRestaurantEnrollPage/GoodRestaurantEnrollPage";


function App() {
  return (
    <Provider store={store}>
      <div className="App">
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
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
