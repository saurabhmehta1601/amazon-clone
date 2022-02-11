import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/ShoppingCart/cartSlice";
import userReducer from "./features/LoggedUser/userSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
