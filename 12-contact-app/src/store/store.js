import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slice/auth.slice";
import { apiService } from "./services/api.service";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    [apiService.reducerPath]: apiService.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiService.middleware),
});
