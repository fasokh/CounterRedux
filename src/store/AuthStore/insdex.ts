import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = { isShown: false };

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    authentication(state) {
      state.isShown = !state.isShown
    },
  },
});

export const authAction = authSlice.actions;

export default authSlice;
