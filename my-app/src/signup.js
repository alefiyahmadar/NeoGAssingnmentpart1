import React from "react";

import { useContext, useEffect, useState } from "react"
import { AuthContext } from "./AuthContext"
import { NavLink, Navigate, useLocation, useNavigate } from "react-router-dom"


export const SignUp =()=>{

   
   const {isSignIn ,setIsSignIn} =useContext(AuthContext)


    const { getFirstName , setFirstName , getLastName , setLastName , getemail , setemail ,getPassword , setPassword} = useContext(AuthContext)




const navigate = useNavigate()




const signupHandler =  () => {
   

      navigate("/productList")
      setIsSignIn(!isSignIn)


  };

  


    return(
        <div>
            <h2>Sign Up</h2>

            <input onChange={(e)=>setFirstName(e.target.value)} type="text" placeholder="FirstName" />
            <input onChange={(e)=>setLastName(e.target.value)} type="text" placeholder="LastName" />
            <input onChange={(e)=>setemail(e.target.value)} type="text" placeholder="E-Mail" />
            <input onChange={(e)=>setPassword(e.target.value)} type="text" placeholder="Password" />

            
            <button onClick={signupHandler}> Sign Up</button>


        </div>
    )
}