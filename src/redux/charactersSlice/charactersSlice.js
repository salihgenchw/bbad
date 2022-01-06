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
    status: "idle",
    page: 0,
    hasNextPage: true,
  },
  reducers: {},
  extraReducers: {
    [fetchCharacter.pending]: (state, actions) => {
      state.status = "loading";
    },
    [fetchCharacter.fulfilled]: (state, actions) => {
      state.status = "succeeded";
      state.items = [...state.items, ...actions.payload];
      state.page += 1;

      if (actions.payload.length < 12) {
        state.hasNextPage = false;
      }
    },
    [fetchCharacter.rejected]: (state, actions) => {
      state.status = "failed";
      state.error = actions.error.message;
    },
  },
});

export default charactersSlice.reducer;
