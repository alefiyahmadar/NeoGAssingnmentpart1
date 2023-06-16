import React from "react";
import { useContext, useEffect, useState } from "react"
import { CartContext } from "./cartProvider"
import axios from "axios";
import { useNavigate } from "react-router-dom";

 export const ProductCart = ()=>{

const [userCart , setUserCart] = useState([])

const {discount ,SetDiscount ,coupan , setCoupan , showCpn , setShowCpn} =useContext(CartContext)
   
    const {cart ,setCart} = useContext(CartContext)
    
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
    
    const removeCartHandler=(id)=>{

        console.log(id)
    
    const useFilter = cart.filter((element)=>element.id !== id)
    
    setCart(useFilter)
    
    }
const navigate =useNavigate()
    





    return(
        <div className="cartMain">
            <p className="cartHeader">My Cart </p>
           
            {
                cart.length === 0 ? <p className="cartEmpty">Cart is Empty 😞</p>:

                <div className="cartinfo">
                    <select onChange={coupanHandler} value="k">
                        <option value="all">Apply Coupan</option>
                        <option value="20"> 20%off:NewUser</option>
                        <option value="50">50%off:SummerSale</option>
                    </select>
                    <hr></hr>
                    
                      <h2>Price Details</h2>
                      <hr></hr>
                <p>Price(Items {cart.length}): {useReduce }</p>
                <p>Discount: {discount} </p>
                <p  >Coupan Discount: {coupan === 0 ? "0" :coupan}</p>
                <p>Delivery Charges : FREE</p>
                <p style={{display:coupan > 0 ? "inline" :"none" , padding:"0.5rem"}}>{ showCpn}</p>
                <button onClick={RemoveCpnHandler} style={{display:coupan > 0 ? "inline" :"none" , border:"none" , backgroundColor:"#faf5ff" ,padding:"0.5rem"}}>❌</button>
                <hr></hr>
                <p><b>Total Price: {useReduce - discount - coupan}</b ></p>
                <hr></hr>

                <p style={{color:"red"}}>You'll save {discount + coupan } on this order</p>
                <button className="removeCart" onClick={()=>navigate("/checkout")} style={{fontSize:"large" , fontWeight:"bold" , color:"white"}}> Checkout</button>
                </div>
            }
            
            
             
            

            
             
            {
                cart.map((element , index)=>
                {

                    
                    
                    const { id ,title , author , price ,image, quantity , rating , realPrice} = element

                    

            

                
                                            
                                        
                        
                
                   
                    
                    return (
                    <div key={id} 
                    className="cartProdCon"
                    
                     >
                        <div className="cartProd">
                        
                        <img src={image}></img>
                        <h2>{title}</h2>
                        
                       
                        <h3>{author}</h3>
                        <p>  ⭐{rating}</p>
                        <p>₹{price} <span style={{textDecoration:"line-through" , opacity:"0.2"}}>₹{realPrice}</span></p>
                       
                        
                        <span className="qty"><button  onClick={()=>IncrementHandler(index)}>+</button>  <span className="qtyNum"> {quantity}</span> <button onClick={()=>DecrementHandler(index)}>-</button></span>
                        
                       
                        
                       
                        
                            <div>
                        <button className="removeCart" onClick={()=>removeCartHandler(id)}>Remove</button>
                    
                        </div>
                        
                        </div>
                    </div>

                )
 }
 )
            }

            
        </div>
    )
}