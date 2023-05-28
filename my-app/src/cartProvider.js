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

    const FictionCategoryHandler = (e) => {
        

        const useFilter = GetProducts.filter((element) => element.categoryName === "fiction")
        if (e.target.checked === true) {
            setFilteredProducts(useFilter)

        } else {
            setFilteredProducts(GetProducts)
        }

    
    }

    const NonFictionCategoryHandler = (e) => {

        const useFilter = GetProducts.filter((element) => element.categoryName === "non-fiction")

        if (e.target.checked === true) {
            setFilteredProducts(useFilter)
        } else {
            setFilteredProducts(GetProducts)
        }

    }
    const HorrorCategoryHandler = (e) => {
        const GetHorror = GetProducts.filter((element) => element.categoryName === "horror")

        if (e.target.checked === true) {
            setFilteredProducts(GetHorror)
        } else {
            setFilteredProducts(GetProducts)
        }

    }

    const PriceHandler = (e) => {



        const useFilter = GetProducts.filter((element) => element.rating === Number(e.target.value)
        )

        setFilteredProducts(useFilter)




    }

    const LowToHigh = (e) => {



        const sortLowToHigh = GetProducts.sort((a, b) => a.price - b.price)
        console.log(sortLowToHigh)
        console.log(e.target.checked)


        if (e.target.checked === true) {
            setFilteredProducts(sortLowToHigh)
        } else {
            setFilteredProducts(GetProducts)
        }
    }

    const HighToLow = (e) => {

        const sortHighToLow = GetProducts.sort((a, b) => b.price - a.price)
        if (e.target.checked === true) {

            setFilteredProducts(sortHighToLow)

        } else {
            setFilteredProducts(GetProducts)
        }



    }
    const AddToCartHandler = (item) => {

        const isSimilar = cart.find((element)=>element.id === item.id)

        if(isSimilar){

            const useMap = cart.map((element)=>{
                if(element.id === item.id){
                return {...element , quantity:element.quantity+1}
                }else{
                    return element
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
        <CartContext.Provider value={{ GetProducts, filteredProducts, FictionCategoryHandler, NonFictionCategoryHandler, HorrorCategoryHandler, PriceHandler, LowToHigh, HighToLow, AddToCartHandler , cart  , useReduce , removeCartHandler , homeClickHandler  ,AddToWishlist , getWishList , RemoveWish ,  }}>
            {children}
        </CartContext.Provider>
    )
}