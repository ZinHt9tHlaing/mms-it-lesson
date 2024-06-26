import { configureStore } from "@reduxjs/toolkit";
import { ApiService } from "./services/apiService";

const store = configureStore({
  reducer: {
    [ApiService.reducerPath]: ApiService.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ApiService.middleware),
});

export default store;