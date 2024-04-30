import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increase: (state) => {
      state.value += 1;
    },
    decrease: (state) => {
      if (state.value > 0) {
        state.value -= 1;
      }
    },
    increaseWithPayload: (state, actions) => {
      state.value += actions.payload;
    },
  },
});

export const { increase, decrease, increaseWithPayload } = counterSlice.actions;
export default counterSlice.reducer;
