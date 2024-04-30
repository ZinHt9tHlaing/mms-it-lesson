// import { applyMiddleware, combineReducers, createStore } from "redux";
// import { authReducer } from "./reducer/auth.reducer";
// import { thunk } from "redux-thunk";

import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slice/auth.slice";
import { ApiService } from "./endpoints/services/Api.service";

// const reducer = combineReducers({
//   auth: authReducer,
// });

// export const store = createStore(reducer, {}, applyMiddleware(thunk));

export const store = configureStore({
  reducer: {
    auth: authSlice,
    [ApiService.reducerPath]: ApiService.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ApiService.middleware),
});
