import { useContext } from "react"
import { CartContext } from "./cartProvider"

 export const ProductCart = ()=>{

    const {cart} = useContext(CartContext)
    const {removeCartHandler} =useContext(CartContext)
    
    
    
    



    return(
        <div>
            <h2>here is the cart </h2>
                

            {
                cart.map((element)=>
                {
                    const { id ,title , author , price , quantity} = element
                   
                    
                    return (
                    <div key={id} 
                    style={{border:"solid 1px" ,padding:"1rem" ,margin:"1rem"}}
                     >
                        <h2>{title}</h2>
                        <h3>{author}</h3>
                        <p>Price: {price}</p>
                        <p>Quantity: {quantity}</p>

                        <button onClick={()=>removeCartHandler(id)}>Remove</button>
                    
                        
                        
                        
                    </div>

                )
 }
 )
            }
        </div>
    )
}