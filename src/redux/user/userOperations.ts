import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { User } from "./userSlice";

interface UserCredentials {
  email: string;
  password: string;
  name?: string;
}

interface UserResponse {
  user: User;
  token: string;
}

interface UserThunkConfig {
  rejectValue: string;
  state: { user: { token: string } };
}

const authUrl = "https://connections-api.goit.global/users";

const getErrorMessage = (error: unknown): string =>
  error instanceof Error ? error.message : "Request failed";

export const setAuthHeader = (token: string): void => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = (): void => {
  delete axios.defaults.headers.common.Authorization;
};

export const signUp = createAsyncThunk<
  UserResponse,
  UserCredentials,
  UserThunkConfig
>("user/signup", async (account, { rejectWithValue }) => {
  try {
    const { data } = await axios.post<UserResponse>(`${authUrl}/signup/`, account);
    setAuthHeader(data.token);
    return data;
  } catch (error) {
    return rejectWithValue(getErrorMessage(error));
  }
});

export const logIn = createAsyncThunk<
  UserResponse,
  UserCredentials,
  UserThunkConfig
>("user/login", async (account, { rejectWithValue }) => {
  try {
    const { data } = await axios.post<UserResponse>(`${authUrl}/login/`, account);
    setAuthHeader(data.token);
    return data;
  } catch (error) {
    return rejectWithValue(getErrorMessage(error));
  }
});

export const logOut = createAsyncThunk<unknown, void, UserThunkConfig>(
  "user/logout",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${authUrl}/logout`);
      clearAuthHeader();
      return data;
    } catch (error) {
      return rejectWithValue(getErrorMessage(error));
    }
  },
);

export const refreshUser = createAsyncThunk<
  UserResponse,
  void,
  UserThunkConfig
>("user/refreshuser", async (_, { rejectWithValue, getState }) => {
  try {
    const token = getState().user.token;
    if (!token) {
      return rejectWithValue("No token");
    }
    setAuthHeader(token);
    const { data } = await axios.post<UserResponse>(`${authUrl}/current`);
    return data;
  } catch (error) {
    return rejectWithValue(getErrorMessage(error));
  }
});
