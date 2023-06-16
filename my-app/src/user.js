import React from "react";
import { useContext, useState } from "react"
import { AuthContext } from "./AuthContext"
import { useNavigate } from "react-router-dom"

import { useRef } from "react";


export const UserPage = ()=>{

    const{adressArr , setArr} =useContext(AuthContext)
    const {isSignIn ,setIsSignIn} =useContext(AuthContext)
    const {isLoggedIn , setLogIn} =useContext(AuthContext)
    const {navItem , setNavItem} = useContext(AuthContext)
    


    const [profile , setProfile] = useState()
    
    
    
    
    const [getName , setName] = useState("")
const [getHouse , setHouse] = useState("")
const [getCity , setCity] = useState("")
const [getState , setState] = useState("")
const [getCountry , setCountry] = useState("")
const [getPinCode , setPincode] = useState("")
const [getNumber , setNumber] = useState("")
const [id , setId] =useState(1) 

const [showAdressBar , setAdressBar] =useState(false)
const [showAdress , setAdress ] =useState(false)
const [getUser , setUser] = useState(true)
const [getAdress , setShowAdress] =useState()
const[save , setSave] =useState(false)




    
    const navigate = useNavigate()

    
    const { getFirstName  , getLastName , getemail ,getPassword } = useContext(AuthContext)

    const getProfile =()=>{

    setUser(true)
        setShowAdress(false)


        
    }
    const getAdressComp =()=>{

        setShowAdress(true)

        setUser(false)
        
        setAdress(true)

    }

    const logOutHandler=()=>{
        
        setLogIn(false)
        navigate("/login")
        




    }

    const AddAdress =()=>{
        

setAdress(true)
setAdressBar(false)
        setId(id +1)
        

        const adress = { id:id , name:getName ,house:getHouse , city:getCity , state:getState , country:getCountry ,pincode:getPinCode ,number:getNumber }
        console.log(adress)

        
        setArr([...adressArr , adress])
        setName("")
        setHouse("")
        setCity("")
        setState("")
        setCountry("")
        setPincode("")
        setNumber("")


        
        
        
    }



console.log(adressArr)
 

    const removeAdress =(id)=>{

const useFilter = adressArr.filter((element)=>element.id !== id)
setArr(useFilter)

    }





    return(
        <div className="acc-main">

            <h1 className="acc-header">Account</h1>
           
            <p style={{display:showAdressBar ? "none" :"inline"}}>
            <button style={{color:getUser ? "#faf5ff" : "black" , backgroundColor: getUser ? "#c084fc" : "#faf5ff"}} onClick={getProfile} className="acc-btn">Profile Info</button>
            <button  style={{color:getAdress ? "#faf5ff" : "black" , backgroundColor: getAdress ? "#c084fc" : "#faf5ff"}} onClick={getAdressComp } className="acc-btn">Adress</button>
            <hr className="hr"></hr>
            </p>
            <div className="acc-card">
           
          

        <div className="addAdress-div" style={{display:showAdressBar ? "inline" : "none"}}>
            
            <h3>Add New Adress</h3>
            
           <input onChange={(e)=>setName(e.target.value)} placeholder="Name"  value={getName} />
            <input onChange={(e)=>setHouse(e.target.value)} placeholder="House No. , Colony , Road" value={getHouse}  />
            <input onChange={(e)=>{setCity(e.target.value)}} placeholder="City" value={getCity}  />
            <input onChange={(e)=>setState(e.target.value)} placeholder="State"  value={getState} />
            <input onChange={(e)=>setCountry(e.target.value)} placeholder="Country"  value={getCountry} />
            <input onChange={(e)=>setPincode(e.target.value)} placeholder="Postal Pin Code" value={getPinCode} />
            <input onChange={(e)=>setNumber(e.target.value)} placeholder="Number" value={getNumber}  />
            <p><button  className="save" onClick={AddAdress}>Save</button>
            <button className="cancel" onClick={()=>setAdressBar(false)}>Cancel</button>
</p>
            
            </div>
            <div 
            className="showAdress-div"
            style={{display:getAdress?"inline":"none" }}>
            {
                
                    adressArr.map(({ id , name , house , city , state , country , pincode , number} )=>{


                            
                        return(
                            <div key={id} 
                            style={{display:showAdressBar ? "none" : "inline"}}
                            className="showAdress-card"
                            
                            >
                            <h2>{name}</h2>
                            <h4>{house} ,{city} ,{state}</h4>
                            <h4>{country}</h4>
                            <h4>{pincode}</h4>
                            <h4>Phone Number {number}</h4>


                            <button className="removeAdress" onClick={()=>removeAdress(id)}>Remove</button>

                            </div>
                        )
                        
                    })

            }

            <button className="addnew" style={{display:showAdressBar ? "none" : "flex"}}  onClick={()=>setAdressBar(true)} > +Add New Adress</button>
            </div>


            


            <p  className="profile" style={{display:getAdress ? "none" : "flex"}}> 
            <h3 className="name"> <b>Full Name</b>  {getFirstName} {getLastName}</h3>
            <h3 className="email"> <b>Email </b> {getemail}</h3></p>
            
            <button style={{display:getAdress ? "none" : "inline"}} className="logout-btn" onClick={logOutHandler}>Logout</button>

           </div>


        </div>
    )
}