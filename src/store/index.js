import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./UI-slice";
import cartReducer from "./cart-slice";

const store = configureStore({
  reducer: { ui: uiReducer, cart: cartReducer }
});

export default store;
