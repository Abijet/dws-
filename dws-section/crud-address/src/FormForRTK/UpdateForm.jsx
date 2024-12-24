import axios from "axios";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import ContactInputForm from "./ContactInputForm";
import { useParams } from "react-router-dom";
import CreateForm from "./ContactForm";

const UpdateForm = ({ buttonName, onSubmit }) => {

  let params = useParams()
  const [contact, setContact] = useState({})
  // let id = params.id    

  return (
    <div>
      <CreateForm buttonName="" onSubmit={onSubmit} contact={contact}></CreateForm>
            
    </div>
  );
};

export default UpdateForm;
