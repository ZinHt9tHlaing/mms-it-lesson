import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_ENDPOINT } from "../../lib/constant";

export const apiService = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_ENDPOINT,
    prepareHeaders: (headers) => {
      if (localStorage.getItem("auth")) {
        headers.set(
          "authorization",
          localStorage.setItem("auth") &&
            `Bearer ${JSON.parse(localStorage.getItem("auth"))}`
        );
      } else {
        headers.delete("authorization");
      }
      return headers;
    },
  }),

  endpoints: (builder) => ({}),
});
