import React, { useEffect, useState } from "react";
import { useDeleteContactMutation, useReadContactQuery } from "../Service/productService";
import { useNavigate } from "react-router-dom";

const ShowAllContactsUsingRTK = () => {
  // Query gives object { }
  // Mutation gives in array [ ]

  const [deleteId, setDeleteId] = useState("")

  let {isLoading:isLoadingReadContact, isError:isErrorReadContact, isSuccess:isSuccessReadContact, data:dataReadContact, error:errorReadContact} = useReadContactQuery();

  let [deleteContact, {isLoading: isLoadingDeleteContact, isError: isErrorDeleteContact, isSuccess: isSuccessDeleteContact, data: dataDeleteContact, error: errorDeleteContact}] = useDeleteContactMutation();

  console.log(dataReadContact?.data?.results);
  
  useEffect(()=>{
    if (isErrorReadContact) {
      console.log(errorReadContact)
      console.log("*******************",errorReadContact?.error)
    }
  }, [isErrorReadContact, errorReadContact])

  useEffect(()=>{
    if (isErrorDeleteContact) {
      console.log(errorDeleteContact)
      console.log("*******************",errorDeleteContact?.error)
    }
  }, [isErrorDeleteContact, errorDeleteContact])

  useEffect(()=>{
    if (isSuccessDeleteContact) {
      console.log("Product is Deleted Successfully")
    }
  }, [isSuccessDeleteContact])
  
  let contacts = dataReadContact?.data?.results 
  let navigate = useNavigate()

//   let contacts = data?.data?.results || [] 
  return (
    <div>
      {
        isLoadingReadContact ? <div><h1>... Loading</h1></div>:
     
    <div>
      {contacts?.map((value, i) => {
        return (
          <div style={{ margin: "1rem", border: "1px solid red" }} key={i}>
            <p>{value.fullName}</p>
            <p>{value.address}</p>

           
            <button onClick={()=>{
              deleteContact(value._id)
              setDeleteId(value._id)
            }}>{isLoadingDeleteContact   && value._id === deleteId ? "Deleting...":"Delete"}</button>

            <button onClick={()=>{
              navigate(`/read/contact/${value._id}`)
            }}>View</button>

            <button onClick={()=>{
              navigate(`/update/contact/${value._id}`)
            }}>Update</button>
          
          </div>
        );
      })}
    </div>
     }
    </div>
  );
};

export default ShowAllContactsUsingRTK;
