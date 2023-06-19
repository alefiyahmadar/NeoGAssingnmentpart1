import React from "react";
import { useContext, useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { CartContext } from "../context/cartProvider"


export const HomePage =()=>{
  
    
const {getFiction ,getNonFiction ,getHorror} =useContext(CartContext)



    const GetCategories = async()=>{

        try{
    
    const res = await fetch("/api/categories")
    
    const response = await res.json()
    const {categories} = response
    setCategories(categories)
    
    
    
    
    
        }catch(e){
            console.error(e)
        }
    }

    useEffect(()=>{
        GetCategories()
    },[])


    


    return(
        <div
        className="home-container">
            <div className="home-card">

            <h2 className="home-header">Online Book Store</h2>

            <button className="home-btn"><NavLink className="home-link" to="/productList">Shop Now</NavLink></button>

            <h3 className="home-cat">Shop By Categories</h3>
            </div>


            <p className="home-btn-card">
                <button className="fic" value="fiction" onClick={getFiction}>Fiction</button>
                <button className="non" value="nonfiction" onClick={getNonFiction}>NonFiction</button>
                <button className="horror" value="horror" onClick={getHorror}> Horror</button>
            </p>

        
        
            <footer className="footer">

<div className="bookstoreInfo">
  <h2 className="book-head"> </h2>
  <div>
    <h2>Book Store</h2>
  <p className="qoute" >The world belongs to those who read.</p>
  <p   className="pp">Privacy Policy</p>
  <p className="tou">Terms Of Use</p>
  <p style={{fontSize:"small"}}> @2023 Book Store</p>
</div>
  <p className="connect">
    <h3>Connect</h3>
    <NavLink className="git" to="https://github.com/alefiyahmadar">GitHub</NavLink>
    <NavLink className="tweet" to="">Twitter</NavLink>
    <NavLink className="linked" to="https://www.linkedin.com/in/alefiyah-madarwala-16b821259/">LinkedIn</NavLink>


  </p>
  <p className="resources">
    <h3>Resources</h3>
    <NavLink className="sign" to="signup">SignUp</NavLink>
    <NavLink className="log" to="/login">LogIn</NavLink>
  </p>
</div>
</footer>
        
        
        </div>
    )
}