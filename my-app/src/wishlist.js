import { useContext } from "react"
import { CartContext } from "./cartProvider"

export const GetWishlist =()=>{

const {getWishList}  =useContext(CartContext)
const {RemoveWish} = useContext(CartContext)

    return(
        <div>

            <h2>WishList</h2>

            {
                getWishList.map((element)=>{
                    const {id , title , author , price } = element

                    return(
                        <div key={id}>
                            <h2>{title}</h2>
                            <h3>{author}</h3>
                            <p>{price}</p>
                            <button onClick={()=>RemoveWish(id)}> Remove</button>
                        </div>

                    )
                })
            }
        </div>
    )
}