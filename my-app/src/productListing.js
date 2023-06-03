import React from "react"
import { useContext } from "react"
import { CartContext } from "./cartProvider"
import {NavLink, navLink} from "react-router-dom"
import { ProductCard } from "./productCard"


export const ProductList =()=>{

    const {filteredProducts} = useContext(CartContext)
    const {RatingHandler} =useContext(CartContext)
    const {LowToHigh} =useContext(CartContext)
    const {HighToLow} =useContext(CartContext)
    const {AddToCartHandler} =useContext(CartContext)
    const {homeCategory} =useContext(CartContext)
    const {AddToWishlist} =useContext(CartContext)
    const {globalCategoryFunc} =useContext(CartContext)
    const {isAddedToCart} = useContext(CartContext)

    console.log(isAddedToCart)
    

    return(
        <div>

            <h2>productList</h2>

        <h2>Filters</h2>



        <h3>By category</h3>
        <label>Fiction</label>
        <input onChange={globalCategoryFunc} type="checkbox" value="fiction"  ></input>
        
        <label>Non-Fiction</label>
        <input onChange={globalCategoryFunc} type="checkbox" value="non-fiction"></input>

        <label>Horror</label>
        <input onChange={globalCategoryFunc} type="checkbox" value="horror"></input>

        <h3>Rating</h3>

        <input type="range" max="5" min="1" onChange={RatingHandler}/>

        <h3>Sort</h3>

        <label for="lowToHigh">LowToHigh</label>
      <input
        type="radio"
        id="lowToHigh"
        name="sort"
        value="lowHigh"
        onChange={LowToHigh}
      />
      <label for="HighToLow">HighToLow</label>
      <input
        type="radio"
        id="HighToLow"
        name="sort"
        value="HighLow"
        onChange={HighToLow}
      />






 





            {

                filteredProducts.map((item)=>
                <ProductCard {...item} isProdDetail/>)




}
        </div>


    )
}