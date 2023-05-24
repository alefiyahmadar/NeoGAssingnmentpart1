import React from "react"

export const ProductList =()=>{

const GetData =async()=>{

    try{

        const res = await fetch("/api/products")
        console.log( await res.json().products)


    }catch(e){
        console.log(console.error)
    }




}


    return(
        <div>

            <h2 onClick={GetData
            }>productList</h2>
        </div>
    )
}