import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: Cookies.get("token") ? true : false,
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
      state.user = null;
      axios.defaults.headers.common["Authorization"] = null;
      window.location.href = "/";
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { login, logout, setUser } = authSlice.actions;
export default authSlice.reducer;
