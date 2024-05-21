import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
//import { auth } from "../credenciales";
import { createUserWithEmailAndPassword } from "firebase/auth";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    // todo: funciones para modificar el state
  },
  extraReducers: (builder) => {
    builder
    .addCase(createUser.fulfilled, () =>
      console.log("usuario creado con exito")
    );
  },
});



export const createUser = () =>  createAsyncThunk(
  "user/createUser", 
  async (auth, email, password) => {
    await createUserWithEmailAndPassword(auth, email, password);
  });

export const { acciones } = userSlice.actions;
export default userSlice.reducer;
