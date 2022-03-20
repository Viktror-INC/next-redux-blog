import { createSlice } from "@reduxjs/toolkit";

const initialState = { indexFromStore: 0 };

const currentPageSlice = createSlice({
  name: "indexFromStore",
  initialState,
  reducers: {
    setIndex: (state, action) => {
      state.indexFromStore = action.payload;
    },
  },
});

export const { setIndex } = currentPageSlice.actions;
export default currentPageSlice.reducer;
