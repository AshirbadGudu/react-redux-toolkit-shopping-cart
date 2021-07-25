import { configureStore } from "@reduxjs/toolkit";
import counter from "./counter";
import shop from "./shop";

export const store = configureStore({
  reducer: {
    counter,
    shop,
  },
});
