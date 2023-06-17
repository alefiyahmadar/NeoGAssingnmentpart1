import React from "react";

import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../context/AuthContext"
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
        <div className="signin">
            <h2 className="sign-head">Sign Up</h2>

            <input style={{marginBottom:"1.5rem"}} onChange={(e)=>setFirstName(e.target.value)} type="text" placeholder="FirstName" />
            <input style={{marginBottom:"1.5rem"}} onChange={(e)=>setLastName(e.target.value)} type="text" placeholder="LastName" />
            <input style={{marginBottom:"1.5rem"}} onChange={(e)=>setemail(e.target.value)} type="text" placeholder="E-Mail" />
            <input style={{marginBottom:"1.5rem"}} onChange={(e)=>setPassword(e.target.value)} type="text" placeholder="Password" />

            
            <button onClick={signupHandler} className="sign-btn"> Sign Up</button>


        </div>
    )
}