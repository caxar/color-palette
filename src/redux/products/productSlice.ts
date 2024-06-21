import { createSlice } from "@reduxjs/toolkit";
import { Status } from "./types";
import { fetchProductsAction } from "./asyncActions";

const initialState = {
  entities: [],
  infoColors: [],
  status: Status.Pending, // pending | succeeded | failed
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setColors: (state, action) => {
      state.entities = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchProductsAction.pending, (state) => {
      state.status = Status.Pending;
    });
    builder.addCase(fetchProductsAction.fulfilled, (state, action) => {
      state.infoColors = action.payload;
      state.status = Status.Succeeded;
    });
    builder.addCase(fetchProductsAction.rejected, (state) => {
      state.status = Status.Failed;
      state.infoColors = [];
    });
  },
});

// eslint-disable-next-line no-empty-pattern
export const { setColors } = productsSlice.actions;

export default productsSlice.reducer;
