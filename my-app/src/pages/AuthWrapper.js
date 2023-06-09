import React from "react";
import { useContext } from "react"

import { Navigate, useLocation } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"

export const AuthWrapper = ({children})=>{

    const location = useLocation()

    console.log(location)
    const {isLoggedIn} =useContext(AuthContext)
    

return(isLoggedIn ? children : <Navigate to="/login" state={{from :location}}/>)





}