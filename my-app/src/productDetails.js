import { useContext, useState } from "react"
import { NavLink, useParams } from "react-router-dom"
import { CartContext } from "./cartProvider"

export const ProductDetails =()=>{

    const [state , setState ]=useState([])

    const {productId} =useParams()
    
    const {GetProducts} =useContext(CartContext)


   

    



    return(
        <div>

            <h2>here are product details</h2>


            {

                GetProducts.map((element)=>{
                    if(element.id === productId){
                        return(
                            <div>
                                <h2>{element.title}</h2>
                                <h3>{element.author}</h3>
                                <p>Category: {element.categoryName}</p>
                                <p>Price: {element.price} </p>

                               <button><NavLink to="/productList">See All</NavLink></button> 
                            </div>
                        )
                    }
                })
            }
        </div>
    )
}