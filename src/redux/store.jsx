import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import userReducer from "./slices/userSlice";
import starshipReducer from "./slices/starshipDataSlice";
import pilotReducer from "./slices/pilotsSlice";
import filmReducer from "./slices/filmsSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    starshipData: starshipReducer,
    pilots: pilotReducer,
    films: filmReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
