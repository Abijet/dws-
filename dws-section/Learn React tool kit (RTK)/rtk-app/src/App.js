import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeCity, changeProvience } from './features/address'
import { changeAge, changeName } from './features/details';
import { NavLink, Outlet, Route, Routes } from 'react-router-dom';
import ReadBlog from './Blog/ReadBlog';
import ReadSpecificBlog from './Blog/ReadSpecificBlog';
import CreateBlogUsingRtk from './Blog/CreateBlogUsingRtk';
import UpdateBlogUsingRtk from './Blog/UpdateBlogUsingRtk';

const App = () => {
let dispatch = useDispatch()

// let _address = useSelector((store)=>{
//   return store.addresses
// })
// console.log(_address)

let _details = useSelector((store)=>{
  return store.details
})
console.log(_details)

  return (
    <div>

      <NavLink to="/create">CreateBlog</NavLink>
      <NavLink to="/read" style={{margin: '1rem'}}>ReadBlog</NavLink>
    

      <Routes>
        
          <Route path='/read' element={<ReadBlog></ReadBlog>}></Route>
          <Route path='/read/:id' element={<ReadSpecificBlog></ReadSpecificBlog>}></Route>

          <Route path='/create' element={<CreateBlogUsingRtk></CreateBlogUsingRtk>}></Route>
          <Route path='/update/:id' element={<UpdateBlogUsingRtk></UpdateBlogUsingRtk>}></Route>
      
      </Routes>
     {/* <>
     <p>{_address.city}</p>
      <p>{_address.provience}</p>

      <button onClick={()=>{
        dispatch(changeCity("Damak"))
      }}>Change City</button>
      <button onClick={()=>{
        dispatch(changeProvience())
      }}>Change provience</button>
      </> */}

      {/* <>
      <p>{_details.name}</p>
      <p>{_details.age}</p>

      <button onClick={()=>{
        dispatch(changeName())
      }}>Change Name</button>
      <button onClick={()=>{
        dispatch(changeAge(18))
      }}>Change Age</button>
      </> */}
    </div>
  )
}

export default App