import { createSlice } from "@reduxjs/toolkit";

export interface UserState {
  uid: string;
  email: string;
}

const initialState: UserState | null = {
  uid: "",
  email: "",
};

export const userSlice = createSlice({
  name: "logged user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions;

export default userSlice.reducer;
