import { ApiService } from "../apiService";

const todoEndpoint = ApiService.injectEndpoints({
  endpoints: (builder) => ({
    getTodo: builder.query({
      query: () => "/todos",
      providesTags: "todo",
    }),
    postTodo: builder.mutation({
      query: (formData) => ({
        url: "/todos",
        body: formData,
        method: "post",
      }),
      invalidatesTags: "todo",
    }),
  }),
});

export const { useGetTodoQuery, usePostTodoMutation } = todoEndpoint;
