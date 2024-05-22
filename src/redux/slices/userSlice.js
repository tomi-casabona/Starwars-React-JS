import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLogged: false,
    email: "prueba",
  },
  reducers: {
    setIsLogged: (state, action) => {
      state.isLogged = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const { setEmail, setIsLogged } = userSlice.actions;
export default userSlice.reducer;
