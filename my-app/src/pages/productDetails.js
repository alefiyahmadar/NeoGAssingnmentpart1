import React from "react";
import { useContext, useState } from "react"
import { NavLink, useParams } from "react-router-dom"

import { CartContext } from "../context/cartProvider"

import { AuthContext } from "../context/AuthContext";

export const ProductDetails =()=>{

    

    
    const [ isAddedToCart , SetAddToCart] = useState(false)
    const [isAddedToWishlist , setIsAddedToWishlist] = useState(false)
    const[DisableBtn , setDisable] = useState(false)
    
    const [DisableWishlist , setDisableWishlist] = useState(false)
    
    
   
    const {AddToCartHandler  } = useContext(CartContext)
    const {AddToWishlist} = useContext(CartContext)
    
    const {GetProducts} =useContext(CartContext)


    const {isLoggedIn} = useContext(AuthContext)
    
    

    const {productId} =useParams()
    
    
    console.log(productId)

 

    
         


   

    



    return(
        <div>

        

            


            {

                GetProducts.map((item)=>
                {
                    if(item.id === productId){

                        
    const {id , title  , price  ,image , rating,realPrice } = item

       
const handleText = ()=>{

    SetAddToCart(true)
}
const handleDisable = ()=>{

    setDisable(true)
}



const handleClickCart =()=>{


    if(isLoggedIn === true){
        handleText()
        AddToCartHandler(item)
       handleDisable()
    
   }else{

       alert("Please Login")
   }
   
   

   
   
   
   
}
const handleWishlistDisable =()=>{
    setDisableWishlist(!DisableWishlist)


}

const handleClickWishlist = ()=>{

    if(isLoggedIn === true){
    
    AddToWishlist(item)
    handleWishlistDisable()
    setIsAddedToWishlist(true)
    }else{
        alert("Please Login")
    }
    




}









                        return(
                            <div 
        
                        
        className="Container-detail"
        key={id}
    
        >
            
            

            




            
            <img className="item-img" src={image} alt=""></img>
            <div className="detail">
            <h2 className="item-title">{title}</h2>
            <p className="item-rating">  ⭐{rating}</p>
            
            
            <p className="item-price">₹{price} <span style={{textDecoration:"line-through" , opacity:"0.2"}}>₹{realPrice}</span></p>
                            

            <hr className="detail-hr"></hr>
            <p style={{marginBottom:"2rem"}}>Hurry,⚡Only Few Left</p>
            <p>🏷️Fastest Delivery</p>
            <p>🏷️Inclusive of All Taxes</p>
            <p>🏷️Cash On Delivery Available</p>
            
                            <p >
            
            <button className="detail-btn" onClick={ handleClickCart  } disabled={DisableBtn} >  <img  width="20" height="20" src="https://img.icons8.com/ios-filled/50/FFFFFF/shopping-cart.png" alt="shopping-cart"/> {isAddedToCart   ? <NavLink style={{textDecoration:"none" , color:"#faf5ff"}} to="/productCart">Go To Cart</NavLink>  : "Add To Cart"}</button>

            
            <button className="detailCartbtn-wish" onClick={ handleClickWishlist  } disabled={DisableWishlist} >   {isAddedToWishlist  ? <NavLink style={{textDecoration:"none" , color:"#c084fc"}}  to="/wishlist">Go To WishList</NavLink>  : "Add To WishList"}</button>
             
</p>
</div>
             
             
            
 
 
         </div>
            
                        )
                    }
                })
            }
        </div>
    )
}