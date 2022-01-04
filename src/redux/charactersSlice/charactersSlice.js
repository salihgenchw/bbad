import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCharacter = createAsyncThunk(
  "characters/getCharacters",
  async () => {
    const res = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/characters?limit=20`);
    return res.data;
  }
);
export const charactersSlice = createSlice({
  name: "characters",
  initialState: {
    items: [],
    isLoading: false,
  },
  reducers: {},
  extraReducers: {
    [fetchCharacter.pending]: (state, actions) => {
      state.isLoading = true;
    },
    [fetchCharacter.fulfilled]: (state, actions) => {
      state.isLoading = false;
      state.items = actions.payload
    },
    [fetchCharacter.rejected]: (state, actions) => {
      state.isLoading = false;
    },
  },
});

export default charactersSlice.reducer;
