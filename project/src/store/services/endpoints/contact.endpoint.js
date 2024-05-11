import { ApiService } from "../ApiServices";

const contactEndpoints = ApiService.injectEndpoints({
  endpoints: (builder) => ({
    createContact: builder.mutation({
      query: (arg) => ({
        url: "/contact",
        method: "post",
        body: arg,
      }),
      invalidatesTags: ["contact"],
    }),
    getContact: builder.query({
      query: () => "/contact",
      providesTags: ["contact"],
    }),
    deleteContact: builder.mutation({
      query: (arg) => ({
        method: "delete",
        url: `/contact/${arg}`,
      }),
      invalidatesTags: ["contact"],
    }),
    updateContact: builder.mutation({
      query: (arg) => ({
        url: `/contact/${arg.id}`,
        method: "PUT",
        body: arg,
      }),
      invalidatesTags: ["contact"],
    }),
  }),
});

export const {
  useCreateContactMutation,
  useGetContactQuery,
  useDeleteContactMutation,
  useUpdateContactMutation,
} = contactEndpoints;
