import { useContext } from "react"
import { AuthContext } from "./AuthContext"
import { useNavigate , useLocation } from "react-router-dom"


export const LoginPage = ()=>{

    const {isLoggedIn , setLogIn} =useContext(AuthContext)
  const {logInDisable , setLoginDisable} =useContext(AuthContext)

    
  const location =useLocation()
  const navigate = useNavigate()
  const logInHandler =()=>{

    setLogIn(!isLoggedIn)

    navigate(location.state.from.pathname)
    setLoginDisable(!logInDisable)
    
   
   

    
  }



    return(
        <div>
            <h2>Please Log In To Continue</h2>

        <label style={{display:"block"}} for="userEmail" >E-mail</label>
            <input type="email" id="userEmail"/>

                    <label style={{display:"block"}} for="userPassword">Password</label>
    
                <input type="password" id="userPassword"/>


                <button  onClick={logInHandler} disabled={logInDisable} >{isLoggedIn ? "LogOut" : "LogIn"}</button>
        </div>
    )
}