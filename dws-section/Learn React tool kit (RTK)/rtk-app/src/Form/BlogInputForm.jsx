import { Field } from 'formik'
import React from 'react'

const BlogInputForm = ({name, label, type, onChange, required }) => {
  return (
    <div>
        <Field name={name}>
            {({field, form, meta})=>{
                return(<div>
                    <label htmlFor={name}>{label} {required ? <span style={{ color: "red" }}>*</span> : null}</label>
                    <input {...field} type={type} name={name} id={name} value={meta.value} onChange={onChange ? onChange : field.onChange}/>
                      <br />
                      {meta.touched && meta.error ? (
                <div style={{ color: "red" }}>{meta.error}</div>
              ) : null}
                </div>)
            }}
        </Field>
    </div>
  )
}

export default BlogInputForm