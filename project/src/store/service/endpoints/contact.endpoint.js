import { ApiService } from "../ApiService";

const contactEndpoints = ApiService.injectEndpoints({
  endpoints: (builder) => ({
    create: builder.mutation({
      query: (arg) => ({
        url: "/contact",
        method: "post",
        body: arg,
      }),
    }),
    get: builder.query({
      query: () => "/contact",
    }),
  }),
});

export const { useCreateMutation, useGetQuery } = contactEndpoints;
