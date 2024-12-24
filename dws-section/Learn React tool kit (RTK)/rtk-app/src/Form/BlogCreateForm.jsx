import { Form, Formik } from "formik";
import React from "react";
import BlogInputForm from "./BlogInputForm";
import * as yup from "yup"

const BlogCreateForm = ({ buttonName, onSubmit = () => {}, blog={}, isLoading= false }) => {
  let initialValues = {
    title: blog.title || "",
    description: blog.description || "",
  };
   let validationSchema = yup.object({
    title: yup.string().required("title is required"),
    description: yup.string().required("description is required")
   }
)
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={onSubmit} enableReinitialize={true} validationSchema={validationSchema}>
        {(formik) => {
          return (
            <Form>
              <BlogInputForm
                type="text"
                label="Title"
                name="title"
                required= {true}
              ></BlogInputForm>
              <BlogInputForm
                type="text"
                label="Description"
                name="description"
                required= {true}
              ></BlogInputForm>

              <button type="submit">{isLoading?<div>{buttonName}...</div>: <div>{buttonName}</div>
              }</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default BlogCreateForm;
