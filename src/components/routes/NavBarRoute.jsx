import React from 'react'
import About from '../About'
import Home from '../Home'
import Contact from '../Contact'
import Dash from '../Dash'
import Appbar from '../Appbar'
import { Route, Routes } from 'react-router-dom'

const NavBarRoute = () => {
  return (
    <div>
        <Appbar/>
      <Routes>
      <Route path='/DashBoard'  element={<Dash/>} />
      <Route path='/home'  element={<Home/>} />
      <Route path='/about'  element={<About/>} />
      <Route path='/contact'  element={<Contact/>} />
      </Routes>
    </div>
  )
}

export default NavBarRoute
