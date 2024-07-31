import React, { useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useZustand } from '../Zustand/Zustand'

const PrivateRoute = () => {
  const checkValidate= JSON.parse(localStorage.getItem("auth-user"))
  const {setIsAuth}=useZustand()
  useEffect(()=>{
   if(checkValidate !==""){
    setIsAuth(true)
   }
  },[])
  
  return (
    <>
     {checkValidate  ? <Outlet/>:<Navigate to="/" />}
    </>
   
  )
}

export default PrivateRoute