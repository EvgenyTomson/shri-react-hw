import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state, { payload }) => {
      const count = state[payload] || 0;

      if (count > 29) {
        return;
      }

      state[payload] = count + 1;
    },
    decrement: (state, { payload }) => {
      const count = state[payload];

      if (!count) {
        return;
      }

      if (count === 1) {
        delete state[payload];
        return;
      }

      state[payload] = count - 1;
    },
    decrementToZero: (state, { payload }) => {
      const count = state[payload];

      if (!count) {
        return;
      }

      state[payload] = count - 1;
    },
    resmove: (state, { payload }) => {
      delete state[payload];
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
