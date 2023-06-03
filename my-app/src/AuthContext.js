import { createContext } from "react";

import { useState } from "react";

export const AuthContext = createContext()


export const AuthContextProvider = ({children})=>{
    const [isLoggedIn , setLogIn ] =useState(false)
    const[logInDisable , setLoginDisable] =useState(false)

return(
    <AuthContext.Provider value={{isLoggedIn , setLogIn , logInDisable , setLoginDisable}}>
        {children}
    </AuthContext.Provider>
)


}