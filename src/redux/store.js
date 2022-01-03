import { configureStore } from "@reduxjs/toolkit";
import { charactersSlice } from "./charactersSlice.js/charactersSlice";

export const store = configureStore({
  reducer: {
    charactersSlice: charactersSlice,
  },
});
