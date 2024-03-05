import { apiService } from "../apiService";

const authEndpoints = apiService.injectEndpoints({
  endpoints: (builder) => ({
    signIn: builder.mutation({
      query: (arg) => ({
        url: "/login",
        method: "POST",
        body: arg,
      }),
    }),
    signUp: builder.mutation({
      query: (arg) => ({
        url: "register",
        method: "POST",
        body: arg,
      }),
    }),
  }),
});

export const { useSignInMutation, useSignUpMutation } = authEndpoints;
