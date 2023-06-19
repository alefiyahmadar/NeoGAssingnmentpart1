import React from "react";
import { useContext } from "react"

import { NavLink } from "react-router-dom";
import { CartContext } from "../context/cartProvider"

export const GetWishlist =()=>{

const {getWishList}  =useContext(CartContext)
const {RemoveWish} = useContext(CartContext)



const {AddToCartHandler  } = useContext(CartContext)






                    
       


    return(
        <div className="wishlist-main">

            <h2 className="wishlist-head">WishList</h2> 
            {
                getWishList.length > 0  ? "" :<p style={{margin:"auto" , fontWeight:"bold" , fontSize:"larger"}}>Wishlist Is Empty😞</p>
            }

            {
                getWishList.map((item)=>{
                    const {id , title , author , image , price ,rating ,realPrice } = item


                    const handleWish =()=>{

                        
                        AddToCartHandler(item)
                        
                    }



                    

                    return(
                        <div style={{margin:"0%"}}>
                            <hr className="wish-hr"></hr>
                        <div key={id}
                        className="wish-card">

                            
                            
                            
                             <img src={image} alt=""></img> 
                             <div className="info">
                            <h2 className="wish-title">{title}</h2>
                           
                            <h3 className="wish-aouthor">{author}</h3>
                            <p className="wish-price">₹{price} <span style={{textDecoration:"line-through" , opacity:"0.2"}}>₹{realPrice}</span></p>
                            <p className="wish-rating">  ⭐{rating}</p>

                                            
            <button className="wish-btn" onClick={handleWish  }  > <NavLink style={{textDecoration:"none" ,color:"#faf5ff" , fontWeight:"bold"}} to="/productCart"> Move To Cart</NavLink></button>

                        
                       
                            </div>
                            <button className="remove-wish" onClick={()=>RemoveWish(id)}> 🗑️</button>
            
                        </div>
                        
                        </div>

                    )
                })
            }
        </div>
    )
}