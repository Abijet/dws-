import React, { useEffect, useState } from 'react'
import { useDeleteBlogMutation, useReadBlogQuery } from '../BlogServices/blogServices'
import { useNavigate } from 'react-router-dom'

const ReadBlog = () => {

    const [deleteId, setDeleteId] = useState("")

    let navigate = useNavigate()

    let {isError: isErrorReadBlog, isLoading: isLoadingReadBlog, isSuccess: isSuccessReadBlog, data: dataReadBlog, error: errorReadBlog} = useReadBlogQuery()
    // console.log(dataReadBlog?.data?.results)

    useEffect(()=>{
        if (isErrorReadBlog) {
            console.log(errorReadBlog?.error)     
           }
            
        },[isErrorReadBlog, errorReadBlog])

    let [deleteBlog,{isError: isErrorDeleteBlog, isLoading: isLoadingDeleteBlog, isSuccess: isSuccessDeleteBlog, data: dataDeleteBlog, error: errorDeleteBlog}] = useDeleteBlogMutation()

    useEffect(()=>{
        if (isErrorDeleteBlog) {
            console.log(errorDeleteBlog?.error)
        }
        },[isErrorDeleteBlog, errorDeleteBlog])
    useEffect(()=>{
        if (isSuccessDeleteBlog) {
            console.log("Deleted Successfully")
        }
        },[isSuccessDeleteBlog])

    let postedBlog =  dataReadBlog?.data?.results

  return (
    <div>{isLoadingReadBlog?<div>...Loading</div>:
    <div>{postedBlog?.map((value, i)=>{
        return (
            <div style={{border: "2px solid brown", margin: "1rem"}} key={i}>
                <p>{value.title}</p>
                <p>{value.description}</p>
                
                <button onClick={()=>{
                    navigate(`/read/${value._id}`)
                }}>View</button>

                <button onClick={()=>{
                    deleteBlog(value._id)
                    setDeleteId(value._id)
                }}>{isLoadingDeleteBlog && value._id === deleteId?"Deleting...": "Delete"}</button>
                <button onClick={()=>{
                    navigate(`/update/${value._id}`)
                }}>Update</button>
            </div>
        )
    })}</div>
    }</div>
   
  )
}

export default ReadBlog