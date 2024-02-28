import { ApiService } from "../apiService";

const todoEndpoint = ApiService.injectEndpoints({
  endpoints: (builder) => ({
    getTodo: builder.query({
      query: () => "/todos",
      providesTags: "todo",
    }),
    postTodo: builder.mutation({
      query: (FormData) => ({
        url: "/todos",
        body: FormData,
        method: "post",
      }),
      invalidatesTags: "todo",
    }),
    deleteTodo: builder.mutation({
      query: (id, FormData) => ({
        url: "/todos",
        body: FormData,
        method: "delete",
      }),
    }),
  }),
});

export const { useGetTodoQuery, usePostTodoMutation,useDeleteTodoMutation } = todoEndpoint;
