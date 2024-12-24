import { Field } from "formik";
import React from "react";

const FormikInput = ({ name, label, type, onChange, required, ...props }) => {
  return (
    <div>
      <Field name={name}>
        {({ field, form, meta }) => {
        //   console.log("****", field);    
          return (
            <div>
              <label htmlFor={name}>
                {label}{" "}
                {required ? <span style={{ color: "red" }}>*</span> : null}
              </label>
              <input
                {...field}
                {...props}
                type={type}
                id={name}
                value={meta.value}
                onChange={onChange ? onChange : field.onChange}
                // onChange={(e) => {
                //   formik.setFieldValue("firstName", e.target.value);
                // }}
              />
              <br />
              {meta.touched && meta.error ? (
                <div style={{ color: "red" }}>{meta.error}</div>
              ) : null}
            </div>
          );
        }}
      </Field>
    </div>
  );
};

export default FormikInput;
