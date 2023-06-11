import React from "react";


import { useContext, useState } from "react"
import { NavLink, Navigate , useParams } from "react-router-dom"
import { CartContext } from "./cartProvider"
import { AuthContext } from "./AuthContext";






export const ProductCard =(item )=>{

    const [ isAddedToCart , SetAddToCart] = useState(false)
    const[DisableBtn , setDisable] = useState(false)
    const[wishlistTxt , setWishlistTxt] = useState(false)
    const [DisableWishlist , setDisableWishlist] = useState(false)
    
   
    const {AddToCartHandler  } = useContext(CartContext)
    const {AddToWishlist} = useContext(CartContext)
    const {isLoggedIn} = useContext(CartContext)
    const {showAlert, setShowAlert} = useContext(AuthContext)
    const {productId} =useParams()
    
    
    



    const {_id,id , title , author , price  ,quantity,image , rating, isProdDetail} = item

const handleText = ()=>{

    SetAddToCart(!isAddedToCart)
}
const handleDisable = ()=>{

    setDisable(true)
}

const handleClickCart =()=>{

    handleText()
    AddToCartHandler(item)
    handleDisable()
    

    
}

const HandleWishListText = ()=>{
    setWishlistTxt(true)


}
const handleWishlistDisable =()=>{
    setDisableWishlist(!DisableWishlist)


}

const handleClickWishlist = ()=>{
    HandleWishListText()
    AddToWishlist(item)
    handleWishlistDisable()




}






    return(
        <div 
        
                        
        className="Container"
        key={id}
        >

            

<button className="heart-button" style={{opacity:DisableWishlist ? "1" : "0.2"}} onClick={handleClickWishlist} disabled={DisableWishlist}></button>


            

            <h2 className="item-title">{title}</h2>
            <img src={image}></img>
            <h3 className="item-author">{author}</h3>
            <p className="item-price"> Price: {price}</p>
            <p>Rating: {rating}</p>
            
        


             
             <button className="Cartbtn" onClick={handleClickCart } disabled={DisableBtn} >  <img width="20" height="20" src="https://img.icons8.com/ios-filled/50/000000/shopping-cart.png" alt="shopping-cart"/> {isAddedToCart? <NavLink to="/productCart">GoToCart</NavLink>  : "AddTOcart"}</button>
             
             
            {
                isProdDetail && <button className="Detailbtn" >  <NavLink className="detailBtnLink" to={`/productDetail/${id}`}  >View Product</NavLink></button>
            }


        </div>

    )
}