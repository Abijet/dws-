import axios from 'axios'
import { Form, Formik } from 'formik'
import FormikInput from "../Components/FormikInput";
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const UpdateAddress = () => { 
    const [address, setAddress] = useState({})
    let params = useParams()
    let navigate = useNavigate()

    let initialValues = {
        label: address.label,
        country:address.country,
        province:address.province,
        municipality:address.municipality,
        wardNo:address.wardNo,
        district:address.district,
        exactLocation:address.exactLocation,
    }
    let getSpecificData = async()=>{
        let result = await axios({
            url  : `http://localhost:8000/api/v1/address/${params._id}`,
            method : `GET`,
        })
        console.log(result.data.data)
        setAddress(result.data.data)
    }

    useEffect(() => {
     getSpecificData()
    },[])
    

    let onSubmit = async(value, other)=>{
       try {
        let result = await axios({
            url  : `http://localhost:8000/api/v1/address/${params._id}`,
            method : `PATCH`,
            data: value,
        })
       } catch (error) {
        console.log(error.message)
       }
       navigate('/addreess/readalladdreess' )
    }

  return (
    <div>
        <Formik initialValues={initialValues}
        onSubmit={onSubmit}
        enableReinitialize={true}>
            {(formik)=>{
                return <Form>
                    <FormikInput type="text" label='Label' name="label"></FormikInput>
                    <FormikInput type="text" label='Country' name="country" ></FormikInput>
                    <FormikInput type="text" label='Province' name="province"></FormikInput>
                    <FormikInput type="text" label='Municipality' name="municipality" ></FormikInput>
                    <FormikInput type="text" label='WardNo' name="wardNo" ></FormikInput>
                    <FormikInput type="text" label='District' name="district"></FormikInput>
                    <FormikInput type="text" label='ExactLocation' name="exactLocation" ></FormikInput>

                    <button type='submit'>Update</button>
                </Form>
}}
        </Formik>
       
    </div>
  )
}



export default UpdateAddress