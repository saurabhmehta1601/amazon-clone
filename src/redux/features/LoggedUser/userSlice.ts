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
  name: "loggedUser",
  initialState,
  reducers: {
    setUser: (state, action) => {
      console.log("action is ", action);
      if (typeof action.payload === "object") return { ...action.payload };
      if (action.payload === null) return null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions;

export default userSlice.reducer;
