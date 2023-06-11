import React from "react";
import { useContext, useState } from "react"
import { AuthContext } from "./AuthContext"
import { useNavigate } from "react-router-dom"


export const UserPage = ()=>{

    const [profile , setProfile] = useState()
    const {isSignIn ,setIsSignIn} =useContext(AuthContext)
    const {isLoggedIn , setLogIn} =useContext(AuthContext)
    const {navItem , setNavItem} = useContext(AuthContext)
    const navigate = useNavigate()

    
    const { getFirstName  , getLastName , getemail ,getPassword } = useContext(AuthContext)

    const getProfile =()=>{


        setProfile(<div>
            <h2>Welcome {getFirstName} {getLastName}</h2>
            <h3>Email {getemail}</h3>
        </div>)
    }

    const logOutHandler=()=>{
        
        setLogIn(false)
        


    }





    return(
        <div>

            <h2>Account</h2>

            <button onClick={getProfile}>Profile Info</button>

            <p>{profile}</p>

            <button onClick={logOutHandler}>logOut</button>

           


        </div>
    )
}