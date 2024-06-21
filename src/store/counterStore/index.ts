import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  counter: number;
  showCounter: boolean;
}

const initialState: CounterState = { counter: 0, showCounter: false };

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action: PayloadAction<number>) {
      state.counter += action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
    reset(state) {
      state.counter = 0;
    },
  },
});

export const counterAction = counterSlice.actions;
