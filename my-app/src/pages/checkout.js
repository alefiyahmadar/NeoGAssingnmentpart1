import React, { useContext } from "react"
import { CartContext } from "../context/cartProvider"
import { useState } from "react"
import { AuthContext } from "../context/AuthContext"



export const CheckOut =()=>{

    const [userAdress , setUserAdress] =useState( <div><h2>Mary Jane</h2>
    <h4>301 ,Wolf Street,Brisbane,West Australia</h4>
    <h4>Australia</h4>
    <h4>1234</h4>
    <h4>Phone Number 61234589</h4>
    </div>)
    const [check , setCheck] =useState(false)

    const {cart } =useContext(CartContext)
    const{useReduce} = useContext(CartContext)
    const {discount ,SetDiscount ,coupan , setCoupan , showCpn , setShowCpn} =useContext(CartContext)
const {adressArr} =useContext(AuthContext)

const [newArr , setArr] = useState(adressArr)

    


console.log(cart)

const coupanHandler = (e)=>{

    if(e.target.value === "20"){

        const getAmt = (useReduce*20)/100
        setCoupan(getAmt)
        setShowCpn("NewUser")
    } else if(e.target.value === "50"){

        const getHalf = (useReduce*50)/100
        setCoupan(getHalf)
        setShowCpn("SummerSale")
    }else{

        setCoupan(0)
    }
}
const getUserAdressHandler =(id)=>{


    const updatedArr = adressArr.map((element)=>{
        if(element.id === id){

            setUserAdress(<div><h2>{element.name}</h2>
            <h4>{element.house} ,{element.city} ,{element.state}</h4>
            <h4>{element.country}</h4>
            <h4>{element.pincode}</h4>
            <h4>Phone Number {element.number}</h4></div>)
            return {...element , selected:true}
          
            
        }else if(element.id === 0){

            setUserAdress(<div><h2>Mary Jane</h2>
            <h4>301 ,Wolf Street,Brisbane,West Australia</h4>
            <h4>Australia</h4>
            <h4>1234</h4>
            <h4>Phone Number 61234589</h4>
            </div>)

            return {...element , selected:false}
        }
        return element
    })

    setArr(updatedArr)
}



    return(
    <div style={{display:"flex" ,flexDirection:"column" , marginBottom:"2rem"  }}>

        <h2 style={{padding:"1rem" , textAlign:"center"}}>CheckOut</h2>
        
        <div className="order">
            <hr></hr>
            <h2 style={{padding:"0.5rem"}} >Order Details</h2>
            <hr ></hr>
<h3 className="items">Items </h3>
        {




            cart.map(({title , quantity})=> <p className="title">
                
                {title} ({quantity})

                

                
            
            </p>)


        }
        
        
    
        
</div>


<div className="price">
                    
                    <hr></hr>
                    
                      <h2 style={{textAlign:"center"}}>Price Details</h2>
                      <hr></hr>
                <p>Price(Items {cart.length}): {useReduce }</p>
                <p>Discount: {discount} </p>
                <p  >Coupan Discount: {coupan === 0 ? "0" :coupan}</p>
                <p>Delivery Charges : FREE</p>
                <p style={{display:coupan > 0 ? "inline" :"none" , padding:"0.5rem"}}>{ showCpn}</p>
            
                <hr></hr>
                <p><b>Total Price: {useReduce - discount - coupan}</b ></p>
                <hr></hr>

                
             </div>   

             <div className="adress">
                
                
                {

newArr.map(({ id , name , house , city , state , country , pincode , number ,selected} )=>{

    



                            
    return(
        
        <div key={id}
        className="adressSelect" 
    style={{display:"flex" , flexDirection:"column" , width:"50%" ,marginLeft:"2rem" ,marginTop:"1rem" ,justifyContent:"flex-start"}}
    
        
        >
            <div >
            <input style={{  paddingRight:"1rem",marginRight:"1rem"}} type="radio" name="select" onClick={()=>getUserAdressHandler(id)} checked={selected} />

        <h2 >{name}</h2>

        <h4>{house} ,{city} ,{state}</h4>
        <h4>{country}</h4>
        <h4>{pincode}</h4>
        <h4>Phone Number {number}</h4>
        </div>


        

        </div>
        )
    }
    

        
        
    

)
    }
    <div style={{display:"inline" ,paddingLeft:"22rem" }}>
    
    <h3 style={{marginBottom:"1rem" , textAlign:"center" , paddingLeft:"20rem" }}>Delivery To</h3>
                
                {userAdress}

                <button style={{padding:"1rem" , backgroundColor:"#c084fc" , border:"none" , borderRadius:"0.5rem" , fontSize:"large" , fontWeight:"bold" , color:"#faf5ff" ,width:"40%" , marginTop:"1rem"}}>Place Order</button>
</div>


             </div>



    </div>)
}