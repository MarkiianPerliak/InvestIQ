import { createSlice } from "@reduxjs/toolkit";
import { logIn, logOut, refreshUser, signUp } from "./userOperations";

export interface User {
  email: string;
  name: string;
}

export interface UserState {
  user: User;
  token: string;
  isLogged: boolean;
}

const initialState: UserState = {
  user: { email: "", name: "" },
  token: "",
  isLogged: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(logIn.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogged = true;
    });
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogged = true;
    });
    builder.addCase(logOut.fulfilled, (state) => {
      state.user = { email: "", name: "" };
      state.token = "";
      state.isLogged = false;
    });
    builder.addCase(refreshUser.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogged = true;
    });
  },
});

export const userReducer = userSlice.reducer;