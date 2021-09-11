import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./UI-slice";

const store = configureStore({
  reducer: { ui: uiReducer }
});

export default store;
