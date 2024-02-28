import { configureStore } from "@reduxjs/toolkit";
import fruitReducer from "./features/fruits/fruit.reducer";

export const store = configureStore({
  reducer: {
    fruits: fruitReducer,
  },
});
