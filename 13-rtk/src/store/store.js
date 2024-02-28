import { configureStore } from "@reduxjs/toolkit";
import { ApiService } from "./service/apiService";

const store = configureStore({
  reducer: {
    [ApiService.reducerPath]: ApiService.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(ApiService.middleware);
  },
});

export default store;