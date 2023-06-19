import React from "react";


import { useContext, useState } from "react"
import { NavLink } from "react-router-dom"
import { CartContext } from "../context/cartProvider"
import { AuthContext } from "../context/AuthContext";






export const ProductCard =(item )=>{

    const [ isAddedToCart , SetAddToCart] = useState(false)
    const[DisableBtn , setDisable] = useState(false)
    
    const [DisableWishlist , setDisableWishlist] = useState(false)
    
    
   
    const {AddToCartHandler  } = useContext(CartContext)
    const {AddToWishlist} = useContext(CartContext)
    
    const {isLoggedIn} = useContext(AuthContext)
    
    
    
    
    
    
    
    



    const {id , title , author , price  ,image , rating ,  isProdDetail } = item
    

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
    }else{
        alert("Please Login")
        
    }
    




}






    return(
        
            


        <div 
        
                        
        className="Container"
        key={id}
        >
            
            

            

<button className="heart-button" style={{opacity:DisableWishlist ? "1" : "0.2"}} onClick={ handleClickWishlist} disabled={DisableWishlist} ></button>


            

            <h2 className="item-title">{title}</h2>
            <img src={image} alt=""></img>
            
            <h3 className="item-author">{author}</h3>
            <p className="item-price"> Price: {price}</p>
            <p>Rating: {rating}</p>
            
            
        


             
             <button className="Cartbtn" onClick={ handleClickCart  } disabled={DisableBtn} >  <img width="20" height="20" src="https://img.icons8.com/ios-filled/50/FFFFFF/shopping-cart.png" alt="shopping-cart"/> {isAddedToCart  ? <NavLink to="/productCart">Go To Cart</NavLink>  : "Add To Cart"}</button>
             
        
             
            {
                isProdDetail && <button className="Detailbtn" >  <NavLink className="detailBtnLink" to={`/productDetail/${id}`}  >View Product</NavLink></button>
            }
            


        </div>
        

    )
}