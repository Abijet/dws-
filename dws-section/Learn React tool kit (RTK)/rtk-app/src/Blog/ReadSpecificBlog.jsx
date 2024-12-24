import React, { useEffect } from 'react'
import { useReadSpecificBlogQuery } from '../BlogServices/blogServices'
import { useParams } from 'react-router-dom'

const ReadSpecificBlog = () => {
    let param = useParams()
    
    let {isError: isErrorReadSpecificBlog, isLoading: isLoadingReadSpecificBlog, isSuccess: isSuccessReadSpecificBlog, data: dataReadSpecificBlog, error: errorReadSpecificBlog} = useReadSpecificBlogQuery(param.id)

    
    let blog = dataReadSpecificBlog?.data

    useEffect(()=>{
      if (isErrorReadSpecificBlog) {
        console.log(errorReadSpecificBlog?.error)
      }
    },[isErrorReadSpecificBlog, errorReadSpecificBlog])
  return (
    <div>{isLoadingReadSpecificBlog?<div>...Loading</div>:<div>
    <p>Title: {blog?.title}</p>
    <p>Description: {blog?.description}</p>
</div>}</div>
    
  )
}

export default ReadSpecificBlog