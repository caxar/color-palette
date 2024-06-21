import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import ProductsReducer from "./products/productSlice";
export const store = configureStore({
  reducer: {
    products: ProductsReducer,
  },
});

// Глобальный тип всех Reducer
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
