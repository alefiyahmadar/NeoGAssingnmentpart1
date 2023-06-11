import React from "react";
import { useContext, useEffect, useState } from "react"
import { NavLink, Navigate } from "react-router-dom"
import { CartContext } from "./cartProvider"

export const HomePage =()=>{
  
    const [category , setCategories] =useState([])
    const {getCategoryHandler} = useContext(CartContext)



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
        <div >
            
          


    

        
            {
                category.map((item )=>(
                    <div
                    className="homeBtn"
                    
                    
                    key={item.id}>

                        <h3 ><NavLink to="/productList" onClick={()=>getCategoryHandler(item.category)}>{item.category}</NavLink></h3>
                        
                        <p>{item.description}</p>
                    </div>
                ))
            }
        
        

        </div>
    )
}