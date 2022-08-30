import { createSlice } from "@reduxjs/toolkit";

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
      state.loading = true;
      state.error = null;
    },
  },
});

export const { login } = authSlice.actions;
export default authSlice.reducer;
