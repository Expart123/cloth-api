import React from 'react'
import './Admin.css'
import Sidebar from '../../components/sidebar/sidebar'
import { Routes, Route } from 'react-router-dom'
import AddProduct from '../../components/AddProduct/AddProduct'
import ListProduct from '../../components/listProduct/listProduct'

const Admin = () => {
  return (
    <div className='admin'>
    <Sidebar />
    <Routes>
      <Route path='/addproduct' element={<AddProduct />}></Route>
      <Route path='/listproduct' element={<ListProduct />}></Route>
   </Routes>
   </div>
  )
}

export default Admin
