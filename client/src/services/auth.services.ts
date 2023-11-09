import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "secrets/secrets";
import { SigninUser } from "types/auth.types";
import { User } from "types/user.types";

export const signupUser = createAsyncThunk(
  "auth/signup",
  async (newUser: User) => {
    const config = {
      method: "POST",
      url: `${API_URL}/auth/signup`,
      data: newUser,
      headers: {},
    };
    try {
      let res = await axios(config);
      return { data: res.data, status: res.status };
    } catch (error: any) {
      throw new Error(error.response.data.error);
    }
  }
);

export const signinUser = createAsyncThunk(
  "auth/signin",
  async (data: SigninUser) => {
    const config = {
      method: "POST",
      url: `${API_URL}/auth/signin`,
      data: data,
      headers: {},
    };
    try {
      let res = await axios(config);
      return { data: res.data, status: res.status };
    } catch (error: any) {
      throw new Error(error.response.data.error);
    }
  }
);

export const activateAccount = createAsyncThunk(
  "auth/activate",
  async (token: string) => {
    try {
      const response = await axios.post(`${API_URL}/auth/account-activation`, {
        token,
      });
      return response.data;
    } catch (error: any) {
      throw new Error(error.response.data.error);
    }
  }
);
