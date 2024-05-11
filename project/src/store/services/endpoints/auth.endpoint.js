import { ApiService } from "../ApiServices";

const authEndpoints = ApiService.injectEndpoints({
  endpoints: (builder) => ({
    signIn: builder.mutation({
      query: (arg) => ({
        url: "/login",
        method: "post",
        body: arg,
      }),
      invalidatesTags: ["auth"],
    }),
    signUp: builder.mutation({
      query: (arg) => ({
        url: "/register",
        method: "post",
        body: arg,
      }),
      invalidatesTags: ["auth"],
    }),
    getProfile: builder.query({
      query: () => "/user-profile",
      providesTags: ["auth"],
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/user-logout",
        method: "POST",
      }),
      invalidatesTags: ["auth"],
    }),
  }),
});

export const {
  useSignInMutation,
  useSignUpMutation,
  useGetProfileQuery,
  useLogoutMutation,
} = authEndpoints;
