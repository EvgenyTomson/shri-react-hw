import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "@/redux/features/cart";
import { filterReducer } from "@/redux/features/filter";

import { movieApi } from "@/redux/services/movieApi";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    filter: filterReducer,

    [movieApi.reducerPath]: movieApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([movieApi.middleware]),
});

