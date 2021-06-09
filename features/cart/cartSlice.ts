import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import type { Product } from "../products/types";
import { CartState } from "./types";

const initialState = {
  cart: [],
} as CartState;

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      state.cart.push(action.payload);
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.filter(
        (product) => product.id !== action.payload
      );
    },

    setItemCount: (
      state,
      action: PayloadAction<{ id: string; value: number }>
    ) => {
      state.cart.map((product) =>
        product.id === action.payload.id
          ? (product.count = action.payload.value)
          : (product.count = product.count)
      );
    },
  },
});

export const { addToCart, removeFromCart, setItemCount } = cartSlice.actions;
export const selectCart = (state: RootState) => state.cart;
export default cartSlice.reducer;

// instead of string --> type should be an id type
