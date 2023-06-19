
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


const [str , setStr] =useState("")
const [alreadyInCart , setAlreadyCart] = useState(false)
const [adressArr , setArr] = useState([{id:0 , name:"Mary Jane"  ,house:"301 , Wolf Street" , city:"Brisbane" , state:"West Australia" , country:"Australia" ,pincode:"1234" ,number:"61234589" , selected:true}])



return(
    <AuthContext.Provider value={{isLoggedIn , setLogIn , logInDisable , setLoginDisable , getFirstName , setFirstName , getLastName , setLastName , getemail , setemail ,getPassword , setPassword ,isSignIn , setIsSignIn  , str , setStr , alreadyInCart , setAlreadyCart  ,adressArr ,setArr  }}>
        {children}
    </AuthContext.Provider>
)


}