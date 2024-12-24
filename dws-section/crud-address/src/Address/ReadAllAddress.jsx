import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ReadAllAddress = () => {

    const [getAddress, setGetAddress] = useState([])
    let params = useParams()
    let navigate = useNavigate()
    let getAllAddress = async()=>{
        let result = await axios({
            url  : `http://localhost:8000/api/v1/address`,
            method : `GET`
        })
        let realResult= result.data.data.results
        console.log(realResult)
        setGetAddress(realResult)
    }
    useEffect(()=>{
        getAllAddress()
    },[])
  return (
    <div>
        {getAddress.map((value,i)=>{
            return(<div key={i} style={{border:"2px solid blue", margin:"1rem"}}>
                <p>{value.country}</p>
                <p>{value.district}</p>
                <p>{value.province}</p>

                <button onClick={()=>{
                    navigate(`/address/readspecific/${value._id}`)
                }}>View</button>

                <button onClick={async()=>{
                  let remove= await axios({
                    url  : `http://localhost:8000/api/v1/address/${value._id}`,
                    method : `DELETE`,
                  })
                  getAllAddress()
                }}>Delete</button>

                <button onClick={()=>{
                    navigate(`/address/update/${value._id}`)
                }}>Update</button>
            </div>)
        })}
    </div>
  )
}

export default ReadAllAddress