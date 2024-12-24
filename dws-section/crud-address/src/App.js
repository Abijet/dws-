import React from 'react'
import CreateAddress from "./Address/CreateAddress";
import ReadAllAddress from "./Address/ReadAllAddress";
import UpdateAddress from "./Address/UpdateAddress";
import { NavLink, Route, Routes } from 'react-router-dom'
import ReadSpecificAddress from './Address/ReadSpecificAddress';
import { useDispatch, useSelector } from 'react-redux';
import { changeAge, changeName } from './Features/counterSlice';
import { changeCity } from './Features/addressSlice';
import { changeProvience } from './Features/addressSlice';
import { changePrice, changeProductName } from './Features/productSlice';
import ShowAllContactsUsingRTK from './ProjectComponent/ShowAllContactsUsingRTK';
import ViewContactIdusingRTK from './ProjectComponent/ViewContactIdusingRTK';
import CreateContactUsingRTK from './ProjectComponent/CreateContactUsingRTK';
import UpdateContactUsingRTK from './ProjectComponent/UpdateContactUsingRTK';

const App = () => {

  let dispatch = useDispatch()
  // let _info = useSelector((store)=>{
  //   return store.info
  //   })
  //   console.log(_info)

  let _address = useSelector((store)=>{
    return store.address
  })
  console.log(_address)

  // let _product = useSelector((stores)=>{
  //   return stores.product
  // })
  // console.log(_product)

  return (
    <div>
      {/* <NavLink to="/address/createaddress" style={{margin:"1rem"}}>Create Address</NavLink>
      <NavLink to="/addreess/readallcontact" style={{margin:"1rem"}}>Read All Address</NavLink> */}

      {/* <NavLink to="/create/contact" style={{margin:"1rem"}}>Create Contact</NavLink>
      <NavLink to="/readall/contacts" style={{margin:"1rem"}}>Read All Contact</NavLink> */}

      {/* <Routes> */}
        {/* <Route path='/address/createaddress' element={<CreateAddress></CreateAddress>}></Route>
        <Route path='/addreess/readallcontact' element={<ShowAllProduct></ShowAllProduct>}></Route>

        <Route path='/address/readspecific/:_id' element={<ReadSpecificAddress></ReadSpecificAddress>}></Route>
        <Route path='/address/update/:_id' element={<UpdateAddress></UpdateAddress>}></Route> */}

        {/* <Route path='/create/contact' element={<CreateContactUsingRTK></CreateContactUsingRTK>}></Route>
        <Route path='/readall/contacts' element={<ShowAllContactsUsingRTK></ShowAllContactsUsingRTK>}></Route>
        <Route path='/read/contact/:id' element={<ViewContactIdusingRTK></ViewContactIdusingRTK>}></Route>
        <Route path='/update/contact/:id' element={<UpdateContactUsingRTK></UpdateContactUsingRTK>}></Route> */}

      {/* </Routes> */}

      {/* <div>{_info.name}</div>
      <div>{_info.age}</div>

      <button onClick={()=>{
        dispatch(changeName("hari"))
      }}>Change name</button>
      <br></br>
      <button onClick={()=>{
        dispatch(changeAge(30))
      }}>Change Age</button>
      <br></br> */}

      <div>{_address.city}</div>
      <div>{_address.provience}</div>

      <button onClick={()=>{
        dispatch(changeCity())
      }}>Change City</button>
      <br></br>
      <button onClick={()=>{
        dispatch(changeProvience(1))
      }}>Change Provience</button>
      <br></br>

      {/* <div>{_product.productName}</div>
      <div>{_product.price}</div>
      <button onClick={()=>{
        dispatch(changeProductName())
      }}>Change productName</button>
      <button onClick={()=>{
        dispatch(changePrice(1000000))
      }}>Change Price</button> */}

      
    </div>
  )
}

export default App