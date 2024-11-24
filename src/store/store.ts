import { configureStore } from "@reduxjs/toolkit";
import counterReducer, { COUNTER_SLICE_NAME } from "../slice/counter";

export const store = configureStore({
  reducer: {
    [COUNTER_SLICE_NAME]: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
