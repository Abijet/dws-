import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  //  reducerPath must be unique

  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/v1",
  }),
  // Generally
  // we provides tags to query (gets)
  // and we invalidate tags in mutation(other)
  // 1. creating tag
  tagTypes: ["readContact", "readContactById"],

  // query and mutation
  //  If method is get then write query
  // If method is delete, post,patch then write mutation

  endpoints: (builder) => ({
    readContact: builder.query({
      query: () => {
        return {
          url: "/contacts",
          method: "GET",
        };
      },
      // 2. provided tags
      providesTags: ["readContact"],
    }),

    readContactById: builder.query({
      query: (id) => {
        return {
          url: `/contacts/${id}`,
          method: "GET",
        };
      },
      providesTags: ["readContactById"],
    }),

    deleteContact: builder.mutation({
      query: (id) => {
        return {
          url: `/contacts/${id}`,
          method: "DELETE",
        };
      },
      // 3. Invalidates tags
      invalidatesTags: ["readContact"],
    }),

    createContact: builder.mutation({
      query: (body) => {
        return {
          url: "/contacts/",
          method: "POST",
          body: body,
        };
      },
      invalidatesTags: ["readContact"],
    }),
    updateContact: builder.mutation({
      query: (info) => {
        return {
          url: `/contacts/${info.id}`,
          method: `PATCH`,
          body: info.body,
        };
      },
      invalidatesTags: ["readContact", "readContactById"],
    }),
  }),
});

export const {
  useReadContactQuery,
  useReadContactByIdQuery,
  useDeleteContactMutation,
  useCreateContactMutation,
  useUpdateContactMutation,
} = productApi;
