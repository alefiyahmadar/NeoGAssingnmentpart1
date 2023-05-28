import { useContext, useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { CartContext } from "./cartProvider"

export const HomePage =()=>{
  
    const [category , setCategories] =useState([])
    const {homeClickHandler} = useContext(CartContext)


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
        <div>

        <h2 >Home</h2>

        <ul>
            {
                category.map(({id , description , categoryName})=>(
                    <li
                    
                    key={id}>
                        <h2 ><NavLink to="/productList" onClick={()=>homeClickHandler(categoryName)}>{categoryName}</NavLink></h2>
                        <p>{description}</p>
                    </li>
                ))
            }
        </ul>
        

        </div>
    )
}