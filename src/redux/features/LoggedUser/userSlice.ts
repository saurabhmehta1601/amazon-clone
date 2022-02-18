import { createSlice } from "@reduxjs/toolkit";

export interface UserState {
  uid: string;
  email: string;
  address: string;
  phone: string;
  name: string;
}

const initialState: UserState | null = {
  uid: "",
  email: "",
  address: "",
  phone: "",
  name: "",
};

export const userSlice = createSlice({
  name: "loggedUser",
  initialState,
  reducers: {
    setUser: (_, action) => {
      return action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions;

export default userSlice.reducer;
