import React from 'react'
import About from '../About'
import Home from '../Home'
import Contact from '../Contact'
import Dash from '../Dash'
import Appbar from '../Appbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Login from '../Login'
import Dashboard from '../Dashboard'

const routes = [

  { path: '/', element: <Login /> },
  { path: '/dashboard', element: <Dash /> },
  { path: '/home', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/contact', element: <Contact /> },
  { path: '*', element: <>404 Error Page</> },


]


const NavBarRoute = () => {
  const { pathname } = useLocation();
  const hide = ['/'].includes(pathname)
  return (
    <div>
      {!hide && <Appbar />}
      <Routes>
        {routes.map((item, index) => (
          <Route
            key={index}
            path={item.path}
            element={item.element}
          />
        ))}
      </Routes>
    </div>
  )
}

export default NavBarRoute
