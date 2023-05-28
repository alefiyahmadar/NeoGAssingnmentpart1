import React from "react"
import { useContext } from "react"
import { CartContext } from "./cartProvider"
import {NavLink, navLink} from "react-router-dom"


export const ProductList =()=>{

    const {filteredProducts} = useContext(CartContext)
    const {FictionCategoryHandler} =useContext(CartContext)
    const {NonFictionCategoryHandler} =useContext(CartContext)
    const {HorrorCategoryHandler} =useContext(CartContext)
    const {PriceHandler} =useContext(CartContext)
    const {LowToHigh} =useContext(CartContext)
    const {HighToLow} =useContext(CartContext)
    const {AddToCartHandler} =useContext(CartContext)
    const {homeCategory} =useContext(CartContext)
    const {AddToWishlist} =useContext(CartContext)



console.log(homeCategory)

    return(
        <div>

            <h2>productList</h2>

        <h2>Filters</h2>



        <h3>By category</h3>
        <label>Fiction</label>
        <input onChange={FictionCategoryHandler} type="checkbox"  ></input>
        
        <label>Non-Fiction</label>
        <input onChange={NonFictionCategoryHandler} type="checkbox"></input>

        <label>Horror</label>
        <input onChange={HorrorCategoryHandler} type="checkbox"></input>

        <h3>Rating</h3>


<input type="range" min="1"  max="5"  value="1"  onChange={PriceHandler}></input>

<h3>sort</h3>
<label for="sort" >Low To High</label>
<input type="radio" name="sort" onChange={LowToHigh}></input>

<label for="sort" >High To Low</label>
<input type="radio" name="sort" onChange={HighToLow}></input>




 





            {

                filteredProducts.map((item)=>{

                    const {id , title , author , price ,categoryName} = item

                    return(
                        

                        



                        <div 
                        
                        className="Container"
                        key={id}>

                            





                            <h2>{title}</h2>
                            <h3>{author}</h3>
                            <p>Price: {price}</p>


                            <button>  <NavLink to={`/productDetail/${id}`}  >View Product</NavLink></button>
                           <button><NavLink  to="/productCart" onClick={()=>AddToCartHandler(item)}>AddToCart</NavLink></button>
                           <button><NavLink to="/wishlist" onClick={()=>AddToWishlist(item)}>AddToWishlist</NavLink></button>


                        </div>
                    )
                })




}
        </div>


    )
}