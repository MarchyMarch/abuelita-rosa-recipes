import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

export const COUNTER_SLICE_NAME = "counter";

type CounterState = {
  value: number;
};

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: COUNTER_SLICE_NAME,
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    addByValue: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { addByValue, decrement, increment } = counterSlice.actions;

export const selectValue = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
