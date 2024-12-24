import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ReadSpecificAddress = () => {
    const [details, setDetails] = useState([])
    let params = useParams()

    let getSpecificData = async()=>{
        let result = await axios({
            url  : `http://localhost:8000/api/v1/address/${params._id}`,
            method : `GET`
        })
        console.log(result.data.data)
        setDetails(result.data.data)
    }

    useEffect(()=>{
        getSpecificData()
    },[])
  return (
    <div>
        <h3>Label: {details.label}</h3><br/>
        <h3>Country: {details.country}</h3><br/>
        <h3>Province: {details.province}</h3><br/>
        <h3>Municipality: {details.municipality}</h3><br/>
        <h3>WardNo: {details.wardNo}</h3><br/>
        <h3>District: {details.district}</h3><br/>
        <h3>ExactLocation: {details.exactlocation}</h3><br/>

    </div>
  )
}

export default ReadSpecificAddress