import React from "react";
import { createContext, useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const [GetProducts, setProducts] = useState([])

    const [categoryFilter , setCategoryFilter] =useState([])

    const [filters , setFilter] = useState({checkBox:[] ,sort:"" , rating:""  , searchValue:""  , categoryValue:""})
    

    const [value , setValue] = useState(0)
    
    const [cart ,setCart] =useState([])
    
    

    
    const [getWishList , setWishlist] = useState([])
    const [fictionBtn , setfictionBtn] =useState(false)
    const [nonfictionBtn , setnonfictionBtn] =useState(false)
    const [horrorBtn , setHorrorBtn] =useState(false)
    const [discount , SetDiscount] = useState(180)
const [coupan ,setCoupan ] =useState(0)
const [showCpn , setShowCpn] =useState("") 
    
const navigate =useNavigate()



    const GetData = async () => {

        try {

            const res = await fetch("/api/products")
            const response = await res.json()
            const { products } = response
            setProducts(products)
            
            

            
            
        








        } catch (e) {
            console.error(e)
        }
    }
    useEffect(() => {
        GetData()
    }, [])

    

    
const getCheckBoxArr = (e)=>{
    

    setFilter({...filters , checkBox:[...filters.checkBox , e.target.value]})

    const isSimilar = filters.checkBox.find((element)=> element === e.target.value)

    setFilter({
        ...filters , 
        checkBox: isSimilar ? filters.checkBox.filter((element)=>element !== e.target.value) : [...filters.checkBox , e.target.value]
    })


}



const categoryData =
    filters.checkBox.length > 0
      ? GetProducts.filter((item) =>
          filters.checkBox.some((category) => item[category])
        )
      : GetProducts;

  
 const SortHandler= (e)=>{

    setFilter({...filters , sort:e.target.value})

 }
 console.log(filters)

const getSort = filters.sort ? categoryData.sort((a,b)=> filters.sort === "lowHigh" ? a.price - b.price : b.price - a.price) : categoryData


const RatingHandler = (e)=>{

    
    setValue(e.target.value)
    setFilter({...filters , rating:e.target.value})

}



const getRating = filters.rating > 0 ? getSort.filter((data)=>data.rating === Number(filters.rating)) : getSort



const SearchBarHandler = (e)=>{
    

    setFilter({...filters , searchValue:e.target.value.toLowerCase()})
}
const getSearchData = filters.searchValue ? getRating.filter((element)=> element.title.toLowerCase().includes(filters.searchValue)) : getRating




const getCategoryHandler =(category)=>{
    setFilter({...filters , categoryValue:category})
    
    }
   





    const AddToCartHandler = (item) => {
    

       
 
        
        setCart([...cart ,{ ...item }])


    }



        const useReduce = cart.reduce((acc ,curr)=>acc + curr.price * curr.quantity , 0)
        




const AddToWishlist =(item)=>{


    setWishlist([...getWishList , item])
    
    
}
const RemoveWish =(id) =>{

    const filterWish = getWishList.filter((element)=>element.id !== id)
    setWishlist(filterWish)


}


const getFiction=(e)=>{

    setCategoryFilter([e.target.value])
    setfictionBtn(true)
    navigate("/productList")
    

    

}
console.log(categoryFilter)

const getByFiction = categoryFilter.length>0?GetProducts.filter((element)=>categoryFilter.some((cat)=>element[cat])) :GetProducts

console.log(getByFiction)


const getNonFiction =(e)=>{

    
    setCategoryFilter([e.target.value])
    setnonfictionBtn(true)
    navigate("/productList")

}
const getByNonfiction = categoryFilter.length >0 ? GetProducts.filter((element)=>categoryFilter.some((cat)=>element[cat])) : GetProducts



const getHorror=(e)=>{

    setCategoryFilter([e.target.value])
    setHorrorBtn(true)
    navigate("/productList")
}
const getByHorror = categoryFilter.length>0 ? GetProducts.filter((element)=>categoryFilter.some((cat)=>element[cat])) : GetProducts










    return (
        <CartContext.Provider value={{ GetProducts, getRating, SortHandler,RatingHandler,value,SearchBarHandler,getSearchData  , AddToCartHandler , cart  , setCart,useReduce    ,AddToWishlist , getWishList , RemoveWish ,getCheckBoxArr  , getCategoryHandler , filters , setFilter ,getFiction ,getByFiction ,getNonFiction , getByNonfiction, getHorror , getByHorror , fictionBtn  ,nonfictionBtn , horrorBtn ,discount ,SetDiscount ,coupan , setCoupan , showCpn , setShowCpn }}>
            {children}
        </CartContext.Provider>
    )
}