import React from "react";
import { useContext, useEffect, useState } from "react"
import { CartContext } from "./cartProvider"
import axios from "axios";

 export const ProductCart = ()=>{
const [discount , SetDiscount] = useState(180)
const [coupan ,setCoupan ] =useState(0)
const [showCpn , setShowCpn] =useState("") 
const [userCart , setUserCart] = useState([])
   
    const {cart ,setCart} = useContext(CartContext)
    const {removeCartHandler} =useContext(CartContext)
    const {GetProducts} =useContext(CartContext)
    const{useReduce} = useContext(CartContext)

    



    

    
    const IncrementHandler = (index)=>{
     
        const updatedCart = [...cart];
        
        updatedCart[index].quantity += 1
        
        setCart(updatedCart);
        SetDiscount(discount + 20)

    }

    const DecrementHandler =(index)=>{


        const updatedCart = [...cart]

        if(updatedCart[index].quantity >1){

        

            updatedCart[index].quantity-=1

            setCart(updatedCart)
            SetDiscount(discount -20)
        }
    }
    const coupanHandler = (e)=>{

        if(e.target.value === "20"){

            const getAmt = (useReduce*20)/100
            setCoupan(getAmt)
            setShowCpn("NewUser")
        } else if(e.target.value === "50"){

            const getHalf = (useReduce*50)/100
            setCoupan(getHalf)
            setShowCpn("SummerSale")
        }else{

            setCoupan(0)
        }
    }
    const RemoveCpnHandler = ()=>{

        setCoupan(0)
    }


    





    return(
        <div>
            <h2>here is the cart </h2>
           
            {
                cart.length === 0 ? <p>Cart is Empty</p>:
                <div>
                    <select onChange={coupanHandler} value="k">
                        <option value="all">Apply Coupan</option>
                        <option value="20"> 20%off:NewUser</option>
                        <option value="50">50%off:SummerSale</option>
                    </select>
                    
                    
                      <h2>Price Details</h2>
                <p>Price: {useReduce }</p>
                <p>Discount: {discount} </p>
                <p style={{display:coupan === 0 ? "none" : "block"}} >Coupan Discount: {coupan}</p>
                <p style={{display:showCpn.length > 0 ? "inline" :"none"}}>{ showCpn}</p>
                <button onClick={RemoveCpnHandler} style={{display:coupan > 0 ? "inline" :"none"}}>Remove Coupan</button>
                <p><b>Total Price: {useReduce - discount - coupan}</b ></p>

                <p>You'll save {discount + coupan } on this order</p>
                </div>
            }
            
            
             
            

            
            
            {
                cart.map((element , index)=>
                {
                    const { id ,title , author , price ,image, quantity} = element

            

                
                                            
                                        
                        
                
                   
                    
                    return (
                    <div key={id} 
                    style={{border:"solid 1px" ,padding:"1rem" ,margin:"1rem"}}
                     >
                        
                        <h2>{title}</h2>
                        <img src={image}></img>
                        <h3>{author}</h3>
                        <p>Price: {price}</p>
                        <p>Quantity: {quantity}</p>
                        <p>

                        <button onClick={()=>IncrementHandler(index)}>+</button> 
                        
                        <button onClick={()=>DecrementHandler(index)}>-</button>
                        </p>

                        <button onClick={()=>removeCartHandler(id)}>Remove</button>
                    
                        
                        
                        
                    </div>

                )
 }
 )
            }

            
        </div>
    )
}