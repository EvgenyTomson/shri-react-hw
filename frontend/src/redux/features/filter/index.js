import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: '',
  cinema: '',
  genre: '',
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterName: (state, { payload }) => {
      state.name = payload;
    },

    filterCinemas: (state, { payload }) => {
      state.cinema = payload;
    },

    filterGenres: (state, { payload }) => {
      state.genre = payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const filterActions = filterSlice.actions;
