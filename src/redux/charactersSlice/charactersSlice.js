import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const charLimit = 12;

export const fetchCharacter = createAsyncThunk(
  "characters/getCharacters",
  async (page) => {
    const res = await axios(
      `${
        process.env.REACT_APP_API_BASE_ENDPOINT
      }/characters?limit=${charLimit}&offset=${page * charLimit}`
    );
    return res.data;
  }
);
export const charactersSlice = createSlice({
  name: "characters",
  initialState: {
    items: [],
    isLoading: false,
    page: 0,
    hasNextPage: true,
  },
  reducers: {},
  extraReducers: {
    [fetchCharacter.pending]: (state, actions) => {
      state.isLoading = true;
    },
    [fetchCharacter.fulfilled]: (state, actions) => {
      state.isLoading = false;
      state.items = [...state.items, ...actions.payload];
      state.page += 1;

      if (actions.payload.length < 12) {
        state.hasNextPage = false;
      }
    },
    [fetchCharacter.rejected]: (state, actions) => {
      state.isLoading = false;
      state.error = actions.error.message;
    },
  },
});

export default charactersSlice.reducer;
