import { useContext, useState } from "react"
import { NavLink, Navigate } from "react-router-dom"
import { CartContext } from "./cartProvider"


export const ProductCard =(item )=>{

    const [ isAddedToCart , SetAddToCart] = useState(false)
    const[DisableBtn , setDisable] = useState(false)
    const[wishlistTxt , setWishlistTxt] = useState(false)
    const [DisableWishlist , setDisableWishlist] = useState(false)
   
    const {AddToCartHandler  } = useContext(CartContext)
    const {AddToWishlist} = useContext(CartContext)



    const {_id,id , title , author , price ,categoryName, isProdDetail} = item

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
    setDisableWishlist(true)


}

const handleClickWishlist = ()=>{
    HandleWishListText()
    AddToWishlist(item)
    handleWishlistDisable()



}




    return(
        <div 
                        
        className="Container"
        key={id}>

            





            <h2>{title}</h2>
            <h3>{author}</h3>
            <p>Price: {price}</p>
            <p>Category: {categoryName}</p>


             
             <button  onClick={handleClickCart } disabled={DisableBtn}>{isAddedToCart? <NavLink to="/productCart">GoToCart</NavLink>  : "AddTOcart"}</button>
             
             <button onClick={handleClickWishlist} disabled={DisableWishlist}>{wishlistTxt ? <NavLink to="/wishlist">GoToWishlist</NavLink> :"AddToWishlist"}</button>
            {
                isProdDetail && <button >  <NavLink to={`/productDetail/${id}`}  >View Product</NavLink></button>
            }






                    






        </div>

    )
}