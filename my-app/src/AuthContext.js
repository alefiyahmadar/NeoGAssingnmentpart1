
import React from "react";
import { createContext } from "react";

import { useState } from "react";

export const AuthContext = createContext()


export const AuthContextProvider = ({children})=>{
    const [isLoggedIn , setLogIn ] =useState(false)
    const[logInDisable , setLoginDisable] =useState(false)
const [getFirstName , setFirstName] = useState("")
const [getLastName , setLastName] = useState("")
const [getemail , setemail] = useState("")
const [getPassword , setPassword] = useState("")
const [isSignIn ,setIsSignIn] = useState(false)
const [navItem , setNavItem] =useState(false)






return(
    <AuthContext.Provider value={{isLoggedIn , setLogIn , logInDisable , setLoginDisable , getFirstName , setFirstName , getLastName , setLastName , getemail , setemail ,getPassword , setPassword ,isSignIn , setIsSignIn , navItem , setNavItem , }}>
        {children}
    </AuthContext.Provider>
)


}