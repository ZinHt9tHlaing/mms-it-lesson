import { ApiService } from "../ApiServices";

const authEndpoints = ApiService.injectEndpoints({
  endpoints: (builder) => ({
    signIn: builder.mutation({
      query: (arg) => ({
        url: "/login",
        method: "post",
        body: arg,
      }),
    }),
    signUp: builder.mutation({
      query: (arg) => ({
        url: "/register",
        method: "post",
        body: arg,
      }),
    }),
  }),
});

export const { useSignInMutation, useSignUpMutation } = authEndpoints;
