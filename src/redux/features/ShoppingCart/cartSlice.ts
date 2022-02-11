import { createSlice } from "@reduxjs/toolkit";

export interface CartState {
  products: Array<{
    id: string;
    title: string;
    price: number;
    image_url: string;
    rating: number;
  }>;
}

const initialState: CartState = {
  products: [],
};

export const counterSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, title, price, image_url, rating } = action.payload;
      state.products.push({ id, title, price, image_url, rating });
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      state.products = state.products.filter((p) => p.id !== id);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart } = counterSlice.actions;

export default counterSlice.reducer;
