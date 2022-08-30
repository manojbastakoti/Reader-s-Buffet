import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    user: null,
    error: null,
    loading: false,
  },
  reducers: {
    login: (state, action) => {
      Cookies.set("token", action.payload);
      state.isAuthenticated = true;
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${action.payload}`;
    },
    logout: (state) => {
      Cookies.remove("token");
      state.isAuthenticated = false;
      axios.defaults.headers.common["Authorization"] = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
