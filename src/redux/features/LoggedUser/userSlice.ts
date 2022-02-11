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
      const { email, uid } = action.payload;
      state.email = email;
      state.uid = uid;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions;

export default userSlice.reducer;
