import { configureStore } from "@reduxjs/toolkit";

import { counterSlice } from "./counterStore";
import authSlice from "./AuthStore/insdex";

const rootReducer = { counter: counterSlice.reducer, auth: authSlice.reducer };

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;

export default store;
