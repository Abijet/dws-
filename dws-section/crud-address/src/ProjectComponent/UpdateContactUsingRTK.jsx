import React, { useEffect, useState } from "react";
import CreateForm from "../FormForRTK/ContactForm";
import {
  useReadContactByIdQuery,
  useUpdateContactMutation,
} from "../Service/productService";
import { useParams } from "react-router-dom";

const UpdateContactUsingRTK = () => {
  let params = useParams();
  let id = params.id;
  useUpdateContactMutation();

  //  for Updating Data

  let [
    UpdateContact,
    {
      isLoading: isLoadingUpdateData,
      isSuccess: isSuccessUpdateData,
      isError: isErrorUpdateData,
      data: dataUpdateData,
      error: errorUpdateData,
    },
  ] = useUpdateContactMutation();

  // Showing data in input field

  let {
    isLoading: isLoadingReadByIdData,
    isSuccess: isSuccessReadByIdData,
    isError: isErrorReadByIdData,
    data: dataReadByIdData,
    error: errorReadByIdData,
  } = useReadContactByIdQuery(id);

  let contact = dataReadByIdData?.data || {};

  //  Error Handel for Update contact

  // console.log("*********", dataReadByIdData?.data);

  useEffect(() => {
    if (isSuccessUpdateData) {
      console.log("Successfully Updated");
    }
  }, [isSuccessUpdateData]);

  useEffect(() => {
    if (isErrorUpdateData) {
      console.log(errorUpdateData?.error);
    }
  }, [isErrorUpdateData, errorUpdateData]);

  //  Error handel for readDataById

  useEffect(() => {
    if (isErrorReadByIdData) {
      console.log(errorReadByIdData?.error);
    }
  }, [isErrorReadByIdData, errorReadByIdData]);

  // Submit Handeling for Update Contact

  let onSubmit = (values, other) => {
    UpdateContact({ id: id, body: values });
  };
  return (
    <div>
      <CreateForm
        buttonName="Update Contact"
        onSubmit={onSubmit}
        contact={contact}
        isLoading={isLoadingUpdateData}
      ></CreateForm>
    </div>
  );
};

export default UpdateContactUsingRTK;
