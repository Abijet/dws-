import React from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

const About = () => {
   const [searchParams]= useSearchParams()

   const navigate = useNavigate()
  return (
    <div>About <br></br>
    {searchParams.get("name")}<br></br>
    {searchParams.get("age")}<br></br>
    {searchParams.get("address")}<br></br>

    <button onClick={()=>{
        navigate("/contact",{replace:true})
    }}>Go to contact page</button>
    </div>
  )
}

export default About