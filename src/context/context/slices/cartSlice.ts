import { CartItem } from "@/interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartState {
  value: CartItem[];
}

const initialState: CartState = {
  value: JSON.parse(localStorage.getItem("cart") || "[]") || [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      let index = state.value.findIndex((i) => i.id === action.payload.id);
      if (index < 0) {
        state.value = [...state.value, { ...action.payload, quantity: 1 }];
      } else {
        state.value = state.value.map((item, inx) =>
          inx === index ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      localStorage.setItem("cart", JSON.stringify(state.value));
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.value = state.value.filter((i) => i.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(state.value));
    },
    decrementCart: (state, action: PayloadAction<CartItem>) => {
      let index = state.value.findIndex((i) => i.id === action.payload.id);
      state.value = state.value.map((item, inx) =>
        inx === index ? { ...item, quantity: item.quantity - 1 } : item
      );
      localStorage.setItem("cart", JSON.stringify(state.value));
    },
    deleteAllCart: (state) => {
      state.value = [];
      localStorage.removeItem("cart");
    },
  },
});

export const { addToCart, removeFromCart, decrementCart, deleteAllCart } =
  cartSlice.actions;
export default cartSlice.reducer;
