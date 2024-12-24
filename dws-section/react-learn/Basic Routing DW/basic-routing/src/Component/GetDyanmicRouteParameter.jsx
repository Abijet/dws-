import React from 'react'
import { useParams } from 'react-router-dom'

// useParams() to get dynamic route parameter
// useSearchParams() to get query parameter
// useNavigate() to change path onclick event
const GetDyanmicRouteParameter = () => {
    const params = useParams()
  return (
    <div>GetDyanmicRouteParameter <br></br>
        {params.id1}<br></br>
        {params.id2}
    </div>
  )
}

export default GetDyanmicRouteParameter