import { createSlice } from "@reduxjs/toolkit";
import { MAX_CACHE_SIZE } from "./constant";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheResults: (state, action) => {
      const [key] = Object.keys(action.payload);

      delete state[key];

      state[key] = action.payload[key];

      const keys = Object.keys(state);

      if (keys.length > MAX_CACHE_SIZE) {
        delete state[keys[0]];
      }
    },
  },
});

export const { cacheResults } = searchSlice.actions;
export default searchSlice.reducer;
