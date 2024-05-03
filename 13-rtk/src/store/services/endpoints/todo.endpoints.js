import { ApiService } from "../apiService";

const todoEndpoint = ApiService.injectEndpoints({
  endpoints: (builder) => ({
    getTodo: builder.query({
      query: () => "/todos",
      providesTags: "todo",
    }),
    postTodo: builder.mutation({
      query: (formData) => ({
        method: "post",
        url: "/todos",
        body: formData,
      }),
      invalidatesTags: "todo",
    }),
  }),
});

export const { useGetTodoQuery, usePostTodoMutation } = todoEndpoint;
