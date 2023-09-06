import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./pages/login/AuthSlice";
import systemReducer from "./system/systemSlice";

const store = configureStore({
  reducer: {
    user: authReducer,
    system: systemReducer,
  },
});

export default store;
