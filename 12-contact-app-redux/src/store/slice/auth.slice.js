import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth: false,
  data: null,
  loading: false,
  error: null,
};

// name = ဒီsliceကြီး တစ်ခုလုံးရဲ့ name
// initialState = store
// reducers = action(type, payload)
// immer library = no need to return

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    processing: (state) => {
      state.loading = true;
    },
    error: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    login: (state, action) => {
      state.loading = false;
      state.error = null;
      state.data = action.payload;
      state.auth = true;
    },
    logout: (state) => {
      state.loading = false;
      state.error = null;
      state.auth = false;
    },
  },
});

export const { processing, error, login, logout } = authSlice.actions;
export default authSlice.reducer;
