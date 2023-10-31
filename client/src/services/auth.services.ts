import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "secrets/secrets";
import { User } from "types/user.types";

export const signupUser = createAsyncThunk(
  "users/signup",
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
