import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const blogApi = createApi({

    reducerPath: "blogApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `http://localhost:8000/api/v1`

    }),
    tagTypes:["readBlog", "readSpecificBlog"],

    endpoints: (builder)=>({
        readBlog: builder.query({
            query:()=>{
                return {
                    url: "/blogs",
                    method: "GET"
                }
            },
            providesTags: ["readBlog"]
        }),
        
        readSpecificBlog: builder.query({
            query:(id)=>{
                return {
                    url: `/blogs/${id}`,
                    method: "GET"
                }
            }
        }),
        deleteBlog: builder.mutation({
            query:(id)=>{
                return {
                    url: `/blogs/${id}`,
                    method: "DELETE"
                }
            },
            invalidatesTags: ["readBlog"]
        }),
        
        createBlog: builder.mutation({
            query:(body)=>{
                return {
                    url: `/blogs`,
                    method: "POST",
                    body: body,
                }
            },
            invalidatesTags: ["readBlog"]
        }),

        updateBlog: builder.mutation({
            query:(info)=>{
                return {
                    url: `/blogs/${info.id}`,
                    method: "PATCH",
                    body: info.body,
                }
            },
            invalidatesTags: ["readBlog" , "readSpecificBlog"]
        }),



    })


})

export const {useReadBlogQuery, useReadSpecificBlogQuery, useDeleteBlogMutation, useCreateBlogMutation, useUpdateBlogMutation} = blogApi