import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { User } from "./types";

type UserState = {
  user: User;
};

const initialState = {
  user: null,
} as UserState;

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state: UserState, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = authSlice.actions;
export const selectAuth = (state: RootState) => state.auth;
export default authSlice.reducer;
