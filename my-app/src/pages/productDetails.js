import React from "react";
import { useContext} from "react"
import {ProductDetailCard} from "./detailCard"


import { CartContext } from "../context/cartProvider"




export const ProductDetails =()=>{

    

    

    
    const {GetProducts} =useContext(CartContext)

   
    
    

 

    
         


   

    



    return(
        <div>

        

            


            {

                GetProducts.map((item)=>
                <ProductDetailCard {...item}/>




            
            

            




             
             
            
 
 
        
            
                        
                    
                )
            }
        </div>
    )
}