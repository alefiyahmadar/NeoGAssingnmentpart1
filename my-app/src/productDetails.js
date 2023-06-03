import { useContext, useState } from "react"
import { NavLink, useParams } from "react-router-dom"
import { CartContext } from "./cartProvider"
import { ProductCard } from "./productCard"

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
                            <ProductCard {...element} />
                        )
                    }
                })
            }
        </div>
    )
}