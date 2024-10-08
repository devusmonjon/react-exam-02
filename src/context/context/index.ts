import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import cartSlice from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

// RootState va AppDispatch turlarini eksport qilish
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
