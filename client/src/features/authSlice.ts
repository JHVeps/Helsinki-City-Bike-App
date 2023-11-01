import { createSlice } from "@reduxjs/toolkit";
import { signinUser, signupUser } from "services/auth.services";
import { authState } from "types/auth.types";

const initialState: authState = {
  token: "",
  isLoading: false,
  error: false,
  item: {
    id: "",
    name: "",
    email: "",
    password: "",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(signupUser.pending, (state) => {
      state.token = "";
      state.isLoading = true;
      state.error = false;
    });

    builder.addCase(signupUser.rejected, (state) => {
      state.token = "";
      state.isLoading = false;
      state.error = true;
    });

    builder.addCase(signupUser.fulfilled, (state, action) => {
      state.item = action.payload?.data;
      state.token = "";
      state.isLoading = false;
      state.error = false;
    });

    builder.addCase(signinUser.pending, (state) => {
      state.token = "";
      state.isLoading = true;
      state.error = false;
    });

    builder.addCase(signinUser.rejected, (state) => {
      state.token = "";
      state.isLoading = false;
      state.error = true;
    });

    builder.addCase(signinUser.fulfilled, (state, action) => {
      state.item = action.payload?.data;
      state.token = "";
      state.isLoading = false;
      state.error = false;
    });
  },
});

export default authSlice.reducer;
