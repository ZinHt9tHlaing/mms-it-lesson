import { ApiService } from "../ApiServices";

const contactEndpoints = ApiService.injectEndpoints({
  endpoints: (builder) => ({
    createContact: builder.mutation({
      query: (arg) => ({
        url: "/contact",
        method: "post",
        body: arg,
      }),
    }),
    getContact: builder.query({
      query: () => "/contact",
    }),
  }),
});

export const { useCreateContactMutation, useGetContactQuery } =
  contactEndpoints;
