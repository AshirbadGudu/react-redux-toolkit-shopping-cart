import { configureStore } from "@reduxjs/toolkit";
import { shopAPI } from "./api";
import counter from "./counter";
import shop from "./shop";

export const store = configureStore({
  reducer: {
    counter,
    shop,
    [shopAPI.reducerPath]: shopAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shopAPI.middleware),
});
