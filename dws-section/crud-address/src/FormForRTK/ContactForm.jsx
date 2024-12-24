import axios from "axios";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import ContactInputForm from "./ContactInputForm";

const CreateForm = ({
  buttonName,
  onSubmit = () => {},
  contact = {},
  isLoading = false,
}) => {
  console.log("***********", contact);
  
  let initialValues = {
    fullName: contact.fullName || "",
    address: contact.address || "",
    phoneNumber: contact.phoneNumber || "",
    email: contact.email || "",
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        enableReinitialize={true}
      >
        {(formik) => {
          return (
            <Form>
              <ContactInputForm
                type="text"
                label="FullName"
                name="fullName"
              ></ContactInputForm>
              <ContactInputForm
                type="text"
                label="Address"
                name="address"
              ></ContactInputForm>
              <ContactInputForm
                type="number"
                label="PhoneNumber"
                name="phoneNumber"
              ></ContactInputForm>
              <ContactInputForm
                type="email"
                label="Email"
                name="email"
              ></ContactInputForm>

              <button type="submit">
                {isLoading ? (
                  <div>{buttonName}...</div>
                ) : (
                  <div>{buttonName}</div>
                )}
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default CreateForm;
