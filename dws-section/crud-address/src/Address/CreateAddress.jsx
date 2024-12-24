import axios from 'axios'
import { Form, Formik } from 'formik'
import FormikInput from "../Components/FormikInput";
import React, { useState } from 'react'

const CreateAddress = () => { 
    let initialValues = {
        label: '',
        country:'',
        province:null,
        municipality:'',
        wardNo:null,
        district:'',
        exactLocation:'',
    }
    let onSubmit = async(value, other)=>{
       try {
        let result = await axios({
            url  : `http://localhost:8000/api/v1/address`,
            method : `POST`,
            data: value,
        })
       } catch (error) {
        console.log(error.message)
       }
    }

  return (
    <div>
        <Formik initialValues={initialValues}
        onSubmit={onSubmit}>
            {(formik)=>{
                return <Form>
                    <FormikInput type="text" label='Label' name="label"></FormikInput>
                    <FormikInput type="text" label='Country' name="country" ></FormikInput>
                    <FormikInput type="text" label='Province' name="province"></FormikInput>
                    <FormikInput type="text" label='Municipality' name="municipality" ></FormikInput>
                    <FormikInput type="text" label='WardNo' name="wardNo" ></FormikInput>
                    <FormikInput type="text" label='District' name="district"></FormikInput>
                    <FormikInput type="text" label='ExactLocation' name="exactLocation" ></FormikInput>

                    <button type='submit'>Submit</button>
                </Form>
}}
        </Formik>
       
    </div>
  )
}



export default CreateAddress