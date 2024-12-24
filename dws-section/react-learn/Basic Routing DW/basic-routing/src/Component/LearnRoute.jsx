import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Error from './Error'
import { Home } from './Home'
import GetDyanmicRouteParameter from './GetDyanmicRouteParameter'

const LearnRoute = () => {
  return (
    <div>
        {/* <a href="/about">About</a> <br></br> */}
        {/* / localhost:3000
        /about  localhost:3000/about
        /a/al localhost:3000/a/al */}

      
        <NavLink to="/home" style={{margin:"20px"}}>Home</NavLink>
        <NavLink to="/about" style={{margin:"20px"}}>About</NavLink>
        <NavLink to="/contact" style={{margin:"20px"}}>Contact</NavLink>

        <br></br>
        <Routes>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="*" element={<Error></Error>}></Route>
          <Route path="/a" element={<div>a page</div>}></Route>
          <Route path="/a/a1" element={<div>a1 page</div>}></Route>
          <Route path="/a/a1/a2" element={<div>a2 page</div>}></Route>
          <Route path="/a/a1/a2" element={<div>a2 page</div>}></Route>
          <Route path="/a/:any" element={<div>any page</div>}></Route>
          <Route path="/b/:id1/id/:id2" element={<GetDyanmicRouteParameter></GetDyanmicRouteParameter>}></Route>


          {/* http://localhost:3000/a/ram
          http://localhost:3000/a/shyam
          http://localhost:3000/a/asdfghjk
          = If there is any query after /a/---- (/a/:any page will be execute or you can give any query name after a/:----  {:(is to)is the inportent in this part}) */}


        </Routes>
    </div>
  )
}

export default LearnRoute