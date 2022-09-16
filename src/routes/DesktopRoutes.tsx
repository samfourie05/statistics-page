import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CustomerRelated from '../pages/categories/customerRelated/CustomerRelated'
import HomePage from '../pages/homePage/HomePage'

const DesktopRoutes = () => {
  return (
    <Routes>
        <Route path={"/"} element={<HomePage/>}/>
        <Route path={"/CustomerRelated"} element={<CustomerRelated/>}/>
    </Routes>
  )
}

export default DesktopRoutes