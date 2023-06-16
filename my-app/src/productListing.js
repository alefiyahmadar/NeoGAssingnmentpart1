import React from "react";
import  { useState } from "react"
import { useContext } from "react"
import { CartContext } from "./cartProvider"
import {NavLink, navLink} from "react-router-dom"
import { ProductCard } from "./productCard"
import { AuthContext } from "./AuthContext";


export const ProductList =()=>{


  

    const {RatingHandler} = useContext(CartContext)
    const {getSearchData} =useContext(CartContext)
    const {SortHandler} =useContext(CartContext)
    const {value} = useContext(CartContext)
    const {clear} = useContext(CartContext)
    const {GetProducts} =useContext(CartContext)
    const {filters , setFilter} = useContext(CartContext)
   
    const {AddToCartHandler} =useContext(CartContext)
    const {homeCategory} =useContext(CartContext)
    const {AddToWishlist} =useContext(CartContext)
    const {getCheckBoxArr} =useContext(CartContext)
    
    const {state} =useContext(CartContext)
    const { getHorrorCategory} =useContext(CartContext)
    const {getByFiction} =useContext(CartContext)
    const {fictionBtn , setfictionBtn} =useContext(CartContext)
    const { getByNonfiction} =useContext(CartContext)
    const {nonfictionBtn} =useContext(CartContext)
    const {getByHorror} =useContext(CartContext)
    const {horrorBtn} =useContext(CartContext)

    const {str} = useContext(AuthContext)
    
    

    
const clearFilterHandler=()=>{
  window.location.reload();
}
    

  const fiction = fictionBtn ? getByFiction : getSearchData
  const nonFiction = nonfictionBtn ?  getByNonfiction : fiction
  const horror = horrorBtn ? getByHorror : nonFiction
    
    
    

    return( 
        <div>

          


          <div className="filters">
          <h2>{str}</h2>

           
        <h2>Filters</h2>

        <button className="clear" onClick={clearFilterHandler}>Clear</button>

        <h3>By category</h3>
        <label>Fiction</label>
        <input onChange={getCheckBoxArr} type="checkbox" value="fiction"    ></input>
        
        <label>Non-Fiction</label>
        <input onChange={getCheckBoxArr} type="checkbox" value="nonfiction"></input>

        <label>Horror</label>
        <input onChange={getCheckBoxArr} type="checkbox" value="horror"></input>

        <h3>Rating</h3>

        <input type="range" max="5" min="0" value={value} onChange={RatingHandler}/>

        <h3>Sort</h3>

        <label for="lowToHigh">LowToHigh</label>
      <input
        type="radio"
        id="lowToHigh"
        name="sort"
        value="lowHigh"
        onChange={SortHandler}
      />
      <label for="HighToLow">HighToLow</label>
      <input
        type="radio"
        id="HighToLow"
        name="sort"
        value="HighLow"
        onChange={SortHandler} 
      />
      

      </div >





<div className="productContainer"> 
 
       


            {

                horror.map((item)=>
                < ProductCard {...item} isProdDetail/>)




}
</div>
        </div>


    )
}