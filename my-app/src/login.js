import React from "react";
import { useContext } from "react"
import { AuthContext } from "./AuthContext"
import { useNavigate , useLocation, NavLink } from "react-router-dom"


export const LoginPage = ()=>{

    const {isLoggedIn , setLogIn} =useContext(AuthContext)
  const {logInDisable , setLoginDisable} =useContext(AuthContext)
  const {str , setStr} = useContext(AuthContext)
  

  
  const { getFirstName , setFirstName , getLastName , setLastName , getemail , setemail } = useContext(AuthContext)


    
  const location =useLocation()
  const navigate = useNavigate()
  const logInGuestHandler =()=>{

    


      


      setLogIn(!isLoggedIn)
      setStr("")

      navigate(location.state.from.pathname)
      setLoginDisable(!logInDisable)
      setemail("johndoe@gmail.com")
      setFirstName("John")
      setLastName("Doe")

    

    
    
   
   

    
  }
  



    return(
        <div className="login">
            <h2>Sign In</h2>

        <label style={{display:"block"}} for="userEmail" >E-mail</label>
            <input type="email" id="userEmail"/>

                    <label style={{display:"block"}} for="userPassword">Password</label>
    
                <input type="password" id="userPassword"/>

                <button >Login</button>


                <button  onClick={logInGuestHandler} >{isLoggedIn ? "LogOut" : "Login As A Guest "}</button>

                <p>Dont have an acoount? <NavLink to="/signup">Sign Up</NavLink></p>

                
                
        </div>
    )
}