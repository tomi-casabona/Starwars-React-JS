import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import userReducer from "./slices/userSlice";
import starshipReducer from "./slices/starshipDataSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    starshipData: starshipReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});