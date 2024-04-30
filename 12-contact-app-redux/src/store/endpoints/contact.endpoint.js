import { ApiService } from "./services/Api.service";

const contactEndpoint = ApiService.injectEndpoints({
  endpoints: (builder) => ({
    getContact: builder.query({
      query: () => ({
        url: `/contact`,
        method: "get",
      }),
    }),
    createContact: builder.mutation({
      query: (formData) => ({
        url: `/contact`,
        method: "post",
        body: formData,
      }),
    }),
    editContact: builder.mutation({
      query: (id, formData) => ({
        url: `/contact/${id}`,
        method: "put",
        body: formData,
      }),
    }),
  }),
});

export const {
  useGetContactQuery,
  useCreateContactMutation,
  useEditContactMutation,
} = contactEndpoint;
