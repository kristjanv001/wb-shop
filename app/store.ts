import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import authReducer from "../features/auth/authSlice";
import { saveState, loadState } from "../lib/localStorage";
import throttle from "lodash.throttle";
import { CartState } from "../features/cart/types";

const preloadedState = loadState();

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
  },
  preloadedState,
});

store.subscribe(
  throttle(() => {
    saveState({ cart: store.getState().cart });
  }, 5000)
);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
