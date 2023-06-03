import { createContext, useEffect, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const [GetProducts, setProducts] = useState([])
    

    const [filteredProducts, setFilteredProducts] = useState([])
    const [cart ,setCart] =useState([])

    
    const [getWishList , setWishlist] = useState([])
    
    




    const GetData = async () => {

        try {

            const res = await fetch("/api/products")
            const response = await res.json()
            const { products } = response
            setProducts(products)
            setFilteredProducts(products)

            
            
        








        } catch (e) {
            console.error(e)
        }
    }
    useEffect(() => {
        GetData()
    }, [])

    

    

    const globalCategoryFunc = (e)=>{
      
               
    if(e.target.checked === true){

        const useFilter = GetProducts.filter((element)=>element.categoryName === e.target.value)
        setFilteredProducts(useFilter)
    }else{
        setFilteredProducts(GetProducts)
    }
    

        


    }

    const RatingHandler = (e) => {



        const getRating =GetProducts.filter((element)=>element.rating === Number(e.target.value))

        setFilteredProducts(getRating)




    }

    const LowToHigh = (e) => {



        const sortLowToHigh = [...GetProducts].sort((a, b) => a.price - b.price)
        setFilteredProducts(sortLowToHigh)
        
    }

    const HighToLow = (e) => {

        const sortHighToLow = [...GetProducts].sort((a, b) => b.price - a.price)
    
        setFilteredProducts(sortHighToLow)


    }
    const AddToCartHandler = (item) => {
    

        const isSimilar = cart.find((element)=>element.id === item.id)

        if(isSimilar){
                
            const useMap = cart.map((element)=>{

                
                if(element.id === item.id){
                return {  ...item, quantity:element.quantity++}
                }else{
                
                }

            })
            setCart(useMap)
        }

        
        setCart([...cart ,{ ...item , quantity : 1}])


    }



        const useReduce = cart.reduce((acc ,curr)=>acc + curr.price , 0)
        
    
const removeCartHandler=(id)=>{

    console.log(id)

const useFilter = cart.filter((element)=>element.id !== id)

setCart(useFilter)

}

const homeClickHandler =(categoryName)=>{
    

const useFilter=GetProducts.filter((element)=>element.categoryName === categoryName)
setFilteredProducts(useFilter)




    
}

const AddToWishlist =(item)=>{


    setWishlist([...getWishList , item])
    
    
}
const RemoveWish =(id) =>{

    const filterWish = getWishList.filter((element)=>element.id !== id)
    setWishlist(filterWish)


}



    return (
        <CartContext.Provider value={{ GetProducts, filteredProducts, RatingHandler, LowToHigh, HighToLow, AddToCartHandler , cart  , useReduce , removeCartHandler , homeClickHandler  ,AddToWishlist , getWishList , RemoveWish ,globalCategoryFunc  }}>
            {children}
        </CartContext.Provider>
    )
}