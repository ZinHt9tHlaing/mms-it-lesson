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
    getProfile: builder.query({
      query: () => "/user-profile",
    }),
  }),
});

export const { useSignInMutation, useSignUpMutation, useGetProfileQuery } =
  authEndpoints;
