import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counterTH2",
  initialState: {
    count: {
      count1: 0,
      count2: 0,
    },
  },
  reducers: {
    incrementCount1: (state) => {
      state.count.count1 += 1;
    },
    incrementCount2: (state) => {
      state.count.count2 -= 1;
    },
  },
});

export const { incrementCount1, incrementCount2 } = counterSlice.actions;

export default counterSlice.reducer;
