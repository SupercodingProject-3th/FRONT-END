import { configureStore, combineReducers } from "@reduxjs/toolkit";
import darkModeSlices from "./slices/darkModeSlices"; // 실제 경로에 맞게 수정
import authSlices from "./slices/authSlices";

const rootReducer = combineReducers({
  darkMode: darkModeSlices,
  auth:authSlices,
  // NOTE: 다른 리듀서 추가할 것 
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: {
    darkMode: darkModeSlices,
    auth:authSlices,
  },
});

export default store;
