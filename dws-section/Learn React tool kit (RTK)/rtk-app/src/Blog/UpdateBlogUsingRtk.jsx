import React, { useEffect } from 'react'
import { useReadSpecificBlogQuery, useUpdateBlogMutation } from '../BlogServices/blogServices';
import BlogCreateForm from '../Form/BlogCreateForm';
import { useParams } from 'react-router-dom';

const UpdateBlogUsingRtk = () => {
    let params = useParams();
  let id = params.id;
    let [
        UpdateBlog,
        {
          isLoading: isLoadingUpdateData,
          isSuccess: isSuccessUpdateData,
          isError: isErrorUpdateData,
          data: dataUpdateData,
          error: errorUpdateData,
        },
      ] = useUpdateBlogMutation();

      useEffect(()=>{
        if (isSuccessUpdateData) {
          console.log("Successfully Updated")
        }
      },[isSuccessUpdateData])
      useEffect(()=>{
        if (isErrorUpdateData) {
          console.log(errorUpdateData?.error)
        }
      },[errorUpdateData, isErrorUpdateData])



      let {isError: isErrorReadSpecificBlog, isLoading: isLoadingReadSpecificBlog, isSuccess: isSuccessReadSpecificBlog, data: dataReadSpecificBlog, error: errorReadSpecificBlog} = useReadSpecificBlogQuery(id)

      let blog = dataReadSpecificBlog?.data || {};

      useEffect(()=>{
        if (isErrorReadSpecificBlog) {
          console.log(errorReadSpecificBlog?.error)
        }
      },[errorReadSpecificBlog, isErrorReadSpecificBlog])

      let onSubmit = (values, other) => {
        UpdateBlog({ id: id, body: values });
      };

  return (
    <div>
        <BlogCreateForm buttonName="Update Contact"
        onSubmit={onSubmit} blog={blog} isLoading = {isLoadingUpdateData}
        ></BlogCreateForm>

    </div>
  )
}

export default UpdateBlogUsingRtk