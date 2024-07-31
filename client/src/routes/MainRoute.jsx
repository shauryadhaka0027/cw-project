import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../page/HomePage/HomePage'
import Register from '../page/Register/Register'
import { HomePage2 } from '../page/HomePage2/HomePage2'
import { AddProduct } from '../page/Add Product/AddProduct'
import { ProductPage } from '../page/ProductPage/ProductPage'
import { AddToCart } from '../page/Add To Cart/AddToCart'
import PrivateRoute from './PrivateRoute'



export const MainRoute = () => {
  return (
    <>
    <Routes>
   
    <Route path="/" element={<HomePage/>}/>
    <Route  path='/signUp'  element={<Register/>} />

    <Route element={<PrivateRoute/>}>
    <Route path='/product/:id' element={<ProductPage/>}  />
    <Route  path='/home'  element={<HomePage2/>} />
    <Route path="/addToCart" element={<AddToCart/>}   />
    </Route>
    
   


    </Routes>
    
    
    </>
  )
}
