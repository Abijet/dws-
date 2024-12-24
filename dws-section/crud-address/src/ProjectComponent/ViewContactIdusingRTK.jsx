import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useReadContactByIdQuery } from "../Service/productService";

const ViewContactIdusingRTK = () => {
  let params = useParams();
  let id = params.id;
  let {
    isLoading: isLoadingReadDetail,
    isSuccess: isSuccessReadDetail,
    isError: isErrorReadDetail,
    data: dataReadDetail,
    error: errorReadDetail,
  } = useReadContactByIdQuery(id);

  console.log(dataReadDetail?.data);

  let contacts = dataReadDetail?.data;

  useEffect(()=>{
    if (isErrorReadDetail) {
        console.log(errorReadDetail.error)
    }
  },[isErrorReadDetail, errorReadDetail])

  return <div>
    {isLoadingReadDetail? <h1>...Loading</h1>:
    <div>
    <p>FullName: {contacts?.fullName}</p>
    <p>Address: {contacts?.address}</p>
    <p>Email: {contacts?.email}</p>
    <p>Phone Number: {contacts?.phoneNumber}</p>
    </div>
    }
  </div>;
};

export default ViewContactIdusingRTK;
