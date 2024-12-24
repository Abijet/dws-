import React, { useEffect } from 'react'
import { useCreateBlogMutation } from '../BlogServices/blogServices'
import BlogCreateForm from '../Form/BlogCreateForm'

const CreateBlogUsingRtk = () => {
    let [createBlog, {isLoading: isLoadingCreateData,
        isSuccess: isSuccessCreateData,
        isError: isErrorCreateData,
        data: dataCreateData,
        error: errorCreateData,}] = useCreateBlogMutation()

        useEffect(()=>{
          if (isErrorCreateData) {
            console.log(errorCreateData?.error)
          }
        },[isErrorCreateData, errorCreateData])

        useEffect(()=>{
          if (isSuccessCreateData) {
            console.log("Blog is Successfully Created")
          }
        },[isSuccessCreateData])

        let onSubmit = (values, other)=>{
            createBlog(values)
        }

  return (
    <div>
        <BlogCreateForm buttonName="Create Blog" onSubmit={onSubmit}></BlogCreateForm>
    </div>
  )
}

export default CreateBlogUsingRtk