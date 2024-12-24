import React, { useEffect } from 'react'
import { useCreateContactMutation } from '../Service/productService'
import CreateForm from '../FormForRTK/ContactForm'

const CreateProductUsingRTK = () => {
   let [createContact, {isLoading: isLoadingCreateData,
    isSuccess: isSuccessCreateData,
    isError: isErrorCreateData,
    data: dataCreateData,
    error: errorCreateData,}] = useCreateContactMutation()
    
    useEffect(()=>{
      if (isSuccessCreateData) {
        console.log("Successfully created")
      }
    },[isSuccessCreateData])

    useEffect(()=>{
      if (isErrorCreateData) {
        console.log(errorCreateData?.error)
      }
    },[isErrorCreateData])
    
    let onSubmit = (values, other)=>{

      let body = values
      createContact(body)
    }
  return (
    <div>
      <CreateForm
       buttonName= "Create Contact"
      onSubmit={onSubmit}
      isLoading = {isLoadingCreateData}
      ></CreateForm>
    </div>
  )
}

export default CreateProductUsingRTK